/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n.wrapper {\\n  display: grid;\\n  grid-template:\\n    \\\"head head head\\\" 1fr\\n    \\\"project todo todo\\\" 5fr\\n    \\\"project todo todo\\\" 5fr / 2fr 3fr 3fr;\\n  width: 100%;\\n  height: 100vh;\\n  background-color: #50423e;\\n}\\n\\nheader {\\n  grid-area: head;\\n  padding: 10px;\\n}\\n\\n.header-content {\\n  background-color: #fafafa;\\n  height: 100%;\\n  width: 100%;\\n  border-radius: 15px;\\n}\\n\\n.control {\\n  height: 80%;\\n  width: 10%;\\n  cursor: pointer;\\n  margin: 5px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.projects {\\n  grid-area: project;\\n  padding: 10px;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.controls {\\n  width: 50px;\\n  height: 50px;\\n  background-color: #fafafa;\\n  border-radius: 30px;\\n  margin-bottom: 10px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  transition: height 0.5s, width 0.5s;\\n  flex: none;\\n}\\n\\n.proj-big {\\n  height: 30%;\\n  width: 100%;\\n  transition: height 0.5s, width 0.5s;\\n}\\n\\n.proj-form {\\n  display: none;\\n}\\n\\n.todo-form {\\n  display: none;\\n}\\n\\n.todo-big {\\n  height: 30%;\\n  width: 30%;\\n  transition: height 0.5s, width 0.5s;\\n}\\n\\n.projects-content {\\n  background-color: #fafafa;\\n  height: 100%;\\n  width: 100%;\\n  border-radius: 15px;\\n  padding: 10px;\\n  box-sizing: border-box;\\n  overflow: auto;\\n}\\n\\n.proj {\\n  display: flex;\\n  flex-direction: column;\\n  width: 100%;\\n  height: auto;\\n  border: 1px solid lightgrey;\\n  border-radius: 5px;\\n  box-sizing: border-box;\\n  padding: 3px;\\n  margin: 0 0 3px 0;\\n}\\n\\n.proj-desc {\\n  color: grey;\\n}\\n\\n.todos {\\n  grid-area: todo;\\n  padding: 10px;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.todos-content {\\n  background-color: #fafafa;\\n  height: 100%;\\n  width: 100%;\\n  border-radius: 15px;\\n  padding: 10px;\\n}\\n\\n.task {\\n  display: flex;\\n  justify-content: space-around;\\n}\\n\\n.task:hover {\\n  border: 1px solid grey;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/domUpdate.js":
/*!**************************!*\
  !*** ./src/domUpdate.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DOMUpdate\": () => (/* binding */ DOMUpdate),\n/* harmony export */   \"Listeners\": () => (/* binding */ Listeners)\n/* harmony export */ });\n/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items */ \"./src/items.js\");\n/* eslint-disable no-param-reassign */\n\n\nconst projects = document.querySelector(\".projects-content\");\nconst todos = document.querySelector(\".todos-content\");\n\nconst DOMUpdate = (function DOMUpdate() {\n  const toggleForm = function toggleForm(form) {\n    if (form.style.display === \"block\") {\n      form.style.display = \"none\";\n    } else {\n      form.style.display = \"block\";\n    }\n  };\n\n  const todoRefresh = function todoRefresh(proj) {\n    todos.textContent = \"\";\n\n    proj.tasks.forEach((task) => {\n      const taskContainer = document.createElement(\"div\");\n      taskContainer.classList.add(\"task\");\n\n      const taskTitle = document.createElement(\"p\");\n      taskTitle.classList.add(\"task-title\");\n      taskTitle.textContent = task.title;\n\n      const taskDesc = document.createElement(\"p\");\n      taskDesc.classList.add(\"task-desc\");\n      taskDesc.textContent = task.desc;\n\n      todos.appendChild(taskContainer);\n      taskContainer.appendChild(taskTitle);\n      taskContainer.appendChild(taskDesc);\n    });\n  };\n\n  const projRefresh = function projRefresh() {\n    projects.textContent = \"\";\n\n    _items__WEBPACK_IMPORTED_MODULE_0__.Library.projects.forEach((project) => {\n      const proj = document.createElement(\"div\");\n      proj.classList.add(\"proj\");\n      // the data-index attribute corresponds to the project's index in the library\n      proj.setAttribute(\"data-index\", project.index);\n\n      const projTitle = document.createElement(\"p\");\n      projTitle.classList.add(\"proj-title\");\n      projTitle.textContent = project.title;\n\n      const projDesc = document.createElement(\"p\");\n      projDesc.classList.add(\"proj-desc\");\n      projDesc.textContent = project.desc;\n\n      projects.appendChild(proj);\n      proj.appendChild(projTitle);\n      proj.appendChild(projDesc);\n    });\n  };\n\n  return { projRefresh, toggleForm, todoRefresh };\n})();\n\nconst Listeners = (function Listeners() {\n  // sets event listeners for each child node of a parent\n  const setListeners = function setListeners(parent, func) {\n    const children = Array.from(parent.childNodes);\n\n    children.forEach((node) => {\n      const index = node.getAttribute(\"data-index\");\n\n      node.addEventListener(\"click\", () => {\n        func.call(this, _items__WEBPACK_IMPORTED_MODULE_0__.Library.projects[index]);\n        _items__WEBPACK_IMPORTED_MODULE_0__.Library.selected = index;\n      });\n    });\n  };\n\n  return { setListeners };\n})();\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/domUpdate.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items */ \"./src/items.js\");\n/* harmony import */ var _domUpdate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domUpdate */ \"./src/domUpdate.js\");\n// eslint-disable-next-line no-unused-vars\n\n\n\n\nconst projForm = document.querySelector(\".proj-form\");\nconst projResize = document.querySelector(\".new-proj\");\nconst projSubmit = document.querySelector(\"#proj-submit\");\nconst projTitle = document.querySelector(\"#proj-title\");\nconst projDate = document.querySelector(\"#proj-date\");\nconst projDesc = document.querySelector(\"#proj-desc\");\nconst projContent = document.querySelector(\".projects-content\");\n\nconst todoForm = document.querySelector(\".todo-form\");\nconst todoResize = document.querySelector(\".new-todo\");\nconst todoSubmit = document.querySelector(\"#todo-submit\");\nconst todoTitle = document.querySelector('#todo-title');\nconst todoDate = document.querySelector('#todo-date');\nconst todoDesc = document.querySelector('#todo-desc');\n\nconst firstProj = (0,_items__WEBPACK_IMPORTED_MODULE_1__.projFactory)(\"a\", \"1\", \"qwertyuiop\");\nfirstProj.tasks.push((0,_items__WEBPACK_IMPORTED_MODULE_1__.taskFactory)(\"a\", \"1\", \"qwerty\", \"low\"));\nfirstProj.index = \"0\";\n\n_items__WEBPACK_IMPORTED_MODULE_1__.Library.projects.push(firstProj);\n_domUpdate__WEBPACK_IMPORTED_MODULE_2__.DOMUpdate.projRefresh();\n\n_domUpdate__WEBPACK_IMPORTED_MODULE_2__.Listeners.setListeners(projContent, _domUpdate__WEBPACK_IMPORTED_MODULE_2__.DOMUpdate.todoRefresh);\n\nprojSubmit.addEventListener(\"click\", (event) => {\n  event.preventDefault();\n\n  const title = projTitle.value;\n  const dueDate = projDate.value;\n  const desc = projDesc.value;\n\n  const newProj = (0,_items__WEBPACK_IMPORTED_MODULE_1__.projFactory)(title, dueDate, desc);\n\n  /* create key/value pair to indicate project's place in the project library.\n     Will be used when removing project from the DOM */\n  newProj.index = _items__WEBPACK_IMPORTED_MODULE_1__.Library.projects.length;\n\n  _items__WEBPACK_IMPORTED_MODULE_1__.Library.projects.push(newProj);\n  _domUpdate__WEBPACK_IMPORTED_MODULE_2__.DOMUpdate.projRefresh();\n  _domUpdate__WEBPACK_IMPORTED_MODULE_2__.Listeners.setListeners(projContent, _domUpdate__WEBPACK_IMPORTED_MODULE_2__.DOMUpdate.todoRefresh, _items__WEBPACK_IMPORTED_MODULE_1__.Library.proj);\n});\n\ntodoSubmit.addEventListener(\"click\", (event) => {\n    event.preventDefault();\n\n    const currentProj = _items__WEBPACK_IMPORTED_MODULE_1__.Library.projects[_items__WEBPACK_IMPORTED_MODULE_1__.Library.selected];\n\n    const title = todoTitle.value;\n    const dueDate = todoDate.value;\n    const desc = todoDesc.value;\n\n    const newTask = (0,_items__WEBPACK_IMPORTED_MODULE_1__.taskFactory)(title, dueDate, desc, \"low\");\n    currentProj.tasks.push(newTask);\n\n    _domUpdate__WEBPACK_IMPORTED_MODULE_2__.DOMUpdate.todoRefresh(currentProj);\n\n});\n\nprojResize.addEventListener(\"click\", () => {\n  const inputContainer = projResize.parentNode;\n\n  if (inputContainer.classList.contains(\"proj-big\")) {\n    inputContainer.classList.remove(\"proj-big\");\n    projResize.textContent = \"+\";\n    _domUpdate__WEBPACK_IMPORTED_MODULE_2__.DOMUpdate.toggleForm(projForm);\n  } else {\n    projResize.textContent = \"-\";\n    inputContainer.classList.add(\"proj-big\");\n    setTimeout(() => _domUpdate__WEBPACK_IMPORTED_MODULE_2__.DOMUpdate.toggleForm(projForm), 425);\n  }\n});\n\ntodoResize.addEventListener(\"click\", () => {\n  const inputContainer = todoResize.parentNode;\n\n  if (inputContainer.classList.contains(\"todo-big\")) {\n    inputContainer.classList.remove(\"todo-big\");\n    todoResize.textContent = \"+\";\n    _domUpdate__WEBPACK_IMPORTED_MODULE_2__.DOMUpdate.toggleForm(todoForm);\n  } else {\n    inputContainer.classList.add(\"todo-big\");\n    todoResize.textContent = \"-\";\n    setTimeout(() => _domUpdate__WEBPACK_IMPORTED_MODULE_2__.DOMUpdate.toggleForm(todoForm), 425);\n  }\n});\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/items.js":
/*!**********************!*\
  !*** ./src/items.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Library\": () => (/* binding */ Library),\n/* harmony export */   \"projFactory\": () => (/* binding */ projFactory),\n/* harmony export */   \"taskFactory\": () => (/* binding */ taskFactory)\n/* harmony export */ });\nconst Library = (function Library() {\n  const selected = 0;\n\n  const projects = [];\n\n  return { projects, selected };\n})();\n\nconst taskFactory = function taskFactory(title, dueDate, desc, prio) {\n  const editTask = function editTask(part, input) {\n    this.part = input;\n  };\n\n  return { title, desc, dueDate, prio, editTask };\n};\n\nconst projFactory = function projFactory(title, dueDate, desc) {\n  const tasks = [];\n\n  const newTask = function newTask(task) {\n    tasks.push(task);\n  };\n\n  return { title, dueDate, desc, tasks, newTask };\n};\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/items.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;