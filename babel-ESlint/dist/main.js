/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError(\"attempted to get private field on non-instance\"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\nfunction _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError(\"attempted to get private field on non-instance\"); } return fn; }\n\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError(\"attempted to set private field on non-instance\"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError(\"attempted to set read only private field\"); } descriptor.value = value; } return value; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar arr = [1, 2, 3];\n\nvar codeES6 = function codeES6() {\n  var _console;\n\n  return (_console = console).log.apply(_console, arr);\n};\n\ncodeES6();\n\nvar Game = /*#__PURE__*/function () {\n  function Game(bar) {\n    _classCallCheck(this, Game);\n\n    this.bar = bar;\n    this.publicMethod();\n  }\n\n  _createClass(Game, [{\n    key: \"publicMethod\",\n    value: function publicMethod() {\n      return console.log('Inside public method. Bar =' + this.bar);\n    }\n  }]);\n\n  return Game;\n}();\n\nvar myGame = new Game(); // Create paragraph node\n\nvar p = document.createElement('p');\np.textContent = \"I like \".concat(myGame.name, \".\");\n\nvar _bar = new WeakMap();\n\nvar _privateMethod = new WeakSet();\n\nvar FooClass = function FooClass(bar) {\n  _classCallCheck(this, FooClass);\n\n  _privateMethod.add(this);\n\n  _bar.set(this, {\n    writable: true,\n    value: void 0\n  });\n\n  _classPrivateFieldSet(this, _bar, bar);\n\n  _classPrivateMethodGet(this, _privateMethod, _privateMethod2).call(this);\n};\n\nvar _privateMethod2 = function _privateMethod2() {\n  return console.log('Inside private method. Bar =' + _classPrivateFieldGet(this, _bar));\n};\n\nvar Foo = new FooClass('Lalala'); // Create heading node\n\nvar heading = document.createElement('h1');\nheading.textContent = 'Interesting!'; // Append heading node to the DOM\n\nvar app = document.querySelector('#root');\napp.append(heading);\n\n//# sourceURL=webpack://webpacktests/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;