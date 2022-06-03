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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  scroll-behavior: smooth;\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\n.d-flex {\r\n  display: flex;\r\n  background-color: rgb(49, 62, 72);\r\n}\r\n\r\n.flex-d-c {\r\n  flex-direction: column;\r\n}\r\n\r\n.center {\r\n  justify-content: center;\r\n}\r\n\r\n.s-between {\r\n  justify-content: space-between;\r\n}\r\n\r\n.s-around {\r\n  justify-content: space-around;\r\n}\r\n\r\nheader {\r\n  margin-top: 10px;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  margin-right: 5%;\r\n  color: white;\r\n}\r\n\r\na:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.logo {\r\n  margin-right: 5%;\r\n  width: 50px;\r\n  height: 50px;\r\n  background: url(https://toppng.com/uploads/preview/the-sims-logo-11530958268z7srqqiuxf.png);\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n}\r\n\r\n.allShows {\r\n  gap: 30px;\r\n  flex-wrap: wrap;\r\n  width: 98%;\r\n  margin: 8% auto;\r\n}\r\n\r\n.show {\r\n  flex-flow: column;\r\n  justify-content: space-between;\r\n  width: 232px;\r\n  height: 370px;\r\n  border-radius: 5px;\r\n  background-color: white;\r\n  padding: 10px;\r\n  box-shadow: 5px 10px 18px #fff;\r\n}\r\n\r\n#show-img {\r\n  height: 275px;\r\n  width: 210px;\r\n}\r\n\r\n#like-show {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 30px;\r\n}\r\n\r\n#show-title {\r\n  margin: 0;\r\n  font-size: 19px;\r\n}\r\n\r\n.like {\r\n  gap: 20px;\r\n}\r\n\r\n.fa-heart {\r\n  color: rgb(151, 78, 78);\r\n  font-size: 18px;\r\n}\r\n\r\n\r\n#likes {\r\n  align-self: end;\r\n  margin: 0;\r\n  font-size: 20px;\r\n}\r\n\r\n#comment-btn {\r\n  align-self: end;\r\n  justify-self: end;\r\n}\r\n\r\nfooter {\r\n  color: white;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 30px;\r\n  border-radius: 5px;\r\n  background-color: rgb(49, 62, 72);\r\n  text-align: center;\r\n  padding-top: -4px;\r\n}\r\n\r\n.modal {\r\n  display: block;\r\n  position: fixed;\r\n  height: 100%;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  margin: 0 auto;\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n  z-index: 10;\r\n  overflow: auto;\r\n}\r\n\r\n.modal-content {\r\n  width: 80%;\r\n  height: auto;\r\n  margin: 5% auto;\r\n  background-color: #fff;\r\n  box-shadow: 0 10px 10px 0 rgba(4, 18, 43, 0.427);\r\n  border-radius: 10px;\r\n  padding: 2%;\r\n}\r\n\r\n.jc-flex-end {\r\n  justify-content: flex-end;\r\n}\r\n\r\n.fa-window-close {\r\n  font-size: 2em;\r\n  padding: 20px;\r\n  color: rgb(146, 150, 146);\r\n}\r\n\r\n.fa-window-close:hover {\r\n  color: rgb(17, 20, 117);\r\n}\r\n\r\n.popup-img {\r\n  width: 25%;\r\n  margin: 0 auto;\r\n  box-shadow: 0 5px 5px 0 rgba(32, 124, 189, 0.8);\r\n}\r\n\r\n#comment-form {\r\n  width: 50%;\r\n  margin: 10px auto;\r\n  background-color: rgb(43, 110, 226);\r\n  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n#showDesc {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  line-height: 32px;\r\n  font-weight: bold;\r\n}\r\n\r\nli {\r\n  text-decoration: none;\r\n  list-style: none;\r\n}\r\n\r\n.form {\r\n  justify-content: center;\r\n  text-align: center;\r\n}\r\n\r\n.fa-comment {\r\n  color: rgb(44, 132, 161);\r\n}\r\n\r\nbutton {\r\n  width: auto;\r\n  color: rgb(4, 71, 122);\r\n  font-weight: bold;\r\n  background-color: rgb(187, 179, 179);\r\n  padding: 5px;\r\n  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.8);\r\n}\r\n\r\nbutton:hover {\r\n  color: #fff;\r\n  font-weight: bold;\r\n  background-color: rgb(4, 94, 122);\r\n  padding: 6px;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4 h5,\r\nh6 {\r\n  font-weight: bold;\r\n}\r\n\r\n.font-w-bold {\r\n  font-weight: bold;\r\n}\r\n\r\n.comments-list-body {\r\n  background: rgb(224, 228, 233);\r\n  box-shadow: 0 2px 4px 0 rgb(54, 54, 54);\r\n  padding: 10px;\r\n  font-weight: bold;\r\n  width: 90%;\r\n  margin: 0 auto;\r\n  height: 10%;\r\n  overscroll-behavior: contain;\r\n}\r\n\r\n.vierwerCommentList:nth-child(even) {\r\n  background: #fbfdff;\r\n}", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAEA;EACE,sBAAsB;EACtB,uBAAuB;EACvB,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,iCAAiC;AACnC;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,2FAA2F;EAC3F,4BAA4B;EAC5B,wBAAwB;EACxB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,SAAS;EACT,eAAe;EACf,UAAU;EACV,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,8BAA8B;EAC9B,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,uBAAuB;EACvB,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,uBAAuB;EACvB,eAAe;AACjB;;;AAGA;EACE,eAAe;EACf,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,OAAO;EACP,SAAS;EACT,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,iCAAiC;EACjC,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,eAAe;EACf,YAAY;EACZ,WAAW;EACX,MAAM;EACN,OAAO;EACP,cAAc;EACd,oCAAoC;EACpC,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,eAAe;EACf,sBAAsB;EACtB,gDAAgD;EAChD,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,cAAc;EACd,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,cAAc;EACd,+CAA+C;AACjD;;AAEA;EACE,UAAU;EACV,iBAAiB;EACjB,mCAAmC;EACnC,0CAA0C;AAC5C;;AAEA;EACE,UAAU;EACV,cAAc;EACd,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,WAAW;EACX,sBAAsB;EACtB,iBAAiB;EACjB,oCAAoC;EACpC,YAAY;EACZ,0CAA0C;AAC5C;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,iCAAiC;EACjC,YAAY;AACd;;AAEA;;;;;EAKE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,8BAA8B;EAC9B,uCAAuC;EACvC,aAAa;EACb,iBAAiB;EACjB,UAAU;EACV,cAAc;EACd,WAAW;EACX,4BAA4B;AAC9B;;AAEA;EACE,mBAAmB;AACrB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;1,200&display=swap');\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  scroll-behavior: smooth;\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\n.d-flex {\r\n  display: flex;\r\n  background-color: rgb(49, 62, 72);\r\n}\r\n\r\n.flex-d-c {\r\n  flex-direction: column;\r\n}\r\n\r\n.center {\r\n  justify-content: center;\r\n}\r\n\r\n.s-between {\r\n  justify-content: space-between;\r\n}\r\n\r\n.s-around {\r\n  justify-content: space-around;\r\n}\r\n\r\nheader {\r\n  margin-top: 10px;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  margin-right: 5%;\r\n  color: white;\r\n}\r\n\r\na:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.logo {\r\n  margin-right: 5%;\r\n  width: 50px;\r\n  height: 50px;\r\n  background: url(https://toppng.com/uploads/preview/the-sims-logo-11530958268z7srqqiuxf.png);\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n}\r\n\r\n.allShows {\r\n  gap: 30px;\r\n  flex-wrap: wrap;\r\n  width: 98%;\r\n  margin: 8% auto;\r\n}\r\n\r\n.show {\r\n  flex-flow: column;\r\n  justify-content: space-between;\r\n  width: 232px;\r\n  height: 370px;\r\n  border-radius: 5px;\r\n  background-color: white;\r\n  padding: 10px;\r\n  box-shadow: 5px 10px 18px #fff;\r\n}\r\n\r\n#show-img {\r\n  height: 275px;\r\n  width: 210px;\r\n}\r\n\r\n#like-show {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 30px;\r\n}\r\n\r\n#show-title {\r\n  margin: 0;\r\n  font-size: 19px;\r\n}\r\n\r\n.like {\r\n  gap: 20px;\r\n}\r\n\r\n.fa-heart {\r\n  color: rgb(151, 78, 78);\r\n  font-size: 18px;\r\n}\r\n\r\n\r\n#likes {\r\n  align-self: end;\r\n  margin: 0;\r\n  font-size: 20px;\r\n}\r\n\r\n#comment-btn {\r\n  align-self: end;\r\n  justify-self: end;\r\n}\r\n\r\nfooter {\r\n  color: white;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 30px;\r\n  border-radius: 5px;\r\n  background-color: rgb(49, 62, 72);\r\n  text-align: center;\r\n  padding-top: -4px;\r\n}\r\n\r\n.modal {\r\n  display: block;\r\n  position: fixed;\r\n  height: 100%;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  margin: 0 auto;\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n  z-index: 10;\r\n  overflow: auto;\r\n}\r\n\r\n.modal-content {\r\n  width: 80%;\r\n  height: auto;\r\n  margin: 5% auto;\r\n  background-color: #fff;\r\n  box-shadow: 0 10px 10px 0 rgba(4, 18, 43, 0.427);\r\n  border-radius: 10px;\r\n  padding: 2%;\r\n}\r\n\r\n.jc-flex-end {\r\n  justify-content: flex-end;\r\n}\r\n\r\n.fa-window-close {\r\n  font-size: 2em;\r\n  padding: 20px;\r\n  color: rgb(146, 150, 146);\r\n}\r\n\r\n.fa-window-close:hover {\r\n  color: rgb(17, 20, 117);\r\n}\r\n\r\n.popup-img {\r\n  width: 25%;\r\n  margin: 0 auto;\r\n  box-shadow: 0 5px 5px 0 rgba(32, 124, 189, 0.8);\r\n}\r\n\r\n#comment-form {\r\n  width: 50%;\r\n  margin: 10px auto;\r\n  background-color: rgb(43, 110, 226);\r\n  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n#showDesc {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  line-height: 32px;\r\n  font-weight: bold;\r\n}\r\n\r\nli {\r\n  text-decoration: none;\r\n  list-style: none;\r\n}\r\n\r\n.form {\r\n  justify-content: center;\r\n  text-align: center;\r\n}\r\n\r\n.fa-comment {\r\n  color: rgb(44, 132, 161);\r\n}\r\n\r\nbutton {\r\n  width: auto;\r\n  color: rgb(4, 71, 122);\r\n  font-weight: bold;\r\n  background-color: rgb(187, 179, 179);\r\n  padding: 5px;\r\n  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.8);\r\n}\r\n\r\nbutton:hover {\r\n  color: #fff;\r\n  font-weight: bold;\r\n  background-color: rgb(4, 94, 122);\r\n  padding: 6px;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4 h5,\r\nh6 {\r\n  font-weight: bold;\r\n}\r\n\r\n.font-w-bold {\r\n  font-weight: bold;\r\n}\r\n\r\n.comments-list-body {\r\n  background: rgb(224, 228, 233);\r\n  box-shadow: 0 2px 4px 0 rgb(54, 54, 54);\r\n  padding: 10px;\r\n  font-weight: bold;\r\n  width: 90%;\r\n  margin: 0 auto;\r\n  height: 10%;\r\n  overscroll-behavior: contain;\r\n}\r\n\r\n.vierwerCommentList:nth-child(even) {\r\n  background: #fbfdff;\r\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _modules_addLike_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/addLike.js */ "./src/modules/addLike.js");






window.addEventListener('DOMContentLoaded', () => {
  (0,_modules_displayShow_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const showPopUp = async () => {
    const data = await (0,_modules_getShows_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_modules_showPop_js__WEBPACK_IMPORTED_MODULE_3__["default"])(data);
  };
  showPopUp();
  (0,_modules_addLike_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
});


/***/ }),

/***/ "./src/modules/addLike.js":
/*!********************************!*\
  !*** ./src/modules/addLike.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _likesCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likesCounter.js */ "./src/modules/likesCounter.js");


const addLike = () => {
  document.addEventListener('click', (e) => {
    const clickedElement = e.target;
    const likesCounter = clickedElement.parentNode.nextElementSibling;
    const showId = Number(clickedElement.parentNode.parentNode.id);
    if (clickedElement.id === 'liked-icon') {
      (0,_likesCounter_js__WEBPACK_IMPORTED_MODULE_0__.postLikes)(showId, likesCounter);
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addLike);

/***/ }),

/***/ "./src/modules/commentsApi.js":
/*!************************************!*\
  !*** ./src/modules/commentsApi.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addMovieComment": () => (/* binding */ addMovieComment),
/* harmony export */   "fetchComment": () => (/* binding */ fetchComment)
/* harmony export */ });
const appId = 'khHeOwWAlzx3hoFEqMCr32SWNmpBjKSg';
const commentUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const endPoint = 'comments';
// get comment
const fetchComment = async (showId) => {
  const response = await fetch(`${commentUrl + appId + endPoint}?item_id=${showId}`);
  const data = response.json();
  return (data);
};

