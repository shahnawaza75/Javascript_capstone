"use strict";
(self["webpackChunkmy_webpack_biolerplate"] = self["webpackChunkmy_webpack_biolerplate"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;1,200&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  scroll-behavior: smooth;\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  overflow-x: hidden;\r\n  margin: 0;\r\n  padding: 0;\r\n  height: 100vh;\r\n  background-color: purple;\r\n}\r\n.d-flex {\r\n  display: flex;\r\n  background-color: rgb(49, 62, 72);\r\n}\r\n\r\nheader {\r\n  margin-top: 10px;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  margin-right: 5%;\r\n  color: white;\r\n}\r\n\r\na:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.logo {\r\n  margin-right: 5%;\r\n  width: 50px;\r\n  height: 50px;\r\n  background: url(https://toppng.com/uploads/preview/the-sims-logo-11530958268z7srqqiuxf.png);\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n}\r\n\r\n.allShows {\r\n  gap: 30px;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.show {\r\n  flex-flow: column;\r\n  justify-content: space-between;\r\n  width: 232px;\r\n  height: 370px;\r\n  border-radius: 5px;\r\n  background-color: white;\r\n  padding: 10px;\r\n  box-shadow: 5px 10px 18px #fff;\r\n}\r\n\r\n#show-img {\r\n  height: 275px;\r\n  width: 210px;\r\n}\r\n\r\n#like-show {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 30px;\r\n}\r\n\r\n#show-title {\r\n  margin: 0;\r\n  font-size: 19px;\r\n}\r\n\r\n.like {\r\n  gap: 20px;\r\n}\r\n\r\n#likes {\r\n  align-self: end;\r\n  margin: 0;\r\n  font-size: 20px;\r\n}\r\n\r\n#comment-btn {\r\n  align-self: end;\r\n  justify-self: end;\r\n}\r\n\r\nfooter {\r\n  color: white;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 30px;\r\n  border-radius: 5px;\r\n  background-color: rgb(49, 62, 72);\r\n  text-align: center;\r\n  padding-top: -4px;\r\n}\r\n\r\n\r\n.modal {\r\n  display: block;\r\n  position: fixed;\r\n  height: 100%;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  margin: 0 auto;\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n  z-index: 10;\r\n  overflow: auto;\r\n}\r\n\r\n.modal-content {\r\n  width: 80%;\r\n  height: auto;\r\n  margin: 5% auto;\r\n  background-color: #fff;\r\n  box-shadow: 0 10px 10px 0 rgb(24, 4, 43);\r\n  border-radius: 10px;\r\n  padding: 2%;\r\n}\r\n\r\n.jc-flex-end {\r\n  justify-content: flex-end;\r\n}\r\n\r\n.fa-window-close {\r\n  font-size: 2em;\r\n  padding: 20px;\r\n  color: rgb(146, 150, 146);\r\n}\r\n\r\n.fa-window-close:hover {\r\n  color: rgb(17, 20, 117);\r\n}\r\n\r\n.popup-img {\r\n  width: 25%;\r\n  margin: 0 auto;\r\n  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n#comment-form {\r\n  width: 50%;\r\n  margin: 10px auto;\r\n  background-color: blueviolet;\r\n  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n#showDesc {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  line-height: 32px;\r\n  font-weight: bold;\r\n}\r\n\r\nli {\r\n  text-decoration: none;\r\n  list-style: none;\r\n}\r\n\r\n.form {\r\n  justify-content: center;\r\n}\r\n\r\n.fa-comment {\r\n  color: rgb(44, 161, 89);\r\n}\r\n\r\nbutton {\r\n  width: auto;\r\n  color: rgb(122, 4, 122);\r\n  font-weight: bold;\r\n  background-color: rgb(187, 179, 179);\r\n  padding: 5px;\r\n  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.8);\r\n}\r\n\r\nbutton:hover {\r\n  color: #fff;\r\n  font-weight: bold;\r\n  background-color: rgb(122, 4, 122);\r\n  padding: 6px;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4 h5,\r\nh6 {\r\n  font-weight: bold;\r\n}\r\n\r\n.font-w-bold {\r\n  font-weight: bold;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAEA;EACE,sBAAsB;EACtB,uBAAuB;EACvB,kCAAkC;AACpC;;AAEA;;EAEE,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,aAAa;EACb,wBAAwB;AAC1B;AACA;EACE,aAAa;EACb,iCAAiC;AACnC;;AAEA;EACE,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,2FAA2F;EAC3F,4BAA4B;EAC5B,wBAAwB;EACxB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,8BAA8B;EAC9B,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,uBAAuB;EACvB,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,eAAe;EACf,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,OAAO;EACP,SAAS;EACT,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,iCAAiC;EACjC,kBAAkB;EAClB,iBAAiB;AACnB;;;AAGA;EACE,cAAc;EACd,eAAe;EACf,YAAY;EACZ,WAAW;EACX,MAAM;EACN,OAAO;EACP,cAAc;EACd,oCAAoC;EACpC,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,eAAe;EACf,sBAAsB;EACtB,wCAAwC;EACxC,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,cAAc;EACd,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,cAAc;EACd,0CAA0C;AAC5C;;AAEA;EACE,UAAU;EACV,iBAAiB;EACjB,4BAA4B;EAC5B,0CAA0C;AAC5C;;AAEA;EACE,UAAU;EACV,cAAc;EACd,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,uBAAuB;EACvB,iBAAiB;EACjB,oCAAoC;EACpC,YAAY;EACZ,0CAA0C;AAC5C;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,kCAAkC;EAClC,YAAY;AACd;;AAEA;;;;;EAKE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;1,200&display=swap\");\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  scroll-behavior: smooth;\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  overflow-x: hidden;\r\n  margin: 0;\r\n  padding: 0;\r\n  height: 100vh;\r\n  background-color: purple;\r\n}\r\n.d-flex {\r\n  display: flex;\r\n  background-color: rgb(49, 62, 72);\r\n}\r\n\r\nheader {\r\n  margin-top: 10px;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  margin-right: 5%;\r\n  color: white;\r\n}\r\n\r\na:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.logo {\r\n  margin-right: 5%;\r\n  width: 50px;\r\n  height: 50px;\r\n  background: url(https://toppng.com/uploads/preview/the-sims-logo-11530958268z7srqqiuxf.png);\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n}\r\n\r\n.allShows {\r\n  gap: 30px;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.show {\r\n  flex-flow: column;\r\n  justify-content: space-between;\r\n  width: 232px;\r\n  height: 370px;\r\n  border-radius: 5px;\r\n  background-color: white;\r\n  padding: 10px;\r\n  box-shadow: 5px 10px 18px #fff;\r\n}\r\n\r\n#show-img {\r\n  height: 275px;\r\n  width: 210px;\r\n}\r\n\r\n#like-show {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 30px;\r\n}\r\n\r\n#show-title {\r\n  margin: 0;\r\n  font-size: 19px;\r\n}\r\n\r\n.like {\r\n  gap: 20px;\r\n}\r\n\r\n#likes {\r\n  align-self: end;\r\n  margin: 0;\r\n  font-size: 20px;\r\n}\r\n\r\n#comment-btn {\r\n  align-self: end;\r\n  justify-self: end;\r\n}\r\n\r\nfooter {\r\n  color: white;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 30px;\r\n  border-radius: 5px;\r\n  background-color: rgb(49, 62, 72);\r\n  text-align: center;\r\n  padding-top: -4px;\r\n}\r\n\r\n\r\n.modal {\r\n  display: block;\r\n  position: fixed;\r\n  height: 100%;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  margin: 0 auto;\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n  z-index: 10;\r\n  overflow: auto;\r\n}\r\n\r\n.modal-content {\r\n  width: 80%;\r\n  height: auto;\r\n  margin: 5% auto;\r\n  background-color: #fff;\r\n  box-shadow: 0 10px 10px 0 rgb(24, 4, 43);\r\n  border-radius: 10px;\r\n  padding: 2%;\r\n}\r\n\r\n.jc-flex-end {\r\n  justify-content: flex-end;\r\n}\r\n\r\n.fa-window-close {\r\n  font-size: 2em;\r\n  padding: 20px;\r\n  color: rgb(146, 150, 146);\r\n}\r\n\r\n.fa-window-close:hover {\r\n  color: rgb(17, 20, 117);\r\n}\r\n\r\n.popup-img {\r\n  width: 25%;\r\n  margin: 0 auto;\r\n  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n#comment-form {\r\n  width: 50%;\r\n  margin: 10px auto;\r\n  background-color: blueviolet;\r\n  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n#showDesc {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  line-height: 32px;\r\n  font-weight: bold;\r\n}\r\n\r\nli {\r\n  text-decoration: none;\r\n  list-style: none;\r\n}\r\n\r\n.form {\r\n  justify-content: center;\r\n}\r\n\r\n.fa-comment {\r\n  color: rgb(44, 161, 89);\r\n}\r\n\r\nbutton {\r\n  width: auto;\r\n  color: rgb(122, 4, 122);\r\n  font-weight: bold;\r\n  background-color: rgb(187, 179, 179);\r\n  padding: 5px;\r\n  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.8);\r\n}\r\n\r\nbutton:hover {\r\n  color: #fff;\r\n  font-weight: bold;\r\n  background-color: rgb(122, 4, 122);\r\n  padding: 6px;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4 h5,\r\nh6 {\r\n  font-weight: bold;\r\n}\r\n\r\n.font-w-bold {\r\n  font-weight: bold;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _modules_displayShow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displayShow.js */ "./src/modules/displayShow.js");
/* harmony import */ var _modules_getShows_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/getShows.js */ "./src/modules/getShows.js");
/* harmony import */ var _modules_showPop_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/showPop.js */ "./src/modules/showPop.js");






window.addEventListener('DOMContentLoaded', () => {
  (0,_modules_displayShow_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const showPopUp = async () => {
    const data = await (0,_modules_getShows_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_modules_showPop_js__WEBPACK_IMPORTED_MODULE_3__["default"])(data);
  };
  showPopUp();
});


/***/ }),

