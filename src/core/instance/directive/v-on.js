import { getValue } from "../../util/object-enhance"

export function vOn(vm, vnode) {
  if (vnode.nodeType !== Node.ELEMENT_NODE) {
    return
  }
  const attrNames = vnode.el.getAttributeNames()
  for (let i = 0; i < attrNames.length; i++) {
    const attrName = attrNames[i]
    const callbackName = vnode.el.getAttribute(attrName)
    if (attrName.indexOf('v-on') > -1) {
      const eventType = attrName.split(':')[1]
      bindEvent(vm, vnode, eventType, callbackName)
    }
    if (attrName.indexOf('@') > -1) {
      const eventType = attrName.split('@')[1]
      bindEvent(vm, vnode, eventType, callbackName)
    }
  }
}

function bindEvent(vm, vnode, eventType, callbackName) {
  const method = getValue(vm._methods, callbackName)
  if (method) {
    vnode.el.addEventListener(eventType, e => method.call(vm, e))
  }
}