// vm 表示 Vuette 对象
// obj 表示要进行代理的对象
// namespace
// 我们要知道哪个属性被修改了，我们才能对页面上的内容进行更新

import { renderData } from "./render"

// 所以我们需要用代理的方式来实现监听属性修改
export function proxy(vm, obj, namespace) {
  // 递归
  let proxyObj = null
  if (obj instanceof Array)  {
    proxyObj = []
    obj.forEach((item, index) => {
      proxyObj[index] = proxy(vm, item, namespace)
    })
    proxyObj = proxyArray(vm, obj, namespace)
  } else if (obj instanceof Object) {
    proxyObj = proxyObject(vm, obj, namespace)
  } else {
    throw new Error('The data type is not supported!')
  }
  return proxyObj
}

function proxyObject(vm, obj, namespace) {
  let proxyObj = {}
  Object.keys(obj).forEach(key => {
    Object.defineProperty(proxyObj, key, {
      configurable: true,
      get() {
        return obj[key]
      },
      set(v) {
        // console.log('value in set', v)
        obj[key] = v
        const ns = getNameSpace(namespace, key)
        // console.log('ns', ns)
        // 检测到对象属性的变化, 然后渲染视图
        renderData(vm, ns)
      }
    })
    // 在 vm 上也做一层代理
    Object.defineProperty(vm, key, {
      configurable: true,
      get() {
        return obj[key]
      },
      set(v) {
        obj[key] = v
        const ns = getNameSpace(namespace, key)
        // console.log('ns', ns)
        // 检测到对象属性的变化, 然后渲染视图
        renderData(vm, ns)
      }
    })
    if (obj[key] instanceof Object) {
      const ns = getNameSpace(namespace, key)
      proxyObj[key] = proxy(vm, obj[key], ns)
    }
  })
  return proxyObj
}

const arrayProto = Array.prototype
const arrayMethods = ['push', 'pop', 'shift', 'unshift', 'splice']

function defineArrayMethod(obj, fnName, namespace, vm) {
  Object.defineProperty(obj, fnName, {
    enumerable: true,
    configurable: true,
    value(...args) {
      let original = arrayProto[fnName]
      const result = original.apply(this, args)
      // console.log('namespace in defineArray', getNameSpace(namespace))
      const ns = getNameSpace(namespace, '')
      // 检测到数组的变化, 然后渲染视图
      renderData(vm, ns)
      return result
    }
  })
}

function proxyArray(vm, arr, namespace) {
  const proto = {
    eleType: 'Array',
    toString() {
      let result = ''
      for (let i = 0; i < arr.length; i++) {
        result += arr[i] + ', '
      }
      return result.slice(0, result.length - 2)
    },
    push() {},
    pop() {},
    shift() {},
    unshift() {},
    splice() {},
  }
  arrayMethods.forEach(method => {
    defineArrayMethod.call(vm, proto, method, namespace, vm)
  })

  arr.__proto__ = proto
  return arr
}

function getNameSpace(currentNamespace, currentKey = '') {
  if (currentNamespace == null || currentNamespace === '') {
    return currentKey
  }
  else if (currentKey == null || currentKey === '') {
    return currentNamespace
  }
  else {
    return currentNamespace + '.' + currentKey
  }
}