/***/ "./src/modules/displayShow.js":
/*!************************************!*\
  !*** ./src/modules/displayShow.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getShows_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getShows.js */ "./src/modules/getShows.js");


const allShows = document.querySelector('.allShows');
allShows.innerHTML = '';

const showTemplate = (Shows) => {
  Shows.forEach((show) => {
    const showInfo = document.createElement('li');
    showInfo.className = 'd-flex show';
    showInfo.id = show.id;
    showInfo.innerHTML = `
        <img id="show-img" src=${show.image.medium} alt="show image">
        <div id="like-show">
            <h2 id="show-title">${show.name}</h2>
            <i class="far fa-heart" id="like-icon"></i>
        </div>
        <div class="d-flex like">
        <p id="likes">0 likes</p>
   
        <button type="button" id="${showInfo.id}" class="comment-btn"  onclick"commentsPopUp(${showInfo.id})" role="button">Comments</button
        </div>`;
    allShows.appendChild(showInfo);
  });
};

const displayShows = async () => {
  const fetchedShows = await (0,_getShows_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const Shows = fetchedShows.slice(0, 20);
  showTemplate(Shows);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayShows);


/***/ }),

/***/ "./src/modules/getShows.js":
/*!*********************************!*\
  !*** ./src/modules/getShows.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const url = 'https://api.tvmaze.com/shows?page=1';

const getshow = async () => {
  const data = await fetch(`${url}`);
  return data.json();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getshow);

/***/ }),

