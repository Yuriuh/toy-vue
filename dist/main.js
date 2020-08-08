/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _index = _interopRequireDefault(__webpack_require__(/*! ./src/core/index.js */ \"./src/core/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nwindow.app = new _index[\"default\"]({\n  el: '#app',\n  data: {\n    content: 'panda',\n    description: 'panda say hello',\n    obj: {\n      innerObj: {\n        a: 1\n      },\n      b: 2\n    },\n    list: [{\n      name: 'panda',\n      age: 11\n    }, {\n      name: 'monkey',\n      age: 12\n    }, {\n      name: 'elephant',\n      age: 18\n    }],\n    nestList: [{\n      innerList: [{\n        name: 'panda',\n        age: 11\n      }, {\n        name: 'monkey',\n        age: 12\n      }]\n    }, {\n      innerList: [{\n        name: '猪',\n        age: 13\n      }, {\n        name: '猴子',\n        age: 14\n      }]\n    }],\n    imgSrc: 'https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg',\n    red: 'red'\n  },\n  methods: {\n    handleKeydown: function handleKeydown(event) {}\n  },\n  created: function created() {\n    console.log('created');\n  }\n});\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./src/core/index.js":
/*!***************************!*\
  !*** ./src/core/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Object.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _init = __webpack_require__(/*! ./instance/init */ \"./src/core/instance/init.js\");\n\nvar _render = __webpack_require__(/*! ./instance/render */ \"./src/core/instance/render.js\");\n\nfunction Vuette(options) {\n  this._init(options);\n\n  if (this._created != null) {\n    this._created.call(this);\n  }\n\n  this._render();\n}\n\n(0, _init.initMixin)(Vuette);\n(0, _render.renderMixin)(Vuette);\nvar _default = Vuette;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./src/core/index.js?");

/***/ }),

/***/ "./src/core/instance/directive/v-bind.js":
/*!***********************************************!*\
  !*** ./src/core/instance/directive/v-bind.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Object.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.vBind = vBind;\n\nvar _objectEnhance = __webpack_require__(/*! ../../util/object-enhance */ \"./src/core/util/object-enhance.js\");\n\nvar _codeGenerate = __webpack_require__(/*! ../../util/code-generate */ \"./src/core/util/code-generate.js\");\n\nfunction vBind(vm, vnode) {\n  if (vnode.nodeType !== Node.ELEMENT_NODE) {\n    return;\n  }\n\n  var attrNames = vnode.el.getAttributeNames();\n\n  for (var i = 0; i < attrNames.length; i++) {\n    var attrName = attrNames[i];\n\n    if (attrName.indexOf('v-bind:') > -1 || attrName.indexOf(':') > -1) {\n      var attr = vnode.el.getAttribute(attrName);\n      setAttr(vm, vnode, attrName, attr);\n    }\n  }\n} // v-bind:value=\"value\"\n\n\nfunction setAttr(vm, vnode, attrName, attr) {\n  var key = attrName.split(':')[1]; // 有花括号\n\n  if (/^{[\\w\\W]+}$/.test(attr)) {\n    var formattedAttr = attr.slice(1, attr.length - 1).trim();\n    var exprList = formattedAttr.split(',');\n    var result = analysisExpression(vm, vnode, exprList); // 特殊处理一下 class\n    // eg: class=\"red, larger\" => class=\"red larger\"\n\n    if (key === 'class') {\n      result = result.split(',').map(function (v) {\n        return v.trim();\n      }).join(' ');\n    }\n\n    vnode.el.setAttribute(key, result);\n  } else {\n    var value = (0, _objectEnhance.getValue)(vm._data, attr);\n    vnode.el.setAttribute(key, value);\n  }\n}\n\nfunction analysisExpression(vm, vnode, exprList) {\n  // 获取当前环境的变量\n  var envAttr = (0, _objectEnhance.getEnvAttr)(vm, vnode); // 判断表达式是否成立\n\n  var envCode = (0, _codeGenerate.generateCode)(envAttr); // 拼组 result\n\n  var result = '';\n\n  for (var i = 0; i < exprList.length; i++) {\n    var expr = exprList[i];\n    var colonIndex = expr.indexOf(':');\n\n    if (colonIndex > -1) {\n      var code = expr.slice(colonIndex + 1, expr.length); // 结合上面的环境声明代码, 来验证这个表达式是否成立\n\n      if ((0, _codeGenerate.isTrue)(code, envCode)) {\n        result += expr.slice(0, colonIndex) + ',';\n      }\n    } else {\n      result += \"\".concat(expr, \",\");\n    }\n  }\n\n  if (result.length > 0) {\n    result = result.slice(0, result.length - 1);\n  }\n\n  return result;\n}\n\n//# sourceURL=webpack:///./src/core/instance/directive/v-bind.js?");

