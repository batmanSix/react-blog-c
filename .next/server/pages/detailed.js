module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("sTtx");


/***/ }),

/***/ "8lYe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_style_components_footer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("B79A");
/* harmony import */ var _static_style_components_footer_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_style_components_footer_css__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Footer = () => __jsx("div", {
  className: "footer-div"
}, __jsx("div", null, "\u7CFB\u7EDF\u7531 React+Node+Ant Desgin\u9A71\u52A8 "), __jsx("div", null, "\u795E\u6BD3\u900D\u9065"));

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "B79A":
/***/ (function(module, exports) {



/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "HWFp":
/***/ (function(module, exports) {

module.exports = require("marked");

/***/ }),

/***/ "Ilvs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_style_components_advert_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wUU3");
/* harmony import */ var _static_style_components_advert_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_style_components_advert_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const {
  TabPane
} = antd__WEBPACK_IMPORTED_MODULE_2__["Tabs"];

const Advert = () => {
  const callback = e => {
    console.log(e);
  };

  return __jsx("div", {
    className: "ad-div comm-box"
  }, __jsx("div", {
    className: "blog-title"
  }, "\u4F18\u79C0\u535A\u4E3B"), __jsx("div", {
    className: "box"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], null, "\u793E\u4EA4\u8D26\u53F7"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
    size: 28,
    icon: "github",
    className: "account",
    onClick: callback
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
    size: 28,
    icon: "qq",
    className: "account"
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
    size: 28,
    icon: "wechat",
    className: "account"
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
    size: 28,
    icon: "WeiboCircleOutlined",
    className: "account"
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (Advert);

/***/ }),

/***/ "Nm2R":
/***/ (function(module, exports) {



/***/ }),

/***/ "Yo3B":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_style_components_author_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xELm");
/* harmony import */ var _static_style_components_author_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_style_components_author_css__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Author = () => {
  const godetail = () => {
    window.location.href = "https://github.com/batmanSix";
  };

  return __jsx("div", {
    className: "author-div comm-box"
  }, __jsx("div", null, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    size: 100,
    src: "../image/avater.png"
  })), __jsx("div", {
    className: "author-introduction"
  }, "\u5065\u8EAB\u7A0B\u5E8F\u5458", __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], null, "\u793E\u4EA4\u8D26\u53F7"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    size: 28,
    icon: "github",
    className: "account",
    onClick: godetail
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    size: 28,
    icon: "qq",
    className: "account"
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    size: 28,
    icon: "wechat",
    className: "account"
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    size: 28,
    icon: "WeiboCircleOutlined",
    className: "account"
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (Author);

/***/ }),

/***/ "b0oO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_style_components_header_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("p/nH");
/* harmony import */ var _static_style_components_header_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_style_components_header_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Header = () => __jsx("div", {
  className: "antffix"
}, __jsx("div", {
  className: "header"
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
  type: "flex",
  justify: "center"
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  xs: 24,
  sm: 24,
  md: 10,
  lg: 10,
  xl: 10
}, __jsx("span", {
  className: "header-logo"
}, "\u5C0F\u5EB7"), __jsx("span", {
  className: "header-txt"
}, "\u4E13\u6CE8\u5F00\u53D1\u4E00\u767E\u5E74")), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  className: "memu-div",
  xs: 0,
  sm: 0,
  md: 14,
  lg: 8,
  xl: 6
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
  mode: "horizontal"
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
  key: "home"
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
  type: "home"
}), "\u9996\u9875"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
  key: "video"
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
  type: "youtube"
}), "\u89C6\u9891"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
  key: "life"
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
  type: "smile"
}), "\u751F\u6D3B"))))));

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "id0+":
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "p/nH":
/***/ (function(module, exports) {



/***/ }),

/***/ "sTtx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("b0oO");
/* harmony import */ var _components_Author__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Yo3B");
/* harmony import */ var _components_Advert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Ilvs");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("8lYe");
/* harmony import */ var _static_style_pages_detailed_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("v0DR");
/* harmony import */ var _static_style_pages_detailed_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_style_pages_detailed_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("id0+");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var markdown_navbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("u2le");
/* harmony import */ var markdown_navbar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(markdown_navbar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var markdown_navbar_dist_navbar_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("Nm2R");
/* harmony import */ var markdown_navbar_dist_navbar_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(markdown_navbar_dist_navbar_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("HWFp");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_11__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











 // import hljs from 'highlight.js';
// import 'highlight.js/styles/default.css';

const Detailed = props => {
  const renderer = new marked__WEBPACK_IMPORTED_MODULE_11___default.a.Renderer();
  marked__WEBPACK_IMPORTED_MODULE_11___default.a.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }
  });
  console.log(props); // let html = marked()

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "\u535A\u5BA2\u8BE6\u7EC6\u9875")), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "comm-main",
    type: "flex",
    justify: "center"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    className: "comm-left",
    xs: 24,
    sm: 24,
    md: 16,
    lg: 18,
    xl: 14
  }, __jsx("div", null, __jsx("div", {
    className: "bread-div"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"].Item, null, __jsx("a", {
    href: "/"
  }, "\u9996\u9875")), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"].Item, null, "\u89C6\u9891\u5217\u8868"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"].Item, null, "xxxx"))), __jsx("div", null, __jsx("div", {
    className: "detailed-title"
  }, "React\u5B9E\u6218\u89C6\u9891\u6559\u7A0B(\u66F4\u65B008\u96C6)"), __jsx("div", {
    className: "list-icon center"
  }, __jsx("span", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    type: "calendar"
  }), " 2019-06-28"), __jsx("span", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    type: "folder"
  }), " \u89C6\u9891\u6559\u7A0B"), __jsx("span", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    type: "fire"
  }), " 5498\u4EBA")), __jsx("div", {
    className: "detailed-content"
  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_8___default.a, {
    source: markdown,
    escapeHtml: false
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    className: "comm-right",
    xs: 0,
    sm: 0,
    md: 7,
    lg: 5,
    xl: 4
  }, __jsx(_components_Author__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null), __jsx(_components_Advert__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Affix"], {
    offsetTop: 5
  }, __jsx("div", {
    className: "detailed-nav comm-box"
  }, __jsx("div", {
    className: "nav-title"
  }, "\u6587\u7AE0\u76EE\u5F55"), __jsx(markdown_navbar__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: "article-menu",
    source: markdown,
    ordered: false
  }))))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Detailed);

/***/ }),

/***/ "u2le":
/***/ (function(module, exports) {

module.exports = require("markdown-navbar");

/***/ }),

/***/ "v0DR":
/***/ (function(module, exports) {



/***/ }),

/***/ "wUU3":
/***/ (function(module, exports) {



/***/ }),

/***/ "xELm":
/***/ (function(module, exports) {



/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });