import { initMixin } from './instance/init'
import { renderMixin } from './instance/render'

function Vuette(options) {
  this._init(options)
  this._render()
}

initMixin(Vuette)
renderMixin(Vuette)

export default Vuette