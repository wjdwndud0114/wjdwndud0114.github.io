(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "https://wjdwndud0114.github.io/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("gsap/umd/TweenMax");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TransitContext = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TransitContext = exports.TransitContext = _react2.default.createContext({
  transitFunc: null
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _TweenMax = __webpack_require__(3);

var _TweenMax2 = _interopRequireDefault(_TweenMax);

var _TransitContext = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StyledHome = _styledComponents2.default.div.withConfig({
  displayName: 'Home__StyledHome',
  componentId: 'swdjwr-0'
})(['flex:1 1 auto;background:#0068A0;display:flex;justify-content:center;align-items:center;flex-direction:column;h1,p{color:#fff;}h1{font-size:3rem;}p{font-size:2rem;}button{font-size:2rem;color:#fff;background:transparent;border:1px solid white;padding:1rem;margin-top:3rem;}button:hover{cursor:pointer;transform:scale(1.1);}']);

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this.transitFunc = null;
    _this.h = _react2.default.createRef();
    _this.t = _react2.default.createRef();
    _this.about = _react2.default.createRef();
    return _this;
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var tl = new TimelineMax();
      tl.from(this.h.current, 2, {
        opacity: 0,
        y: -30,
        ease: Back.easeOut
      }).from(this.t.current, 2, {
        opacity: 0,
        y: 30,
        ease: Power2.easeOut
      }, "-=0.5").from(this.about.current, 2, {
        opacity: 0,
        y: 40,
        ease: Back.easeOut
      }, "-=0.5");
    }
  }, {
    key: 'handleAboutClick',
    value: function handleAboutClick(history) {
      this.transitFunc("/", "/about", function () {
        history.push('/about');
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        StyledHome,
        null,
        _react2.default.createElement(
          _TransitContext.TransitContext.Consumer,
          null,
          function (c) {
            _this2.transitFunc = c.transitFunc;
          }
        ),
        _react2.default.createElement(
          'h1',
          { ref: this.h, className: 'header' },
          'Hi, I\'m Kevin.'
        ),
        _react2.default.createElement(
          'p',
          { ref: this.t, className: 'text' },
          'I\'m currently working on this website to show what I can do!'
        ),
        _react2.default.createElement(
          _reactStatic.Prefetch,
          { path: '/about' },
          _react2.default.createElement(_reactStatic.Route, { render: function render(_ref) {
              var history = _ref.history;
              return _react2.default.createElement(
                'button',
                {
                  ref: _this2.about,
                  type: 'button',
                  onClick: function onClick() {
                    _this2.handleAboutClick(history);
                  } },
                'About me'
              );
            } })
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'These are my works: SEGFAULT'
    )
  );
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _TweenMax = __webpack_require__(3);

var _TweenMax2 = _interopRequireDefault(_TweenMax);

var _TransitContext = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StyledAbout = _styledComponents2.default.div.withConfig({
  displayName: 'About__StyledAbout',
  componentId: 'sc-1qgr3zb-0'
})(['flex:1 1 auto;background:#CAF27B;display:flex;justify-content:center;align-items:center;flex-direction:column;h1,p,button{color:#1f2d3d;}h1{font-size:3rem;}p{font-size:2rem;}button{font-size:2rem;background:transparent;border:1px solid #1f2d3d;padding:1rem;margin-top:3rem;}button:hover{cursor:pointer;transform:scale(1.1);}']);

var About = function (_Component) {
  _inherits(About, _Component);

  function About(props) {
    _classCallCheck(this, About);

    var _this = _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).call(this, props));

    _this.transitFunc = null;
    _this.h = _react2.default.createRef();
    _this.t = _react2.default.createRef();
    _this.about = _react2.default.createRef();
    return _this;
  }

  _createClass(About, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var tl = new TimelineMax();
      tl.from(this.h.current, 1.5, {
        opacity: 0,
        y: -40,
        ease: Back.easeOut
      }).from(this.t.current, 1.5, {
        opacity: 0,
        y: 40,
        ease: Back.easeIn
      }, "-=1").from(this.about.current, 2, {
        opacity: 0,
        y: 40,
        ease: Back.easeOut
      }, "+=0.5");
    }
  }, {
    key: 'handleHomeClick',
    value: function handleHomeClick(history) {
      this.transitFunc("/about", "/", function () {
        history.push('/');
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        StyledAbout,
        null,
        _react2.default.createElement(
          _TransitContext.TransitContext.Consumer,
          null,
          function (c) {
            _this2.transitFunc = c.transitFunc;
          }
        ),
        _react2.default.createElement(
          'h1',
          { ref: this.h },
          'I\'m a full stack developer.'
        ),
        _react2.default.createElement(
          'p',
          { ref: this.t },
          'Reach me: jyj022@ucsd.edu'
        ),
        _react2.default.createElement(
          _reactStatic.Prefetch,
          { path: '/' },
          _react2.default.createElement(_reactStatic.Route, { render: function render(_ref) {
              var history = _ref.history;
              return _react2.default.createElement(
                'button',
                {
                  ref: _this2.about,
                  type: 'button',
                  onClick: function onClick() {
                    _this2.handleHomeClick(history);
                  } },
                'Home'
              );
            } })
        )
      );
    }
  }]);

  return About;
}(_react.Component);

exports.default = About;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'These are my works: SEGFAULT'
    )
  );
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      '404 - Oh no\'s! We couldn\'t find that page :('
    )
  );
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(15);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  body {\n    font-family: \'HelveticaNeue-Light\', \'Helvetica Neue Light\', \'Helvetica Neue\', Helvetica, Arial,\n      \'Lucida Grande\', sans-serif;\n    font-weight: 300;\n    font-size: 16px;\n    margin: 0;\n    padding: 0;\n  }\n'], ['\n  body {\n    font-family: \'HelveticaNeue-Light\', \'Helvetica Neue Light\', \'Helvetica Neue\', Helvetica, Arial,\n      \'Lucida Grande\', sans-serif;\n    font-weight: 300;\n    font-size: 16px;\n    margin: 0;\n    padding: 0;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactHotLoader = __webpack_require__(16);

var _Intro = __webpack_require__(17);

var _Intro2 = _interopRequireDefault(_Intro);

var _Content = __webpack_require__(18);

var _Content2 = _interopRequireDefault(_Content);

var _Transit = __webpack_require__(28);

var _Transit2 = _interopRequireDefault(_Transit);

var _TransitContext = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject);

