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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Roboto/Roboto-Black.ttf */ \"./src/fonts/Roboto/Roboto-Black.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Roboto/Roboto-Regular.ttf */ \"./src/fonts/Roboto/Roboto-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Roboto/Roboto-Light.ttf */ \"./src/fonts/Roboto/Roboto-Light.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Roboto/Roboto-LightItalic.ttf */ \"./src/fonts/Roboto/Roboto-LightItalic.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n@font-face {\\n  font-family: \\\"Roboto\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  font-weight: 600;\\n  font-style: bold;\\n}\\n\\n@font-face {\\n  font-family: \\\"Roboto\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  font-weight: 400;\\n  font-style: normal;\\n}\\n\\n@font-face {\\n  font-family: \\\"Roboto\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n  font-weight: 200;\\n}\\n\\n@font-face {\\n  font-family: \\\"Roboto\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n  font-style: italic;\\n  font-weight: 200;\\n}\\n\\nbody {\\n  font-family: \\\"Roboto\\\";\\n  font-weight: 400;\\n}\\n\\n.wrapper {\\n  display: grid;\\n  grid-template:\\n    \\\". head head\\\" 1fr\\n    \\\"project todo todo\\\" 7fr\\n    \\\"project todo todo\\\" 7fr / 2fr 4fr 5fr;\\n  width: 100%;\\n  height: 100vh;\\n  background-color: #f4f4f5;\\n}\\n\\nheader {\\n  grid-area: head;\\n  padding: 10px;\\n  margin: 5px;\\n}\\n\\n.header-content {\\n  height: 50px;\\n  border-radius: 5px;\\n  padding: 5px;\\n}\\n\\n.header-title {\\n  color: #0f172a;\\n  font-size: 30px;\\n}\\n\\n.header-desc {\\n  font-size: 14px;\\n  font-weight: 200;\\n  color: grey;\\n}\\n\\n.control {\\n  height: 80%;\\n  width: 10%;\\n  cursor: pointer;\\n  margin: 5px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.projects {\\n  grid-area: project;\\n  padding: 10px;\\n  display: flex;\\n  flex-direction: column;\\n  margin: 10px;\\n}\\n\\n.section-label {\\n  align-self: flex-start;\\n  color: #0f172a;\\n  font-size: 24px;\\n  margin: 10px 10px 25px 10px;\\n}\\n\\n.controls {\\n  width: 50px;\\n  height: 50px;\\n  background-color: #fafafa;\\n  border-radius: 30px;\\n  margin-bottom: 10px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  transition: height 0.5s, width 0.5s;\\n  flex: none;\\n  box-shadow: 2px 3px 5px #676767;\\n}\\n\\n.form-title {\\n  font-size: 20px;\\n  color: #0f172a;\\n}\\n\\n.control-content {\\n  height: 30px;\\n  width: 30px;\\n}\\n\\n.proj-big {\\n  height: 185px;\\n  width: 100%;\\n  transition: height 0.5s, width 0.5s;\\n  justify-content: flex-start;\\n  align-items: center;\\n}\\n\\n.proj-form {\\n  display: none;\\n}\\n\\n.todo-form {\\n  display: none;\\n}\\n\\n.input-wrap {\\n  display: flex;\\n  flex-direction: column;\\n  margin: 2px;\\n  color: #0f172a;\\n  font-size: 14px;\\n}\\n\\n.todo-big {\\n  height: 250px;\\n  width: 250px;\\n  justify-content: flex-start;\\n  transition: height 0.5s, width 0.5s;\\n}\\n\\n.projects-content {\\n  height: min-content;\\n  width: 100%;\\n  padding: 10px;\\n  box-sizing: border-box;\\n  overflow: auto;\\n}\\n\\n.proj {\\n  display: flex;\\n  flex-direction: column;\\n  width: 100%;\\n  height: auto;\\n  border-radius: 5px;\\n  box-sizing: border-box;\\n  padding: 3px;\\n  margin: 0 0 3px 0;\\n  position: relative;\\n  font-size: 20px;\\n  cursor: pointer;\\n  border: 1px solid rgb(0, 0, 0, 0);\\n}\\n\\n.proj:hover {\\n  border: 1px solid lightgrey;\\n}\\n\\n.todos {\\n  grid-area: todo;\\n  padding: 10px;\\n  display: flex;\\n  flex-direction: column;\\n  background-color: #fafafa;\\n  border-radius: 10px;\\n  margin: 10px;\\n  box-shadow: 2px 2px 5px grey;\\n}\\n\\n.empty-notice {\\n  font-style: italic;\\n  font-weight: 200;\\n  align-self: center;\\n  color: #4a4a4a;\\n}\\n\\n.todo-header {\\n  background-color: #fafafa;\\n  display: flex;\\n  justify-content: space-evenly;\\n  margin: 5px 15px;\\n  padding-bottom: 5px;\\n  border-bottom: 1px solid rgb(203, 203, 203);\\n}\\n\\n.todo-view {\\n  align-self: flex-start;\\n}\\n\\n.todos-content {\\n  box-sizing: border-box;\\n  background-color: #fafafa;\\n  display: flex;\\n  flex-direction: column;\\n  height: 100%;\\n  width: 100%;\\n  border-radius: 10px;\\n  padding: 10px;\\n  overflow: scroll;\\n}\\n\\n.task:nth-child(even) {\\n  background-color: #e4e4e7;\\n}\\n\\n.task-overview {\\n  display: flex;\\n  justify-content: space-evenly;\\n  position: relative;\\n}\\n\\n.text-wrap {\\n  text-align: center;\\n  flex: 1;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  box-sizing: border-box;\\n}\\n\\n.task {\\n  position: relative;\\n  display: flex;\\n  flex-direction: column;\\n  border-radius: 5px;\\n  box-sizing: border-box;\\n  border: 1px solid rgb(0, 0, 0, 0);\\n}\\n\\n.task:hover {\\n  border: 1px solid lightgrey;\\n}\\n\\n.proj-delete {\\n  position: absolute;\\n  bottom: 2px;\\n  right: 2px;\\n  display: none;\\n  height: 20px;\\n  width: 20px;\\n}\\n\\n.proj:hover .proj-delete {\\n  display: block;\\n}\\n\\n.proj-title {\\n  font-size: 18px;\\n  font-weight: 200;\\n}\\n\\n.task-delete {\\n  position: absolute;\\n  display: none;\\n  right: 2px;\\n  height: 15px;\\n  width: 15px;\\n  top: 50%;\\n  transform: translateY(-50%);\\n}\\n\\n.task:hover .task-delete {\\n  display: block;\\n  cursor: pointer;\\n}\\n\\n.arrow {\\n  transform: rotate(90deg);\\n  transition: transform, 0.2s;\\n  cursor: pointer;\\n}\\n\\n.arrow-clicked {\\n  transform: rotate(180deg);\\n  transition: transform, 0.2s;\\n}\\n\\n.desc-container {\\n  height: 0px;\\n  margin-left: 5px;\\n  display: none;\\n  color: grey;\\n}\\n\\n.desc-container-clicked {\\n  height: auto;\\n  width: 50%;\\n  display: block;\\n  transition: height, 0.5s;\\n}\\n\\n.error-text {\\n  color: red;\\n  font-size: 12px;\\n}\\n\\nbutton {\\n  background: white;\\n  border-radius: 5px;\\n  border: 1px solid black;\\n  padding: 4px;\\n  cursor: pointer;\\n  box-shadow: 1px 1px grey;\\n}\\n\\ntextarea {\\n  border: 1px solid black;\\n  border-radius: 5px;\\n}\\n\\ninput {\\n  border: 1px solid black;\\n  border-radius: 5px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DOMUpdate\": () => (/* binding */ DOMUpdate),\n/* harmony export */   \"Listeners\": () => (/* binding */ Listeners)\n/* harmony export */ });\n/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items */ \"./src/items.js\");\n/* harmony import */ var _imgs_delete_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/delete.png */ \"./src/imgs/delete.png\");\n/* harmony import */ var _imgs_menu_up_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/menu-up.png */ \"./src/imgs/menu-up.png\");\n/* eslint-disable no-underscore-dangle */\n/* eslint-disable no-param-reassign */\n\n\n\n\nconst projects = document.querySelector(\".projects-content\");\nconst todos = document.querySelector(\".todos-content\");\nconst header = document.querySelector(\".header-content\");\n\nconst Listeners = (function Listeners() {\n  // sets event listeners for each child node of a parent\n  const setListeners = function setListeners(parent, func) {\n    const children = Array.from(parent.childNodes);\n\n    children.forEach((node) => {\n      const index = node.getAttribute(\"data-index\");\n\n      node.addEventListener(\"click\", () => {\n        func.call(this, _items__WEBPACK_IMPORTED_MODULE_0__.Library.projects[index]);\n        _items__WEBPACK_IMPORTED_MODULE_0__.Library.selected = index;\n      });\n    });\n  };\n\n  return { setListeners };\n})();\n\nconst DOMUpdate = (function DOMUpdate() {\n  const toggleForm = function toggleForm(form) {\n    if (form.style.display === \"block\") {\n      form.style.display = \"none\";\n    } else {\n      form.style.display = \"block\";\n    }\n  };\n\n  const _headerRefresh = function headerRefresh(proj) {\n    header.textContent = \"\";\n\n    const headTitle = document.createElement(\"p\");\n    headTitle.classList.add(\"header-title\");\n    headTitle.textContent = proj.title;\n\n    header.append(headTitle);\n\n    const headDesc = document.createElement(\"p\");\n    headDesc.classList.add(\"header-desc\");\n    headDesc.textContent = proj.desc;\n\n    header.append(headDesc);\n  };\n\n  const todoRefresh = function todoRefresh(proj) {\n    _headerRefresh(proj);\n    todos.textContent = \"\";\n\n    proj.tasks.forEach((task) => {\n      const taskContainer = document.createElement(\"div\");\n      taskContainer.classList.add(\"task\");\n\n      // data task corresponds to the the task's index in the project's list of tasks\n      taskContainer.setAttribute(\"data-task\", task.index);\n\n      const titleWrap = document.createElement(\"div\");\n      const dateWrap = document.createElement(\"div\");\n      const arrowWrap = document.createElement(\"div\");\n      arrowWrap.classList.add(\"text-wrap\");\n      dateWrap.classList.add(\"text-wrap\");\n      titleWrap.classList.add(\"text-wrap\");\n\n      const taskOverview = document.createElement(\"div\");\n      taskOverview.classList.add(\"task-overview\");\n\n      const dropArrow = document.createElement(\"img\");\n      dropArrow.classList.add(\"arrow\");\n      dropArrow.setAttribute(\"src\", _imgs_menu_up_png__WEBPACK_IMPORTED_MODULE_2__);\n\n      const taskTitle = document.createElement(\"p\");\n      taskTitle.classList.add(\"task-title\");\n      taskTitle.textContent = task.title;\n\n      const descContainer = document.createElement(\"div\");\n      descContainer.classList.add(\"desc-container\");\n\n      const taskDesc = document.createElement(\"p\");\n      taskDesc.classList.add(\"task-desc\");\n      taskDesc.textContent = task.desc;\n      descContainer.appendChild(taskDesc);\n\n      const taskDate = document.createElement(\"p\");\n      taskDate.classList.add(\"task-date\");\n      const dateDay = task.dueDate.getDate();\n      const dateMonth = task.dueDate.getMonth();\n      const dateYear = task.dueDate.getFullYear();\n\n      taskDate.textContent = `${dateMonth + 1} / ${dateDay + 1} / ${dateYear}`;\n\n      const del = document.createElement(\"img\");\n      del.classList.add(\"task-delete\");\n      del.setAttribute(\"src\", _imgs_delete_png__WEBPACK_IMPORTED_MODULE_1__);\n\n      del.addEventListener(\"click\", (e) => {\n        e.stopPropagation();\n        proj.taskDelete(task.index);\n\n        proj.tasks.forEach((todo) => {\n          todo.index = proj.tasks.indexOf(todo);\n        });\n\n        todoRefresh(proj);\n      });\n\n      dropArrow.addEventListener(\"click\", () => {\n        if (dropArrow.classList.contains(\"arrow-clicked\")) {\n          dropArrow.classList.remove(\"arrow-clicked\");\n          descContainer.classList.remove(\"desc-container-clicked\");\n        } else {\n          dropArrow.classList.add(\"arrow-clicked\");\n          descContainer.classList.add(\"desc-container-clicked\");\n        }\n      });\n\n      todos.appendChild(taskContainer);\n      taskContainer.appendChild(taskOverview);\n      taskContainer.appendChild(descContainer);\n      taskOverview.appendChild(arrowWrap);\n      arrowWrap.appendChild(dropArrow);\n      taskOverview.appendChild(titleWrap);\n      titleWrap.appendChild(taskTitle);\n      taskOverview.appendChild(dateWrap);\n      dateWrap.appendChild(taskDate);\n      taskContainer.appendChild(del);\n    });\n  };\n\n  const projRefresh = function projRefresh() {\n    projects.textContent = \"\";\n\n    _items__WEBPACK_IMPORTED_MODULE_0__.Library.projects.forEach((project) => {\n      const proj = document.createElement(\"div\");\n      proj.classList.add(\"proj\");\n      // the data-index attribute corresponds to the project's index in the library\n      proj.setAttribute(\"data-index\", project.index);\n\n      const projTitle = document.createElement(\"p\");\n      projTitle.classList.add(\"proj-title\");\n      projTitle.textContent = project.title;\n\n      const del = document.createElement(\"img\");\n      del.classList.add(\"proj-delete\");\n      del.setAttribute(\"src\", _imgs_delete_png__WEBPACK_IMPORTED_MODULE_1__);\n\n      del.addEventListener(\"click\", (e) => {\n        e.stopPropagation();\n        _items__WEBPACK_IMPORTED_MODULE_0__.Library.projDelete(project.index);\n\n        // reset indices in project library\n        _items__WEBPACK_IMPORTED_MODULE_0__.Library.projects.forEach((elem) => {\n          elem.index = _items__WEBPACK_IMPORTED_MODULE_0__.Library.projects.indexOf(elem);\n        });\n\n        projRefresh();\n      });\n\n      projects.appendChild(proj);\n      proj.appendChild(projTitle);\n      proj.appendChild(del);\n    });\n\n    Listeners.setListeners(projects, todoRefresh);\n  };\n\n  return { projRefresh, toggleForm, todoRefresh };\n})();\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/domUpdate.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _imgs_plus_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/plus.png */ \"./src/imgs/plus.png\");\n/* harmony import */ var _imgs_minus_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/minus.png */ \"./src/imgs/minus.png\");\n/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./items */ \"./src/items.js\");\n/* harmony import */ var _domUpdate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domUpdate */ \"./src/domUpdate.js\");\n// eslint-disable-next-line no-unused-vars\n\n\n\n\n\n\nconst projForm = document.querySelector(\".proj-form\");\nconst projResize = document.querySelector(\".new-proj\");\nconst projSubmit = document.querySelector(\"#proj-submit\");\nconst projTitle = document.querySelector(\"#proj-title\");\nconst projDesc = document.querySelector(\"#proj-desc\");\nconst projAdd = document.querySelector(\"#proj-add\");\n\nconst todoForm = document.querySelector(\".todo-form\");\nconst todoResize = document.querySelector(\".new-todo\");\nconst todoSubmit = document.querySelector(\"#todo-submit\");\nconst todoTitle = document.querySelector(\"#todo-title\");\nconst todoDate = document.querySelector(\"#todo-date\");\nconst todoDesc = document.querySelector(\"#todo-desc\");\nconst todoAdd = document.querySelector(\"#todo-add\");\nconst todosContent = document.querySelector(\".todos-content\");\n\nconst errorText = document.createElement(\"p\");\nerrorText.id = \"proj-error\";\nerrorText.classList.add(\"error-text\");\nerrorText.textContent = \"\";\nprojForm.appendChild(errorText);\n\nconst todoError = document.createElement(\"p\");\ntodoError.id = \"todo-error\";\ntodoError.classList.add(\"error-text\");\ntodoError.textContent = \"\";\ntodoForm.appendChild(todoError);\n\nwindow.addEventListener(\"load\", () => {\n  if (localStorage.length) {\n    const localKeys = Object.keys(localStorage);\n\n    localKeys.forEach((key) => {\n      const projInfo = JSON.parse(localStorage[key]);\n      const proj = (0,_items__WEBPACK_IMPORTED_MODULE_3__.projFactory)(projInfo.title, projInfo.desc);\n      proj.index = _items__WEBPACK_IMPORTED_MODULE_3__.Library.projects.length;\n      _items__WEBPACK_IMPORTED_MODULE_3__.Library.projects.push(proj);\n\n      const taskKeys = Object.keys(projInfo.tasks);\n      taskKeys.forEach((taskKey) => {\n        const taskInfo = JSON.parse(projInfo.tasks[taskKey]);\n        taskInfo.dueDate = new Date(Date.parse(taskInfo.dueDate));\n        const task = (0,_items__WEBPACK_IMPORTED_MODULE_3__.taskFactory)(\n          taskInfo.title,\n          taskInfo.dueDate,\n          taskInfo.desc,\n          \"low\"\n        );\n        task.index = proj.tasks.length;\n        proj.tasks.push(task);\n      });\n    });\n\n    _domUpdate__WEBPACK_IMPORTED_MODULE_4__.DOMUpdate.projRefresh();\n  }\n\n  if (_items__WEBPACK_IMPORTED_MODULE_3__.Library.projects[0]) {\n    _domUpdate__WEBPACK_IMPORTED_MODULE_4__.DOMUpdate.todoRefresh(_items__WEBPACK_IMPORTED_MODULE_3__.Library.projects[0]);\n  } else {\n    const emptyNotice = document.createElement(\"p\");\n    emptyNotice.classList.add(\"empty-notice\");\n    emptyNotice.textContent = \"Please select a project\";\n    todosContent.appendChild(emptyNotice);\n  }\n});\n\nprojSubmit.addEventListener(\"click\", (event) => {\n  event.preventDefault();\n\n  const title = projTitle.value;\n  const desc = projDesc.value;\n\n  let duplicate = false;\n  let blank = false;\n\n  if (!title) {\n    blank = true;\n  }\n\n  _items__WEBPACK_IMPORTED_MODULE_3__.Library.projects.forEach((project) => {\n    if (project.title === title) {\n      duplicate = true;\n    }\n  });\n\n  if (!(duplicate || blank)) {\n    const newProj = (0,_items__WEBPACK_IMPORTED_MODULE_3__.projFactory)(title, desc);\n\n    /* create key/value pair to indicate project's place in the project library.\n      Will be used when removing project from the DOM */\n    newProj.index = _items__WEBPACK_IMPORTED_MODULE_3__.Library.projects.length;\n\n    const infoObj = { title, desc, tasks: {} };\n    localStorage[newProj.title] = JSON.stringify(infoObj);\n\n    _items__WEBPACK_IMPORTED_MODULE_3__.Library.projects.push(newProj);\n    _domUpdate__WEBPACK_IMPORTED_MODULE_4__.DOMUpdate.projRefresh();\n    projTitle.value = \"\";\n    projDesc.value = \"\";\n\n    errorText.textContent = \"\";\n  } else if (duplicate) {\n    errorText.textContent = \"A project with that name already exists.\";\n  } else if (blank) {\n    errorText.textContent = \"Project name must not be blank.\";\n  }\n});\n\ntodoSubmit.addEventListener(\"click\", (event) => {\n  event.preventDefault();\n  try{\n    const currentProj = _items__WEBPACK_IMPORTED_MODULE_3__.Library.projects[_items__WEBPACK_IMPORTED_MODULE_3__.Library.selected];\n\n    const title = todoTitle.value;\n    const dueDate = new Date(todoDate.value);\n    const desc = todoDesc.value;\n  \n    let duplicate = false;\n    currentProj.tasks.forEach((task) => {\n      if (title === task.title) {\n        duplicate = true;\n      }\n    });\n  \n    if (!title) {\n      todoError.textContent = \"Title must not be blank.\";\n    } else if (\n      !(dueDate.getDate() || dueDate.getFullYear() || dueDate.getMonth())\n    ) {\n      todoError.textContent = \"Please enter a valid date.\";\n    } else if (duplicate) {\n      todoError.textContent = \"There is already a task with this title.\";\n    } else if (!currentProj) {\n      todoError.textContent = \"Please select a project.\";\n    } else {\n      const newTask = (0,_items__WEBPACK_IMPORTED_MODULE_3__.taskFactory)(title, dueDate, desc, \"low\");\n  \n      // index will be used when associating DOM elements with each task\n      newTask.index = currentProj.tasks.length;\n  \n      const infoObj = { title, dueDate, desc, index: newTask.index };\n      const proj = JSON.parse(localStorage[currentProj.title]);\n      proj.tasks[title] = JSON.stringify(infoObj);\n      localStorage[currentProj.title] = JSON.stringify(proj);\n  \n      currentProj.tasks.push(newTask);\n  \n      _domUpdate__WEBPACK_IMPORTED_MODULE_4__.DOMUpdate.todoRefresh(currentProj);\n  \n      todoTitle.value = \"\";\n      todoDate.value = \"\";\n      todoDesc.value = \"\";\n    }\n  }catch{\n    todoError.textContent = \"Please select a project before creating a task\";\n  }\n\n});\n\nprojResize.addEventListener(\"click\", () => {\n  const inputContainer = projResize.parentNode;\n\n  if (inputContainer.classList.contains(\"proj-big\")) {\n    inputContainer.classList.remove(\"proj-big\");\n    projAdd.setAttribute(\"src\", _imgs_plus_png__WEBPACK_IMPORTED_MODULE_1__);\n    _domUpdate__WEBPACK_IMPORTED_MODULE_4__.DOMUpdate.toggleForm(projForm);\n  } else {\n    projAdd.setAttribute(\"src\", _imgs_minus_png__WEBPACK_IMPORTED_MODULE_2__);\n    inputContainer.classList.add(\"proj-big\");\n    setTimeout(() => _domUpdate__WEBPACK_IMPORTED_MODULE_4__.DOMUpdate.toggleForm(projForm), 425);\n  }\n});\n\ntodoResize.addEventListener(\"click\", () => {\n  const inputContainer = todoResize.parentNode;\n\n  if (inputContainer.classList.contains(\"todo-big\")) {\n    inputContainer.classList.remove(\"todo-big\");\n    todoAdd.setAttribute(\"src\", _imgs_plus_png__WEBPACK_IMPORTED_MODULE_1__);\n    _domUpdate__WEBPACK_IMPORTED_MODULE_4__.DOMUpdate.toggleForm(todoForm);\n  } else {\n    inputContainer.classList.add(\"todo-big\");\n    todoAdd.setAttribute(\"src\", _imgs_minus_png__WEBPACK_IMPORTED_MODULE_2__);\n    setTimeout(() => _domUpdate__WEBPACK_IMPORTED_MODULE_4__.DOMUpdate.toggleForm(todoForm), 425);\n  }\n});\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/items.js":
/*!**********************!*\
  !*** ./src/items.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Library\": () => (/* binding */ Library),\n/* harmony export */   \"projFactory\": () => (/* binding */ projFactory),\n/* harmony export */   \"taskFactory\": () => (/* binding */ taskFactory)\n/* harmony export */ });\n/* eslint-disable no-param-reassign */\nconst Library = (function Library() {\n  const selected = 0;\n\n  const projects = [];\n\n  const projDelete = function projDelete(index) {\n    if (index < projects.length) {\n      window.localStorage.removeItem(projects[index].title);\n      projects.splice(index, 1);\n    }\n  };\n\n  return { projects, selected, projDelete };\n})();\n\nconst taskFactory = function taskFactory(title, dueDate, desc, prio) {\n  return { title, desc, dueDate, prio };\n};\n\nconst projFactory = function projFactory(title, desc) {\n  const tasks = [];\n\n  const newTask = function newTask(task) {\n    tasks.push(task);\n  };\n\n  const taskDelete = function taskDelete(index) {\n    const projParsed = JSON.parse(localStorage[title]);\n    delete projParsed.tasks[tasks[index].title];\n    localStorage[title] = JSON.stringify(projParsed);\n    tasks.splice(index, 1);\n  };\n\n  return { title, desc, tasks, newTask, taskDelete };\n};\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/items.js?");