/***/ "./src/modules/showPop.js":
/*!********************************!*\
  !*** ./src/modules/showPop.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _displayShow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayShow.js */ "./src/modules/displayShow.js");


const showModal = document.querySelector('#modal-section');
const popModal = document.createElement('div');
popModal.setAttribute('class', 'modal');
const commentsPopUp = async (data) => {
  document.body.addEventListener('click', (event) => {
    if (event.target.className === 'comment-btn') {
      const commentId = event.target.parentNode.querySelector('button').id;
      data.forEach((show) => {
        const showId = show.id;
        if (showId.toString() === commentId.toString()) {
          popModal.innerHTML = `<div class="modal-content">
  <span class="d-flex jc-flex-end"><i class="fas fa-window-close" aria-hidden="true"></i></span>
  <div class="d-flex flex-d-c">
      <img src=${(show.image.medium)} alt="show image" class="popup-img show mb-3">
      <h2 class="d-flex center">${show.name}</h2>
      <div class="d-flex flex-d-c">
      <h3 class="d-flex">Premiered On: ${show.premiered}</h3>
      <p class="d-flex show-desc">${show.summary}</p>
      <h4 class="d-flex mt-1">Language: ${show.language}</h4>
      </div>
      <h3 class="d-flex center"><i class="fa fa-fw fa-comment mb-5"></i>  Comments(0)</h3>

      <div class="flex-d-c mb-5 ">
      <ul class="d-flex s-around comment-list-header font-w-bold">
      <li>Date</li> <li>By</li> <li> Comment</li>
      </ul>
      <ul class="comments-list-body d-flex s-around">
        <li>2020</li>
        <li>Anthony</li>
        <li>Hello World</li>
      </ul>
      </div>
      <form class="card bg-light mb-5" id="comment-form" method="POST">
       <div class=" d-flex flex-d-c  card-body">
       <h3 class="center">Add comment</h3><br>
       <input type="text" id="comment" class="form-control" placeholder="Enter your name" required><br>
       <textarea id="viewer-comment" class="form-control"  rows="4" cols="40" placeholder="Enter Comment"  required></textarea><br>
       <button type="submit" id="commentBtn" class="btn btn-success btn-md">Comment</button>
       </div>
      </form>
  </div>
</div>`;
        }
      });
      showModal.appendChild(popModal);
      showModal.style.display = ('block');
      const closeBtn = document.querySelector('.fa-window-close');
      document.addEventListener('click', (event) => {
        if (event.target === closeBtn) {
          showModal.style.display = 'none';
          window.location.reload();
        }
      });
    }
  });
  await (0,_displayShow_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsPopUp);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0gsUUFBUSwyREFBWTtBQUNwQjtBQUNBO0FBQ0EsaUVBQWUsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYnBhY2stYmlvbGVycGxhdGUvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL215LXdlYnBhY2stYmlvbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL215LXdlYnBhY2stYmlvbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLWJpb2xlcnBsYXRlLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL215LXdlYnBhY2stYmlvbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1iaW9sZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1iaW9sZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLWJpb2xlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL215LXdlYnBhY2stYmlvbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLWJpb2xlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1iaW9sZXJwbGF0ZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLWJpb2xlcnBsYXRlLy4vc3JjL21vZHVsZXMvZGlzcGxheVNob3cuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1iaW9sZXJwbGF0ZS8uL3NyYy9tb2R1bGVzL2dldFNob3dzLmpzIiwid2VicGFjazovL215LXdlYnBhY2stYmlvbGVycGxhdGUvLi9zcmMvbW9kdWxlcy9zaG93UG9wLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwzMDA7MSwyMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XFxyXFxufVxcclxcbi5kLWZsZXgge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0OSwgNjIsIDcyKTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuYTpob3ZlciB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vdG9wcG5nLmNvbS91cGxvYWRzL3ByZXZpZXcvdGhlLXNpbXMtbG9nby0xMTUzMDk1ODI2OHo3c3JxcWl1eGYucG5nKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hbGxTaG93cyB7XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5zaG93IHtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgd2lkdGg6IDIzMnB4O1xcclxcbiAgaGVpZ2h0OiAzNzBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDVweCAxMHB4IDE4cHggI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuI3Nob3ctaW1nIHtcXHJcXG4gIGhlaWdodDogMjc1cHg7XFxyXFxuICB3aWR0aDogMjEwcHg7XFxyXFxufVxcclxcblxcclxcbiNsaWtlLXNob3cge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbiNzaG93LXRpdGxlIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTlweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2Uge1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbGlrZXMge1xcclxcbiAgYWxpZ24tc2VsZjogZW5kO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudC1idG4ge1xcclxcbiAgYWxpZ24tc2VsZjogZW5kO1xcclxcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDksIDYyLCA3Mik7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLXRvcDogLTRweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxyXFxuICB6LWluZGV4OiAxMDtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY29udGVudCB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgbWFyZ2luOiA1JSBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAxMHB4IDAgcmdiKDI0LCA0LCA0Myk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMiU7XFxyXFxufVxcclxcblxcclxcbi5qYy1mbGV4LWVuZCB7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtd2luZG93LWNsb3NlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMmVtO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGNvbG9yOiByZ2IoMTQ2LCAxNTAsIDE0Nik7XFxyXFxufVxcclxcblxcclxcbi5mYS13aW5kb3ctY2xvc2U6aG92ZXIge1xcclxcbiAgY29sb3I6IHJnYigxNywgMjAsIDExNyk7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1pbWcge1xcclxcbiAgd2lkdGg6IDI1JTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjgpO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudC1mb3JtIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBtYXJnaW46IDEwcHggYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XFxyXFxuICBib3gtc2hhZG93OiAwIDVweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxyXFxufVxcclxcblxcclxcbiNzaG93RGVzYyB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBsaW5lLWhlaWdodDogMzJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSB7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWNvbW1lbnQge1xcclxcbiAgY29sb3I6IHJnYig0NCwgMTYxLCA4OSk7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIGNvbG9yOiByZ2IoMTIyLCA0LCAxMjIpO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg3LCAxNzksIDE3OSk7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDVweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3ZlciB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMiwgNCwgMTIyKTtcXHJcXG4gIHBhZGRpbmc6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQgaDUsXFxyXFxuaDYge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5mb250LXctYm9sZCB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsa0NBQWtDO0FBQ3BDOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7RUFDYix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLGFBQWE7RUFDYixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkZBQTJGO0VBQzNGLDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsU0FBUztFQUNULGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLE9BQU87RUFDUCxTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7OztBQUdBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLE1BQU07RUFDTixPQUFPO0VBQ1AsY0FBYztFQUNkLG9DQUFvQztFQUNwQyxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osZUFBZTtFQUNmLHNCQUFzQjtFQUN0Qix3Q0FBd0M7RUFDeEMsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtDQUFrQztFQUNsQyxZQUFZO0FBQ2Q7O0FBRUE7Ozs7O0VBS0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMzAwOzEsMjAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xcclxcbn1cXHJcXG4uZC1mbGV4IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDksIDYyLCA3Mik7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIG1hcmdpbi1yaWdodDogNSU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbmE6aG92ZXIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogNSU7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChodHRwczovL3RvcHBuZy5jb20vdXBsb2Fkcy9wcmV2aWV3L3RoZS1zaW1zLWxvZ28tMTE1MzA5NTgyNjh6N3NycXFpdXhmLnBuZyk7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWxsU2hvd3Mge1xcclxcbiAgZ2FwOiAzMHB4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdyB7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHdpZHRoOiAyMzJweDtcXHJcXG4gIGhlaWdodDogMzcwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiA1cHggMTBweCAxOHB4ICNmZmY7XFxyXFxufVxcclxcblxcclxcbiNzaG93LWltZyB7XFxyXFxuICBoZWlnaHQ6IDI3NXB4O1xcclxcbiAgd2lkdGg6IDIxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbGlrZS1zaG93IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2hvdy10aXRsZSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LXNpemU6IDE5cHg7XFxyXFxufVxcclxcblxcclxcbi5saWtlIHtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2xpa2VzIHtcXHJcXG4gIGFsaWduLXNlbGY6IGVuZDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQtYnRuIHtcXHJcXG4gIGFsaWduLXNlbGY6IGVuZDtcXHJcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ5LCA2MiwgNzIpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZy10b3A6IC00cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWNvbnRlbnQge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIG1hcmdpbjogNSUgYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3gtc2hhZG93OiAwIDEwcHggMTBweCAwIHJnYigyNCwgNCwgNDMpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDIlO1xcclxcbn1cXHJcXG5cXHJcXG4uamMtZmxleC1lbmQge1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXdpbmRvdy1jbG9zZSB7XFxyXFxuICBmb250LXNpemU6IDJlbTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBjb2xvcjogcmdiKDE0NiwgMTUwLCAxNDYpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtd2luZG93LWNsb3NlOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiByZ2IoMTcsIDIwLCAxMTcpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtaW1nIHtcXHJcXG4gIHdpZHRoOiAyNSU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC44KTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQtZm9ybSB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xcclxcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjgpO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hvd0Rlc2Mge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgbGluZS1oZWlnaHQ6IDMycHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0ge1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mYS1jb21tZW50IHtcXHJcXG4gIGNvbG9yOiByZ2IoNDQsIDE2MSwgODkpO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxuICBjb2xvcjogcmdiKDEyMiwgNCwgMTIyKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NywgMTc5LCAxNzkpO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjgpO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjIsIDQsIDEyMik7XFxyXFxuICBwYWRkaW5nOiA2cHg7XFxyXFxufVxcclxcblxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzLFxcclxcbmg0IGg1LFxcclxcbmg2IHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9udC13LWJvbGQge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XHJcbmltcG9ydCBkaXNwbGF5U2hvd3MgZnJvbSAnLi9tb2R1bGVzL2Rpc3BsYXlTaG93LmpzJztcclxuXHJcbmltcG9ydCBnZXRzaG93IGZyb20gJy4vbW9kdWxlcy9nZXRTaG93cy5qcyc7XHJcbmltcG9ydCBjb21tZW50c1BvcFVwIGZyb20gJy4vbW9kdWxlcy9zaG93UG9wLmpzJztcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIGRpc3BsYXlTaG93cygpO1xyXG4gIGNvbnN0IHNob3dQb3BVcCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRzaG93KCk7XHJcbiAgICBjb21tZW50c1BvcFVwKGRhdGEpO1xyXG4gIH07XHJcbiAgc2hvd1BvcFVwKCk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgZ2V0c2hvdyBmcm9tICcuL2dldFNob3dzLmpzJztcclxuXHJcbmNvbnN0IGFsbFNob3dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbFNob3dzJyk7XHJcbmFsbFNob3dzLmlubmVySFRNTCA9ICcnO1xyXG5cclxuY29uc3Qgc2hvd1RlbXBsYXRlID0gKFNob3dzKSA9PiB7XHJcbiAgU2hvd3MuZm9yRWFjaCgoc2hvdykgPT4ge1xyXG4gICAgY29uc3Qgc2hvd0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgc2hvd0luZm8uY2xhc3NOYW1lID0gJ2QtZmxleCBzaG93JztcclxuICAgIHNob3dJbmZvLmlkID0gc2hvdy5pZDtcclxuICAgIHNob3dJbmZvLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8aW1nIGlkPVwic2hvdy1pbWdcIiBzcmM9JHtzaG93LmltYWdlLm1lZGl1bX0gYWx0PVwic2hvdyBpbWFnZVwiPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJsaWtlLXNob3dcIj5cclxuICAgICAgICAgICAgPGgyIGlkPVwic2hvdy10aXRsZVwiPiR7c2hvdy5uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLWhlYXJ0XCIgaWQ9XCJsaWtlLWljb25cIj48L2k+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBsaWtlXCI+XHJcbiAgICAgICAgPHAgaWQ9XCJsaWtlc1wiPjAgbGlrZXM8L3A+XHJcbiAgIFxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiJHtzaG93SW5mby5pZH1cIiBjbGFzcz1cImNvbW1lbnQtYnRuXCIgIG9uY2xpY2tcImNvbW1lbnRzUG9wVXAoJHtzaG93SW5mby5pZH0pXCIgcm9sZT1cImJ1dHRvblwiPkNvbW1lbnRzPC9idXR0b25cclxuICAgICAgICA8L2Rpdj5gO1xyXG4gICAgYWxsU2hvd3MuYXBwZW5kQ2hpbGQoc2hvd0luZm8pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZGlzcGxheVNob3dzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGZldGNoZWRTaG93cyA9IGF3YWl0IGdldHNob3coKTtcclxuICBjb25zdCBTaG93cyA9IGZldGNoZWRTaG93cy5zbGljZSgwLCAyMCk7XHJcbiAgc2hvd1RlbXBsYXRlKFNob3dzKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlTaG93cztcclxuIiwiY29uc3QgdXJsID0gJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3M/cGFnZT0xJztcclxuXHJcbmNvbnN0IGdldHNob3cgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKGAke3VybH1gKTtcclxuICByZXR1cm4gZGF0YS5qc29uKCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRzaG93OyIsImltcG9ydCBkaXNwbGF5U2hvd3MgZnJvbSAnLi9kaXNwbGF5U2hvdy5qcyc7XHJcblxyXG5jb25zdCBzaG93TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtc2VjdGlvbicpO1xyXG5jb25zdCBwb3BNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5wb3BNb2RhbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21vZGFsJyk7XHJcbmNvbnN0IGNvbW1lbnRzUG9wVXAgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnY29tbWVudC1idG4nKSB7XHJcbiAgICAgIGNvbnN0IGNvbW1lbnRJZCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpLmlkO1xyXG4gICAgICBkYXRhLmZvckVhY2goKHNob3cpID0+IHtcclxuICAgICAgICBjb25zdCBzaG93SWQgPSBzaG93LmlkO1xyXG4gICAgICAgIGlmIChzaG93SWQudG9TdHJpbmcoKSA9PT0gY29tbWVudElkLnRvU3RyaW5nKCkpIHtcclxuICAgICAgICAgIHBvcE1vZGFsLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gIDxzcGFuIGNsYXNzPVwiZC1mbGV4IGpjLWZsZXgtZW5kXCI+PGkgY2xhc3M9XCJmYXMgZmEtd2luZG93LWNsb3NlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvc3Bhbj5cclxuICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtZC1jXCI+XHJcbiAgICAgIDxpbWcgc3JjPSR7KHNob3cuaW1hZ2UubWVkaXVtKX0gYWx0PVwic2hvdyBpbWFnZVwiIGNsYXNzPVwicG9wdXAtaW1nIHNob3cgbWItM1wiPlxyXG4gICAgICA8aDIgY2xhc3M9XCJkLWZsZXggY2VudGVyXCI+JHtzaG93Lm5hbWV9PC9oMj5cclxuICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LWQtY1wiPlxyXG4gICAgICA8aDMgY2xhc3M9XCJkLWZsZXhcIj5QcmVtaWVyZWQgT246ICR7c2hvdy5wcmVtaWVyZWR9PC9oMz5cclxuICAgICAgPHAgY2xhc3M9XCJkLWZsZXggc2hvdy1kZXNjXCI+JHtzaG93LnN1bW1hcnl9PC9wPlxyXG4gICAgICA8aDQgY2xhc3M9XCJkLWZsZXggbXQtMVwiPkxhbmd1YWdlOiAke3Nob3cubGFuZ3VhZ2V9PC9oND5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxoMyBjbGFzcz1cImQtZmxleCBjZW50ZXJcIj48aSBjbGFzcz1cImZhIGZhLWZ3IGZhLWNvbW1lbnQgbWItNVwiPjwvaT4gIENvbW1lbnRzKDApPC9oMz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LWQtYyBtYi01IFwiPlxyXG4gICAgICA8dWwgY2xhc3M9XCJkLWZsZXggcy1hcm91bmQgY29tbWVudC1saXN0LWhlYWRlciBmb250LXctYm9sZFwiPlxyXG4gICAgICA8bGk+RGF0ZTwvbGk+IDxsaT5CeTwvbGk+IDxsaT4gQ29tbWVudDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDx1bCBjbGFzcz1cImNvbW1lbnRzLWxpc3QtYm9keSBkLWZsZXggcy1hcm91bmRcIj5cclxuICAgICAgICA8bGk+MjAyMDwvbGk+XHJcbiAgICAgICAgPGxpPkFudGhvbnk8L2xpPlxyXG4gICAgICAgIDxsaT5IZWxsbyBXb3JsZDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Zm9ybSBjbGFzcz1cImNhcmQgYmctbGlnaHQgbWItNVwiIGlkPVwiY29tbWVudC1mb3JtXCIgbWV0aG9kPVwiUE9TVFwiPlxyXG4gICAgICAgPGRpdiBjbGFzcz1cIiBkLWZsZXggZmxleC1kLWMgIGNhcmQtYm9keVwiPlxyXG4gICAgICAgPGgzIGNsYXNzPVwiY2VudGVyXCI+QWRkIGNvbW1lbnQ8L2gzPjxicj5cclxuICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiY29tbWVudFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG5hbWVcIiByZXF1aXJlZD48YnI+XHJcbiAgICAgICA8dGV4dGFyZWEgaWQ9XCJ2aWV3ZXItY29tbWVudFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgIHJvd3M9XCI0XCIgY29scz1cIjQwXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBDb21tZW50XCIgIHJlcXVpcmVkPjwvdGV4dGFyZWE+PGJyPlxyXG4gICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgaWQ9XCJjb21tZW50QnRuXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLW1kXCI+Q29tbWVudDwvYnV0dG9uPlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICA8L2Rpdj5cclxuPC9kaXY+YDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBzaG93TW9kYWwuYXBwZW5kQ2hpbGQocG9wTW9kYWwpO1xyXG4gICAgICBzaG93TW9kYWwuc3R5bGUuZGlzcGxheSA9ICgnYmxvY2snKTtcclxuICAgICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmEtd2luZG93LWNsb3NlJyk7XHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gY2xvc2VCdG4pIHtcclxuICAgICAgICAgIHNob3dNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgYXdhaXQgZGlzcGxheVNob3dzKCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21tZW50c1BvcFVwOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==