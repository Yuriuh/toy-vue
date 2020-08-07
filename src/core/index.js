import { initMixin } from './instance/init'
import { renderMixin } from './instance/render'

function Vuette(options) {
  this._init(options)
  if (this._created != null) {
    this._created.call(this)
  }
  this._render()
}

initMixin(Vuette)
renderMixin(Vuette)

export default Vuette