/***/ }),

/***/ "./src/core/instance/directive/v-for.js":
/*!**********************************************!*\
  !*** ./src/core/instance/directive/v-for.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Object.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.vFor = vFor;\n\nvar _vnode = __webpack_require__(/*! ../../vdom/vnode */ \"./src/core/vdom/vnode.js\");\n\nvar _objectEnhance = __webpack_require__(/*! ../../util/object-enhance */ \"./src/core/util/object-enhance.js\");\n\n// expression: item in list\nfunction vFor(vm, el, parent, expression) {\n  var data = getVirtualNodeData(expression)[2];\n  var vnode = new _vnode.VNode({\n    tag: el.nodeName,\n    el: el,\n    data: data,\n    parent: parent,\n    nodeType: 0\n  });\n  vnode.expression = expression;\n  parent.el.removeChild(el); // 移除子元素节点会同时移除掉子文本节点, 所以这里把文本节点加回来\n\n  parent.el.appendChild(document.createTextNode(''));\n  var domList = analysisExpression(vm, expression, el, parent);\n  return vnode;\n} // 只支持 (item) in list\n\n\nfunction getVirtualNodeData(expression) {\n  var exprList = expression.trim().split(' '); // console.log('exprList', exprList)\n\n  if (exprList.length !== 3 || exprList[1] !== 'in' && exprList[1] !== 'of') {\n    throw new SyntaxError('请使用 (item,index) in list 这种语法, 括号中间不要有空格');\n  }\n\n  return exprList;\n}\n\nfunction analysisExpression(vm, expression, el, parent) {\n  var exprList = getVirtualNodeData(expression); // console.log('exprList', exprList)\n  // exprList[2] 为 list\n\n  var dataList = (0, _objectEnhance.getValue)(vm._data, exprList[2]); // console.log('dataList', dataList)\n\n  if (!dataList) {\n    throw new Error('vFor 函数无法解析该表达式');\n  }\n\n  var result = [];\n\n  for (var i = 0; i < dataList.length; i++) {\n    var tempDom = document.createElement(el.nodeName);\n    tempDom.innerHTML = el.innerHTML; // exprList[0] 为 (item, index)\n    // 获取局部变量\n\n    var env = analysisKV(exprList[0], dataList[i], i);\n    tempDom.setAttribute('env', JSON.stringify(env));\n    parent.el.appendChild(tempDom);\n    result.push(tempDom);\n  }\n\n  return result;\n}\n\nfunction analysisKV(expression, value, index) {\n  // /([a-zA-Z0-9_$]+)/.test(expression)\n  if (hasBracket(expression)) {\n    expression = expression.trim(); // 去掉括号 (item) in list\n\n    expression = expression.slice(1, expression.length - 1);\n  } // (item, index)\n\n\n  var keys = expression.split(',');\n\n  if (keys.length === 0) {\n    throw new Error('没有获取到 keys');\n  }\n\n  var obj = {};\n\n  if (keys.length >= 1) {\n    obj[keys[0].trim()] = value;\n  }\n\n  if (keys.length >= 2) {\n    obj[keys[1].trim()] = index;\n  }\n\n  return obj;\n}\n\nfunction hasBracket(expr) {\n  return expr.startsWith('(') && expr.endsWith(')');\n}\n\n//# sourceURL=webpack:///./src/core/instance/directive/v-for.js?");

/***/ }),

