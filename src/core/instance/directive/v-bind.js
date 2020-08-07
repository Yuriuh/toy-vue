import { getValue } from "../../util/object-enhance"

export function vbind(vm, vnode) {
  if (vnode.nodeType !== Node.ELEMENT_NODE) {
    return
  }
  const attrNames = vnode.el.getAttributeNames()
  for (let i = 0; i < attrNames.length; i++) {
    const attrName = attrNames[i]
    if (attrName.indexOf('v-bind:') > -1 || attrName.indexOf(':') > -1) {
      const attr = vnode.el.getAttribute(attrName)
      setAttr(vm, vnode, attrName, attr)
    }
  }
}

// v-bind:value="value"
function setAttr(vm, vnode, attrName, attr) {
  const key = attrName.split(':')[1]
  const value = getValue(vm._data, attr)
  console.log('value', value)
  vnode.el.setAttribute(key, value)
}