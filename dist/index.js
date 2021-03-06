// { "framework": "Weex" }
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(92)
	var __weex_style__ = __webpack_require__(93)
	var __weex_script__ = __webpack_require__(94)

	__weex_define__('@weex-component/2db5b02b2b2467ace4cdd68021452568', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/2db5b02b2b2467ace4cdd68021452568',undefined,undefined)

/***/ },

/***/ 92:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "children": [
	    {
	      "type": "image",
	      "attr": {
	        "src": "http://ata2-img.cn-hangzhou.img-pub.aliyun-inc.com/7d42775b8f0d0c86589082dc9ee179c2.png"
	      },
	      "classList": [
	        "bannar-image"
	      ]
	    },
	    {
	      "type": "text",
	      "classList": [
	        "message"
	      ],
	      "attr": {
	        "value": function () {return this.message}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "quotes"
	      ],
	      "attr": {
	        "value": function () {return this.quotes}
	      }
	    }
	  ]
	}

/***/ },

/***/ 93:
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "display": "flex",
	    "flexDirection": "column",
	    "alignItems": "center"
	  },
	  "bannar-image": {
	    "width": 200,
	    "height": 200
	  },
	  "message": {
	    "paddingTop": 20,
	    "paddingBottom": 40,
	    "color": "#0055dd",
	    "fontSize": 28
	  },
	  "quotes": {
	    "fontSize": 16,
	    "color": "#666666"
	  }
	}

/***/ },

/***/ 94:
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    message: 'Welcome to Use Weexpack!',
	    quotes: 'A Tool To Build WEEX Faster'
	  }}
	};}
	/* generated by weex-loader */


/***/ }

/******/ });