var AppStyles = _styledComponents2.default.div.withConfig({
  displayName: 'App__AppStyles',
  componentId: 'sc-14cqgfn-0'
})(['']);

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      introDone: false,
      transitData: {}
    };

    _this.introEndHandler = function () {
      // called when intro animation finishes
      _this.transition('/intro', window.location.pathname, function () {
        return _this.setState({ introDone: true });
      });
    };

    _this.transition = function (from, to, callback) {
      // call to trigger transition
      _this.setState({ transitData: { from: from, to: to, callback: callback } });
    };

    _this.transitCallBack = function () {};

    _this.intro = _react2.default.createRef();
    _this.content = _react2.default.createRef();
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactStatic.Router,
        null,
        _react2.default.createElement(
          AppStyles,
          null,
          _react2.default.createElement(GlobalStyle, null),
          _react2.default.createElement(_Transit2.default, {
            transitData: this.state.transitData,
            globalCallBack: this.transitCallBack
          }),
          this.state.introDone ? null : _react2.default.createElement(_Intro2.default, { end: this.introEndHandler, ref: this.intro }),
          _react2.default.createElement(
            _TransitContext.TransitContext.Provider,
            { value: { transitFunc: this.transition } },
            _react2.default.createElement(_Content2.default, { introDone: this.state.introDone, ref: this.content })
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _TweenMax = __webpack_require__(3);

var _TweenMax2 = _interopRequireDefault(_TweenMax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StyledIntro = _styledComponents2.default.div.withConfig({
  displayName: 'Intro__StyledIntro',
  componentId: 'sc-1sznn8o-0'
})(['position:absolute;top:0;bottom:0;left:0;right:0;background:#22C9AD;display:flex;justify-content:center;align-items:center;z-index:10;.animation-container{width:auto;height:auto;display:flex;align-items:flex-end;}svg.logo{width:6rem;stroke-dasharray:400;stroke-dashoffset:0;.logo.path{fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:2;stroke-linecap:round;}}svg.dot{margin-left:.5rem;width:1.5rem;scale:1;.dot.circle{fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:1;stroke-linecap:round;}}']);

var Intro = function (_Component) {
  _inherits(Intro, _Component);

  function Intro(props) {
    _classCallCheck(this, Intro);

    var _this = _possibleConstructorReturn(this, (Intro.__proto__ || Object.getPrototypeOf(Intro)).call(this, props));

    _this.logo = _react2.default.createRef();
    _this.dot = _react2.default.createRef();
    return _this;
  }

  _createClass(Intro, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var loading = new TimelineMax();
      loading.to(this.dot.current, 1, { scale: .5, ease: Elastic.easeIn, transformOrigin: "center" }).to(this.dot.current, 1.5, { scale: 1, ease: Elastic.easeOut }).repeat(-1);

      // enter animation
      new TimelineMax().from(this.logo.current, 2, {
        strokeDashoffset: 400,
        ease: Power4.easeIn
      }).from(this.logo.current, 3, {
        x: -150,
        opacity: 0,
        ease: Power3.easeOut
      }, 0).from('.logo.path', 2.5, {
        fillOpacity: 0,
        ease: Power3.easeOut
      }, '-=1').from(this.dot.current, 1.5, {
        scale: 0,
        ease: Elastic.easeOut
      }, '-=2').add(function () {
        _this2.props.end();
      }, "-=0.7").add(loading, "-=0.7");
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        StyledIntro,
        null,
        _react2.default.createElement(
          'div',
          { className: 'animation-container' },
          _react2.default.createElement(
            'svg',
            { ref: this.logo, className: 'logo', viewBox: '0 0 130 100' },
            _react2.default.createElement('path', { className: 'logo path', d: 'M0.7,1.2h10.9v48.6H12L47.2,1.2h12.3L11.6,67.5v31H0.7V1.2z M24.6,44.2l6.5-9.8l31.5,64.1H50.4L24.6,44.2z' }),
            _react2.default.createElement('path', { className: 'logo path', d: 'M75.4,84.1l6.8-7.6c4.9,8.6,11.5,12.8,18.1,12.8c11.9,0,17.3-7,17.3-23V11.6H82.4V1.1h46v66.3c0,18.1-7,32.9-27.9,32.9 C91.2,100.3,81.3,95.3,75.4,84.1z' })
          ),
          _react2.default.createElement(
            'svg',
            { ref: this.dot, className: 'dot', viewBox: '0 0 150 100' },
            _react2.default.createElement('circle', { className: 'dot circle', cx: '50', cy: '50', r: '50' })
          )
        )
      );
    }
  }]);

  return Intro;
}(_react.Component);

exports.default = Intro;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStaticRoutes = __webpack_require__(19);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { Link } from 'react-static'


var StyledContent = _styledComponents2.default.div.withConfig({
  displayName: 'Content__StyledContent',
  componentId: 'i8k38q-0'
})(['position:absolute;top:0;bottom:0;left:0;right:0;display:flex;nav{position:absolute;top:0;}']);

var Content = function (_Component) {
  _inherits(Content, _Component);

  function Content() {
    _classCallCheck(this, Content);

    return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).apply(this, arguments));
  }

  _createClass(Content, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        StyledContent,
        null,
        this.props.introDone && _react2.default.createElement(_reactStaticRoutes2.default, null)
      );
    }
  }]);

  return Content;
}(_react.Component);

exports.default = Content;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(20);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(21);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(22);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(23);

var _reactUniversalComponent = __webpack_require__(24);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Home.jsx',
  file: '/mnt/c/Users/kevin/Desktop/repos/kj/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 8)), (0, _importCss3.default)('src/containers/Home.jsx', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Home.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(8);
  },
  chunkName: function chunkName() {
    return 'src/containers/Home.jsx';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Work.jsx',
  file: '/mnt/c/Users/kevin/Desktop/repos/kj/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 9)), (0, _importCss3.default)('src/containers/Work.jsx', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Work.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(9);
  },
  chunkName: function chunkName() {
    return 'src/containers/Work.jsx';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/About.jsx',
  file: '/mnt/c/Users/kevin/Desktop/repos/kj/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 10)), (0, _importCss3.default)('src/containers/About.jsx', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/About.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(10);
  },
  chunkName: function chunkName() {
    return 'src/containers/About.jsx';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Contact.jsx',
  file: '/mnt/c/Users/kevin/Desktop/repos/kj/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 11)), (0, _importCss3.default)('src/containers/Contact.jsx', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Contact.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(11);
  },
  chunkName: function chunkName() {
    return 'src/containers/Contact.jsx';
  }
}), universalOptions);
var t_4 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/404.jsx',
  file: '/mnt/c/Users/kevin/Desktop/repos/kj/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 12)), (0, _importCss3.default)('src/containers/404.jsx', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/404.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(12);
  },
  chunkName: function chunkName() {
    return 'src/containers/404.jsx';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2, t_3, t_4];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 4

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          // If Comp is used as a component here, it triggers React to re-mount the entire
          // component tree underneath during reconciliation, losing all internal state.
          // By unwrapping it here we keep the real, static component exposed directly to React.
          return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(25);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(26);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(27);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (Component) return Component;
          return requireAsync(props, context);
        }).then(function (Component) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });
          return Component;
        });
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(6);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _TweenMax = __webpack_require__(3);

var _TweenMax2 = _interopRequireDefault(_TweenMax);

var _lottieWeb = __webpack_require__(29);

var _lottieWeb2 = _interopRequireDefault(_lottieWeb);

var _transit_data = __webpack_require__(30);

var _transit_data2 = _interopRequireDefault(_transit_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StyledTransition = _styledComponents2.default.div.withConfig({
  displayName: 'Transit__StyledTransition',
  componentId: 'wkibat-0'
})(['div{position:absolute;top:0;bottom:0;left:0;right:0;z-index:100;overflow:hidden;display:flex;justify-content:center;align-items:center;}svg{flex:1 1 auto;height:100%;}']);

function getColors(data) {
  switch (data.to) {
    case '/':
      return { top: '#0068A0', middle: '#6AE8A1' };
    case '/about':
      return { top: '#CAF27B', middle: '#6AE8A1' };
    default:
      return { top: '#0068A0', middle: '#CAF27B' };
  }
}

var Transit = function (_Component) {
  _inherits(Transit, _Component);

  function Transit(props) {
    _classCallCheck(this, Transit);

    var _this = _possibleConstructorReturn(this, (Transit.__proto__ || Object.getPrototypeOf(Transit)).call(this, props));

    _this.animContainer = _react2.default.createRef();
    _this.anim = null;
    return _this;
  }

  _createClass(Transit, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.anim = _lottieWeb2.default.loadAnimation({
        container: this.animContainer.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: _transit_data2.default,
        rendererSettings: {
          preserveAspectRatio: 'none',
          viewBoxOnly: 'true'
        }
      });
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      console.log("Should Transit update? %s", this.props.transitData !== nextProps.transitData ? "Yes" : "No");
      return this.props.transitData !== nextProps.transitData;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var _this2 = this;

      if (this.props.transitData.from === this.props.transitData.to) return;
      console.log("Animation starting.");
      this.animContainer.current.style.display = "flex";
      this.anim.goToAndStop(0);
      var colors = getColors(this.props.transitData);
      document.getElementById("transit_layer1").childNodes[0].childNodes[0].style.fill = colors.middle;
      document.getElementById("transit_layer2").childNodes[0].childNodes[0].style.fill = colors.top;

      var s = { speed: 2 };
      var tl = new TimelineMax();
      tl.add(function () {
        return _this2.anim.play();
      }).to(s, 1.5, {
        speed: 1,
        ease: Power3.easeIn,
        onUpdate: function onUpdate() {
          _this2.anim.setSpeed(s.speed);
        }
      });
      tl.add(function () {
        return _this2.handleDone();
      }, 2);
    }
  }, {
    key: 'handleDone',
    value: function handleDone() {
      console.log("Transition animation finished.");
      this.props.transitData.callback();
      this.animContainer.current.style.display = "none"; // hide transition
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        StyledTransition,
        null,
        _react2.default.createElement('div', { ref: this.animContainer })
      );
    }
  }]);

  return Transit;
}(_react.Component);

