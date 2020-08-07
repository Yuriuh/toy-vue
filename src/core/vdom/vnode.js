let id = 1

export class VNode {
  // tag: 标签类型 DIV SPAN INPUT #text
  // el: 对应的真实节点
  // children: 当前节点下的子节点
  // text: 当前虚拟节点中的文本
  // data: VNodeData, 暂时保留, 暂无意义
  // parent: 父级节点
  // nodeTyoe: 节点类型
  constructor(config) {
    this.tag = config.tag || ''
    this.el = config.el
    this.children = config.children || []
    this.text = config.text || ''
    this.data = config.data || {}
    this.parent = config.parent
    this.nodeType = config.nodeType
    // 当前节点的环境变量
    this.env = {}
    // 存放指令集
    // this.directives = null
    this.expression = null
    // 当前节点涉及到的模板
    this.template = []
    this.id = id++
  }
}