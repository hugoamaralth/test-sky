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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/display/display.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/display/display.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\r\\n.categories {\\r\\n    overflow: hidden;\\r\\n    margin-top: 20px;\\r\\n}\\r\\n\\r\\n.categories span {\\r\\n    font-weight: bold;\\r\\n    margin-left: 10px;\\r\\n}\\r\\n\\r\\nbody.dark .categories span {\\r\\n    color: #ccc;\\r\\n}\\r\\n\\r\\n.categories .itens {\\r\\n    margin-top: 10px;\\r\\n    overflow: auto;\\r\\n    display: flex;\\r\\n}\\r\\n\\r\\n.categories .itens div {\\r\\n    margin-left: 10px;\\r\\n}\\r\\n.categories .itens div img {\\r\\n    width: 130px;\\r\\n    border-radius: 5px;\\r\\n}\\r\\n\\r\\n.categories .itens::-webkit-scrollbar, .highlights::-webkit-scrollbar {\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n.categories .itens, .highlights {\\r\\n    -ms-overflow-style: none;\\r\\n}\\r\\n\\r\\n@media (min-width: 800px) {\\r\\n    .categories .itens div img {\\r\\n        width: 160px;\\r\\n        cursor: pointer;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media (min-width: 1100px) {\\r\\n    .categories .itens div img {\\r\\n        width: 200px;\\r\\n    }\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/display/display.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/highlights/highlights.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/highlights/highlights.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".highlights {\\r\\n    margin-top: 20px;\\r\\n    display: flex;\\r\\n    flex-wrap: nowrap;\\r\\n    overflow: auto;\\r\\n    padding-left: 10px;\\r\\n}\\r\\n\\r\\n#highlights {\\r\\n    display: flex;\\r\\n    flex-wrap: nowrap;\\r\\n    overflow: auto;\\r\\n}\\r\\n\\r\\n.highlights img {\\r\\n    max-width: 90%;\\r\\n    max-height: 500px;\\r\\n    margin: 0 3% 0 0;\\r\\n    border-radius: 5px;\\r\\n}\\r\\n\\r\\n.highlights .bt {\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n@media (min-width: 800px) {\\r\\n    #highlights {\\r\\n        position: absolute;\\r\\n        width: calc(100% - 10px);\\r\\n        height: 360px;\\r\\n        overflow: hidden;\\r\\n    }\\r\\n    .highlights .bt {\\r\\n        display: block;\\r\\n        position: absolute;\\r\\n        font-size: 40px;\\r\\n        z-index: 99;\\r\\n        margin-top: 130px;\\r\\n        opacity: .8;\\r\\n    }\\r\\n    .highlights .bt[nextHigh] {\\r\\n        right: 10px;\\r\\n    }\\r\\n    .highlights {\\r\\n        cursor: pointer;\\r\\n        height: 360px;\\r\\n        overflow: hidden;\\r\\n    }\\r\\n    .highlights img {\\r\\n        margin-top: 20px;\\r\\n        position: absolute;\\r\\n        opacity: 0;\\r\\n        width: 0px;\\r\\n        transition: all .4s;\\r\\n        z-index: -1;\\r\\n    }\\r\\n    .highlights img.current {\\r\\n        width: 600px;\\r\\n        margin-top: 0px;\\r\\n        opacity: 1;\\r\\n        left: 50%;\\r\\n        margin-left: -300px;\\r\\n        z-index: 9;\\r\\n    }\\r\\n    .highlights img.next {\\r\\n        opacity: 1;\\r\\n        width: 520px;\\r\\n        left: 50%;\\r\\n        margin-left: 320px;\\r\\n        z-index: 8;\\r\\n    }\\r\\n    .highlights img.prev {\\r\\n        opacity: 1;\\r\\n        width: 520px;\\r\\n        left: 50%;\\r\\n        margin-left: -840px;\\r\\n        z-index: 8;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media (min-width: 1100px) {\\r\\n    .highlights .bt {\\r\\n        margin-top: 160px;\\r\\n    }\\r\\n    .highlights, #highlights {\\r\\n        height: 420px;\\r\\n    }\\r\\n    .highlights img.current {\\r\\n        width: 700px;\\r\\n        margin-left: -350px;\\r\\n    }\\r\\n    .highlights img.next {\\r\\n        width: 620px;\\r\\n        margin-left: 370px;\\r\\n    }\\r\\n    .highlights img.prev {\\r\\n        width: 620px;\\r\\n        margin-left: -990px;\\r\\n    }\\r\\n}\\r\\n\\r\\n.highlights::-webkit-scrollbar, #highlights::-webkit-scrollbar  {\\r\\n    display: none;\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/highlights/highlights.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_server_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/server-request */ \"./src/core/server-request.js\");\n/* harmony import */ var _components_highlights_highlights__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/highlights/highlights */ \"./src/components/highlights/highlights.js\");\n/* harmony import */ var _components_display_display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/display/display */ \"./src/components/display/display.js\");\n\r\n\r\n\r\n\r\nconst App = {\r\n    data: null,\r\n    fontSize: 1,\r\n    init() {\r\n        if (eval(localStorage.getItem('isDark'))) document.body.classList.add('dark');\r\n        this.getData();\r\n        this.configEvents();\r\n    },\r\n    async getData() {\r\n        const data = await Object(_core_server_request__WEBPACK_IMPORTED_MODULE_0__[\"getDataFromServer\"])();\r\n        this.data = data;\r\n        this.fillPage();\r\n    },\r\n    fillPage() {\r\n        _components_highlights_highlights__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init(\"#highlights\", this.data.filter(it => it.type === \"highlights\")[0]);\r\n\r\n        const movies = this.data.filter(it => it.type === \"carousel-portrait\")[0].movies;\r\n        const categories = this.separeCategories(movies);\r\n        categories.forEach(cat => {\r\n            let moviesFromCat = movies.filter(m => {\r\n                return m.categories.split(', ').includes(cat);\r\n            });\r\n            Object(_components_display_display__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({ items: moviesFromCat, title: cat });\r\n        });\r\n    },\r\n    separeCategories(data) {\r\n        let categories = [];\r\n        data.map(movie => {\r\n            categories = [\r\n                ...categories,\r\n                ...movie.categories.split(\", \")\r\n            ]\r\n        });\r\n        return categories.filter((a, b) => categories.indexOf(a) === b);\r\n    },\r\n    configEvents() {\r\n        const btMenuMobile = document.querySelector(\"#bt-menu-mobile\");\r\n        const menu = document.querySelector(\"#menu\");\r\n        const body = document.body;\r\n        btMenuMobile.addEventListener('click', evt => {\r\n            const isOpened = btMenuMobile.classList.contains('opened');\r\n            if (isOpened) {\r\n                btMenuMobile.classList.remove('opened');\r\n                menu.classList.remove('opened');\r\n                body.classList.remove('fixed');\r\n            } else {\r\n                btMenuMobile.classList.add('opened');\r\n                menu.classList.add('opened');\r\n                body.classList.add('fixed');\r\n            }\r\n        });\r\n\r\n        const btsChangeTheme = document.querySelectorAll(\"[changeTheme]\");\r\n        for (const btChangeTheme of btsChangeTheme) {\r\n            btChangeTheme.addEventListener(\"click\", () => {\r\n                this.changeTheme();\r\n            })\r\n        }\r\n\r\n        const btsFontPlus = document.querySelectorAll(\"[fontPlus]\");\r\n        for (const btFontPlus of btsFontPlus) {\r\n            btFontPlus.addEventListener(\"click\", () => {\r\n                if (this.fontSize > 1.5) return;\r\n                this.fontSize += .15;\r\n                document.body.style.fontSize = `${this.fontSize}em`;\r\n            });\r\n        }\r\n\r\n        const btsFontLess = document.querySelectorAll(\"[fontLess]\");\r\n        for (const btFontLess of btsFontLess) {\r\n            btFontLess.addEventListener(\"click\", () => {\r\n                if (this.fontSize < .8) return;\r\n                this.fontSize -= .15;\r\n                document.body.style.fontSize = `${this.fontSize}em`;\r\n            });\r\n        }\r\n\r\n        const linksFooterMobile = document.querySelectorAll(\"footer .footer-content .infos li.title\");\r\n        for (const link of linksFooterMobile) {\r\n            link.addEventListener(\"click\", function () {\r\n                const ulParent = this.parentElement;\r\n                if (ulParent.classList.contains('opened')) {\r\n                    ulParent.classList.remove('opened');\r\n                } else {\r\n                    ulParent.classList.add('opened');\r\n                }\r\n            })\r\n        }\r\n    },\r\n    changeTheme() {\r\n        const body = document.body;\r\n        const isDark = body.classList.contains('dark');\r\n        if (isDark) {\r\n            body.classList.remove('dark');\r\n            localStorage.setItem('isDark', false);\r\n        } else {\r\n            body.classList.add('dark');\r\n            localStorage.setItem('isDark', true);\r\n        }\r\n    }\r\n}\r\n\r\nwindow.addEventListener('load', () => {\r\n    App.init();\r\n});\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/components/display/display.css":
/*!********************************************!*\
  !*** ./src/components/display/display.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./display.css */ \"./node_modules/css-loader/dist/cjs.js!./src/components/display/display.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/components/display/display.css?");

