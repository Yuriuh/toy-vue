import { VNode } from '../vdom/vnode'
import { vmodel } from './directive/v-model'
import { mergeAttr } from '../util/object-enhance'
import { vfor } from './directive/v-for'
import { VIRTUAL_NODE } from '../shared/constants'

import {
  prepareRender,
  getVnodesByTemplate,
  clearMap,
  // getTemplateToVnodeMap,
  // getVnodeToTemplateMap,
} from './render'
import { vbind } from './directive/v-bind'

export function initMount(Vuette) {
  Vuette.prototype.$mount = function(el) {
    const vm = this
    const root = document.querySelector(el)
    mount(vm, root)
  }
}

export function mount(vm, el) {
  // 进行挂载
  vm._vnode = constructVNode(vm, el, null)
  // 进行预备渲染 (建立渲染索引, 通过模板找 vnode, 通过 vnode 找模板)
  prepareRender(vm, vm._vnode)
  // console.log('getTempateToVnodeMap', getTemplateToVnodeMap())
  // console.log('getVnodeToTempateMap', getVnodeToTemplateMap())
}

// 深度优先搜索
function constructVNode(vm, el, parent) {
  let vnode = analysisAttr(vm, el, parent)
  // console.log('vnode', vnode)
  if (vnode == null) {
    let children = []
    let text = getNodeText(el)
    let data = null
    let nodeType = el.nodeType
    let tag = el.nodeName
    // 避免重复创建虚拟节点
    vnode = new VNode({tag, el, children, text, data, parent, nodeType})

    if (el.nodeType === Node.ELEMENT_NODE) {
      const env = el.getAttribute('env')
      if (env) {
        const mergedEnv = mergeAttr(vnode.env, JSON.parse(env))
        vnode.env = mergedEnv
      }
    // 文本节点找父级节点 (如 li) 的 env
    } else {
      const parentEnv = parent ? parent.env : {}
      vnode.env = mergeAttr(vnode.env, parentEnv)
    }
  }

  vbind(vm, vnode)

  const childs = vnode.nodeType === VIRTUAL_NODE
    ? vnode.parent.el.childNodes
    : vnode.el.childNodes

  for (let i = 0; i < childs.length; i++) {
    let childNodes = constructVNode(vm, childs[i], vnode)
    // 返回单一节点
    if (childNodes instanceof VNode) {
      vnode.children.push(childNodes)
    // 返回节点数组
    } else {
      vnode.children = vnode.children.concat(childNodes)
    }
  }
  return vnode
}

function getNodeText(el) {
  if (el.nodeType === Node.TEXT_NODE) {
    return el.nodeValue
  } else {
    return ''
  }
}

function analysisAttr(vm, el, parent) {
  if (el.nodeType === Node.ELEMENT_NODE) {
    const attrs = el.getAttributeNames()
    if (attrs.indexOf('v-model') > -1) {
      const attr = el.getAttribute('v-model')
      vmodel(vm, el, attr)
    }

    if (attrs.indexOf('v-for') > -1) {
      const attr = el.getAttribute('v-for')
      return vfor(vm, el, parent, attr)
    }
  }
}

export function rebuild(vm, template) {
  const vnodes = getVnodesByTemplate(template)
  for (let i = 0; i < vnodes.length; i++) {
    const vnode = vnodes[i]
    vnode.parent.el.innerHTML = ''
    vnode.parent.el.appendChild(vnode.el)
    const result = constructVNode(vm, vnode.el, vnode.parent)
    vnode.parent.children = [result]
    clearMap()
    prepareRender(vm, vm._vnode)
  }
}