/***/ "./src/core/instance/directive/v-model.js":
/*!************************************************!*\
  !*** ./src/core/instance/directive/v-model.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Object.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.vmodel = vmodel;\n\nvar _objectEnhance = __webpack_require__(/*! ../../util/object-enhance */ \"./src/core/util/object-enhance.js\");\n\nfunction vmodel(vm, el, attr) {\n  el.addEventListener('input', function (e) {\n    (0, _objectEnhance.setValue)(vm._data, attr, e.target.value);\n  });\n}\n\n//# sourceURL=webpack:///./src/core/instance/directive/v-model.js?");

/***/ }),

/***/ "./src/core/instance/directive/v-on.js":
/*!*********************************************!*\
  !*** ./src/core/instance/directive/v-on.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Object.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.vOn = vOn;\n\nvar _objectEnhance = __webpack_require__(/*! ../../util/object-enhance */ \"./src/core/util/object-enhance.js\");\n\nfunction vOn(vm, vnode) {\n  if (vnode.nodeType !== Node.ELEMENT_NODE) {\n    return;\n  }\n\n  var attrNames = vnode.el.getAttributeNames();\n\n  for (var i = 0; i < attrNames.length; i++) {\n    var attrName = attrNames[i];\n    var callbackName = vnode.el.getAttribute(attrName);\n\n    if (attrName.indexOf('v-on') > -1) {\n      var eventType = attrName.split(':')[1];\n      bindEvent(vm, vnode, eventType, callbackName);\n    }\n\n    if (attrName.indexOf('@') > -1) {\n      var _eventType = attrName.split('@')[1];\n      bindEvent(vm, vnode, _eventType, callbackName);\n    }\n  }\n}\n\nfunction bindEvent(vm, vnode, eventType, callbackName) {\n  var method = (0, _objectEnhance.getValue)(vm._methods, callbackName);\n\n  if (method) {\n    vnode.el.addEventListener(eventType, function (e) {\n      return method.call(vm, e);\n    });\n  }\n}\n\n//# sourceURL=webpack:///./src/core/instance/directive/v-on.js?");

/***/ }),

/***/ "./src/core/instance/init.js":
/*!***********************************!*\
  !*** ./src/core/instance/init.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Object.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.initMixin = initMixin;\n\nvar _proxy = __webpack_require__(/*! ./proxy */ \"./src/core/instance/proxy.js\");\n\nvar _mount = __webpack_require__(/*! ./mount */ \"./src/core/instance/mount.js\");\n\nvar uid = 0;\n\nfunction initMixin(Vuette) {\n  Vuette.prototype._init = function (options) {\n    var vm = this;\n    uid += 1;\n    vm.uid = uid;\n    vm._isVuette = true; // 初始化数据\n\n    if (options && options.data) {\n      vm._data = (0, _proxy.proxy)(vm, options.data, '');\n    } // 初始化 created 方法\n\n\n    if (options && options.created) {\n      vm._created = options.created;\n    } // 初始化 methods\n\n\n    if (options && options.data) {\n      vm._methods = options.methods;\n\n      for (var method in options.methods) {\n        vm[method] = options.methods[method];\n      }\n    } // 初始化 computed\n\n\n    if (options && options.computed) {\n      vm._computed = options.computed;\n    } // 初始化 el 并挂载\n\n\n    if (options && options.el) {\n      var root = document.querySelector(options.el);\n      (0, _mount.mount)(vm, root);\n    }\n  };\n}\n\n//# sourceURL=webpack:///./src/core/instance/init.js?");

/***/ }),

