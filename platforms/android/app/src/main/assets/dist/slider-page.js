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

	__webpack_require__(124)
	var __weex_template__ = __webpack_require__(125)
	var __weex_style__ = __webpack_require__(126)
	var __weex_script__ = __webpack_require__(127)

	__weex_define__('@weex-component/08cefe7e724b8d5dc4dd26eb81ac7e94', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/08cefe7e724b8d5dc4dd26eb81ac7e94',undefined,undefined)

/***/ },

/***/ 121:
/***/ function(module, exports) {

	module.exports = {
	  "type": "image",
	  "classList": [
	    "slider-item"
	  ],
	  "attr": {
	    "src": function () {return this.image}
	  }
	}

/***/ },

/***/ 122:
/***/ function(module, exports) {

	module.exports = {
	  "slider-item": {
	    "width": 750,
	    "height": 1500
	  }
	}

/***/ },

/***/ 123:
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    image: '',
	    link: '',
	    href: ''
	  }},
	  methods: {
	    ready: function ready() {
	      this.href = this.link;
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },

/***/ 124:
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(121)
	var __weex_style__ = __webpack_require__(122)
	var __weex_script__ = __webpack_require__(123)

	__weex_define__('@weex-component/slider-item', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },

/***/ 125:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "slider-page"
	  ],
	  "children": [
	    {
	      "type": "slider-item",
	      "repeat": function () {return this.sliderItems}
	    }
	  ]
	}

/***/ },

/***/ 126:
/***/ function(module, exports) {

	module.exports = {
	  "slider-page": {
	    "width": 750,
	    "height": 1200
	  }
	}

/***/ },

/***/ 127:
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var img0 = '//gw.alicdn.com/tps/i2/TB1DpsmMpXXXXabaXXX20ySQVXX-512-512.png_400x400.jpg';
	module.exports = {
	  data: function () {return {
	    items: [{
	      image: img0,
	      link: '//h5.m.taobao.com/1'
	    }],
	    sliderItems: []
	  }},
	  methods: {
	    ready: function ready() {
	      this.sliderItems = this.getSliderItems();
	    },
	    getSliderItems: function getSliderItems() {
	      return this.items.map(function (item, index) {
	        return item;
	      }.bind(this));
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ }

/******/ });