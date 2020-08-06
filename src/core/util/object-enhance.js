// a.b.c
export function getValue(obj, name) {
  if (!obj) return obj

  const nameList = name.split('.')
  let temp = obj
  for (let i = 0; i < nameList.length; i++) {
    if (temp[nameList[i]] != null) {
      temp = temp[nameList[i]]
    } else {
      return void 0
    }
  }
  return temp
}

// _data = { content: 'panda , desc: 'abcd', obj: { x: 1 } }
// fullKey: key -> name fullKey -> obj.name
export function setValue(obj, fullKey, value) {
  if (!obj) return obj

  const keyList = fullKey.split('.')
  const end = keyList.length - 1
  let temp = obj
  for (let i = 0; i < end; i++) {
    const key = keyList[i]
    if (temp[key] != null) {
      temp = temp[keyList[i]]
    } else {
      return void 0
    }
  }
  if (temp[keyList[end]] != null) {
    temp[keyList[end]] = value
  }
}

export function mergeAttr(obj1, obj2) {
  const result = {}
  if (obj1 == null) {
    return deepClone(obj2)
  }
  if (obj2 == null) {
    return deepClone(obj1)
  }
  const obj1Names = Object.getOwnPropertyNames(obj1)
  for (let i = 0; i < obj1Names.length; i++) {
    const name = obj1Names[i]
    const value = obj1[name]
    result[name] = value
  }
  const obj2Names = Object.getOwnPropertyNames(obj2)
  for (let i = 0; i < obj2Names.length; i++) {
    const name = obj2Names[i]
    const value = obj2[name]
    result[name] = value
  }
  return result
}

export function deepClone(obj) {
  if (obj instanceof Array) {
    return cloneArray(obj)
  } else if (obj instanceof Object) {
    return cloneObject(obj)
  } else {
    return obj
  }
}

function cloneObject(obj) {
  const result = {}
  const names = Object.getOwnPropertyNames(obj)
  for (let i = 0; i < names.length; i++) {
    const name = names[i]
    const value = obj[name]
    result[name] = clone(value)
  }
  return result
}

function cloneArray(arr) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    result[i] = clone(item)
  }
  return result
}