/***/ "./src/core/instance/mount.js":
/*!************************************!*\
  !*** ./src/core/instance/mount.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Object.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.initMount = initMount;\nexports.mount = mount;\nexports.rebuild = rebuild;\n\nvar _vnode = __webpack_require__(/*! ../vdom/vnode */ \"./src/core/vdom/vnode.js\");\n\nvar _vModel = __webpack_require__(/*! ./directive/v-model */ \"./src/core/instance/directive/v-model.js\");\n\nvar _objectEnhance = __webpack_require__(/*! ../util/object-enhance */ \"./src/core/util/object-enhance.js\");\n\nvar _constants = __webpack_require__(/*! ../shared/constants */ \"./src/core/shared/constants.js\");\n\nvar _render = __webpack_require__(/*! ./render */ \"./src/core/instance/render.js\");\n\nvar _vFor = __webpack_require__(/*! ./directive/v-for */ \"./src/core/instance/directive/v-for.js\");\n\nvar _vBind = __webpack_require__(/*! ./directive/v-bind */ \"./src/core/instance/directive/v-bind.js\");\n\nvar _vOn = __webpack_require__(/*! ./directive/v-on */ \"./src/core/instance/directive/v-on.js\");\n\nfunction initMount(Vuette) {\n  Vuette.prototype.$mount = function (el) {\n    var vm = this;\n    var root = document.querySelector(el);\n    mount(vm, root);\n  };\n}\n\nfunction mount(vm, el) {\n  // 进行挂载\n  vm._vnode = constructVNode(vm, el, null); // 进行预备渲染 (建立渲染索引, 通过模板找 vnode, 通过 vnode 找模板)\n\n  (0, _render.prepareRender)(vm, vm._vnode); // console.log('getTempateToVnodeMap', getTemplateToVnodeMap())\n  // console.log('getVnodeToTempateMap', getVnodeToTemplateMap())\n} // 深度优先搜索\n\n\nfunction constructVNode(vm, el, parent) {\n  var vnode = analysisAttr(vm, el, parent); // console.log('vnode', vnode)\n\n  if (vnode == null) {\n    var children = [];\n    var text = getNodeText(el);\n    var data = null;\n    var nodeType = el.nodeType;\n    var tag = el.nodeName; // 避免重复创建虚拟节点\n\n    vnode = new _vnode.VNode({\n      tag: tag,\n      el: el,\n      children: children,\n      text: text,\n      data: data,\n      parent: parent,\n      nodeType: nodeType\n    });\n\n    if (el.nodeType === Node.ELEMENT_NODE) {\n      var env = el.getAttribute('env');\n\n      if (env) {\n        var mergedEnv = (0, _objectEnhance.mergeAttr)(vnode.env, JSON.parse(env));\n        vnode.env = mergedEnv;\n      } // 文本节点找父级节点 (如 li) 的 env\n\n    } else {\n      var parentEnv = parent ? parent.env : {};\n      vnode.env = (0, _objectEnhance.mergeAttr)(vnode.env, parentEnv);\n    }\n  }\n\n  (0, _vBind.vBind)(vm, vnode);\n  (0, _vOn.vOn)(vm, vnode);\n  var childs = vnode.nodeType === _constants.VIRTUAL_NODE ? vnode.parent.el.childNodes : vnode.el.childNodes;\n\n  for (var i = 0; i < childs.length; i++) {\n    var childNodes = constructVNode(vm, childs[i], vnode); // 返回单一节点\n\n    if (childNodes instanceof _vnode.VNode) {\n      vnode.children.push(childNodes); // 返回节点数组\n    } else {\n      vnode.children = vnode.children.concat(childNodes);\n    }\n  }\n\n  return vnode;\n}\n\nfunction getNodeText(el) {\n  if (el.nodeType === Node.TEXT_NODE) {\n    return el.nodeValue;\n  } else {\n    return '';\n  }\n}\n\nfunction analysisAttr(vm, el, parent) {\n  if (el.nodeType === Node.ELEMENT_NODE) {\n    var attrs = el.getAttributeNames();\n\n    if (attrs.indexOf('v-model') > -1) {\n      var attr = el.getAttribute('v-model');\n      (0, _vModel.vmodel)(vm, el, attr);\n    }\n\n    if (attrs.indexOf('v-for') > -1) {\n      var _attr = el.getAttribute('v-for');\n\n      return (0, _vFor.vFor)(vm, el, parent, _attr);\n    }\n  }\n}\n\nfunction rebuild(vm, template) {\n  var vnodes = (0, _render.getVnodesByTemplate)(template);\n\n  for (var i = 0; i < vnodes.length; i++) {\n    var vnode = vnodes[i];\n    vnode.parent.el.innerHTML = '';\n    vnode.parent.el.appendChild(vnode.el);\n    var result = constructVNode(vm, vnode.el, vnode.parent);\n    vnode.parent.children = [result];\n    (0, _render.clearMap)();\n    (0, _render.prepareRender)(vm, vm._vnode);\n  }\n}\n\n//# sourceURL=webpack:///./src/core/instance/mount.js?");

/***/ }),

