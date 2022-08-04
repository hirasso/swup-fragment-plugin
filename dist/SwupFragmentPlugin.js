(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SwupFragmentPlugin"] = factory();
	else
		root["SwupFragmentPlugin"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(1);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _index2.default; // this is here for webpack to expose SwupPlugin as window.SwupPlugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _plugin = __webpack_require__(2);

var _plugin2 = _interopRequireDefault(_plugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SwupFragmentPlugin = function (_Plugin) {
	_inherits(SwupFragmentPlugin, _Plugin);

	function SwupFragmentPlugin(options) {
		_classCallCheck(this, SwupFragmentPlugin);

		var _this = _possibleConstructorReturn(this, (SwupFragmentPlugin.__proto__ || Object.getPrototypeOf(SwupFragmentPlugin)).call(this));

		_this.name = 'SwupFragmentPlugin';

		_this.clickLink = function (e) {
			var skipTransition = e.target.closest('a').matches('[' + _this.options.skipTransitionAttribute + ']');
			if (skipTransition) {
				document.documentElement.classList.add('skip-transition');
				_this.swup.skipTransition = true;
			}
		};

		_this.transitionEnd = function () {
			document.documentElement.classList.remove('skip-transition');
			_this.swup.skipTransition = false;
			if (_this.resetScrollFunction != null) _this.swup.scrollTo = _this.resetScrollFunction;
		};

		_this.willReplaceContent = function () {
			// store the original swup containers so that we can restore them later
			_this.originalSwupContainers = _this.swup.options.containers;
			// initially set this to false, until we find some fragments in the response
			_this.fragmentsReplaced = false;
			// save the current cache entry
			var currentCacheEntry = _this.swup.cache.getCurrentPage();
			// save the current cache blocks so that they can be reset in 'contentReplaced'
			_this.originalBlocks = currentCacheEntry.blocks;
			// parse the html of the current cache entry
			var doc = new DOMParser().parseFromString(currentCacheEntry.originalContent, 'text/html');
			// look for fragments in the parsed html
			var fragments = doc.querySelectorAll('[' + _this.options.fragmentAttribute + '][id]');

			// bail early if no fragments were found in the html
			if (!fragments.length) return;
			// save current [data-swup] elements
			var originalSwupElements = document.querySelectorAll('[data-swup]');

			var fragmentContainers = [];
			var fragmentBlocks = [];

			/**
    * Cycle through all found fragments and look for
    * placeholders in the current DOM. If there are any,
    * create a block entry in the cache object and add the block's id to the options
    */
			fragments.forEach(function (el, index) {
				var placeholder = document.querySelector('[data-swup-fragment][id="' + el.id + '"]');

				if (!placeholder) return;
				// delete el.dataset.swupFragment
				placeholder.dataset.swup = index;
				fragmentContainers.push('#' + el.id);
				fragmentBlocks.push(el.outerHTML);
			});

			if (!fragmentContainers.length) return;
			_this.fragmentsReplaced = true;

			// remove [data-swup] from the original swup elements
			originalSwupElements.forEach(function (el) {
				el.dataset.restoreSwup = el.dataset.swup;
				delete el.dataset.swup;
			});

			// apply the fragment blocks to the cache entry
			currentCacheEntry.blocks = fragmentBlocks;
			// update the cache
			_this.swup.cache.cacheUrl(currentCacheEntry);

			// apply the updated swup containers option
			_this.swup.options.containers = fragmentContainers;

			var scrollPlugin = _this.swup.findPlugin('ScrollPlugin');
			if (scrollPlugin != null) {
				_this.resetScrollFunction = _this.swup.scrollTo;
				_this.swup.scrollTo = function () {};
			}
		};

		_this.contentReplaced = function (popstate) {
			// bail early if no fragments were replaced
			if (!_this.fragmentsReplaced) return;

			// restore the original swup containers
			_this.swup.options.containers = _this.originalSwupContainers;
			// reset the cache with the original blocks
			var cacheEntry = _this.swup.cache.getCurrentPage();
			cacheEntry.blocks = _this.originalBlocks;
			_this.swup.cache.cacheUrl(cacheEntry);
			// restore [data-swup] attributes
			document.querySelectorAll('[data-restore-swup]').forEach(function (el) {
				el.setAttribute('data-swup', el.getAttribute('data-restore-swup'));
				el.removeAttribute('data-restore-swup');
				// el.dataset.swup = el.dataset.restoreSwup
				// delete el.dataset.restoreSwup
			});

			_this.swup.triggerEvent('fragmentReplaced', popstate);
		};

		var defaultOptions = {
			fragmentAttribute: 'data-swup-fragment',
			skipTransitionAttribute: 'data-swup-skip-transition'
		};

		_this.options = _extends({}, defaultOptions, options);
		return _this;
	}

	_createClass(SwupFragmentPlugin, [{
		key: 'mount',
		value: function mount() {
			// create an entry in swups _handlers object,
			// so that we can fire a 'fragmentsReplaced' event later
			this.swup._handlers.fragmentReplaced = [];

			this.swup.on('clickLink', this.clickLink);
			this.swup.on('transitionEnd', this.transitionEnd);
			this.swup.on('willReplaceContent', this.willReplaceContent);
			this.swup.on('contentReplaced', this.contentReplaced);
		}
	}, {
		key: 'unmount',
		value: function unmount() {
			this.swup.off('clickLink', this.clickLink);
			this.swup.off('transitionEnd', this.transitionEnd);
			this.swup.off('willReplaceContent', this.willReplaceContent);
			this.swup.off('contentReplaced', this.contentReplaced);
		}

		/**
   * Adds a class to the html to be able to skip some transitions
   * @param {clickEvent} e
   * @returns
   */


		/**
   * Removes the class for skipping transitions after each transition
   */


		/**
   * Look for matching data-swup-fragment elements in the response
   * and if there are matches, replace those instead of swups default containers.
   * @returns void
   */


		/**
   * if we replaced fragments before rendering the page,
   * reset the state so that popstate will still work as expected
   * @returns
   */

	}]);

	return SwupFragmentPlugin;
}(_plugin2.default);

exports.default = SwupFragmentPlugin;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Plugin = function () {
    function Plugin() {
        _classCallCheck(this, Plugin);

        this.isSwupPlugin = true;
    }

    _createClass(Plugin, [{
        key: "mount",
        value: function mount() {
            // this is mount method rewritten by class extending
            // and is executed when swup is enabled with plugin
        }
    }, {
        key: "unmount",
        value: function unmount() {
            // this is unmount method rewritten by class extending
            // and is executed when swup with plugin is disabled
        }
    }, {
        key: "_beforeMount",
        value: function _beforeMount() {
            // here for any future hidden auto init
        }
    }, {
        key: "_afterUnmount",
        value: function _afterUnmount() {}
        // here for any future hidden auto-cleanup


        // this is here so we can tell if plugin was created by extending this class

    }]);

    return Plugin;
}();

exports.default = Plugin;

/***/ })
/******/ ]);
});