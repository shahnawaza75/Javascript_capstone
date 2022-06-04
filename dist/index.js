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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;1,200&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box;\\n  scroll-behavior: smooth;\\n  font-family: \\\"Poppins\\\", sans-serif;\\n}\\n\\n.d-flex {\\n  display: flex;\\n  background-color: rgb(49, 62, 72);\\n}\\n\\n.flex-d-c {\\n  flex-direction: column;\\n}\\n\\n.center {\\n  justify-content: center;\\n}\\n\\n.s-between {\\n  justify-content: space-between;\\n}\\n\\n.s-around {\\n  justify-content: space-around;\\n}\\n\\nheader {\\n  margin-top: 10px;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\na {\\n  text-decoration: none;\\n  margin-right: 5%;\\n  color: white;\\n}\\n\\na:hover {\\n  text-decoration: underline;\\n}\\n\\n.logo {\\n  margin-right: 5%;\\n  width: 50px;\\n  height: 50px;\\n  background: url(https://toppng.com/uploads/preview/the-sims-logo-11530958268z7srqqiuxf.png);\\n  background-repeat: no-repeat;\\n  background-size: contain;\\n  border-radius: 50%;\\n  cursor: pointer;\\n}\\n\\n.allShows {\\n  gap: 30px;\\n  flex-wrap: wrap;\\n  width: 98%;\\n  margin: 8% auto;\\n}\\n\\n.show {\\n  flex-flow: column;\\n  justify-content: space-between;\\n  width: 232px;\\n  height: 370px;\\n  border-radius: 5px;\\n  background-color: white;\\n  padding: 10px;\\n  box-shadow: 5px 10px 18px #fff;\\n}\\n\\n#show-img {\\n  height: 275px;\\n  width: 210px;\\n}\\n\\n#like-show {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  gap: 30px;\\n}\\n\\n#show-title {\\n  margin: 0;\\n  font-size: 19px;\\n}\\n\\n.like {\\n  gap: 20px;\\n}\\n\\n.fa-heart {\\n  color: rgb(151, 78, 78);\\n  font-size: 18px;\\n}\\n\\n#likes {\\n  align-self: end;\\n  margin: 0;\\n  font-size: 20px;\\n}\\n\\n#comment-btn {\\n  align-self: end;\\n  justify-self: end;\\n}\\n\\nfooter {\\n  color: white;\\n  left: 0;\\n  bottom: 0;\\n  width: 100%;\\n  height: 30px;\\n  border-radius: 5px;\\n  background-color: rgb(49, 62, 72);\\n  text-align: center;\\n  padding-top: -4px;\\n}\\n\\n.modal {\\n  display: block;\\n  position: fixed;\\n  height: 100%;\\n  width: 100%;\\n  top: 0;\\n  left: 0;\\n  margin: 0 auto;\\n  background-color: rgba(0, 0, 0, 0.8);\\n  z-index: 10;\\n  overflow: auto;\\n}\\n\\n.modal-content {\\n  width: 80%;\\n  height: auto;\\n  margin: 5% auto;\\n  background-color: #fff;\\n  box-shadow: 0 10px 10px 0 rgba(4, 18, 43, 0.427);\\n  border-radius: 10px;\\n  padding: 2%;\\n}\\n\\n.jc-flex-end {\\n  justify-content: flex-end;\\n}\\n\\n.fa-window-close {\\n  font-size: 2em;\\n  padding: 20px;\\n  color: rgb(146, 150, 146);\\n}\\n\\n.fa-window-close:hover {\\n  color: rgb(17, 20, 117);\\n}\\n\\n.popup-img {\\n  width: 25%;\\n  margin: 0 auto;\\n  box-shadow: 0 5px 5px 0 rgba(32, 124, 189, 0.8);\\n}\\n\\n#comment-form {\\n  width: 50%;\\n  margin: 10px auto;\\n  background-color: rgb(43, 110, 226);\\n  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.8);\\n}\\n\\n#showDesc {\\n  width: 80%;\\n  margin: 0 auto;\\n  line-height: 32px;\\n  font-weight: bold;\\n}\\n\\nli {\\n  text-decoration: none;\\n  list-style: none;\\n}\\n\\n.form {\\n  justify-content: center;\\n  text-align: center;\\n}\\n\\n.fa-comment {\\n  color: rgb(44, 132, 161);\\n}\\n\\nbutton {\\n  width: auto;\\n  color: rgb(4, 71, 122);\\n  font-weight: bold;\\n  background-color: rgb(187, 179, 179);\\n  padding: 5px;\\n  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.8);\\n}\\n\\nbutton:hover {\\n  color: #fff;\\n  font-weight: bold;\\n  background-color: rgb(4, 94, 122);\\n  padding: 6px;\\n}\\n\\nh1,\\nh2,\\nh3,\\nh4 h5,\\nh6 {\\n  font-weight: bold;\\n}\\n\\n.font-w-bold {\\n  font-weight: bold;\\n}\\n\\n.comments-list-body {\\n  background: rgb(224, 228, 233);\\n  box-shadow: 0 2px 4px 0 rgb(54, 54, 54);\\n  padding: 10px;\\n  font-weight: bold;\\n  width: 90%;\\n  margin: 0 auto;\\n  height: 10%;\\n  overscroll-behavior: contain;\\n}\\n\\n.vierwerCommentList:nth-child(even) {\\n  background: #fbfdff;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-webpack-biolerplate/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://my-webpack-biolerplate/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://my-webpack-biolerplate/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://my-webpack-biolerplate/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my-webpack-biolerplate/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://my-webpack-biolerplate/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://my-webpack-biolerplate/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://my-webpack-biolerplate/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://my-webpack-biolerplate/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://my-webpack-biolerplate/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _modules_displayShow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displayShow.js */ \"./src/modules/displayShow.js\");\n/* harmony import */ var _modules_getShows_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/getShows.js */ \"./src/modules/getShows.js\");\n/* harmony import */ var _modules_showPop_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/showPop.js */ \"./src/modules/showPop.js\");\n/* harmony import */ var _modules_addLike_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/addLike.js */ \"./src/modules/addLike.js\");\n\n\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  (0,_modules_displayShow_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  const showPopUp = async () => {\n    const data = await (0,_modules_getShows_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    (0,_modules_showPop_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(data);\n  };\n  showPopUp();\n  (0,_modules_addLike_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n});\n\n\n//# sourceURL=webpack://my-webpack-biolerplate/./src/index.js?");

