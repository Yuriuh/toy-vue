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
    // 初始化 methods
    // 初始化 computed
    // 初始化 el 并挂载
    if (options && options.el) {
      let root = document.querySelector(options.el)
      mount(vm, root)
    }
  }
}