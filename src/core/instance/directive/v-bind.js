import { getValue, getEnvAttr } from "../../util/object-enhance"
import { generateCode, isTrue } from "../../util/code-generate"

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
  // 有花括号
  if (/^{[\w\W]+}$/.test(attr)) {
    const formattedAttr = attr.slice(1, attr.length - 1).trim()
    const exprList = formattedAttr.split(',')
    let result = analysisExpression(vm, vnode, exprList)
    // 特殊处理一下 class
    // eg: class="red, larger" => class="red larger"
    if (key === 'class') {
      result = result.split(',').map(v => v.trim()).join(' ')
    }
    vnode.el.setAttribute(key, result)
  } else {
    const value = getValue(vm._data, attr)
    vnode.el.setAttribute(key, value)
  }
}

function analysisExpression(vm, vnode, exprList) {
  // 获取当前环境的变量
  const envAttr = getEnvAttr(vm, vnode)
  // 判断表达式是否成立
  const envCode = generateCode(envAttr)
  // 拼组 result
  let result = ''
  for (let i = 0; i < exprList.length; i++) {
    const expr = exprList[i]
    const colonIndex = expr.indexOf(':')
    if (colonIndex > -1) {
      const code = expr.slice(colonIndex + 1, expr.length)
      // 结合上面的环境声明代码, 来验证这个表达式是否成立
      if(isTrue(code, envCode)) {
        result += expr.slice(0, colonIndex) + ','
      }
    } else {
      result += `${expr},`
    }
  }
  if (result.length > 0) {
    result = result.slice(0, result.length - 1)
  }
  return result
}