/***/ "./src/core/instance/proxy.js":
/*!************************************!*\
  !*** ./src/core/instance/proxy.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Object.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.proxy = proxy;\n\nvar _render = __webpack_require__(/*! ./render */ \"./src/core/instance/render.js\");\n\nvar _mount = __webpack_require__(/*! ./mount */ \"./src/core/instance/mount.js\");\n\nvar _objectEnhance = __webpack_require__(/*! ../util/object-enhance */ \"./src/core/util/object-enhance.js\");\n\n// vm 表示 Vuette 对象\n// obj 表示要进行代理的对象\n// namespace\n// 我们要知道哪个属性被修改了，我们才能对页面上的内容进行更新\n// 所以我们需要用代理的方式来实现监听属性修改\nfunction proxy(vm, obj, namespace) {\n  // 递归\n  var proxyObj = null;\n\n  if (obj instanceof Array) {\n    proxyObj = [];\n    obj.forEach(function (item, index) {\n      proxyObj[index] = proxy(vm, item, namespace);\n    });\n    proxyObj = proxyArray(vm, obj, namespace);\n  } else if (obj instanceof Object) {\n    proxyObj = proxyObject(vm, obj, namespace);\n  } else {\n    throw new Error('The data type is not supported!');\n  }\n\n  return proxyObj;\n}\n\nfunction proxyObject(vm, obj, namespace) {\n  var proxyObj = {};\n  Object.keys(obj).forEach(function (key) {\n    Object.defineProperty(proxyObj, key, {\n      configurable: true,\n      get: function get() {\n        return obj[key];\n      },\n      set: function set(v) {\n        obj[key] = v;\n        var ns = getNameSpace(namespace, key);\n        var val = (0, _objectEnhance.getValue)(vm._data, ns);\n\n        if (Array.isArray(val)) {\n          (0, _mount.rebuild)(vm, ns);\n        }\n\n        (0, _render.renderData)(vm, ns);\n      }\n    }); // 在 vm 上也做一层代理\n\n    Object.defineProperty(vm, key, {\n      configurable: true,\n      get: function get() {\n        return obj[key];\n      },\n      set: function set(v) {\n        obj[key] = v;\n        var ns = getNameSpace(namespace, key);\n        var val = (0, _objectEnhance.getValue)(vm._data, ns);\n\n        if (Array.isArray(val)) {\n          (0, _mount.rebuild)(vm, ns);\n        } // 检测到对象属性的变化, 然后渲染视图\n\n\n        (0, _render.renderData)(vm, ns);\n      }\n    });\n\n    if (obj[key] instanceof Object) {\n      var ns = getNameSpace(namespace, key);\n      proxyObj[key] = proxy(vm, obj[key], ns);\n    }\n  });\n  return proxyObj;\n}\n\nvar arrayProto = Array.prototype;\nvar arrayMethods = ['push', 'pop', 'shift', 'unshift', 'splice'];\n\nfunction defineArrayMethod(obj, fnName, namespace, vm) {\n  Object.defineProperty(obj, fnName, {\n    enumerable: true,\n    configurable: true,\n    value: function value() {\n      var original = arrayProto[fnName];\n\n      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n      }\n\n      var result = original.apply(this, args);\n      var ns = getNameSpace(namespace, '');\n      (0, _mount.rebuild)(vm, ns); // 检测到数组的变化, 然后渲染视图\n\n      (0, _render.renderData)(vm, ns);\n      return result;\n    }\n  });\n}\n\nfunction proxyArray(vm, arr, namespace) {\n  var proto = {\n    eleType: 'Array',\n    toString: function toString() {\n      var result = '';\n\n      for (var i = 0; i < arr.length; i++) {\n        result += arr[i] + ', ';\n      }\n\n      return result.slice(0, result.length - 2);\n    },\n    push: function push() {},\n    pop: function pop() {},\n    shift: function shift() {},\n    unshift: function unshift() {},\n    splice: function splice() {}\n  };\n  arrayMethods.forEach(function (method) {\n    defineArrayMethod.call(vm, proto, method, namespace, vm);\n  });\n  arr.__proto__ = proto;\n  return arr;\n}\n\nfunction getNameSpace(currentNamespace) {\n  var currentKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n\n  if (currentNamespace == null || currentNamespace === '') {\n    return currentKey;\n  } else if (currentKey == null || currentKey === '') {\n    return currentNamespace;\n  } else {\n    return currentNamespace + '.' + currentKey;\n  }\n}\n\n//# sourceURL=webpack:///./src/core/instance/proxy.js?");

