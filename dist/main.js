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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* http://meyerweb.com/eric/tools/css/reset/ \\n   v2.0 | 20110126\\n   License: none (public domain)\\n*/\\n* {\\n  box-sizing: border-box;\\n}\\n\\nhtml,\\nbody,\\ndiv,\\nspan,\\napplet,\\nobject,\\niframe,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nblockquote,\\npre,\\na,\\nabbr,\\nacronym,\\naddress,\\nbig,\\ncite,\\ncode,\\ndel,\\ndfn,\\nem,\\nimg,\\nins,\\nkbd,\\nq,\\ns,\\nsamp,\\nsmall,\\nstrike,\\nstrong,\\nsub,\\nsup,\\ntt,\\nvar,\\nb,\\nu,\\ni,\\ncenter,\\ndl,\\ndt,\\ndd,\\nol,\\nul,\\nli,\\nfieldset,\\nform,\\nlabel,\\nlegend,\\ntable,\\ncaption,\\ntbody,\\ntfoot,\\nthead,\\ntr,\\nth,\\ntd,\\narticle,\\naside,\\ncanvas,\\ndetails,\\nembed,\\nfigure,\\nfigcaption,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\noutput,\\nruby,\\nsection,\\nsummary,\\ntime,\\nmark,\\naudio,\\nvideo {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n}\\n\\n/* HTML5 display-role reset for older browsers */\\narticle,\\naside,\\ndetails,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\nsection {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol,\\nul {\\n  list-style: none;\\n}\\n\\nblockquote,\\nq {\\n  quotes: none;\\n}\\n\\nblockquote:before,\\nblockquote:after,\\nq:before,\\nq:after {\\n  content: \\\"\\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\nbody {\\n  font-family: \\\"Montserrat\\\", sans-serif, arial, helvetica;\\n}\\n\\n.main-container {\\n  display: flex;\\n  width: 100%;\\n  flex-wrap: wrap;\\n}\\n\\n#header {\\n  height: 115px;\\n  width: 100%;\\n  background-color: #c1e1c1;\\n}\\n\\n#sidebar {\\n  display: flex;\\n  height: 100vh;\\n  width: 50%;\\n  background-color: rgb(240, 240, 240);\\n  flex-wrap: wrap;\\n  justify-content: center;\\n}\\n\\nbutton {\\n  cursor: pointer;\\n  font-family: inherit;\\n}\\n\\ntextarea {\\n  border: none;\\n  outline: none;\\n  resize: none;\\n}\\n\\ndiv > span > button {\\n  vertical-align: middle;\\n}\\n\\n#content {\\n  margin-left: 20px;\\n}\\n\\nh2 {\\n  font-size: 50px;\\n  margin: 20px 0px;\\n}\\n\\n.taskFilterBtns {\\n  height: 350px;\\n  width: 90%;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.sidebarBtn {\\n  height: 50px;\\n  background: #fff;\\n  margin: 2px;\\n  padding: 5px 15px;\\n  border-radius: 5px;\\n  border: none;\\n  text-align: left;\\n}\\n\\n.sidebarBtn:first-child {\\n  margin-top: 20px;\\n}\\n\\n.sidebarBtn:hover {\\n  background: rgb(220, 220, 220);\\n  transition: 0.3s;\\n}\\n\\n.sidebarBtn-active {\\n  background: rgb(220, 220, 220);\\n  color: #fff;\\n}\\n\\n.menuBtn {\\n  height: 75px;\\n  width: 75px;\\n  margin: 20px;\\n  border: none;\\n  background-color: transparent;\\n}\\n\\n.projectContainer {\\n  width: 200px;\\n}\\n\\n.icon {\\n  font-size: 20px;\\n}\\n\\n#addProjectBtn {\\n  border: none;\\n  background: transparent;\\n}\\n\\n#projectHeader {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.fa-square-plus {\\n  font-size: 20px;\\n}\\n\\n.addTask__btn {\\n  border: none;\\n  background-color: transparent;\\n}\\n\\n.btn-secondary {\\n  margin: 5px;\\n  padding: 5px 10px;\\n  border: none;\\n  border-radius: 5px;\\n}\\n\\n.addTask__inputs {\\n  display: flex;\\n  flex-wrap: wrap;\\n  align-items: flex-end;\\n  border: 1px solid rgb(150, 150, 150);\\n  border-radius: 10px;\\n  padding: 10px;\\n  margin: 10px 0;\\n}\\n\\n.addTask__btn-submit {\\n  background-color: #c1e1c1;\\n  margin-left: auto;\\n  margin: 5px 0;\\n}\\n\\n.addTask__btn-cancel {\\n  background-color: rgb(240, 240, 240);\\n  margin-left: auto;\\n}\\n\\n.addTask__title {\\n  flex-basis: 100%;\\n  font-family: inherit;\\n  margin: 5px;\\n}\\n\\n.addTask__desc {\\n  height: 50px;\\n  flex-basis: 100%;\\n  font-family: inherit;\\n  margin: 5px;\\n}\\n\\n.addTask__priority-btn {\\n  border: none;\\n}\\n\\n.addTask__priority-dropdown {\\n  position: relative;\\n  display: inline-block;\\n}\\n\\n.addTask__priority-list {\\n  display: none;\\n  position: absolute;\\n  z-index: 1;\\n}\\n\\n.addTask__priority-list a {\\n  text-decoration: none;\\n  display: block;\\n  margin: 5px;\\n  padding: 5px 10px;\\n  font-size: inherit;\\n}\\n\\n.addTask__priority-low {\\n  border-left: solid 2px rgb(0, 150, 255);\\n}\\n\\n.addTask__priority-med {\\n  border-left: solid 2px rgb(255, 191, 0);\\n}\\n\\n.addTask__priority-high {\\n  border-left: solid 2px rgb(210, 4, 45);\\n}\\n\\n.addTask__priority-dropdown:hover .addTask__priority-list {\\n  display: block;\\n}\\n\\n.addTask__priority-list a:hover {\\n  background-color: rgb(240, 240, 240);\\n}\\n\\n.hidden {\\n  display: none;\\n}\\n\\n@media only screen and (min-width: 600px) {\\n  .floating-div {\\n    position: fixed;\\n    bottom: 20px;\\n    right: 20px;\\n    transform: translateX(0px);\\n  }\\n  #sidebar {\\n    display: flex;\\n    height: 100vh;\\n    width: 20%;\\n    background-color: rgb(240, 240, 240);\\n    flex-wrap: wrap;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-to-do-list/./src/styles/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-to-do-list/./src/styles/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/handlers.js":
/*!*************************!*\
  !*** ./src/handlers.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"eventListeners\": () => (/* binding */ eventListeners)\n/* harmony export */ });\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ \"./src/render.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n\r\n\r\n\r\n\r\nconst eventListeners = function () {\r\n  const tasks = document.querySelector('#tasks');\r\n  const hamburgerMenu = document.querySelector('#hamburger-menu');\r\n  const addTask__btn_cancel = document.querySelector('.addTask__btn-cancel');\r\n  hamburgerMenu.addEventListener('click', _render_js__WEBPACK_IMPORTED_MODULE_0__.toggleSidebar);\r\n\r\n  // create add task button and add task inputs when clicked\r\n  document.addEventListener('click', function (e) {\r\n    const target = e.target.closest('.addTask__btn');\r\n    if (target) {\r\n      (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.addTaskBtn)();\r\n    }\r\n  });\r\n\r\n  // if add task cancel button is clicked on, hide add task inputs and show original add task button\r\n  document.addEventListener('click', function (e) {\r\n    const target = e.target.closest('.addTask__btn-cancel');\r\n    if (target) {\r\n      (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.showTaskBtn)();\r\n      (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.hideAddTaskInputs)();\r\n    }\r\n  });\r\n\r\n  return { tasks, hamburgerMenu };\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://odin-to-do-list/./src/handlers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers */ \"./src/handlers.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render.js */ \"./src/render.js\");\n\r\n\r\n\r\n\r\n// Rule of thumb: if you only ever need ONE of something (gameBoard, displayController), use a module.\r\n// If you need multiples of something (players!), create them with factories.\r\n\r\n// Task: factories or classes\r\n\r\n// Project List: Module\r\n\r\n// handlers.js\r\n(0,_handlers__WEBPACK_IMPORTED_MODULE_1__.eventListeners)();\r\n\r\n// render.js\r\n\r\n// index.js: bring it all together\r\n\r\n(0,_render_js__WEBPACK_IMPORTED_MODULE_2__.clearContent)();\r\nall();\r\n\r\ndocument.addEventListener('click', (e) => {\r\n  const target = e.target.innerText;\r\n\r\n  if (target == 'All') all();\r\n  if (target == 'Today') today();\r\n  if (target == 'Upcoming') upcoming();\r\n  if (target == 'Complete') complete();\r\n});\r\n\r\nfunction all() {\r\n  (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.setTitle)();\r\n  (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.addTaskBtn)();\r\n  // loadAll();\r\n}\r\n\r\nfunction today() {\r\n  (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.setTitle)();\r\n  (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.addTaskBtn)();\r\n  // loadToday();\r\n}\r\n\r\nfunction upcoming() {\r\n  (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.setTitle)();\r\n  (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.addTaskBtn)();\r\n  // loadUpcoming()\r\n}\r\n\r\nfunction complete() {\r\n  (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.setTitle)();\r\n  (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.addTaskBtn)();\r\n  // loadComplete();\r\n}\r\n\n\n//# sourceURL=webpack://odin-to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\r\n\r\nclass Project {\r\n  constructor(name, tasks) {\r\n    this.name = name;\r\n    this.tasks = [];\r\n  }\r\n\r\n  assignTasks() {\r\n    console.log(this.name);\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://odin-to-do-list/./src/project.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTaskBtn\": () => (/* binding */ addTaskBtn),\n/* harmony export */   \"clearContent\": () => (/* binding */ clearContent),\n/* harmony export */   \"hideAddTaskInputs\": () => (/* binding */ hideAddTaskInputs),\n/* harmony export */   \"setTitle\": () => (/* binding */ setTitle),\n/* harmony export */   \"showTaskBtn\": () => (/* binding */ showTaskBtn),\n/* harmony export */   \"switchSidebar\": () => (/* binding */ switchSidebar),\n/* harmony export */   \"toggleSidebar\": () => (/* binding */ toggleSidebar)\n/* harmony export */ });\n/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers */ \"./src/handlers.js\");\n\r\n\r\n\r\nconst toggleSidebar = function () {\r\n  const sidebar = document.querySelector('#sidebar');\r\n  sidebar.classList.toggle('hidden');\r\n};\r\n\r\n// TODO\r\nconst switchSidebar = function () {\r\n  const windowSize700 = window.matchMedia('(min-width: 600px)');\r\n  if (windowSize700) {\r\n    sidebar.classList.remove('hidden');\r\n  } else if (!windowSize700) {\r\n    sidebar.classList.add('hidden');\r\n  }\r\n};\r\n// end TODO\r\n\r\nconst clearContent = function () {\r\n  const content = document.querySelector('#content');\r\n  content.textContent = '';\r\n};\r\n\r\nconst setTitle = function () {\r\n  const sidebarBtns = document.querySelectorAll('.sidebarBtn');\r\n  const content = document.querySelector('#content');\r\n\r\n  sidebarBtns.forEach((sidebarBtn) => {\r\n    sidebarBtn.addEventListener('click', function () {\r\n      clearContent();\r\n      let title = document.createElement('h2');\r\n      title.textContent = sidebarBtn.textContent;\r\n      content.appendChild(title);\r\n    });\r\n  });\r\n};\r\n\r\nconst addTaskBtn = function () {\r\n  const content = document.querySelector('#content');\r\n  if (content.querySelector('.addTask')) {\r\n    return;\r\n  }\r\n\r\n  // create addTask div that has child nodes of the add task button and a child that includes all inputs.\r\n  const addTask = document.createElement('span');\r\n  addTask.classList.add('addTask');\r\n\r\n  const addTask__btn = document.createElement('button');\r\n  addTask.appendChild(addTask__btn);\r\n\r\n  addTask__btn.innerHTML = '<i class=\"fa-thin fa-plus icon\"></i><span> Add task</span>';\r\n  addTask__btn.classList.add('addTask__btn');\r\n\r\n  content.appendChild(addTask);\r\n\r\n  const addTask__inputs = document.createElement('div');\r\n  addTask__inputs.classList.add('addTask__inputs');\r\n  addTask__inputs.classList.add('hidden');\r\n\r\n  document.addEventListener('click', function (e) {\r\n    const target = e.target.closest('.addTask__btn');\r\n    if (target) {\r\n      console.log('target: add task button');\r\n      addTask__inputs.classList.remove('hidden');\r\n      addTask__btn.classList.add('hidden');\r\n    }\r\n  });\r\n\r\n  //TODO: break up add task button and task inputs into two functions?\r\n  const addTask__title = document.createElement('textarea');\r\n  addTask__inputs.appendChild(addTask__title);\r\n  addTask__title.classList.add('addTask__title');\r\n  addTask__title.classList.add('font-main');\r\n  addTask__title.setAttribute('placeholder', 'Task Name');\r\n\r\n  const addTask__desc = document.createElement('textarea');\r\n  addTask__inputs.appendChild(addTask__desc);\r\n  addTask__desc.classList.add('addTask__desc');\r\n  addTask__desc.classList.add('font-main');\r\n  addTask__desc.setAttribute('placeholder', 'Description');\r\n\r\n  const addTask__priority_dropdown = document.createElement('div');\r\n  addTask__priority_dropdown.classList.add('addTask__priority-dropdown');\r\n\r\n  const addTask__priority_btn = document.createElement('button');\r\n  addTask__priority_btn.classList.add('addTask__priority-btn');\r\n  addTask__priority_btn.classList.add('btn-secondary');\r\n  addTask__priority_btn.textContent = 'priority';\r\n  addTask__priority_dropdown.appendChild(addTask__priority_btn);\r\n\r\n  const addTask__priority_list = document.createElement('div');\r\n  addTask__priority_list.classList.add('addTask__priority-list');\r\n\r\n  const addTask__priority_low = document.createElement('a');\r\n  addTask__priority_low.classList.add('addTask__priority-low');\r\n  addTask__priority_low.textContent = 'low';\r\n  addTask__priority_low.setAttribute('href', '#');\r\n\r\n  const addTask__priority_med = document.createElement('a');\r\n  addTask__priority_med.classList.add('addTask__priority-med');\r\n  addTask__priority_med.textContent = 'med';\r\n  addTask__priority_med.setAttribute('href', '#');\r\n\r\n  const addTask__priority_high = document.createElement('a');\r\n  addTask__priority_high.classList.add('addTask__priority-high');\r\n  addTask__priority_high.textContent = 'high';\r\n  addTask__priority_high.setAttribute('href', '#');\r\n\r\n  addTask__priority_list.appendChild(addTask__priority_low);\r\n  addTask__priority_list.appendChild(addTask__priority_med);\r\n  addTask__priority_list.appendChild(addTask__priority_high);\r\n\r\n  addTask__priority_dropdown.appendChild(addTask__priority_list);\r\n\r\n  addTask__inputs.appendChild(addTask__priority_dropdown);\r\n\r\n  addTask.appendChild(addTask__inputs);\r\n\r\n  const addTask__dueDate = document.createElement('input');\r\n\r\n  const addTask__btn_cancel = document.createElement('button');\r\n  addTask__btn_cancel.classList.add('addTask__btn-cancel');\r\n  addTask__btn_cancel.classList.add('btn-secondary');\r\n  addTask__btn_cancel.textContent = 'Cancel';\r\n  addTask__inputs.appendChild(addTask__btn_cancel);\r\n\r\n  const addTask__btn_submit = document.createElement('button');\r\n  addTask__btn_submit.classList.add('addTask__btn-submit');\r\n  addTask__btn_submit.classList.add('btn-secondary');\r\n  addTask__btn_submit.textContent = 'Add Task';\r\n  addTask__inputs.appendChild(addTask__btn_submit);\r\n\r\n  content.appendChild(addTask);\r\n};\r\n\r\nconst showTaskBtn = function () {\r\n  const addTask__btn = document.querySelector('.addTask__btn');\r\n  console.log(addTask__btn);\r\n  addTask__btn.classList.remove('hidden');\r\n};\r\n\r\nconst hideAddTaskInputs = function () {\r\n  const addTask__inputs = document.querySelector('.addTask__inputs');\r\n  addTask__inputs.classList.add('hidden');\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://odin-to-do-list/./src/render.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers */ \"./src/handlers.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ \"./src/render.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\r\n\r\n\r\n\r\nclass Task {\r\n  constructor(title, description, dueDate, priority, project) {\r\n    this.title = title;\r\n    this.description = description;\r\n    this.dueDate = dueDate;\r\n    this.priority = priority;\r\n  }\r\n\r\n  // save project and todos to localStorage everytime a project is created.\r\n  // function that looks for data in localStorage when app is first loaded.\r\n\r\n  static addTask() {\r\n    const task = document.querySelector('#taskTitle');\r\n    const taskTitle = task.value;\r\n\r\n    console.log(taskTitle);\r\n  }\r\n\r\n  editTask() {}\r\n\r\n  get allTasks() {\r\n    return this.tasks;\r\n  }\r\n\r\n  setPriority() {}\r\n\r\n  removeTask() {}\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://odin-to-do-list/./src/task.js?");

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