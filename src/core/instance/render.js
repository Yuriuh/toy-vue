import { getValue } from "../util/object-enhance"

// 1. 通过模板, 找到哪些节点用到了这个模板
let templateToVnode = new Map()
// 2. 通过节点, 找到这个节点下有哪些模板
let vnodeToTemplate = new Map()

// 匹配 {{ }} 中的内容
const INSERTION_RE = /{{(\s*)[a-zA-Z0-9_.]+(\s*)}}/g

export function renderMixin(Vuette) {
  Vuette.prototype._render = function() {
    renderNode(this, this._vnode)
  }
}

export function renderData(vm, data) {
  // console.log('data', data)
  const vnodes = templateToVnode.get(data)
  // console.log('vnodes', vnodes)
  if (vnodes != null) {
    for (let i = 0; i < vnodes.length; i++) {
      const vnode = vnodes[i]
      renderNode(vm, vnode)
    }
  }
}

export function renderNode(vm, vnode) {
  // console.log('render')
  if (vnode.nodeType === Node.TEXT_NODE) {
    let templates = vnodeToTemplate.get(vnode)
    if (templates) {
      let result = vnode.text
      // console.log('result', result)
      for (let i = 0; i < templates.length; i++) {
        // 当前节点的参数, 可以来自 Vuette 对象, 也可以来自于父级节点
        const t = templates[i]
        console.log('vnode in render', vnode)
        console.log('vnode env in render', vnode.env)
        let templateValue = getTemplateValue([vm._data, vnode.env], t)
        // console.log('templateValue', templateValue)
        // 把虚拟 dom 中的值替换到真实 dom 中
        if (templateValue != null) {
          const re = new RegExp('{{(\\s*)' + `(${t})` + '(\\s*)}}', 'g')
          result = result.replace(re, templateValue)
        }
      }
      vnode.el.nodeValue = result
    }
  } else if (vnode.nodeType === Node.ELEMENT_NODE && vnode.tag === 'INPUT') {
    const templates = vnodeToTemplate.get(vnode)
    if (templates) {
      for (let i = 0; i < templates.length; i++) {
        const value = getTemplateValue([vm._data, vnode.env], templates[i])
        if (value) {
          vnode.el.value = value
        }
      }
    }
  } else {
    for (let i = 0; i < vnode.children.length; i++) {
      renderNode(vm, vnode.children[i])
    }
  }
}

export function prepareRender(vm, vnode) {
  if (vnode == null) {

  }
  if (vnode.nodeType === Node.TEXT_NODE) {
    analysisTemplateString(vnode)
  }
  analysisAttr(vm, vnode)
  if (vnode.nodeType === Node.ELEMENT_NODE) {
    for (let i = 0; i < vnode.children.length; i++) {
      prepareRender(vm, vnode.children[i])
    }
  }
}

function analysisTemplateString(vnode) {
  const templateStringList = vnode.text.match(INSERTION_RE)
  // console.log('templateStringList', templateStringList)
  for (let i = 0; templateStringList && i < templateStringList.length; i++) {
    setTemplateToVnode(templateStringList[i], vnode)
    setVnodeToTemplate(templateStringList[i], vnode)
  }
}

function analysisAttr(vm, vnode) {
  if (vnode.nodeType !== Node.ELEMENT_NODE) {
    return
  }
  const attrNames = vnode.el.getAttributeNames()
  if (attrNames.indexOf('v-model') > -1) {
    const value = vnode.el.getAttribute('v-model')
    setTemplateToVnode(value, vnode)
    setVnodeToTemplate(value, vnode)
  }
}

function setTemplateToVnode(template, vnode) {
  const name = getTemplateName(template)
  const vnodeSet = templateToVnode.get(name)
  if (vnodeSet) {
    vnodeSet.push(vnode)
  } else {
    templateToVnode.set(name, [vnode])
  }
}

function setVnodeToTemplate(template, vnode) {
  const name = getTemplateName(template)
  const templateSet = vnodeToTemplate.get(vnode)
  if (templateSet) {
    templateSet.push(name)
  } else {
    vnodeToTemplate.set(vnode, [name])
  }
}

function getTemplateName(template) {
  const t = template
  // 判断是否有花括号, 如果有, 则解掉, 否则直接返回
  if (t.slice(0, 2) === '{{' && t.slice(-2) === '}}') {
    // 去掉多余的空格 {{ name }} -> ( name ) -> (name)
    return t.slice(2, -2).trim()
  } else {
    return t
  }
}

function getTemplateValue(objs, templateName) {
  // console.log('objs', objs)
  for (let i = 0; i < objs.length; i++) {
    const temp = getValue(objs[i], templateName)
    // console.log('temp', temp)
    if (temp != null) {
      return temp
    }
  }
  return ''
}

export function getTemplateToVnodeMap() {
  return templateToVnode
}

export function getVnodeToTemplateMap() {
  return vnodeToTemplate
}

// console.log('templateToVnode', templateToVnode)
// console.log('vnodeToTemplate', vnodeToTemplate)