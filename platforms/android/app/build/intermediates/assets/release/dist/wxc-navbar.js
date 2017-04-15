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

	var __weex_template__ = __webpack_require__(135)
	var __weex_style__ = __webpack_require__(136)
	var __weex_script__ = __webpack_require__(137)

	__weex_define__('@weex-component/1b1ec01998bfe7e3e49f8134cd487165', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/1b1ec01998bfe7e3e49f8134cd487165',undefined,undefined)

/***/ },

/***/ 135:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "style": {
	    "height": function () {return this.height},
	    "backgroundColor": function () {return this.backgroundColor}
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "right-text"
	      ],
	      "style": {
	        "color": function () {return this.rightItemColor}
	      },
	      "attr": {
	        "naviItemPosition": "right",
	        "value": function () {return this.rightItemTitle}
	      },
	      "events": {
	        "click": "onclickrightitem"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "left-text"
	      ],
	      "style": {
	        "color": function () {return this.leftItemColor}
	      },
	      "attr": {
	        "naviItemPosition": "left",
	        "value": function () {return this.leftItemTitle}
	      },
	      "events": {
	        "click": "onclickleftitem"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "center-text"
	      ],
	      "attr": {
	        "naviItemPosition": "center",
	        "value": function () {return this.title}
	      },
	      "style": {
	        "color": function () {return this.titleColor}
	      }
	    }
	  ]
	}

/***/ },

/***/ 136:
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "width": 750
	  },
	  "container": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "width": 750
	  },
	  "right-text": {
	    "position": "absolute",
	    "bottom": 24,
	    "right": 132,
	    "textAlign": "right",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif",
	    "borderBottom": "3px solid #f8ab37"
	  },
	  "left-text": {
	    "position": "absolute",
	    "bottom": 24,
	    "left": 132,
	    "textAlign": "left",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif",
	    "borderBottom": "3px solid #f8ab37"
	  },
	  "center-text": {
	    "position": "absolute",
	    "bottom": 25,
	    "left": 22,
	    "right": 22,
	    "textAlign": "center",
	    "fontSize": 36,
	    "fontWeight": "bold"
	  }
	}

/***/ },

/***/ 137:
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	          data: function () {return {
	                    dataRole: 'navbar',

	                    backgroundColor: 'red',

	                    height: 99,

	                    title: "中间",

	                    titleColor: 'black',

	                    rightItemTitle: '右边',

	                    rightItemColor: 'black',

	                    leftItemTitle: '哥哥哥',

	                    leftItemColor: 'black'
	          }},
	          methods: {
	                    onclickrightitem: function onclickrightitem(e) {
	                              this.$dispatch('naviBar.rightItem.click', {});
	                    },
	                    onclickleftitem: function onclickleftitem(e) {
	                              this.$dispatch('naviBar.leftItem.click', {});
	                    }
	          }
	};}
	/* generated by weex-loader */


/***/ }

/******/ });