/***/ }),

/***/ "./src/modules/addLike.js":
/*!********************************!*\
  !*** ./src/modules/addLike.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _likesCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likesCounter.js */ \"./src/modules/likesCounter.js\");\n\n\nconst addLike = () => {\n  document.addEventListener('click', (e) => {\n    const clickedElement = e.target;\n    const likesCounter = clickedElement.parentNode.nextElementSibling;\n    const showId = Number(clickedElement.parentNode.parentNode.id);\n    if (clickedElement.id === 'liked-icon') {\n      (0,_likesCounter_js__WEBPACK_IMPORTED_MODULE_0__.postLikes)(showId, likesCounter);\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addLike);\n\n//# sourceURL=webpack://my-webpack-biolerplate/./src/modules/addLike.js?");

/***/ }),

/***/ "./src/modules/commentsApi.js":
/*!************************************!*\
  !*** ./src/modules/commentsApi.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addMovieComment\": () => (/* binding */ addMovieComment),\n/* harmony export */   \"fetchComment\": () => (/* binding */ fetchComment)\n/* harmony export */ });\nconst appId = 'f5fDagMARo6BC6LKqLaP/';\nconst commentUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\nconst endPoint = 'comments';\n// get comment\nconst fetchComment = async (showId) => {\n  const response = await fetch(`${commentUrl + appId + endPoint}?item_id=${showId}`);\n  const data = response.json();\n  return (data);\n};\n\n// Add comment\nconst addMovieComment = async (viewerInfo) => {\n  const response = await fetch(`${commentUrl + appId + endPoint}`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify(viewerInfo),\n  });\n  const commentData = await response.text();\n  return commentData;\n};\n\n\n\n//# sourceURL=webpack://my-webpack-biolerplate/./src/modules/commentsApi.js?");

/***/ }),

