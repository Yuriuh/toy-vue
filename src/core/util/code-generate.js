export function generateCode(envAttr) {
  let code = ''
  for (const s in envAttr) {
    code += `let ${s}=${JSON.stringify(envAttr[s])};`
  }
  return code
}

export function isTrue(expression, env) {
  let bool = false
  let code = env
  code += `if(${expression}) {bool = true}`
  eval(code)
  return bool
}