exports.default = Transit;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("lottie-web");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = {"v":"5.3.3","fr":60,"ip":0,"op":180,"w":1920,"h":1080,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"#transit_layer2","ln":"transit_layer2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,540,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.569,"y":0.569},"o":{"x":0.167,"y":0.167},"n":"0p569_0p569_0p167_0p167","t":11,"s":[{"i":[[0,0],[0,-6.252],[0,-5.772],[0,-10.494],[0,-10.494],[0,-12.763],[0,-12.764],[0,-60.66],[0,-60.66],[0,-35.1],[0,-35.1],[0,-23.469],[0,-23.469],[0,-3.777],[0,-3.777],[0,-21.97],[0,-13.843],[0,-13.856]],"o":[[0,3.848],[0,6.252],[0,10.494],[0,10.494],[0,12.763],[0,12.763],[0,60.66],[0,60.66],[0,35.1],[0,35.1],[0,23.469],[0,23.468],[0,3.778],[0,3.778],[0,21.97],[0,13.843],[0,20.784],[0,0]],"v":[[-968,-538],[-968,-522.129],[-968,-503.372],[-968,-471.889],[-968,-440.406],[-968,-402.116],[-968,-363.826],[-968,-181.847],[-968,0.133],[-968,105.433],[-968,210.732],[-968,281.138],[-968,351.544],[-968,362.876],[-968,374.209],[-968,440.118],[-968,481.647],[-968,544]],"c":false}],"e":[{"i":[[0,0],[-28.281,2.925],[-12.04,-21.031],[14.827,-29.042],[1.064,-29.538],[-9.034,-33.125],[2.613,-33.641],[13.802,-37.436],[7.279,-38.87],[-1.702,-12.936],[-4.073,-12.17],[-14.825,-31.629],[-11.193,-33.011],[1.428,-5.057],[2.137,-4.558],[2.691,-31.202],[31.52,-30.043],[33.201,19.771]],"o":[[20.216,-6.546],[28.281,-2.925],[14.684,25.65],[-14.827,29.042],[-1.216,33.721],[9.034,33.125],[-3.063,39.427],[-13.802,37.436],[-2.362,12.614],[1.702,12.936],[11.064,33.054],[14.825,31.629],[1.616,4.767],[-1.428,5.057],[-13.294,28.356],[-3.741,43.383],[-32.623,31.095],[0,0]],"v":[[-968,-538],[-889.178,-557.291],[-822.621,-535.215],[-833.652,-452.453],[-868.307,-363.861],[-851.105,-263.871],[-836,-164],[-865.613,-49.562],[-901.55,64.042],[-902.116,102.639],[-893.029,140.57],[-852.348,236.893],[-811.473,333.151],[-811.775,348.085],[-817.707,362.705],[-863.728,444.615],[-835.773,572.22],[-968,544.001]],"c":false}]},{"i":{"x":0.661,"y":0.661},"o":{"x":0.297,"y":0.297},"n":"0p661_0p661_0p297_0p297","t":26,"s":[{"i":[[0,0],[-28.281,2.925],[-12.04,-21.031],[14.827,-29.042],[1.064,-29.538],[-9.034,-33.125],[2.613,-33.641],[13.802,-37.436],[7.279,-38.87],[-1.702,-12.936],[-4.073,-12.17],[-14.825,-31.629],[-11.193,-33.011],[1.428,-5.057],[2.137,-4.558],[2.691,-31.202],[31.52,-30.043],[33.201,19.771]],"o":[[20.216,-6.546],[28.281,-2.925],[14.684,25.65],[-14.827,29.042],[-1.216,33.721],[9.034,33.125],[-3.063,39.427],[-13.802,37.436],[-2.362,12.614],[1.702,12.936],[11.064,33.054],[14.825,31.629],[1.616,4.767],[-1.428,5.057],[-13.294,28.356],[-3.741,43.383],[-32.623,31.095],[0,0]],"v":[[-968,-538],[-889.178,-557.291],[-822.621,-535.215],[-833.652,-452.453],[-868.307,-363.861],[-851.105,-263.871],[-836,-164],[-865.613,-49.562],[-901.55,64.042],[-902.116,102.639],[-893.029,140.57],[-852.348,236.893],[-811.473,333.151],[-811.775,348.085],[-817.707,362.705],[-863.728,444.615],[-835.773,572.22],[-968,544.001]],"c":false}],"e":[{"i":[[0,0],[-78.374,2.854],[-71.041,-12.734],[7.693,-15.73],[-2.305,-13.111],[-13.093,-24.683],[1.12,-27.038],[14.812,-18.339],[6.924,-21.43],[-1.71,-13.188],[-1.123,-12.995],[-3.915,-27.869],[0.795,-28.051],[7.376,-31.795],[-2.962,-32.111],[3.584,-68.684],[49.056,-10.991],[86.14,17.298]],"o":[[48.49,-4.83],[78.374,-2.854],[13.103,2.349],[-7.693,15.73],[4.686,26.651],[13.093,24.683],[-0.932,22.502],[-14.812,18.339],[-4.01,12.411],[1.71,13.188],[2.416,27.958],[3.915,27.869],[-0.914,32.234],[-7.376,31.795],[6.317,68.487],[-2.62,50.204],[-124.936,27.993],[0,0]],"v":[[-968,-538],[-768.4,-552.929],[-534.974,-541.512],[-534.557,-510.394],[-550.337,-463.134],[-518.015,-387.212],[-494.4,-310.711],[-523.459,-251.264],[-561.506,-193.425],[-563.38,-154.784],[-557.553,-115.267],[-546.504,-31.594],[-540.273,52.218],[-556.908,148.074],[-567.73,243.744],[-504.494,440.148],[-584.645,567.902],[-968,544]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.345,"y":0.345},"n":"0p833_0p833_0p345_0p345","t":49,"s":[{"i":[[0,0],[-78.374,2.854],[-71.041,-12.734],[7.693,-15.73],[-2.305,-13.111],[-13.093,-24.683],[1.12,-27.038],[14.812,-18.339],[6.924,-21.43],[-1.71,-13.188],[-1.123,-12.995],[-3.915,-27.869],[0.795,-28.051],[7.376,-31.795],[-2.962,-32.111],[3.584,-68.684],[49.056,-10.991],[86.14,17.298]],"o":[[48.49,-4.83],[78.374,-2.854],[13.103,2.349],[-7.693,15.73],[4.686,26.651],[13.093,24.683],[-0.932,22.502],[-14.812,18.339],[-4.01,12.411],[1.71,13.188],[2.416,27.958],[3.915,27.869],[-0.914,32.234],[-7.376,31.795],[6.317,68.487],[-2.62,50.204],[-124.936,27.993],[0,0]],"v":[[-968,-538],[-768.4,-552.929],[-534.974,-541.512],[-534.557,-510.394],[-550.337,-463.134],[-518.015,-387.212],[-494.4,-310.711],[-523.459,-251.264],[-561.506,-193.425],[-563.38,-154.784],[-557.553,-115.267],[-546.504,-31.594],[-540.273,52.218],[-556.908,148.074],[-567.73,243.744],[-504.494,440.148],[-584.645,567.902],[-968,544]],"c":false}],"e":[{"i":[[0,0],[-233.526,3.515],[-4.536,-6.999],[-15.628,-17.851],[-1.855,-37.568],[25.791,-42.681],[3.799,-14.416],[3.738,-19.008],[-3.628,-17.205],[0.526,-26.526],[7.033,-23.776],[-1.519,-20.055],[-0.256,-24.443],[-6.81,-35.396],[-8.525,-35.225],[3.716,-45.402],[30.55,-3.093],[166.359,11.427]],"o":[[155.689,-2.042],[8.34,-0.126],[12.904,19.909],[24.776,28.301],[2.459,49.807],[-7.71,12.76],[-4.937,18.732],[-3.393,17.253],[5.474,25.96],[-0.492,24.789],[-5.705,19.286],[1.846,24.374],[0.377,36.043],[6.847,35.59],[10.715,44.276],[-2.505,30.604],[-247.668,25.076],[0,0]],"v":[[-968,-538],[-267.408,-547.642],[-242.419,-548.921],[-223.724,-480.243],[-128.834,-419.176],[-214.66,-296.639],[-228.567,-254.131],[-240.834,-197.326],[-249.957,-145.371],[-214.819,-73.954],[-252.644,-9.907],[-251.61,50.42],[-242.565,123.193],[-249.72,231.091],[-202.924,329.232],[-192.984,465.531],[-221.254,553.204],[-968,544]],"c":false}]},{"i":{"x":0.697,"y":0.697},"o":{"x":0.167,"y":0.167},"n":"0p697_0p697_0p167_0p167","t":71,"s":[{"i":[[0,0],[-233.526,3.515],[-4.536,-6.999],[-15.628,-17.851],[-1.855,-37.568],[25.791,-42.681],[3.799,-14.416],[3.738,-19.008],[-3.628,-17.205],[0.526,-26.526],[7.033,-23.776],[-1.519,-20.055],[-0.256,-24.443],[-6.81,-35.396],[-8.525,-35.225],[3.716,-45.402],[30.55,-3.093],[166.359,11.427]],"o":[[155.689,-2.042],[8.34,-0.126],[12.904,19.909],[24.776,28.301],[2.459,49.807],[-7.71,12.76],[-4.937,18.732],[-3.393,17.253],[5.474,25.96],[-0.492,24.789],[-5.705,19.286],[1.846,24.374],[0.377,36.043],[6.847,35.59],[10.715,44.276],[-2.505,30.604],[-247.668,25.076],[0,0]],"v":[[-968,-538],[-267.408,-547.642],[-242.419,-548.921],[-223.724,-480.243],[-128.834,-419.176],[-214.66,-296.639],[-228.567,-254.131],[-240.834,-197.326],[-249.957,-145.371],[-214.819,-73.954],[-252.644,-9.907],[-251.61,50.42],[-242.565,123.193],[-249.72,231.091],[-202.924,329.232],[-192.984,465.531],[-221.254,553.204],[-968,544]],"c":false}],"e":[{"i":[[0,0],[-167.159,3.509],[-122.762,-1.583],[-76.022,-26.668],[2.236,-27.167],[3.322,-57.726],[1.559,-75.525],[2.727,-37.126],[5.08,-44.001],[-1.453,-43.469],[-15.501,-37.706],[-3.407,-7.787],[-0.934,-3.071],[-2.562,-15.838],[0.927,-13.178],[2.052,-2.289],[3.226,-0.022],[247.87,-0.007]],"o":[[111.418,-3.221],[122.745,-2.577],[80.558,1.039],[25.722,9.023],[-4.742,57.627],[-4.34,75.416],[-0.768,37.218],[-3.245,44.174],[-4.988,43.206],[1.362,40.745],[3.232,7.861],[1.287,2.941],[4.667,15.35],[2.11,13.041],[-0.216,3.066],[-2.153,2.402],[-371.793,2.529],[0,0]],"v":[[-968,-538],[-466.586,-551.171],[-98.305,-556.258],[143.04,-543.308],[163.97,-464.255],[122.671,-295.777],[141.276,-69.919],[115.766,38.808],[123.547,171.459],[86.024,296.426],[131.516,409.954],[142.213,433.102],[145.591,442.121],[159.01,488.345],[159.48,527.975],[155.633,536.355],[147.403,541.448],[-968,543.998]],"c":false}]},{"i":{"x":0.715,"y":0.715},"o":{"x":0.369,"y":0.369},"n":"0p715_0p715_0p369_0p369","t":101,"s":[{"i":[[0,0],[-167.159,3.509],[-122.762,-1.583],[-76.022,-26.668],[2.236,-27.167],[3.322,-57.726],[1.559,-75.525],[2.727,-37.126],[5.08,-44.001],[-1.453,-43.469],[-15.501,-37.706],[-3.407,-7.787],[-0.934,-3.071],[-2.562,-15.838],[0.927,-13.178],[2.052,-2.289],[3.226,-0.022],[247.87,-0.007]],"o":[[111.418,-3.221],[122.745,-2.577],[80.558,1.039],[25.722,9.023],[-4.742,57.627],[-4.34,75.416],[-0.768,37.218],[-3.245,44.174],[-4.988,43.206],[1.362,40.745],[3.232,7.861],[1.287,2.941],[4.667,15.35],[2.11,13.041],[-0.216,3.066],[-2.153,2.402],[-371.793,2.529],[0,0]],"v":[[-968,-538],[-466.586,-551.171],[-98.305,-556.258],[143.04,-543.308],[163.97,-464.255],[122.671,-295.777],[141.276,-69.919],[115.766,38.808],[123.547,171.459],[86.024,296.426],[131.516,409.954],[142.213,433.102],[145.591,442.121],[159.01,488.345],[159.48,527.975],[155.633,536.355],[147.403,541.448],[-968,543.998]],"c":false}],"e":[{"i":[[0,0],[-235.453,0.605],[-229.796,-29.785],[5.053,-45.872],[16.574,-43.303],[-21.733,-52.979],[-8.693,-58.415],[2.26,-58.826],[-12.813,-31.574],[-12.853,-20.611],[-21.522,-23.863],[-2.219,-6.248],[2.157,-6],[0.538,-33.804],[-11.133,-28.044],[1.009,-5.33],[4.584,0.057],[354.306,8.3]],"o":[[156.923,-4.489],[231.717,-0.595],[45.767,5.932],[-5.077,46.088],[-20.469,53.48],[22.414,54.639],[8.665,58.228],[-1.308,34.05],[9.133,22.507],[17.004,27.267],[4.441,4.924],[2.134,6.008],[-11.439,31.814],[-0.48,30.17],[2.002,5.042],[-0.852,4.504],[-531.554,-6.559],[0,0]],"v":[[-968,-538],[-261.777,-552.072],[433.298,-541.598],[535.932,-448.677],[415.412,-379.223],[444.552,-209.923],[544.79,-63.83],[491.343,104.496],[534.765,197.041],[557.05,266.419],[622.289,337.394],[634.921,352.761],[634.538,371.885],[594.535,465.087],[631.743,547.607],[633.708,563.763],[626.472,575.457],[-968,543.999]],"c":false}]},{"i":{"x":0.788,"y":0.788},"o":{"x":0.437,"y":0.437},"n":"0p788_0p788_0p437_0p437","t":132,"s":[{"i":[[0,0],[-235.453,0.605],[-229.796,-29.785],[5.053,-45.872],[16.574,-43.303],[-21.733,-52.979],[-8.693,-58.415],[2.26,-58.826],[-12.813,-31.574],[-12.853,-20.611],[-21.522,-23.863],[-2.219,-6.248],[2.157,-6],[0.538,-33.804],[-11.133,-28.044],[1.009,-5.33],[4.584,0.057],[354.306,8.3]],"o":[[156.923,-4.489],[231.717,-0.595],[45.767,5.932],[-5.077,46.088],[-20.469,53.48],[22.414,54.639],[8.665,58.228],[-1.308,34.05],[9.133,22.507],[17.004,27.267],[4.441,4.924],[2.134,6.008],[-11.439,31.814],[-0.48,30.17],[2.002,5.042],[-0.852,4.504],[-531.554,-6.559],[0,0]],"v":[[-968,-538],[-261.777,-552.072],[433.298,-541.598],[535.932,-448.677],[415.412,-379.223],[444.552,-209.923],[544.79,-63.83],[491.343,104.496],[534.765,197.041],[557.05,266.419],[622.289,337.394],[634.921,352.761],[634.538,371.885],[594.535,465.087],[631.743,547.607],[633.708,563.763],[626.472,575.457],[-968,543.999]],"c":false}],"e":[{"i":[[0,0],[-266.306,3.868],[-272.63,-29.117],[-19.4,-29.415],[-37.962,-7.934],[-16.475,-19.591],[3.855,-32.339],[8.535,-77.134],[-5.237,-31.071],[1.252,-30.769],[-3.172,-19.53],[-1.49,-15.842],[0.528,-23.081],[0.031,-35.211],[-12.43,-29.839],[-9.025,-26.035],[28.102,-0.815],[401.898,15.721]],"o":[[177.53,-3.047],[274.151,-3.982],[35.037,3.742],[21.352,32.375],[25.056,5.237],[20.962,24.926],[-9.187,77.059],[-3.465,31.319],[5.118,30.366],[-0.804,19.769],[2.551,15.706],[2.161,22.986],[-0.805,35.201],[-0.029,32.324],[10.596,25.436],[9.209,26.563],[-602.589,17.479],[0,0]],"v":[[-968,-538],[-169.103,-551.009],[653.37,-561.552],[603.157,-468.53],[719.296,-461.59],[789.135,-429.661],[823.167,-338.074],[751.798,-116.47],[789.033,-29.583],[781.97,62.53],[782.872,121.881],[798.91,166.841],[793.593,235.898],[794.913,341.521],[793.413,438.482],[857.204,491.057],[840.283,573.685],[-968,543.999]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.414,"y":0.414},"n":"0p833_0p833_0p414_0p414","t":151,"s":[{"i":[[0,0],[-266.306,3.868],[-272.63,-29.117],[-19.4,-29.415],[-37.962,-7.934],[-16.475,-19.591],[3.855,-32.339],[8.535,-77.134],[-5.237,-31.071],[1.252,-30.769],[-3.172,-19.53],[-1.49,-15.842],[0.528,-23.081],[0.031,-35.211],[-12.43,-29.839],[-9.025,-26.035],[28.102,-0.815],[401.898,15.721]],"o":[[177.53,-3.047],[274.151,-3.982],[35.037,3.742],[21.352,32.375],[25.056,5.237],[20.962,24.926],[-9.187,77.059],[-3.465,31.319],[5.118,30.366],[-0.804,19.769],[2.551,15.706],[2.161,22.986],[-0.805,35.201],[-0.029,32.324],[10.596,25.436],[9.209,26.563],[-602.589,17.479],[0,0]],"v":[[-968,-538],[-169.103,-551.009],[653.37,-561.552],[603.157,-468.53],[719.296,-461.59],[789.135,-429.661],[823.167,-338.074],[751.798,-116.47],[789.033,-29.583],[781.97,62.53],[782.872,121.881],[798.91,166.841],[793.593,235.898],[794.913,341.521],[793.413,438.482],[857.204,491.057],[840.283,573.685],[-968,543.999]],"c":false}],"e":[{"i":[[0,0],[-342.362,9.738],[-316.037,-6.509],[-13.555,-16.034],[-7.476,-17.718],[-4.557,-29.313],[2.682,-29.103],[13.62,-40.49],[7.177,-41.826],[-1.232,-20.535],[-0.805,-20.447],[-1.166,-13.714],[-0.599,-13.746],[-0.017,-10.298],[0.049,-10.296],[1.032,-59.876],[60.06,-5.416],[432.156,21.176]],"o":[[210.683,-9.092],[342.362,-9.738],[19.227,0.396],[13.555,16.034],[11.363,26.928],[4.557,29.313],[-3.894,42.259],[-13.62,40.49],[-3.461,20.169],[1.232,20.535],[0.542,13.748],[1.167,13.714],[0.447,10.286],[0.017,10.298],[-0.284,59.884],[-1.039,60.295],[-644.315,58.102],[0,0]],"v":[[-968,-538],[-98.932,-570.468],[928.167,-579.535],[977.442,-551.401],[1009.091,-497.285],[1033.079,-412.275],[1036,-324.001],[1005.687,-200.655],[970.45,-77.958],[968.386,-16.788],[972.721,44.799],[975.581,85.976],[978.527,127.149],[979.132,158.029],[978.993,188.923],[977.383,368.57],[972.782,549.423],[-968,543.999]],"c":false}]},{"t":171}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"ml2":{"a":0,"k":4,"ix":8},"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.415686279535,0.909803926945,0.631372570992,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":180,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"#transit_layer1","ln":"transit_layer1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,540,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.569,"y":0.569},"o":{"x":0.167,"y":0.167},"n":"0p569_0p569_0p167_0p167","t":5,"s":[{"i":[[0,0],[0,-6.252],[0,-5.772],[0,-23.257],[0,-23.258],[0,-60.66],[0,-60.66],[0,-35.1],[0,-35.1],[0,-23.469],[0,-23.469],[0,-29.525],[0,-13.843],[0,-13.856]],"o":[[0,3.848],[0,6.252],[0,23.258],[0,23.257],[0,60.66],[0,60.66],[0,35.1],[0,35.1],[0,23.469],[0,23.468],[0,29.525],[0,13.843],[0,20.784],[0,0]],"v":[[-968,-538],[-968,-522.129],[-968,-503.372],[-968,-433.599],[-968,-363.826],[-968,-181.847],[-968,0.133],[-968,105.433],[-968,210.732],[-968,281.138],[-968,351.544],[-968,440.118],[-968,481.647],[-968,544]],"c":false}],"e":[{"i":[[0,0],[-28.188,7.759],[-7.598,-22.533],[9.836,-61.318],[5.427,-60.44],[6.458,-33.95],[-3.349,-34.108],[-13.046,-28.1],[-7.351,-29.688],[-1.274,-19.877],[0.307,-19.825],[0.555,-62.001],[22.567,-8.734],[36.741,11.191]],"o":[[21.031,-10.714],[28.188,-7.759],[19.39,57.502],[-9.836,61.318],[-3.064,34.135],[-6.458,33.95],[2.988,30.438],[13.045,28.101],[4.765,19.246],[1.274,19.877],[-0.958,61.996],[-0.217,24.198],[-50.004,19.353],[0,0]],"v":[[-968,-538],[-887.236,-572.542],[-826.621,-557.215],[-820.698,-377.811],[-852,-194],[-869.585,-91.959],[-877.55,10.042],[-849.561,96.868],[-815.029,182.57],[-806.447,241.427],[-805.473,301.151],[-819.728,486.614],[-807.773,558.218],[-968,543.999]],"c":false}]},{"i":{"x":0.684,"y":0.684},"o":{"x":0.334,"y":0.334},"n":"0p684_0p684_0p334_0p334","t":20,"s":[{"i":[[0,0],[-28.188,7.759],[-7.598,-22.533],[9.836,-61.318],[5.427,-60.44],[6.458,-33.95],[-3.349,-34.108],[-13.046,-28.1],[-7.351,-29.688],[-1.274,-19.877],[0.307,-19.825],[0.555,-62.001],[22.567,-8.734],[36.741,11.191]],"o":[[21.031,-10.714],[28.188,-7.759],[19.39,57.502],[-9.836,61.318],[-3.064,34.135],[-6.458,33.95],[2.988,30.438],[13.045,28.101],[4.765,19.246],[1.274,19.877],[-0.958,61.996],[-0.217,24.198],[-50.004,19.353],[0,0]],"v":[[-968,-538],[-887.236,-572.542],[-826.621,-557.215],[-820.698,-377.811],[-852,-194],[-869.585,-91.959],[-877.55,10.042],[-849.561,96.868],[-815.029,182.57],[-806.447,241.427],[-805.473,301.151],[-819.728,486.614],[-807.773,558.218],[-968,543.999]],"c":false}],"e":[{"i":[[0,0],[-121.023,-57.693],[-14.256,-76.255],[-6.642,-71.122],[7.428,-12.022],[9.369,-33.129],[-7.492,-18.177],[-2.595,-22.297],[1.295,-46.273],[-4.934,-22.555],[2.087,-48.691],[21.659,-9.866],[41.934,-2.469],[71.201,4.277]],"o":[[93.6,-25.145],[70.026,33.382],[13.127,70.215],[1.314,14.071],[-18.097,29.289],[-5.35,18.919],[8.554,20.754],[5.35,45.981],[-0.646,23.079],[10.415,47.61],[-1.019,23.779],[-38.227,17.414],[-106.558,6.273],[0,0]],"v":[[-968,-538],[-566.177,-555.741],[-524.796,-326.721],[-484.029,-116.339],[-501.542,-77.729],[-560.35,7.18],[-541.344,63.017],[-512.297,123.772],[-518.129,262.523],[-518.121,331.787],[-472.584,470.723],[-526.102,517.987],[-647.839,550.558],[-968,544]],"c":false}]},{"i":{"x":0.688,"y":0.688},"o":{"x":0.349,"y":0.349},"n":"0p688_0p688_0p349_0p349","t":43.029,"s":[{"i":[[0,0],[-121.023,-57.693],[-14.256,-76.255],[-6.642,-71.122],[7.428,-12.022],[9.369,-33.129],[-7.492,-18.177],[-2.595,-22.297],[1.295,-46.273],[-4.934,-22.555],[2.087,-48.691],[21.659,-9.866],[41.934,-2.469],[71.201,4.277]],"o":[[93.6,-25.145],[70.026,33.382],[13.127,70.215],[1.314,14.071],[-18.097,29.289],[-5.35,18.919],[8.554,20.754],[5.35,45.981],[-0.646,23.079],[10.415,47.61],[-1.019,23.779],[-38.227,17.414],[-106.558,6.273],[0,0]],"v":[[-968,-538],[-566.177,-555.741],[-524.796,-326.721],[-484.029,-116.339],[-501.542,-77.729],[-560.35,7.18],[-541.344,63.017],[-512.297,123.772],[-518.129,262.523],[-518.121,331.787],[-472.584,470.723],[-526.102,517.987],[-647.839,550.558],[-968,544]],"c":false}],"e":[{"i":[[0,0],[-210.387,5.367],[-29.733,-22.911],[-7.977,-54.494],[14.052,-42.588],[8.165,-54.42],[-0.01,-41.275],[6.669,-28.251],[-16.824,-47.992],[-19.715,-39.003],[9.437,-38.065],[10.118,-26.336],[26.443,-1.639],[161.393,14.802]],"o":[[140.304,-1.279],[37.524,-0.957],[43.626,33.616],[6.495,44.374],[-17.242,52.258],[-6.124,40.818],[0.007,29.027],[-11.685,49.495],[14.457,41.242],[17.691,35],[-6.789,27.383],[-9.501,24.731],[-241.692,14.978],[0,0]],"v":[[-968,-538],[-336.7,-547.205],[-224.514,-556.968],[-154.905,-407.121],[-183.331,-275.619],[-248.359,-123.878],[-224.321,-2.408],[-248.309,81.304],[-279.347,230.68],[-170.385,303.595],[-183.388,420.525],[-218.471,497.55],[-242.13,573.427],[-968,544]],"c":false}]},{"i":{"x":0.698,"y":0.698},"o":{"x":0.358,"y":0.358},"n":"0p698_0p698_0p358_0p358","t":65,"s":[{"i":[[0,0],[-210.387,5.367],[-29.733,-22.911],[-7.977,-54.494],[14.052,-42.588],[8.165,-54.42],[-0.01,-41.275],[6.669,-28.251],[-16.824,-47.992],[-19.715,-39.003],[9.437,-38.065],[10.118,-26.336],[26.443,-1.639],[161.393,14.802]],"o":[[140.304,-1.279],[37.524,-0.957],[43.626,33.616],[6.495,44.374],[-17.242,52.258],[-6.124,40.818],[0.007,29.027],[-11.685,49.495],[14.457,41.242],[17.691,35],[-6.789,27.383],[-9.501,24.731],[-241.692,14.978],[0,0]],"v":[[-968,-538],[-336.7,-547.205],[-224.514,-556.968],[-154.905,-407.121],[-183.331,-275.619],[-248.359,-123.878],[-224.321,-2.408],[-248.309,81.304],[-279.347,230.68],[-170.385,303.595],[-183.388,420.525],[-218.471,497.55],[-242.13,573.427],[-968,544]],"c":false}],"e":[{"i":[[0,0],[-167.706,1.164],[-193.964,-31.446],[-4.448,-23.624],[-1.597,-47.98],[-3.648,-47.905],[-0.404,-34.246],[13.311,-49.516],[12.422,-45.558],[-7,-45.27],[-28.993,-40.025],[2.114,-30.447],[38.528,-1.024],[244.668,22.43]],"o":[[111.466,-10.323],[196.491,-1.363],[23.73,3.847],[8.882,47.178],[1.598,48.017],[2.601,34.15],[0.605,51.27],[-12.259,45.602],[-12.051,44.194],[7.553,48.842],[17.904,24.717],[-2.669,38.449],[-367.559,9.767],[0,0]],"v":[[-968,-538],[-465.896,-570.134],[123.081,-545.571],[128.962,-473.693],[162.961,-333.743],[138.345,-191.73],[180.9,-98.21],[141.202,50.401],[104.187,187.143],[67.783,319.657],[144.315,446.645],[207.659,512.76],[133.564,601.524],[-968,544]],"c":false}]},{"i":{"x":0.715,"y":0.715},"o":{"x":0.369,"y":0.369},"n":"0p715_0p715_0p369_0p369","t":95,"s":[{"i":[[0,0],[-167.706,1.164],[-193.964,-31.446],[-4.448,-23.624],[-1.597,-47.98],[-3.648,-47.905],[-0.404,-34.246],[13.311,-49.516],[12.422,-45.558],[-7,-45.27],[-28.993,-40.025],[2.114,-30.447],[38.528,-1.024],[244.668,22.43]],"o":[[111.466,-10.323],[196.491,-1.363],[23.73,3.847],[8.882,47.178],[1.598,48.017],[2.601,34.15],[0.605,51.27],[-12.259,45.602],[-12.051,44.194],[7.553,48.842],[17.904,24.717],[-2.669,38.449],[-367.559,9.767],[0,0]],"v":[[-968,-538],[-465.896,-570.134],[123.081,-545.571],[128.962,-473.693],[162.961,-333.743],[138.345,-191.73],[180.9,-98.21],[141.202,50.401],[104.187,187.143],[67.783,319.657],[144.315,446.645],[207.659,512.76],[133.564,601.524],[-968,544]],"c":false}],"e":[{"i":[[0,0],[-236.758,0.546],[-273.93,-43.511],[16.292,-28.614],[12.843,-52.785],[-20.058,-38.896],[-9.039,-37.188],[-0.61,-64.723],[-34.667,-58.755],[-22.884,-26.03],[3.82,-23.065],[-8.921,-24.377],[43.294,-2.681],[369.772,15.988]],"o":[[157.426,-13.799],[277.364,-0.64],[32.519,5.165],[-26.88,47.209],[-10.346,42.523],[17.54,34.014],[15.288,62.895],[0.643,68.217],[17.613,29.85],[15.437,17.559],[-4.242,25.609],[14.908,40.735],[-553.097,34.248],[0,0]],"v":[[-968,-538],[-258.964,-579.944],[572.243,-541.553],[523.444,-455.667],[442.724,-314.085],[457.247,-183.6],[546.959,-111.951],[521.452,80.545],[550.682,283.108],[652.731,303.04],[624.747,367.353],[629.2,445.101],[694.413,557.714],[-968,543.999]],"c":false}]},{"i":{"x":0.787,"y":0.787},"o":{"x":0.437,"y":0.437},"n":"0p787_0p787_0p437_0p437","t":126,"s":[{"i":[[0,0],[-236.758,0.546],[-273.93,-43.511],[16.292,-28.614],[12.843,-52.785],[-20.058,-38.896],[-9.039,-37.188],[-0.61,-64.723],[-34.667,-58.755],[-22.884,-26.03],[3.82,-23.065],[-8.921,-24.377],[43.294,-2.681],[369.772,15.988]],"o":[[157.426,-13.799],[277.364,-0.64],[32.519,5.165],[-26.88,47.209],[-10.346,42.523],[17.54,34.014],[15.288,62.895],[0.643,68.217],[17.613,29.85],[15.437,17.559],[-4.242,25.609],[14.908,40.735],[-553.097,34.248],[0,0]],"v":[[-968,-538],[-258.964,-579.944],[572.243,-541.553],[523.444,-455.667],[442.724,-314.085],[457.247,-183.6],[546.959,-111.951],[521.452,80.545],[550.682,283.108],[652.731,303.04],[624.747,367.353],[629.2,445.101],[694.413,557.714],[-968,543.999]],"c":false}],"e":[{"i":[[0,0],[-552.839,3.287],[-33.866,-26.954],[-5.56,-41.98],[12.602,-61.654],[7.865,-57.079],[-7.733,-34.479],[-5.528,-46.715],[-6.014,-37.143],[-4.729,-18.925],[-12.984,-45.469],[9.265,-34.5],[28.771,0.264],[407.219,14.606]],"o":[[368.443,-10.75],[43.282,-0.257],[33.133,26.37],[8.263,62.384],[-11.539,56.452],[-4.824,35.005],[10.295,45.9],[4.422,37.366],[3.118,19.256],[11.464,45.875],[9.809,34.35],[-7.462,27.788],[-611.124,-5.606],[0,0]],"v":[[-968,-538],[690.167,-573.535],[817.602,-548.616],[868,-432.001],[858.017,-243.479],[796.45,-81.958],[821.568,21.03],[850.527,159.149],[851.268,272.025],[877.291,324.443],[899.383,464.569],[944.997,561.546],[864.782,593.423],[-968,543.999]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.414,"y":0.414},"n":"0p833_0p833_0p414_0p414","t":145,"s":[{"i":[[0,0],[-552.839,3.287],[-33.866,-26.954],[-5.56,-41.98],[12.602,-61.654],[7.865,-57.079],[-7.733,-34.479],[-5.528,-46.715],[-6.014,-37.143],[-4.729,-18.925],[-12.984,-45.469],[9.265,-34.5],[28.771,0.264],[407.219,14.606]],"o":[[368.443,-10.75],[43.282,-0.257],[33.133,26.37],[8.263,62.384],[-11.539,56.452],[-4.824,35.005],[10.295,45.9],[4.422,37.366],[3.118,19.256],[11.464,45.875],[9.809,34.35],[-7.462,27.788],[-611.124,-5.606],[0,0]],"v":[[-968,-538],[690.167,-573.535],[817.602,-548.616],[868,-432.001],[858.017,-243.479],[796.45,-81.958],[821.568,21.03],[850.527,159.149],[851.268,272.025],[877.291,324.443],[899.383,464.569],[944.997,561.546],[864.782,593.423],[-968,543.999]],"c":false}],"e":[{"i":[[0,0],[-632.041,-14.511],[-15.131,-35.856],[-1.076,-57.086],[10.704,-40.178],[-4.478,-43.231],[-17.232,-54.608],[10.44,-39.869],[11.546,-45.887],[-6.647,-15.146],[2.402,-21.887],[7.914,-29.403],[23.095,-0.634],[431.365,7.724]],"o":[[421.375,-18.682],[38.907,0.893],[22.198,52.605],[0.784,41.572],[-11.189,41.997],[5.9,56.958],[12.403,39.303],[-11.986,45.774],[-4.036,16.04],[8.849,20.162],[-3.321,30.268],[-6.005,22.31],[-646.686,17.749],[0,0]],"v":[[-968,-538],[928.167,-579.535],[1006.184,-492.676],[1036,-324.001],[1011.672,-201.657],[970.45,-77.958],[1040.721,78.799],[1058.527,201.149],[978.062,318.092],[1025.204,333.581],[1013.383,398.57],[1008.065,489.763],[972.782,549.423],[-968,543.999]],"c":false}]},{"t":165}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"ml2":{"a":0,"k":4,"ix":8},"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.133333340287,0.78823530674,0.678431391716,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":180,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"#transit_layer0","ln":"transit_layer0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,540,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.569,"y":0.569},"o":{"x":0.167,"y":0.167},"n":"0p569_0p569_0p167_0p167","t":0,"s":[{"i":[[0,0],[0,-11.543],[0,-46.516],[0,-121.32],[0,-70.2],[0,-46.938],[0,-29.525],[0,-13.843],[0,-13.856]],"o":[[0,7.695],[0,46.516],[0,121.32],[0,70.2],[0,46.938],[0,29.525],[0,13.843],[0,20.784],[0,0]],"v":[[-968,-538],[-968,-503.372],[-968,-363.826],[-968,0.133],[-968,210.732],[-968,351.544],[-968,440.118],[-968,481.647],[-968,544]],"c":false}],"e":[{"i":[[0,0],[-26.403,-40.646],[7.892,-76.698],[4.503,-109.325],[-13.604,-62.969],[4.92,-42.763],[1.556,-39.202],[26.385,-26.667],[37.824,11.115]],"o":[[39.659,-12.62],[42.001,64.659],[-11.2,108.843],[-2.651,64.367],[9.09,42.074],[-4.485,38.976],[-1.488,37.485],[-34.754,35.125],[0,0]],"v":[[-968,-538],[-822.621,-535.215],[-816,-304],[-879.55,18.042],[-837.029,206.57],[-811.473,333.151],[-863.728,438.615],[-819.773,542.22],[-968,544]],"c":false}]},{"i":{"x":0.661,"y":0.661},"o":{"x":0.297,"y":0.297},"n":"0p661_0p661_0p297_0p297","t":15,"s":[{"i":[[0,0],[-26.403,-40.646],[7.892,-76.698],[4.503,-109.325],[-13.604,-62.969],[4.92,-42.763],[1.556,-39.202],[26.385,-26.667],[37.824,11.115]],"o":[[39.659,-12.62],[42.001,64.659],[-11.2,108.843],[-2.651,64.367],[9.09,42.074],[-4.485,38.976],[-1.488,37.485],[-34.754,35.125],[0,0]],"v":[[-968,-538],[-822.621,-535.215],[-816,-304],[-879.55,18.042],[-837.029,206.57],[-811.473,333.151],[-863.728,438.615],[-819.773,542.22],[-968,544]],"c":false}],"e":[{"i":[[0,0],[-133.96,-53.765],[-16.918,-65.417],[6.783,-69.861],[11.979,-53.28],[-9.324,-61.333],[12.117,-95.029],[43.106,-6.626],[93.283,7.679]],"o":[[99.689,-19.092],[62.707,25.167],[17.574,67.954],[-5.278,54.354],[-13.609,60.527],[14.398,94.71],[-5.516,43.262],[-137.505,21.136],[0,0]],"v":[[-968,-538],[-534.974,-541.512],[-486.4,-344.711],[-431.506,-141.425],[-519.553,-3.267],[-504.273,182.218],[-448.494,464.148],[-550.645,545.902],[-968,544]],"c":false}]},{"i":{"x":0.686,"y":0.686},"o":{"x":0.345,"y":0.345},"n":"0p686_0p686_0p345_0p345","t":38.029,"s":[{"i":[[0,0],[-133.96,-53.765],[-16.918,-65.417],[6.783,-69.861],[11.979,-53.28],[-9.324,-61.333],[12.117,-95.029],[43.106,-6.626],[93.283,7.679]],"o":[[99.689,-19.092],[62.707,25.167],[17.574,67.954],[-5.278,54.354],[-13.609,60.527],[14.398,94.71],[-5.516,43.262],[-137.505,21.136],[0,0]],"v":[[-968,-538],[-534.974,-541.512],[-486.4,-344.711],[-431.506,-141.425],[-519.553,-3.267],[-504.273,182.218],[-448.494,464.148],[-550.645,545.902],[-968,544]],"c":false}],"e":[{"i":[[0,0],[-235.003,-22.488],[-1.419,-52.004],[17.903,-148.474],[-16.262,-36.279],[-1.671,-27.082],[34.654,-104.24],[44.919,-3.13],[150.13,7.021]],"o":[[157.721,-10.675],[51.787,4.956],[4.078,149.494],[-4.759,39.471],[11.098,24.76],[6.763,109.641],[-14.205,42.729],[-224.39,15.638],[0,0]],"v":[[-968,-538],[-259.833,-547.535],[-132,-458],[-245.55,-23.958],[-197.499,85.204],[-163.473,159.151],[-172.617,488.571],[-293.218,549.425],[-968,544]],"c":false}]},{"i":{"x":0.697,"y":0.697},"o":{"x":0.356,"y":0.356},"n":"0p697_0p697_0p356_0p356","t":60.057,"s":[{"i":[[0,0],[-235.003,-22.488],[-1.419,-52.004],[17.903,-148.474],[-16.262,-36.279],[-1.671,-27.082],[34.654,-104.24],[44.919,-3.13],[150.13,7.021]],"o":[[157.721,-10.675],[51.787,4.956],[4.078,149.494],[-4.759,39.471],[11.098,24.76],[6.763,109.641],[-14.205,42.729],[-224.39,15.638],[0,0]],"v":[[-968,-538],[-259.833,-547.535],[-132,-458],[-245.55,-23.958],[-197.499,85.204],[-163.473,159.151],[-172.617,488.571],[-293.218,549.425],[-968,544]],"c":false}],"e":[{"i":[[0,0],[-359.895,-54.941],[-4.642,-66.4],[25.16,-118.622],[18.156,-36.573],[-7.888,-24.2],[-17.002,-82.947],[48.465,-5.892],[249.08,14.116]],"o":[[244.091,-20.826],[65.8,10.045],[8.457,120.966],[-8.472,39.943],[-11.318,22.799],[26.239,80.503],[9.803,47.827],[-369.541,44.924],[0,0]],"v":[[-968,-538],[124.167,-545.535],[198,-360],[162.45,2.042],[98.986,106.814],[74.527,179.151],[195.383,402.571],[148.782,541.424],[-968,544]],"c":false}]},{"i":{"x":0.715,"y":0.715},"o":{"x":0.369,"y":0.369},"n":"0p715_0p715_0p369_0p369","t":90.094,"s":[{"i":[[0,0],[-359.895,-54.941],[-4.642,-66.4],[25.16,-118.622],[18.156,-36.573],[-7.888,-24.2],[-17.002,-82.947],[48.465,-5.892],[249.08,14.116]],"o":[[244.091,-20.826],[65.8,10.045],[8.457,120.966],[-8.472,39.943],[-11.318,22.799],[26.239,80.503],[9.803,47.827],[-369.541,44.924],[0,0]],"v":[[-968,-538],[124.167,-545.535],[198,-360],[162.45,2.042],[98.986,106.814],[74.527,179.151],[195.383,402.571],[148.782,541.424],[-968,544]],"c":false}],"e":[{"i":[[0,0],[-507.864,-79.553],[8.331,-84.149],[-11.457,-74.026],[-1.232,-60.248],[-21.011,-32.955],[-36.396,-80.385],[49.142,-4.526],[368.946,13.36]],"o":[[344.768,-27.696],[83.542,13.086],[-7.38,74.543],[9.217,59.552],[0.799,39.075],[47.438,74.405],[20.355,44.956],[-549.944,50.656],[0,0]],"v":[[-968,-538],[574.167,-541.535],[462,-314],[530.45,-99.958],[523.081,80.674],[536.527,197.151],[719.383,388.571],[688.782,533.423],[-968,543.999]],"c":false}]},{"i":{"x":0.788,"y":0.788},"o":{"x":0.437,"y":0.437},"n":"0p788_0p788_0p437_0p437","t":121.133,"s":[{"i":[[0,0],[-507.864,-79.553],[8.331,-84.149],[-11.457,-74.026],[-1.232,-60.248],[-21.011,-32.955],[-36.396,-80.385],[49.142,-4.526],[368.946,13.36]],"o":[[344.768,-27.696],[83.542,13.086],[-7.38,74.543],[9.217,59.552],[0.799,39.075],[47.438,74.405],[20.355,44.956],[-549.944,50.656],[0,0]],"v":[[-968,-538],[574.167,-541.535],[462,-314],[530.45,-99.958],[523.081,80.674],[536.527,197.151],[719.383,388.571],[688.782,533.423],[-968,543.999]],"c":false}],"e":[{"i":[[0,0],[-576.687,-73.791],[-7.711,-88.355],[10.99,-77.405],[-10.716,-34.7],[-3.947,-24.494],[-11.645,-83.475],[65.655,-6.878],[423.546,21.814]],"o":[[389.16,-25.109],[87.973,11.257],[6.797,77.885],[-5.105,35.957],[7.321,23.705],[13.409,83.21],[9.121,65.381],[-630.145,66.018],[0,0]],"v":[[-968,-538],[776.167,-539.535],[892,-300.001],[816.45,-77.958],[845.568,27.03],[870.527,97.15],[897.383,348.571],[932.782,543.423],[-968,543.999]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.414,"y":0.414},"n":"0p833_0p833_0p414_0p414","t":140.156,"s":[{"i":[[0,0],[-576.687,-73.791],[-7.711,-88.355],[10.99,-77.405],[-10.716,-34.7],[-3.947,-24.494],[-11.645,-83.475],[65.655,-6.878],[423.546,21.814]],"o":[[389.16,-25.109],[87.973,11.257],[6.797,77.885],[-5.105,35.957],[7.321,23.705],[13.409,83.21],[9.121,65.381],[-630.145,66.018],[0,0]],"v":[[-968,-538],[776.167,-539.535],[892,-300.001],[816.45,-77.958],[845.568,27.03],[870.527,97.15],[897.383,348.571],[932.782,543.423],[-968,543.999]],"c":false}],"e":[{"i":[[0,0],[-628.633,-67.129],[-7.766,-92.125],[14.353,-83.652],[-1.61,-40.894],[-0.396,-27.515],[1.095,-80.467],[60.06,-5.416],[432.156,21.176]],"o":[[422.511,-36.222],[91.929,9.817],[7.13,84.575],[-6.921,40.337],[1.083,27.497],[1.159,80.466],[-0.82,60.298],[-644.315,58.102],[0,0]],"v":[[-968,-538],[928.167,-579.535],[1036,-324.001],[970.45,-77.958],[972.721,44.799],[978.527,127.149],[977.383,368.57],[972.782,549.423],[-968,543.999]],"c":false}]},{"t":160}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"ml2":{"a":0,"k":4,"ix":8},"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":180,"st":0,"bm":0}],"markers":[]}

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.a5f46f50.js.map