/***/ }),

/***/ "./src/components/display/display.js":
/*!*******************************************!*\
  !*** ./src/components/display/display.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _display_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.css */ \"./src/components/display/display.css\");\n/* harmony import */ var _display_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_display_css__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst renderItems = items => {\r\n    let ret = '';\r\n    items.forEach(it => {\r\n        ret += `<div class=\"item\">\r\n                    <img src=\"${it.images[0].url}\" alt=\"${it.title}\" title=\"${it.title}\" />\r\n                </div>`;\r\n    });\r\n    return ret;\r\n}\r\n\r\n\r\nconst Display = params => {\r\n    const html = `<section class=\"categories\">\r\n                        <span>${params.title}</span>\r\n                        <div class=\"itens\">\r\n                            ${renderItems(params.items)}\r\n                        </div>\r\n                </section>`;\r\n\r\n    document.querySelector(\"#displays\").innerHTML += html;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Display);\n\n//# sourceURL=webpack:///./src/components/display/display.js?");

/***/ }),

/***/ "./src/components/highlights/highlights.css":
/*!**************************************************!*\
  !*** ./src/components/highlights/highlights.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./highlights.css */ \"./node_modules/css-loader/dist/cjs.js!./src/components/highlights/highlights.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/components/highlights/highlights.css?");