/***/ "./src/modules/displayShow.js":
/*!************************************!*\
  !*** ./src/modules/displayShow.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getShows_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getShows.js */ \"./src/modules/getShows.js\");\n/* harmony import */ var _showCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showCounter.js */ \"./src/modules/showCounter.js\");\n/* harmony import */ var _likesCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./likesCounter.js */ \"./src/modules/likesCounter.js\");\n\n\n\n\nconst allShows = document.querySelector('.allShows');\nallShows.innerHTML = '';\n\nconst showTemplate = (Shows) => {\n  Shows.forEach((show) => {\n    const showInfo = document.createElement('li');\n    showInfo.className = 'd-flex show';\n    showInfo.id = show.id;\n    showInfo.innerHTML = `\n        <img id=\"show-img\" src=${show.image.medium} alt=\"show image\">\n        <div id=\"like-show\">\n            <h2 id=\"show-title\">${show.name}</h2>\n            <i class=\"fas fa-heart\" id=\"liked-icon\"></i>\n        </div>\n        <div class=\"d-flex like\">\n        <p id=\"likes\">${show.likes} Likes</p>\n   \n        <button type=\"button\" id=\"${showInfo.id}\" class=\"comment-btn\"  onclick\"commentsPopUp(${showInfo.id})\" role=\"button\">Comments</button>\n        </div>`;\n    allShows.appendChild(showInfo);\n  });\n};\n\nconst displayShows = async () => {\n  const fetchedShows = await (0,_getShows_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const Shows = fetchedShows.slice(0, 20);\n  (0,_showCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Shows);\n  const likesArray = await (0,_likesCounter_js__WEBPACK_IMPORTED_MODULE_2__.getLikesData)();\n  likesArray.forEach((like) => {\n    Shows.forEach((show) => {\n      if (like.item_id === show.id) {\n        show.likes = like.likes;\n      } else if (show.likes === undefined) {\n        show.likes = 0;\n      }\n    });\n  });\n  showTemplate(Shows);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayShows);\n\n\n//# sourceURL=webpack://my-webpack-biolerplate/./src/modules/displayShow.js?");

/***/ }),

/***/ "./src/modules/getShows.js":
/*!*********************************!*\
  !*** ./src/modules/getShows.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst url = 'https://api.tvmaze.com/shows';\n\nconst getshow = async () => {\n  const data = await fetch(`${url}`);\n  return data.json();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getshow);\n\n//# sourceURL=webpack://my-webpack-biolerplate/./src/modules/getShows.js?");

/***/ }),

/***/ "./src/modules/likesCounter.js":
/*!*************************************!*\
  !*** ./src/modules/likesCounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLikesData\": () => (/* binding */ getLikesData),\n/* harmony export */   \"postLikes\": () => (/* binding */ postLikes)\n/* harmony export */ });\nconst baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\nconst appId = 'QALIoXYe7LSsEgG2FYGA';\n\nconst getLikesData = async () => {\n  let data = await fetch(`${baseUrl}${appId}/likes`);\n  data = await data.json();\n  return data;\n};\n\nconst postLikes = async (showId, element) => {\n  await fetch(`${baseUrl}${appId}/likes`, {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: showId,\n    }),\n    headers: {\n      'Content-type': 'application/json',\n    },\n  });\n  const likesArray = await getLikesData();\n  likesArray.map((a) => {\n    if (a.item_id === showId) {\n      element.innerHTML = `${a.likes} Likes\n      <button type=\"button\" id=\"${showId}\" class=\"comment-btn\"  onclick\"commentsPopUp(${showId})\" role=\"button\">Comments</button>`;\n    }\n    return a;\n  });\n};\n\n\n\n//# sourceURL=webpack://my-webpack-biolerplate/./src/modules/likesCounter.js?");

/***/ }),

/***/ "./src/modules/showCounter.js":
/*!************************************!*\
  !*** ./src/modules/showCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst counter = document.getElementById('shows-counter');\n\nconst showsNumber = (showList) => {\n  const totalShows = showList.length;\n  counter.textContent = `(${totalShows})`;\n  return totalShows;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showsNumber);\n\n//# sourceURL=webpack://my-webpack-biolerplate/./src/modules/showCounter.js?");

/***/ }),

