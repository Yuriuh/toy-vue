import { proxy } from './proxy'
import { mount } from './mount'

let uid = 0

export function initMixin(Vuette) {
  Vuette.prototype._init = function(options) {
    const vm = this
    uid += 1
    vm.uid = uid
    vm._isVuette = true
    // 初始化数据
    if (options && options.data) {
      vm._data = proxy(vm, options.data, '')
    }
    // 初始化 created 方法
    if (options && options.created) {
      vm._created = options.created
    }
    // 初始化 methods
    if (options && options.data) {
      vm._methods = options.methods
      for (const method in options.methods) {
        vm[method] = options.methods[method]
      }
    }
    // 初始化 computed
    if (options && options.computed) {
      vm._computed = options.computed
    }
    // 初始化 el 并挂载
    if (options && options.el) {
      let root = document.querySelector(options.el)
      mount(vm, root)
    }
  }
}