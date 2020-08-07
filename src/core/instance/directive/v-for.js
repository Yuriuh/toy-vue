import { VNode } from "../../vdom/vnode";
import { getValue } from "../../util/object-enhance";

// expression: item in list
export function vFor(vm, el, parent, expression) {
  const data = getVirtualNodeData(expression)[2]
  const vnode = new VNode({
    tag: el.nodeName,
    el,
    data,
    parent,
    nodeType: 0,
  })
  vnode.expression = expression
  parent.el.removeChild(el)
  // 移除子元素节点会同时移除掉子文本节点, 所以这里把文本节点加回来
  parent.el.appendChild(document.createTextNode(''))
  const domList = analysisExpression(vm, expression, el, parent)
  return vnode
}

// 只支持 (item) in list
function getVirtualNodeData(expression) {
  const exprList = expression.trim().split(' ')
  // console.log('exprList', exprList)
  if (exprList.length !== 3 || (exprList[1] !== 'in' && exprList[1] !== 'of')) {
    throw new SyntaxError('请使用 (item,index) in list 这种语法, 括号中间不要有空格')
  }
  return exprList
}

function analysisExpression(vm, expression, el, parent) {
  const exprList = getVirtualNodeData(expression)
  // exprList[2] 为 list
  const dataList = getValue(vm._data, exprList[2])
  if (!dataList) {
    throw new Error('vFor 函数无法解析该表达式')
  }
  const result = []
  for (let i = 0; i < dataList.length; i++) {
    const tempDom = document.createElement(el.nodeName)
    tempDom.innerHTML = el.innerHTML
    // exprList[0] 为 (item, index)
    // 获取局部变量
    const env = analysisKV(exprList[0], dataList[i], i)
    // console.log('env', env)
    tempDom.setAttribute('env', JSON.stringify(env))
    parent.el.appendChild(tempDom)
    result.push(tempDom)
  }
  return result
}

function analysisKV(expression, value, index) {
  // /([a-zA-Z0-9_$]+)/.test(expression)
  if (hasBracket(expression)) {
    expression = expression.trim()
    // 去掉括号 (item) in list
    expression = expression.slice(1, expression.length - 1)
  }
  // (item, index)
  const keys = expression.split(',')
  if (keys.length === 0) {
    throw new Error('没有获取到 keys')
  }
  const obj = {}
  if (keys.length >= 1) {
    obj[keys[0].trim()] = value
  }
  if (keys.length >= 2) {
    obj[keys[1].trim()] = index
  }
  return obj
}

function hasBracket(expr) {
  return expr.startsWith('(') && expr.endsWith(')')
}