/***/ "./src/modules/showPop.js":
/*!********************************!*\
  !*** ./src/modules/showPop.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayShow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayShow.js */ \"./src/modules/displayShow.js\");\n/* harmony import */ var _commentsApi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentsApi.js */ \"./src/modules/commentsApi.js\");\n\n\n\nconst showModal = document.querySelector('#modal-section');\n// PopUp method\nconst popModal = document.createElement('div');\npopModal.setAttribute('class', 'modal');\nconst commentsPopUp = async (data) => {\n  document.body.addEventListener('click', (event) => {\n    if (event.target.className === 'comment-btn') {\n      const commentId = event.target.parentNode.querySelector('button').id;\n      data.forEach((show) => {\n        const showId = show.id;\n        if (showId.toString() === commentId.toString()) {\n          popModal.innerHTML = `<div class=\"modal-content\">\n  <span class=\"d-flex jc-flex-end\"><i class=\"fas fa-window-close\" aria-hidden=\"true\"></i></span>\n  <div class=\"d-flex flex-d-c\">\n      <div class=\"row\">\n      <img src=${(show.image.medium)} alt=\"show image\" class=\"popup-img show col-sm-12 mb-3\">\n      </div>\n      <h2 class=\"d-flex center\">${show.name}</h2>\n      <div class=\"d-flex flex-d-c\">\n      <h3 class=\"d-flex\">Premiered On: ${show.premiered}</h3>\n      <p class=\"d-flex show-desc\">${show.summary}</p>\n      <h4 class=\"d-flex mt-1\">Language: ${show.language}</h4>\n      </div>\n      <h3 class=\"d-flex center\"><i class=\"fa fa-fw fa-comment mb-5\"></i>  Comments(0)</h3>\n\n      <div class=\"flex-d-c mb-5 \">\n      <ul class=\"d-flex s-around comment-list-header font-w-bold\">\n      <li>Posted </li> <li>By</li> <li> Comment</li>\n      </ul>\n      <div class=\"comments-list-body\">\n      </div>\n      </div>\n      <form class=\"card bg-light mb-5\" id=\"comment-form\" method=\"POST\">\n       <div class=\"d-flex flex-d-c  card-body\">\n       <h3 class=\"center text-success\">Add comment</h3><br>\n       <input type=\"text\" id=\"viewer-name\" class=\"form-control\" placeholder=\"Enter your name\" required><br>\n       <textarea id=\"viewer-comment\" class=\"form-control\"  rows=\"4\" cols=\"40\" placeholder=\"Enter Comment\" max-length=\"20\"  required></textarea><br>\n       <button type=\"submit\" id=\"${show.id}\" class=\"btn btn-success btn-md commentBtn\">Comment</button>\n       </div>\n      </form>\n  </div>\n</div>`;\n        }\n      });\n      showModal.appendChild(popModal);\n      showModal.style.display = ('block');\n      const closeBtn = document.querySelector('.fa-window-close');\n      document.addEventListener('click', (event) => {\n        if (event.target === closeBtn) {\n          showModal.style.display = 'none';\n          window.location.reload();\n        }\n      });\n      // Submit viewer info\n      const viewerUserName = document.querySelector('#viewer-name');\n      const viewerComment = document.querySelector('#viewer-comment');\n      const submitViewerInfo = () => {\n        const comment = {\n          username: viewerUserName.value,\n          comment: viewerComment.value,\n          item_id: commentId,\n        };\n\n        (0,_commentsApi_js__WEBPACK_IMPORTED_MODULE_1__.addMovieComment)(comment);\n      };\n\n      const commentSection = document.querySelector('.comments-list-body');\n      const commentList = document.createElement('ul');\n      commentList.setAttribute('class', 'd-flex flex-d-c');\n      // UPDATE COMMENTS\n      const updateComments = () => {\n        const date = new Date();\n        const day = date.getDay();\n        const month = date.getMonth();\n        const year = date.getFullYear();\n        commentList.innerHTML += `<li class=\"d-flex s-around vierwerCommentList\"> \n          <span>${year} ${-month} ${-day}</span>  <span>${viewerUserName.value}</span>  <span>${viewerComment.value}</span></li>\n          `;\n        commentSection.appendChild(commentList);\n      };\n      // Show Comments\n      const displayComment = async (commentId) => {\n        const allComments = await (0,_commentsApi_js__WEBPACK_IMPORTED_MODULE_1__.fetchComment)(commentId);\n        try {\n          allComments.forEach((data) => {\n            commentList.innerHTML += `<li class=\"d-flex s-around vierwerCommentList\"> \n          <span>${data.creation_date}</span>  <span>${data.username}</span>  <span>${data.comment}</span></li>\n          `;\n            commentSection.appendChild(commentList);\n          });\n        } catch (err) {\n          commentList.innerHTML += `<li class=\"d-flex s-around vierwerCommentList\">${err.dara}</li>\n          `;\n          commentSection.appendChild(commentList);\n        }\n      };\n\n      displayComment(commentId);\n\n      const commentsBtn = document.querySelector('.commentBtn');\n      // listen to users enevent\n      commentsBtn.addEventListener('click', (e) => {\n        e.preventDefault();\n        submitViewerInfo();\n        updateComments();\n        viewerUserName.value = '';\n        viewerComment.value = '';\n      });\n    }\n  });\n\n  await (0,_displayShow_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsPopUp);\n\n//# sourceURL=webpack://my-webpack-biolerplate/./src/modules/showPop.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;