/***/ }),

/***/ "./src/core/instance/render.js":
/*!*************************************!*\
  !*** ./src/core/instance/render.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Object.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.renderMixin = renderMixin;\nexports.renderData = renderData;\nexports.renderNode = renderNode;\nexports.prepareRender = prepareRender;\nexports.getTemplateToVnodeMap = getTemplateToVnodeMap;\nexports.getVnodeToTemplateMap = getVnodeToTemplateMap;\nexports.getVnodesByTemplate = getVnodesByTemplate;\nexports.clearMap = clearMap;\n\nvar _objectEnhance = __webpack_require__(/*! ../util/object-enhance */ \"./src/core/util/object-enhance.js\");\n\nvar _constants = __webpack_require__(/*! ../shared/constants */ \"./src/core/shared/constants.js\");\n\n// 1. 通过模板, 找到哪些节点用到了这个模板\nvar templateToVnode = new Map(); // 2. 通过节点, 找到这个节点下有哪些模板\n\nvar vnodeToTemplate = new Map(); // 匹配 {{ }} 中的内容\n\nvar INSERTION_RE = /{{(\\s*)[a-zA-Z0-9_.]+(\\s*)}}/g;\n\nfunction renderMixin(Vuette) {\n  Vuette.prototype._render = function () {\n    renderNode(this, this._vnode);\n  };\n}\n\nfunction renderData(vm, data) {\n  var vnodes = templateToVnode.get(data); // console.log('vnodes', vnodes)\n\n  if (vnodes != null) {\n    for (var i = 0; i < vnodes.length; i++) {\n      var vnode = vnodes[i];\n      renderNode(vm, vnode);\n    }\n  }\n}\n\nfunction renderNode(vm, vnode) {\n  // console.log('render')\n  if (vnode.nodeType === Node.TEXT_NODE) {\n    var templates = vnodeToTemplate.get(vnode);\n\n    if (templates) {\n      var result = vnode.text; // console.log('result', result)\n\n      for (var i = 0; i < templates.length; i++) {\n        // 当前节点的参数, 可以来自 Vuette 对象, 也可以来自于父级节点\n        var t = templates[i]; // console.log('vnode in render', vnode)\n        // console.log('vnode env in render', vnode.env)\n\n        var templateValue = getTemplateValue([vm._data, vnode.env], t); // console.log('templateValue', templateValue)\n        // 把虚拟 dom 中的值替换到真实 dom 中\n\n        if (templateValue != null) {\n          var re = new RegExp('{{(\\\\s*)' + \"(\".concat(t, \")\") + '(\\\\s*)}}', 'g');\n          result = result.replace(re, templateValue);\n        }\n      }\n\n      vnode.el.nodeValue = result;\n    }\n  } else if (vnode.nodeType === Node.ELEMENT_NODE && vnode.tag === 'INPUT') {\n    var _templates = vnodeToTemplate.get(vnode);\n\n    if (_templates) {\n      for (var _i = 0; _i < _templates.length; _i++) {\n        var value = getTemplateValue([vm._data, vnode.env], _templates[_i]);\n\n        if (value) {\n          vnode.el.value = value;\n        }\n      }\n    }\n  } else {\n    for (var _i2 = 0; _i2 < vnode.children.length; _i2++) {\n      renderNode(vm, vnode.children[_i2]);\n    }\n  }\n}\n\nfunction prepareRender(vm, vnode) {\n  if (vnode == null) {\n    return;\n  }\n\n  if (vnode.nodeType === Node.TEXT_NODE) {\n    analysisTemplateString(vnode);\n  }\n\n  if (vnode.nodeType === _constants.VIRTUAL_NODE) {\n    setTemplateToVnode(vnode.data, vnode);\n    setVnodeToTemplate(vnode.data, vnode);\n  }\n\n  analysisAttr(vm, vnode);\n\n  for (var i = 0; i < vnode.children.length; i++) {\n    prepareRender(vm, vnode.children[i]);\n  }\n}\n\nfunction analysisTemplateString(vnode) {\n  var templateStringList = vnode.text.match(INSERTION_RE); // console.log('templateStringList', templateStringList)\n\n  for (var i = 0; templateStringList && i < templateStringList.length; i++) {\n    setTemplateToVnode(templateStringList[i], vnode);\n    setVnodeToTemplate(templateStringList[i], vnode);\n  }\n}\n\nfunction analysisAttr(vm, vnode) {\n  if (vnode.nodeType !== Node.ELEMENT_NODE) {\n    return;\n  }\n\n  var attrNames = vnode.el.getAttributeNames();\n\n  if (attrNames.indexOf('v-model') > -1) {\n    var value = vnode.el.getAttribute('v-model');\n    setTemplateToVnode(value, vnode);\n    setVnodeToTemplate(value, vnode);\n  }\n}\n\nfunction setTemplateToVnode(template, vnode) {\n  var name = getTemplateName(template);\n  var vnodeSet = templateToVnode.get(name);\n\n  if (vnodeSet) {\n    vnodeSet.push(vnode);\n  } else {\n    templateToVnode.set(name, [vnode]);\n  }\n}\n\nfunction setVnodeToTemplate(template, vnode) {\n  var name = getTemplateName(template);\n  var templateSet = vnodeToTemplate.get(vnode);\n\n  if (templateSet) {\n    templateSet.push(name);\n  } else {\n    vnodeToTemplate.set(vnode, [name]);\n  }\n}\n\nfunction getTemplateName(template) {\n  var t = template; // 判断是否有花括号, 如果有, 则解掉, 否则直接返回\n\n  if (t.slice(0, 2) === '{{' && t.slice(-2) === '}}') {\n    // 去掉多余的空格 {{ name }} -> ( name ) -> (name)\n    return t.slice(2, -2).trim();\n  } else {\n    return t;\n  }\n}\n\nfunction getTemplateValue(objs, templateName) {\n  // console.log('objs', objs)\n  for (var i = 0; i < objs.length; i++) {\n    var temp = (0, _objectEnhance.getValue)(objs[i], templateName); // console.log('temp', temp)\n\n    if (temp != null) {\n      return temp;\n    }\n  }\n\n  return '';\n}\n\nfunction getTemplateToVnodeMap() {\n  return templateToVnode;\n}\n\nfunction getVnodeToTemplateMap() {\n  return vnodeToTemplate;\n}\n\nfunction getVnodesByTemplate(template) {\n  return templateToVnode.get(template);\n}\n\nfunction clearMap() {\n  templateToVnode.clear();\n  vnodeToTemplate.clear();\n} // console.log('templateToVnode', templateToVnode)\n// console.log('vnodeToTemplate', vnodeToTemplate)\n\n//# sourceURL=webpack:///./src/core/instance/render.js?");