/***/ }),

/***/ "./src/fonts/Roboto/Roboto-Black.ttf":
/*!*******************************************!*\
  !*** ./src/fonts/Roboto/Roboto-Black.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cf56c1b149d0a5e8d7c6.ttf\";\n\n//# sourceURL=webpack://todo-list/./src/fonts/Roboto/Roboto-Black.ttf?");

/***/ }),

/***/ "./src/fonts/Roboto/Roboto-Light.ttf":
/*!*******************************************!*\
  !*** ./src/fonts/Roboto/Roboto-Light.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"333da16a3f3cc391d087.ttf\";\n\n//# sourceURL=webpack://todo-list/./src/fonts/Roboto/Roboto-Light.ttf?");

/***/ }),

/***/ "./src/fonts/Roboto/Roboto-LightItalic.ttf":
/*!*************************************************!*\
  !*** ./src/fonts/Roboto/Roboto-LightItalic.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c590382422f2742d788b.ttf\";\n\n//# sourceURL=webpack://todo-list/./src/fonts/Roboto/Roboto-LightItalic.ttf?");

/***/ }),

/***/ "./src/fonts/Roboto/Roboto-Regular.ttf":
/*!*********************************************!*\
  !*** ./src/fonts/Roboto/Roboto-Regular.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fc2b5060f7accec5cf74.ttf\";\n\n//# sourceURL=webpack://todo-list/./src/fonts/Roboto/Roboto-Regular.ttf?");

/***/ }),

/***/ "./src/imgs/delete.png":
/*!*****************************!*\
  !*** ./src/imgs/delete.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"21a36c789bac79aa3690.png\";\n\n//# sourceURL=webpack://todo-list/./src/imgs/delete.png?");

/***/ }),

/***/ "./src/imgs/menu-up.png":
/*!******************************!*\
  !*** ./src/imgs/menu-up.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cbbbcc1be2782ff571f6.png\";\n\n//# sourceURL=webpack://todo-list/./src/imgs/menu-up.png?");

/***/ }),

/***/ "./src/imgs/minus.png":
/*!****************************!*\
  !*** ./src/imgs/minus.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c44865986a5e8501a519.png\";\n\n//# sourceURL=webpack://todo-list/./src/imgs/minus.png?");

/***/ }),

/***/ "./src/imgs/plus.png":
/*!***************************!*\
  !*** ./src/imgs/plus.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ed2cb6264f5c7a067d97.png\";\n\n//# sourceURL=webpack://todo-list/./src/imgs/plus.png?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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