// Add comment
const addMovieComment = async (viewerInfo) => {
  const response = await fetch(`${commentUrl + appId + endPoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(viewerInfo),
  });
  const commentData = await response.text();
  return commentData;
};



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
/* harmony import */ var _likesCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./likesCounter.js */ "./src/modules/likesCounter.js");



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
  const likesArray = await (0,_likesCounter_js__WEBPACK_IMPORTED_MODULE_1__.getLikesData)();
  likesArray.forEach((like) => {
    Shows.forEach((show) => {
      if (like.item_id === show.id) {
        show.likes = like.likes;
      } else if (show.likes === undefined) {
        show.likes = 0;
      }
    });
  });
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

/***/ "./src/modules/likesCounter.js":
/*!*************************************!*\
  !*** ./src/modules/likesCounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLikesData": () => (/* binding */ getLikesData),
/* harmony export */   "postLikes": () => (/* binding */ postLikes)
/* harmony export */ });
const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appId = 'QALIoXYe7LSsEgG2FYGA';

const getLikesData = async () => {
  let data = await fetch(`${baseUrl}${appId}/likes`);
  data = await data.json();
  return data;
};

const postLikes = async (showId, element) => {
  await fetch(`${baseUrl}${appId}/likes`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: showId,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  });
  const likesArray = await getLikesData();
  likesArray.map((a) => {
    if (a.item_id === showId) {
      element.innerHTML = `${a.likes} Likes
      <button type="button" id="${showId}" class="comment-btn"  onclick"commentsPopUp(${showId})" role="button">Comments</button>`;
    }
    return a;
  });
};



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
/* harmony import */ var _commentsApi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentsApi.js */ "./src/modules/commentsApi.js");



const showModal = document.querySelector('#modal-section');
// PopUp method
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
      <div class="row">
      <img src=${(show.image.medium)} alt="show image" class="popup-img show col-sm-12 mb-3">
      </div>
      <h2 class="d-flex center">${show.name}</h2>
      <div class="d-flex flex-d-c">
      <h3 class="d-flex">Premiered On: ${show.premiered}</h3>
      <p class="d-flex show-desc">${show.summary}</p>
      <h4 class="d-flex mt-1">Language: ${show.language}</h4>
      </div>
      <h3 class="d-flex center"><i class="fa fa-fw fa-comment mb-5"></i>  Comments(0)</h3>

      <div class="flex-d-c mb-5 ">
      <ul class="d-flex s-around comment-list-header font-w-bold">
      <li>Posted </li> <li>By</li> <li> Comment</li>
      </ul>
      <div class="comments-list-body">
      </div>
      </div>
      <form class="card bg-light mb-5" id="comment-form" method="POST">
       <div class="d-flex flex-d-c  card-body">
       <h3 class="center text-success">Add comment</h3><br>
       <input type="text" id="viewer-name" class="form-control" placeholder="Enter your name" required><br>
       <textarea id="viewer-comment" class="form-control"  rows="4" cols="40" placeholder="Enter Comment" max-length="20"  required></textarea><br>
       <button type="submit" id="${show.id}" class="btn btn-success btn-md commentBtn">Comment</button>
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
      // Submit viewer info
      const viewerUserName = document.querySelector('#viewer-name');
      const viewerComment = document.querySelector('#viewer-comment');
      const submitViewerInfo = () => {
        const comment = {
          username: viewerUserName.value,
          comment: viewerComment.value,
          item_id: commentId,
        };

        (0,_commentsApi_js__WEBPACK_IMPORTED_MODULE_1__.addMovieComment)(comment);
      };

      const commentSection = document.querySelector('.comments-list-body');
      const commentList = document.createElement('ul');
      commentList.setAttribute('class', 'd-flex flex-d-c');
      // UPDATE COMMENTS
      const updateComments = () => {
        const date = new Date();
        const day = date.getDay();
        const month = date.getMonth();
        const year = date.getFullYear();
        commentList.innerHTML += `<li class="d-flex s-around vierwerCommentList"> 
          <span>${year} ${-month} ${-day}</span>  <span>${viewerUserName.value}</span>  <span>${viewerComment.value}</span></li>
          `;
        commentSection.appendChild(commentList);
      };
      // Show Comments
      const displayComment = async (commentId) => {
        const allComments = await (0,_commentsApi_js__WEBPACK_IMPORTED_MODULE_1__.fetchComment)(commentId);
        try {
          allComments.forEach((data) => {
            commentList.innerHTML += `<li class="d-flex s-around vierwerCommentList"> 
          <span>${data.creation_date}</span>  <span>${data.username}</span>  <span>${data.comment}</span></li>
          `;
            commentSection.appendChild(commentList);
          });
        } catch (err) {
          commentList.innerHTML += `<li class="d-flex s-around vierwerCommentList">${err.dara}</li>
          `;
          commentSection.appendChild(commentList);
        }
      };

      displayComment(commentId);

      const commentsBtn = document.querySelector('.commentBtn');
      // listen to users enevent
      commentsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        submitViewerInfo();
        updateComments();
        viewerUserName.value = '';
        viewerComment.value = '';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHFCQUFxQjtBQUN0QztBQUNBLGtDQUFrQyxVQUFVO0FBQzVDO0FBQ0EseUNBQXlDLGVBQWU7QUFDeEQsb0NBQW9DLGFBQWE7QUFDakQsMENBQTBDLGNBQWM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFFBQVE7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxnRUFBZTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLGlCQUFpQixxQkFBcUIsaUJBQWlCLG9CQUFvQjtBQUNwSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDZEQUFZO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixtQkFBbUIsaUJBQWlCLGNBQWMsaUJBQWlCLGFBQWE7QUFDbEc7QUFDQTtBQUNBLFdBQVc7QUFDWCxVQUFVO0FBQ1YscUZBQXFGLFNBQVM7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0EsUUFBUSwyREFBWTtBQUNwQjtBQUNBO0FBQ0EsaUVBQWUsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYnBhY2stYmlvbGVycGxhdGUvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL215LXdlYnBhY2stYmlvbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL215LXdlYnBhY2stYmlvbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLWJpb2xlcnBsYXRlLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL215LXdlYnBhY2stYmlvbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1iaW9sZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1iaW9sZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLWJpb2xlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL215LXdlYnBhY2stYmlvbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLWJpb2xlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1iaW9sZXJwbGF0ZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLWJpb2xlcnBsYXRlLy4vc3JjL21vZHVsZXMvYWRkTGlrZS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLWJpb2xlcnBsYXRlLy4vc3JjL21vZHVsZXMvY29tbWVudHNBcGkuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1iaW9sZXJwbGF0ZS8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlTaG93LmpzIiwid2VicGFjazovL215LXdlYnBhY2stYmlvbGVycGxhdGUvLi9zcmMvbW9kdWxlcy9nZXRTaG93cy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLWJpb2xlcnBsYXRlLy4vc3JjL21vZHVsZXMvbGlrZXNDb3VudGVyLmpzIiwid2VicGFjazovL215LXdlYnBhY2stYmlvbGVycGxhdGUvLi9zcmMvbW9kdWxlcy9zaG93UG9wLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwzMDA7MSwyMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uZC1mbGV4IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDksIDYyLCA3Mik7XFxyXFxufVxcclxcblxcclxcbi5mbGV4LWQtYyB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VudGVyIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucy1iZXR3ZWVuIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnMtYXJvdW5kIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDUlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5hOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDUlO1xcclxcbiAgd2lkdGg6IDUwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly90b3BwbmcuY29tL3VwbG9hZHMvcHJldmlldy90aGUtc2ltcy1sb2dvLTExNTMwOTU4MjY4ejdzcnFxaXV4Zi5wbmcpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFsbFNob3dzIHtcXHJcXG4gIGdhcDogMzBweDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIHdpZHRoOiA5OCU7XFxyXFxuICBtYXJnaW46IDglIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5zaG93IHtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgd2lkdGg6IDIzMnB4O1xcclxcbiAgaGVpZ2h0OiAzNzBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDVweCAxMHB4IDE4cHggI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuI3Nob3ctaW1nIHtcXHJcXG4gIGhlaWdodDogMjc1cHg7XFxyXFxuICB3aWR0aDogMjEwcHg7XFxyXFxufVxcclxcblxcclxcbiNsaWtlLXNob3cge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbiNzaG93LXRpdGxlIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTlweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2Uge1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtaGVhcnQge1xcclxcbiAgY29sb3I6IHJnYigxNTEsIDc4LCA3OCk7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNsaWtlcyB7XFxyXFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50LWJ0biB7XFxyXFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0OSwgNjIsIDcyKTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctdG9wOiAtNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1jb250ZW50IHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBtYXJnaW46IDUlIGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgYm94LXNoYWRvdzogMCAxMHB4IDEwcHggMCByZ2JhKDQsIDE4LCA0MywgMC40MjcpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDIlO1xcclxcbn1cXHJcXG5cXHJcXG4uamMtZmxleC1lbmQge1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXdpbmRvdy1jbG9zZSB7XFxyXFxuICBmb250LXNpemU6IDJlbTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBjb2xvcjogcmdiKDE0NiwgMTUwLCAxNDYpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtd2luZG93LWNsb3NlOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiByZ2IoMTcsIDIwLCAxMTcpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtaW1nIHtcXHJcXG4gIHdpZHRoOiAyNSU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAwIHJnYmEoMzIsIDEyNCwgMTg5LCAwLjgpO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudC1mb3JtIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBtYXJnaW46IDEwcHggYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MywgMTEwLCAyMjYpO1xcclxcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjgpO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hvd0Rlc2Mge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgbGluZS1oZWlnaHQ6IDMycHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0ge1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mYS1jb21tZW50IHtcXHJcXG4gIGNvbG9yOiByZ2IoNDQsIDEzMiwgMTYxKTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgY29sb3I6IHJnYig0LCA3MSwgMTIyKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NywgMTc5LCAxNzkpO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjgpO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0LCA5NCwgMTIyKTtcXHJcXG4gIHBhZGRpbmc6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQgaDUsXFxyXFxuaDYge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5mb250LXctYm9sZCB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLWxpc3QtYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMjI0LCAyMjgsIDIzMyk7XFxyXFxuICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2IoNTQsIDU0LCA1NCk7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBoZWlnaHQ6IDEwJTtcXHJcXG4gIG92ZXJzY3JvbGwtYmVoYXZpb3I6IGNvbnRhaW47XFxyXFxufVxcclxcblxcclxcbi52aWVyd2VyQ29tbWVudExpc3Q6bnRoLWNoaWxkKGV2ZW4pIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmYmZkZmY7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkZBQTJGO0VBQzNGLDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZUFBZTtFQUNmLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOzs7QUFHQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osT0FBTztFQUNQLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxNQUFNO0VBQ04sT0FBTztFQUNQLGNBQWM7RUFDZCxvQ0FBb0M7RUFDcEMsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsZ0RBQWdEO0VBQ2hELG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixtQ0FBbUM7RUFDbkMsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsaUNBQWlDO0VBQ2pDLFlBQVk7QUFDZDs7QUFFQTs7Ozs7RUFLRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsdUNBQXVDO0VBQ3ZDLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGNBQWM7RUFDZCxXQUFXO0VBQ1gsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMzAwOzEsMjAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmQtZmxleCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ5LCA2MiwgNzIpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmxleC1kLWMge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbnRlciB7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnMtYmV0d2VlbiB7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5zLWFyb3VuZCB7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuYTpob3ZlciB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vdG9wcG5nLmNvbS91cGxvYWRzL3ByZXZpZXcvdGhlLXNpbXMtbG9nby0xMTUzMDk1ODI2OHo3c3JxcWl1eGYucG5nKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hbGxTaG93cyB7XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICB3aWR0aDogOTglO1xcclxcbiAgbWFyZ2luOiA4JSBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdyB7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHdpZHRoOiAyMzJweDtcXHJcXG4gIGhlaWdodDogMzcwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiA1cHggMTBweCAxOHB4ICNmZmY7XFxyXFxufVxcclxcblxcclxcbiNzaG93LWltZyB7XFxyXFxuICBoZWlnaHQ6IDI3NXB4O1xcclxcbiAgd2lkdGg6IDIxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbGlrZS1zaG93IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2hvdy10aXRsZSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LXNpemU6IDE5cHg7XFxyXFxufVxcclxcblxcclxcbi5saWtlIHtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWhlYXJ0IHtcXHJcXG4gIGNvbG9yOiByZ2IoMTUxLCA3OCwgNzgpO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jbGlrZXMge1xcclxcbiAgYWxpZ24tc2VsZjogZW5kO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudC1idG4ge1xcclxcbiAgYWxpZ24tc2VsZjogZW5kO1xcclxcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDksIDYyLCA3Mik7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLXRvcDogLTRweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxyXFxuICB6LWluZGV4OiAxMDtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY29udGVudCB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgbWFyZ2luOiA1JSBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAxMHB4IDAgcmdiYSg0LCAxOCwgNDMsIDAuNDI3KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAyJTtcXHJcXG59XFxyXFxuXFxyXFxuLmpjLWZsZXgtZW5kIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5mYS13aW5kb3ctY2xvc2Uge1xcclxcbiAgZm9udC1zaXplOiAyZW07XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgY29sb3I6IHJnYigxNDYsIDE1MCwgMTQ2KTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXdpbmRvdy1jbG9zZTpob3ZlciB7XFxyXFxuICBjb2xvcjogcmdiKDE3LCAyMCwgMTE3KTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWltZyB7XFxyXFxuICB3aWR0aDogMjUlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBib3gtc2hhZG93OiAwIDVweCA1cHggMCByZ2JhKDMyLCAxMjQsIDE4OSwgMC44KTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQtZm9ybSB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMsIDExMCwgMjI2KTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC44KTtcXHJcXG59XFxyXFxuXFxyXFxuI3Nob3dEZXNjIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtY29tbWVudCB7XFxyXFxuICBjb2xvcjogcmdiKDQ0LCAxMzIsIDE2MSk7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIGNvbG9yOiByZ2IoNCwgNzEsIDEyMik7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODcsIDE3OSwgMTc5KTtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC44KTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNCwgOTQsIDEyMik7XFxyXFxuICBwYWRkaW5nOiA2cHg7XFxyXFxufVxcclxcblxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzLFxcclxcbmg0IGg1LFxcclxcbmg2IHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9udC13LWJvbGQge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1saXN0LWJvZHkge1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDIyNCwgMjI4LCAyMzMpO1xcclxcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiKDU0LCA1NCwgNTQpO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgaGVpZ2h0OiAxMCU7XFxyXFxuICBvdmVyc2Nyb2xsLWJlaGF2aW9yOiBjb250YWluO1xcclxcbn1cXHJcXG5cXHJcXG4udmllcndlckNvbW1lbnRMaXN0Om50aC1jaGlsZChldmVuKSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmJmZGZmO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xyXG5pbXBvcnQgZGlzcGxheVNob3dzIGZyb20gJy4vbW9kdWxlcy9kaXNwbGF5U2hvdy5qcyc7XHJcbmltcG9ydCBnZXRzaG93IGZyb20gJy4vbW9kdWxlcy9nZXRTaG93cy5qcyc7XHJcbmltcG9ydCBjb21tZW50c1BvcFVwIGZyb20gJy4vbW9kdWxlcy9zaG93UG9wLmpzJztcclxuaW1wb3J0IGFkZExpa2UgZnJvbSAnLi9tb2R1bGVzL2FkZExpa2UuanMnO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgZGlzcGxheVNob3dzKCk7XHJcbiAgY29uc3Qgc2hvd1BvcFVwID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldHNob3coKTtcclxuICAgIGNvbW1lbnRzUG9wVXAoZGF0YSk7XHJcbiAgfTtcclxuICBzaG93UG9wVXAoKTtcclxuICBhZGRMaWtlKCk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBwb3N0TGlrZXMgfSBmcm9tICcuL2xpa2VzQ291bnRlci5qcyc7XHJcblxyXG5jb25zdCBhZGRMaWtlID0gKCkgPT4ge1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGNvbnN0IGNsaWNrZWRFbGVtZW50ID0gZS50YXJnZXQ7XHJcbiAgICBjb25zdCBsaWtlc0NvdW50ZXIgPSBjbGlja2VkRWxlbWVudC5wYXJlbnROb2RlLm5leHRFbGVtZW50U2libGluZztcclxuICAgIGNvbnN0IHNob3dJZCA9IE51bWJlcihjbGlja2VkRWxlbWVudC5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQpO1xyXG4gICAgaWYgKGNsaWNrZWRFbGVtZW50LmlkID09PSAnbGlrZWQtaWNvbicpIHtcclxuICAgICAgcG9zdExpa2VzKHNob3dJZCwgbGlrZXNDb3VudGVyKTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZExpa2U7IiwiY29uc3QgYXBwSWQgPSAna2hIZU93V0FsengzaG9GRXFNQ3IzMlNXTm1wQmpLU2cnO1xyXG5jb25zdCBjb21tZW50VXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyc7XHJcbmNvbnN0IGVuZFBvaW50ID0gJ2NvbW1lbnRzJztcclxuLy8gZ2V0IGNvbW1lbnRcclxuY29uc3QgZmV0Y2hDb21tZW50ID0gYXN5bmMgKHNob3dJZCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7Y29tbWVudFVybCArIGFwcElkICsgZW5kUG9pbnR9P2l0ZW1faWQ9JHtzaG93SWR9YCk7XHJcbiAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKTtcclxuICByZXR1cm4gKGRhdGEpO1xyXG59O1xyXG5cclxuLy8gQWRkIGNvbW1lbnRcclxuY29uc3QgYWRkTW92aWVDb21tZW50ID0gYXN5bmMgKHZpZXdlckluZm8pID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2NvbW1lbnRVcmwgKyBhcHBJZCArIGVuZFBvaW50fWAsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHZpZXdlckluZm8pLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGNvbW1lbnREYXRhID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG4gIHJldHVybiBjb21tZW50RGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGFkZE1vdmllQ29tbWVudCwgZmV0Y2hDb21tZW50IH07IiwiaW1wb3J0IGdldHNob3cgZnJvbSAnLi9nZXRTaG93cy5qcyc7XHJcbmltcG9ydCB7IGdldExpa2VzRGF0YSB9IGZyb20gJy4vbGlrZXNDb3VudGVyLmpzJztcclxuXHJcbmNvbnN0IGFsbFNob3dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbFNob3dzJyk7XHJcbmFsbFNob3dzLmlubmVySFRNTCA9ICcnO1xyXG5cclxuY29uc3Qgc2hvd1RlbXBsYXRlID0gKFNob3dzKSA9PiB7XHJcbiAgU2hvd3MuZm9yRWFjaCgoc2hvdykgPT4ge1xyXG4gICAgY29uc3Qgc2hvd0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgc2hvd0luZm8uY2xhc3NOYW1lID0gJ2QtZmxleCBzaG93JztcclxuICAgIHNob3dJbmZvLmlkID0gc2hvdy5pZDtcclxuICAgIHNob3dJbmZvLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8aW1nIGlkPVwic2hvdy1pbWdcIiBzcmM9JHtzaG93LmltYWdlLm1lZGl1bX0gYWx0PVwic2hvdyBpbWFnZVwiPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJsaWtlLXNob3dcIj5cclxuICAgICAgICAgICAgPGgyIGlkPVwic2hvdy10aXRsZVwiPiR7c2hvdy5uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLWhlYXJ0XCIgaWQ9XCJsaWtlLWljb25cIj48L2k+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBsaWtlXCI+XHJcbiAgICAgICAgPHAgaWQ9XCJsaWtlc1wiPjAgbGlrZXM8L3A+XHJcbiAgIFxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiJHtzaG93SW5mby5pZH1cIiBjbGFzcz1cImNvbW1lbnQtYnRuXCIgIG9uY2xpY2tcImNvbW1lbnRzUG9wVXAoJHtzaG93SW5mby5pZH0pXCIgcm9sZT1cImJ1dHRvblwiPkNvbW1lbnRzPC9idXR0b25cclxuICAgICAgICA8L2Rpdj5gO1xyXG4gICAgYWxsU2hvd3MuYXBwZW5kQ2hpbGQoc2hvd0luZm8pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IGRpc3BsYXlTaG93cyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBmZXRjaGVkU2hvd3MgPSBhd2FpdCBnZXRzaG93KCk7XHJcbiAgY29uc3QgU2hvd3MgPSBmZXRjaGVkU2hvd3Muc2xpY2UoMCwgMjApO1xyXG4gIGNvbnN0IGxpa2VzQXJyYXkgPSBhd2FpdCBnZXRMaWtlc0RhdGEoKTtcclxuICBsaWtlc0FycmF5LmZvckVhY2goKGxpa2UpID0+IHtcclxuICAgIFNob3dzLmZvckVhY2goKHNob3cpID0+IHtcclxuICAgICAgaWYgKGxpa2UuaXRlbV9pZCA9PT0gc2hvdy5pZCkge1xyXG4gICAgICAgIHNob3cubGlrZXMgPSBsaWtlLmxpa2VzO1xyXG4gICAgICB9IGVsc2UgaWYgKHNob3cubGlrZXMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHNob3cubGlrZXMgPSAwO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBzaG93VGVtcGxhdGUoU2hvd3MpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheVNob3dzOyIsImNvbnN0IHVybCA9ICdodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzP3BhZ2U9MSc7XHJcblxyXG5jb25zdCBnZXRzaG93ID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChgJHt1cmx9YCk7XHJcbiAgcmV0dXJuIGRhdGEuanNvbigpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0c2hvdzsiLCJjb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyc7XHJcbmNvbnN0IGFwcElkID0gJ1FBTElvWFllN0xTc0VnRzJGWUdBJztcclxuXHJcbmNvbnN0IGdldExpa2VzRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICBsZXQgZGF0YSA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9JHthcHBJZH0vbGlrZXNgKTtcclxuICBkYXRhID0gYXdhaXQgZGF0YS5qc29uKCk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5jb25zdCBwb3N0TGlrZXMgPSBhc3luYyAoc2hvd0lkLCBlbGVtZW50KSA9PiB7XHJcbiAgYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0ke2FwcElkfS9saWtlc2AsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBpdGVtX2lkOiBzaG93SWQsXHJcbiAgICB9KSxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgY29uc3QgbGlrZXNBcnJheSA9IGF3YWl0IGdldExpa2VzRGF0YSgpO1xyXG4gIGxpa2VzQXJyYXkubWFwKChhKSA9PiB7XHJcbiAgICBpZiAoYS5pdGVtX2lkID09PSBzaG93SWQpIHtcclxuICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBgJHthLmxpa2VzfSBMaWtlc1xyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cIiR7c2hvd0lkfVwiIGNsYXNzPVwiY29tbWVudC1idG5cIiAgb25jbGlja1wiY29tbWVudHNQb3BVcCgke3Nob3dJZH0pXCIgcm9sZT1cImJ1dHRvblwiPkNvbW1lbnRzPC9idXR0b24+YDtcclxuICAgIH1cclxuICAgIHJldHVybiBhO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgcG9zdExpa2VzLCBnZXRMaWtlc0RhdGEgfTsiLCJpbXBvcnQgZGlzcGxheVNob3dzIGZyb20gJy4vZGlzcGxheVNob3cuanMnO1xyXG5pbXBvcnQgeyBhZGRNb3ZpZUNvbW1lbnQsIGZldGNoQ29tbWVudCB9IGZyb20gJy4vY29tbWVudHNBcGkuanMnO1xyXG5cclxuY29uc3Qgc2hvd01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLXNlY3Rpb24nKTtcclxuLy8gUG9wVXAgbWV0aG9kXHJcbmNvbnN0IHBvcE1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbnBvcE1vZGFsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbW9kYWwnKTtcclxuY29uc3QgY29tbWVudHNQb3BVcCA9IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdjb21tZW50LWJ0bicpIHtcclxuICAgICAgY29uc3QgY29tbWVudElkID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignYnV0dG9uJykuaWQ7XHJcbiAgICAgIGRhdGEuZm9yRWFjaCgoc2hvdykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNob3dJZCA9IHNob3cuaWQ7XHJcbiAgICAgICAgaWYgKHNob3dJZC50b1N0cmluZygpID09PSBjb21tZW50SWQudG9TdHJpbmcoKSkge1xyXG4gICAgICAgICAgcG9wTW9kYWwuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgPHNwYW4gY2xhc3M9XCJkLWZsZXggamMtZmxleC1lbmRcIj48aSBjbGFzcz1cImZhcyBmYS13aW5kb3ctY2xvc2VcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9zcGFuPlxyXG4gIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1kLWNcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICA8aW1nIHNyYz0keyhzaG93LmltYWdlLm1lZGl1bSl9IGFsdD1cInNob3cgaW1hZ2VcIiBjbGFzcz1cInBvcHVwLWltZyBzaG93IGNvbC1zbS0xMiBtYi0zXCI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8aDIgY2xhc3M9XCJkLWZsZXggY2VudGVyXCI+JHtzaG93Lm5hbWV9PC9oMj5cclxuICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LWQtY1wiPlxyXG4gICAgICA8aDMgY2xhc3M9XCJkLWZsZXhcIj5QcmVtaWVyZWQgT246ICR7c2hvdy5wcmVtaWVyZWR9PC9oMz5cclxuICAgICAgPHAgY2xhc3M9XCJkLWZsZXggc2hvdy1kZXNjXCI+JHtzaG93LnN1bW1hcnl9PC9wPlxyXG4gICAgICA8aDQgY2xhc3M9XCJkLWZsZXggbXQtMVwiPkxhbmd1YWdlOiAke3Nob3cubGFuZ3VhZ2V9PC9oND5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxoMyBjbGFzcz1cImQtZmxleCBjZW50ZXJcIj48aSBjbGFzcz1cImZhIGZhLWZ3IGZhLWNvbW1lbnQgbWItNVwiPjwvaT4gIENvbW1lbnRzKDApPC9oMz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LWQtYyBtYi01IFwiPlxyXG4gICAgICA8dWwgY2xhc3M9XCJkLWZsZXggcy1hcm91bmQgY29tbWVudC1saXN0LWhlYWRlciBmb250LXctYm9sZFwiPlxyXG4gICAgICA8bGk+UG9zdGVkIDwvbGk+IDxsaT5CeTwvbGk+IDxsaT4gQ29tbWVudDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50cy1saXN0LWJvZHlcIj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Zm9ybSBjbGFzcz1cImNhcmQgYmctbGlnaHQgbWItNVwiIGlkPVwiY29tbWVudC1mb3JtXCIgbWV0aG9kPVwiUE9TVFwiPlxyXG4gICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LWQtYyAgY2FyZC1ib2R5XCI+XHJcbiAgICAgICA8aDMgY2xhc3M9XCJjZW50ZXIgdGV4dC1zdWNjZXNzXCI+QWRkIGNvbW1lbnQ8L2gzPjxicj5cclxuICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidmlld2VyLW5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBuYW1lXCIgcmVxdWlyZWQ+PGJyPlxyXG4gICAgICAgPHRleHRhcmVhIGlkPVwidmlld2VyLWNvbW1lbnRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiICByb3dzPVwiNFwiIGNvbHM9XCI0MFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgQ29tbWVudFwiIG1heC1sZW5ndGg9XCIyMFwiICByZXF1aXJlZD48L3RleHRhcmVhPjxicj5cclxuICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGlkPVwiJHtzaG93LmlkfVwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1tZCBjb21tZW50QnRuXCI+Q29tbWVudDwvYnV0dG9uPlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICA8L2Rpdj5cclxuPC9kaXY+YDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBzaG93TW9kYWwuYXBwZW5kQ2hpbGQocG9wTW9kYWwpO1xyXG4gICAgICBzaG93TW9kYWwuc3R5bGUuZGlzcGxheSA9ICgnYmxvY2snKTtcclxuICAgICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmEtd2luZG93LWNsb3NlJyk7XHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gY2xvc2VCdG4pIHtcclxuICAgICAgICAgIHNob3dNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIC8vIFN1Ym1pdCB2aWV3ZXIgaW5mb1xyXG4gICAgICBjb25zdCB2aWV3ZXJVc2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2aWV3ZXItbmFtZScpO1xyXG4gICAgICBjb25zdCB2aWV3ZXJDb21tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ZpZXdlci1jb21tZW50Jyk7XHJcbiAgICAgIGNvbnN0IHN1Ym1pdFZpZXdlckluZm8gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29tbWVudCA9IHtcclxuICAgICAgICAgIHVzZXJuYW1lOiB2aWV3ZXJVc2VyTmFtZS52YWx1ZSxcclxuICAgICAgICAgIGNvbW1lbnQ6IHZpZXdlckNvbW1lbnQudmFsdWUsXHJcbiAgICAgICAgICBpdGVtX2lkOiBjb21tZW50SWQsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYWRkTW92aWVDb21tZW50KGNvbW1lbnQpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgY29tbWVudFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudHMtbGlzdC1ib2R5Jyk7XHJcbiAgICAgIGNvbnN0IGNvbW1lbnRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgY29tbWVudExpc3Quc2V0QXR0cmlidXRlKCdjbGFzcycsICdkLWZsZXggZmxleC1kLWMnKTtcclxuICAgICAgLy8gVVBEQVRFIENPTU1FTlRTXHJcbiAgICAgIGNvbnN0IHVwZGF0ZUNvbW1lbnRzID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF5KCk7XHJcbiAgICAgICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XHJcbiAgICAgICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICBjb21tZW50TGlzdC5pbm5lckhUTUwgKz0gYDxsaSBjbGFzcz1cImQtZmxleCBzLWFyb3VuZCB2aWVyd2VyQ29tbWVudExpc3RcIj4gXHJcbiAgICAgICAgICA8c3Bhbj4ke3llYXJ9ICR7LW1vbnRofSAkey1kYXl9PC9zcGFuPiAgPHNwYW4+JHt2aWV3ZXJVc2VyTmFtZS52YWx1ZX08L3NwYW4+ICA8c3Bhbj4ke3ZpZXdlckNvbW1lbnQudmFsdWV9PC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICBgO1xyXG4gICAgICAgIGNvbW1lbnRTZWN0aW9uLmFwcGVuZENoaWxkKGNvbW1lbnRMaXN0KTtcclxuICAgICAgfTtcclxuICAgICAgLy8gU2hvdyBDb21tZW50c1xyXG4gICAgICBjb25zdCBkaXNwbGF5Q29tbWVudCA9IGFzeW5jIChjb21tZW50SWQpID0+IHtcclxuICAgICAgICBjb25zdCBhbGxDb21tZW50cyA9IGF3YWl0IGZldGNoQ29tbWVudChjb21tZW50SWQpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBhbGxDb21tZW50cy5mb3JFYWNoKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbW1lbnRMaXN0LmlubmVySFRNTCArPSBgPGxpIGNsYXNzPVwiZC1mbGV4IHMtYXJvdW5kIHZpZXJ3ZXJDb21tZW50TGlzdFwiPiBcclxuICAgICAgICAgIDxzcGFuPiR7ZGF0YS5jcmVhdGlvbl9kYXRlfTwvc3Bhbj4gIDxzcGFuPiR7ZGF0YS51c2VybmFtZX08L3NwYW4+ICA8c3Bhbj4ke2RhdGEuY29tbWVudH08L3NwYW4+PC9saT5cclxuICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgIGNvbW1lbnRTZWN0aW9uLmFwcGVuZENoaWxkKGNvbW1lbnRMaXN0KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgY29tbWVudExpc3QuaW5uZXJIVE1MICs9IGA8bGkgY2xhc3M9XCJkLWZsZXggcy1hcm91bmQgdmllcndlckNvbW1lbnRMaXN0XCI+JHtlcnIuZGFyYX08L2xpPlxyXG4gICAgICAgICAgYDtcclxuICAgICAgICAgIGNvbW1lbnRTZWN0aW9uLmFwcGVuZENoaWxkKGNvbW1lbnRMaXN0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBkaXNwbGF5Q29tbWVudChjb21tZW50SWQpO1xyXG5cclxuICAgICAgY29uc3QgY29tbWVudHNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudEJ0bicpO1xyXG4gICAgICAvLyBsaXN0ZW4gdG8gdXNlcnMgZW5ldmVudFxyXG4gICAgICBjb21tZW50c0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHN1Ym1pdFZpZXdlckluZm8oKTtcclxuICAgICAgICB1cGRhdGVDb21tZW50cygpO1xyXG4gICAgICAgIHZpZXdlclVzZXJOYW1lLnZhbHVlID0gJyc7XHJcbiAgICAgICAgdmlld2VyQ29tbWVudC52YWx1ZSA9ICcnO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgYXdhaXQgZGlzcGxheVNob3dzKCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21tZW50c1BvcFVwOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==