/***/ }),

/***/ "./src/core/shared/constants.js":
/*!**************************************!*\
  !*** ./src/core/shared/constants.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Object.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.VIRTUAL_NODE = void 0;\nvar VIRTUAL_NODE = 0;\nexports.VIRTUAL_NODE = VIRTUAL_NODE;\n\n//# sourceURL=webpack:///./src/core/shared/constants.js?");

/***/ }),

/***/ "./src/core/util/code-generate.js":
/*!****************************************!*\
  !*** ./src/core/util/code-generate.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Object.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.generateCode = generateCode;\nexports.isTrue = isTrue;\n\nfunction generateCode(envAttr) {\n  var code = '';\n\n  for (var s in envAttr) {\n    code += \"let \".concat(s, \"=\").concat(JSON.stringify(envAttr[s]), \";\");\n  }\n\n  return code;\n}\n\nfunction isTrue(expression, env) {\n  var bool = false;\n  var code = env;\n  code += \"if(\".concat(expression, \") {bool = true}\");\n  eval(code);\n  return bool;\n}\n\n//# sourceURL=webpack:///./src/core/util/code-generate.js?");

/***/ }),

/***/ "./src/core/util/object-enhance.js":
/*!*****************************************!*\
  !*** ./src/core/util/object-enhance.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Object.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getValue = getValue;\nexports.setValue = setValue;\nexports.mergeAttr = mergeAttr;\nexports.deepClone = deepClone;\nexports.getEnvAttr = getEnvAttr;\n\n// a.b.c\nfunction getValue(obj, name) {\n  if (!obj) return obj;\n  var nameList = name.split('.');\n  var temp = obj;\n\n  for (var i = 0; i < nameList.length; i++) {\n    if (temp[nameList[i]] != null) {\n      temp = temp[nameList[i]];\n    } else {\n      return void 0;\n    }\n  }\n\n  return temp;\n} // _data = { content: 'panda , desc: 'abcd', obj: { x: 1 } }\n// fullKey: key -> name fullKey -> obj.name\n\n\nfunction setValue(obj, fullKey, value) {\n  if (!obj) return obj;\n  var keyList = fullKey.split('.');\n  var end = keyList.length - 1;\n  var temp = obj;\n\n  for (var i = 0; i < end; i++) {\n    var key = keyList[i];\n\n    if (temp[key] != null) {\n      temp = temp[keyList[i]];\n    } else {\n      return void 0;\n    }\n  }\n\n  if (temp[keyList[end]] != null) {\n    temp[keyList[end]] = value;\n  }\n}\n\nfunction mergeAttr(obj1, obj2) {\n  var result = {};\n\n  if (obj1 == null) {\n    return deepClone(obj2);\n  }\n\n  if (obj2 == null) {\n    return deepClone(obj1);\n  }\n\n  var obj1Names = Object.getOwnPropertyNames(obj1);\n\n  for (var i = 0; i < obj1Names.length; i++) {\n    var name = obj1Names[i];\n    var value = obj1[name];\n    result[name] = value;\n  }\n\n  var obj2Names = Object.getOwnPropertyNames(obj2);\n\n  for (var _i = 0; _i < obj2Names.length; _i++) {\n    var _name = obj2Names[_i];\n    var _value = obj2[_name];\n    result[_name] = _value;\n  }\n\n  return result;\n}\n\nfunction deepClone(obj) {\n  if (obj instanceof Array) {\n    return cloneArray(obj);\n  } else if (obj instanceof Object) {\n    return cloneObject(obj);\n  } else {\n    return obj;\n  }\n}\n\nfunction cloneObject(obj) {\n  var result = {};\n  var names = Object.getOwnPropertyNames(obj);\n\n  for (var i = 0; i < names.length; i++) {\n    var name = names[i];\n    var value = obj[name];\n    result[name] = deepClone(value);\n  }\n\n  return result;\n}\n\nfunction cloneArray(arr) {\n  var result = [];\n\n  for (var i = 0; i < arr.length; i++) {\n    var item = arr[i];\n    result[i] = deepClone(item);\n  }\n\n  return result;\n}\n\nfunction getEnvAttr(vm, vnode) {\n  var result = mergeAttr(vm._data, vnode.env);\n  result = mergeAttr(result, vm._computed);\n  return result;\n}\n\n//# sourceURL=webpack:///./src/core/util/object-enhance.js?");

/***/ }),

/***/ "./src/core/vdom/vnode.js":
/*!********************************!*\
  !*** ./src/core/vdom/vnode.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Object.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.VNode = void 0;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar id = 1;\n\nvar VNode = // tag: 标签类型 DIV SPAN INPUT #text\n// el: 对应的真实节点\n// children: 当前节点下的子节点\n// text: 当前虚拟节点中的文本\n// data: VNodeData, 暂时保留, 暂无意义\n// parent: 父级节点\n// nodeTyoe: 节点类型\nfunction VNode(config) {\n  _classCallCheck(this, VNode);\n\n  this.tag = config.tag || '';\n  this.el = config.el;\n  this.children = config.children || [];\n  this.text = config.text || '';\n  this.data = config.data || {};\n  this.parent = config.parent;\n  this.nodeType = config.nodeType; // 当前节点的环境变量\n\n  this.env = {}; // 存放指令集\n  // this.directives = null\n\n  this.expression = null; // 当前节点涉及到的模板\n\n  this.template = [];\n  this.id = id++;\n};\n\nexports.VNode = VNode;\n\n//# sourceURL=webpack:///./src/core/vdom/vnode.js?");

/***/ })

/******/ });