/***/ }),

/***/ "./src/components/highlights/highlights.js":
/*!*************************************************!*\
  !*** ./src/components/highlights/highlights.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _highlights_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./highlights.css */ \"./src/components/highlights/highlights.css\");\n/* harmony import */ var _highlights_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_highlights_css__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst Highlights = {\r\n    current:0,\r\n    total:0,\r\n    init(element, data) {\r\n        const next = '<div class=\"bt\" nextHigh><i class=\"fas fa-arrow-circle-right\"></i></div>';\r\n        const prev = '<div class=\"bt\" prevHigh><i class=\"fas fa-arrow-circle-left\"></i></div>';\r\n        document.querySelector(element).innerHTML = next + prev;\r\n        const items = data.items;\r\n        let html = '';\r\n        items.forEach((it, i) => {\r\n            html += `<img order=\"${i+1}\" class=\"${i === 0 ? 'current' : (i === 1 ? 'next' : (i === items.length - 1 ? 'prev' : ''))}\" src=\"${it.images[0].url}\" alt=\"${it.title}\" title=\"${it.title}\" />`;\r\n        });\r\n        document.querySelector(element).innerHTML += html;\r\n        this.total = items.length;\r\n        this.configEvents();\r\n    },\r\n    configEvents(){\r\n        const btPrev = document.querySelector('[prevHigh]');\r\n        btPrev.addEventListener('click', ()=>{\r\n            const current = document.querySelector('.highlights img.current');\r\n            const next = document.querySelector('.highlights img.next');\r\n            const prev = document.querySelector('.highlights img.prev');\r\n            \r\n            next.classList.remove('next');\r\n\r\n            current.classList.remove('current');\r\n            current.classList.add('next');\r\n\r\n            prev.classList.remove('prev');\r\n            prev.classList.add('current');\r\n\r\n            let nextPrev = parseInt(prev.getAttribute('order'))-1;\r\n            nextPrev = nextPrev === 0 ? this.total : nextPrev;\r\n            nextPrev = document.querySelector('.highlights img[order=\"'+nextPrev+'\"]');\r\n            nextPrev.classList.add('prev');\r\n            \r\n\r\n        });\r\n\r\n        const btNext = document.querySelector('[nextHigh]');\r\n        btNext.addEventListener('click', ()=>{\r\n            const current = document.querySelector('.highlights img.current');\r\n            const next = document.querySelector('.highlights img.next');\r\n            const prev = document.querySelector('.highlights img.prev');\r\n            \r\n            current.classList.remove('current');\r\n            current.classList.add('prev');\r\n\r\n            prev.classList.remove('prev');\r\n            \r\n            next.classList.remove('next');\r\n            next.classList.add('current');\r\n\r\n            let nextNext = parseInt(next.getAttribute('order'))+1;\r\n            nextNext = nextNext > this.total ? 1 : nextNext;\r\n            nextNext = document.querySelector('.highlights img[order=\"'+nextNext+'\"]');\r\n            nextNext.classList.add('next');\r\n\r\n        });\r\n    }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Highlights);\n\n//# sourceURL=webpack:///./src/components/highlights/highlights.js?");

/***/ }),

/***/ "./src/core/server-request.js":
/*!************************************!*\
  !*** ./src/core/server-request.js ***!
  \************************************/
/*! exports provided: getDataFromServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDataFromServer\", function() { return getDataFromServer; });\nconst getDataFromServer = () => {\r\n    const movies = fetch('https://sky-frontend.herokuapp.com/movies')\r\n    .then(data => data.json())\r\n    .then(data => {\r\n        return data;\r\n    });\r\n    return movies;\r\n}\n\n//# sourceURL=webpack:///./src/core/server-request.js?");

/***/ })

/******/ });