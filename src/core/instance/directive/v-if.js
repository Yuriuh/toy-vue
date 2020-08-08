import { generateCode, isTrue } from "../../util/code-generate"
import { getEnvAttr } from "../../util/object-enhance"

export function vIf(vm, vnode) {
  if (vnode.nodeType !== Node.ELEMENT_NODE) {
    return
  }
  const attrNames = vnode.el.getAttributeNames()
  for (let i = 0; i < attrNames.length; i++) {
    const attrName = attrNames[i]
    if (attrName.indexOf('v-if') > -1) {
      const attr = vnode.el.getAttribute(attrName)
      removeElByExpr(vm, vnode, attr)
    }
  }
}

function removeElByExpr(vm, vnode, expr) {
  const result = analysisExpression(vm, vnode, expr)
  if (result) {
    vnode.el.remove()
  }
}

function analysisExpression(vm, vnode, expr) {
  const envAttr = getEnvAttr(vm, vnode)
  const envCode = generateCode(envAttr)
  return isTrue(expr, envCode)
}