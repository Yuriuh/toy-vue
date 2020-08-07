import { setValue } from "../../util/object-enhance"

export function vmodel(vm, el, attr) {
  el.addEventListener('input', e => {
    setValue(vm._data, attr, e.target.value)
  })
}