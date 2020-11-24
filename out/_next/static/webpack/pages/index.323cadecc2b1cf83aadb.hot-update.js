webpackHotUpdate_N_E("pages/index",{

/***/ "./frontend/champscreen/components/index.jsx":
/*!***************************************************!*\
  !*** ./frontend/champscreen/components/index.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);




var _jsxFileName = "C:\\Users\\X1\\Desktop\\lolcito\\frontend\\champscreen\\components\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();




var ChampScreen = function ChampScreen(_ref) {
  _s();

  var champSelected = _ref.champSelected;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_4___default()({
              method: 'get',
              url: 'http://ddragon.leagueoflegends.com/cdn/10.21.1/data/es_MX/champion/Aatrox.json'
            });

          case 2:
            response = _context.sent;
            console.log("campeon traido", response.data.data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);
  console.log("en EUA", champSelected);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: champSelected
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: champSelected
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, _this);
};

_s(ChampScreen, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = ChampScreen;
/* harmony default export */ __webpack_exports__["default"] = (ChampScreen);

var _c;

$RefreshReg$(_c, "ChampScreen");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZnJvbnRlbmQvY2hhbXBzY3JlZW4vY29tcG9uZW50cy9pbmRleC5qc3giXSwibmFtZXMiOlsiQ2hhbXBTY3JlZW4iLCJjaGFtcFNlbGVjdGVkIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFxQjtBQUFBOztBQUFBLE1BQW5CQyxhQUFtQixRQUFuQkEsYUFBbUI7QUFDckNDLHlEQUFTLGdNQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2lCQyw0Q0FBSyxDQUFDO0FBQ3RCQyxvQkFBTSxFQUFFLEtBRGM7QUFFdEJDLGlCQUFHLEVBQUM7QUFGa0IsYUFBRCxDQUR0Qjs7QUFBQTtBQUNBQyxvQkFEQTtBQVFDQyxtQkFBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVosRUFBOEJGLFFBQVEsQ0FBQ0csSUFBVCxDQUFjQSxJQUE1Qzs7QUFSRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELElBU0MsRUFURCxDQUFUO0FBV0lGLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBcUJQLGFBQXJCO0FBQ0Esc0JBQ0o7QUFBQSw0QkFDSTtBQUFBLGdCQUFNQTtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUEsZ0JBQU1BO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURJO0FBTVAsQ0FuQkQ7O0dBQU1ELFc7O0tBQUFBLFc7QUFxQlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjMyM2NhZGVjYzJiMWNmODNhYWRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdH1mcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuY29uc3QgQ2hhbXBTY3JlZW4gPSAoe2NoYW1wU2VsZWN0ZWR9KSA9PiB7XHJcbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgICAgICAgICB1cmw6J2h0dHA6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLzEwLjIxLjEvZGF0YS9lc19NWC9jaGFtcGlvbi9BYXRyb3guanNvbidcclxuICAgICAgICB9KTtcclxuICAgXHJcbiAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhbXBlb24gdHJhaWRvXCIsIHJlc3BvbnNlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH0sW10pXHJcbiAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVuIEVVQVwiLGNoYW1wU2VsZWN0ZWQpO1xyXG4gICAgICAgIHJldHVybiAoICBcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdj57Y2hhbXBTZWxlY3RlZH08L2Rpdj5cclxuICAgICAgICA8ZGl2PntjaGFtcFNlbGVjdGVkfTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYW1wU2NyZWVuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=