webpackHotUpdate_N_E("pages/index",{

/***/ "./frontend/mainscreen/components/index.jsx":
/*!**************************************************!*\
  !*** ./frontend/mainscreen/components/index.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _champscreen_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../champscreen/components */ "./frontend/champscreen/components/index.jsx");
/* harmony import */ var _styles_Main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Main.scss */ "./frontend/mainscreen/styles/Main.scss");
/* harmony import */ var _styles_Main_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Main_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bodyContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bodyContainer */ "./frontend/mainscreen/components/bodyContainer.jsx");


var _jsxFileName = "C:\\Users\\X1\\Desktop\\lolcito\\frontend\\mainscreen\\components\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();






var MainScreen = function MainScreen() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      showlist = _useState[0],
      setShowList = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    id: "no champ"
  }),
      champSelected = _useState2[0],
      setChampSelected = _useState2[1];

  console.log("Campeon seleccionado", champSelected);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_Main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.MainContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.HeaderContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_Main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.HeadItem,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: "Bienvenido"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_Main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.HeadItem
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_Main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.HeadItem,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/images/logo.png",
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, _this), showlist ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_bodyContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      setChampSelected: setChampSelected,
      setShowList: setShowList
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_champscreen_components__WEBPACK_IMPORTED_MODULE_2__["default"], {
      champSelected: champSelected.id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, _this);
};

_s(MainScreen, "+cgvzuPTpe8C034nRPPjgDEGzs0=");

_c = MainScreen;
/* harmony default export */ __webpack_exports__["default"] = (MainScreen);

var _c;

$RefreshReg$(_c, "MainScreen");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZnJvbnRlbmQvbWFpbnNjcmVlbi9jb21wb25lbnRzL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJNYWluU2NyZWVuIiwidXNlU3RhdGUiLCJzaG93bGlzdCIsInNldFNob3dMaXN0IiwiaWQiLCJjaGFtcFNlbGVjdGVkIiwic2V0Q2hhbXBTZWxlY3RlZCIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJNYWluQ29udGFpbmVyIiwiSGVhZGVyQ29udGFpbmVyIiwiSGVhZEl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsa0JBQ1dDLHNEQUFRLENBQUMsSUFBRCxDQURuQjtBQUFBLE1BQ2RDLFFBRGM7QUFBQSxNQUNKQyxXQURJOztBQUFBLG1CQUVxQkYsc0RBQVEsQ0FBQztBQUMvQ0csTUFBRSxFQUFFO0FBRDJDLEdBQUQsQ0FGN0I7QUFBQSxNQUVkQyxhQUZjO0FBQUEsTUFFQ0MsZ0JBRkQ7O0FBS3JCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWixFQUFvQ0gsYUFBcEM7QUFDQSxzQkFDSTtBQUFLLGFBQVMsRUFBRUksd0RBQU0sQ0FBQ0MsYUFBdkI7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBRUQsd0RBQU0sQ0FBQ0UsZUFBdkI7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUVGLHdEQUFNLENBQUNHLFFBQXZCO0FBQUEsK0JBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFNSTtBQUFLLGlCQUFTLEVBQUVILHdEQUFNLENBQUNHO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFOSixlQU9JO0FBQUssaUJBQVMsRUFBRUgsd0RBQU0sQ0FBQ0csUUFBdkI7QUFBQSwrQkFDSTtBQUFLLGFBQUcsRUFBQyxrQkFBVDtBQUE0QixhQUFHLEVBQUM7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixFQWVRVixRQUFRLGdCQUNKLHFFQUFDLHNEQUFEO0FBQWUsc0JBQWdCLEVBQUVJLGdCQUFqQztBQUFtRCxpQkFBVyxFQUFFSDtBQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREksZ0JBR0oscUVBQUMsK0RBQUQ7QUFBYSxtQkFBYSxFQUFFRSxhQUFhLENBQUNEO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsQlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF1QkgsQ0E3QkQ7O0dBQU1KLFU7O0tBQUFBLFU7QUErQlNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjYzYmYzY2ZjNjIyMWEwZWViOTY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENoYW1wU2NyZWVuIGZyb20gJy4uLy4uL2NoYW1wc2NyZWVuL2NvbXBvbmVudHMnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL01haW4uc2NzcydcclxuaW1wb3J0IEJvZHlDb250YWluZXIgZnJvbSAnLi9ib2R5Q29udGFpbmVyJ1xyXG5cclxuY29uc3QgTWFpblNjcmVlbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtzaG93bGlzdCwgc2V0U2hvd0xpc3RdID0gdXNlU3RhdGUodHJ1ZSlcclxuICAgIGNvbnN0IFtjaGFtcFNlbGVjdGVkLCBzZXRDaGFtcFNlbGVjdGVkXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBpZDogXCJubyBjaGFtcFwiXHJcbiAgICB9KVxyXG4gICAgY29uc29sZS5sb2coXCJDYW1wZW9uIHNlbGVjY2lvbmFkb1wiLCBjaGFtcFNlbGVjdGVkKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5NYWluQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5IZWFkZXJDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5IZWFkSXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBCaWVudmVuaWRvXHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5IZWFkSXRlbX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkhlYWRJdGVtfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzaG93bGlzdCA/XHJcbiAgICAgICAgICAgICAgICAgICAgPEJvZHlDb250YWluZXIgc2V0Q2hhbXBTZWxlY3RlZD17c2V0Q2hhbXBTZWxlY3RlZH0gc2V0U2hvd0xpc3Q9e3NldFNob3dMaXN0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8Q2hhbXBTY3JlZW4gY2hhbXBTZWxlY3RlZD17Y2hhbXBTZWxlY3RlZC5pZH0gLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluU2NyZWVuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=