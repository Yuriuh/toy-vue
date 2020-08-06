import { setValue } from "../../util/object-enhance"

export function vmodel(vm, el, attr) {
  // el.onchange = function(event) {
  //   setValue(vm._data, attr, el.value)
  // }
  el.addEventListener('input', e => {
    setValue(vm._data, attr, e.target.value)
    // setValue(vm._data, attr, el.value)
  })
}