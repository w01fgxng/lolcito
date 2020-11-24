webpackHotUpdate_N_E("pages/index",{

/***/ "./frontend/mainscreen/components/champContainer.jsx":
/*!***********************************************************!*\
  !*** ./frontend/mainscreen/components/champContainer.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Champ_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Champ.scss */ "./frontend/mainscreen/styles/Champ.scss");
/* harmony import */ var _styles_Champ_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Champ_scss__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\X1\\Desktop\\lolcito\\frontend\\mainscreen\\components\\champContainer.jsx",
    _this = undefined;




var ChampContainer = function ChampContainer(_ref) {
  var data = _ref.data,
      setShowList = _ref.setShowList;

  var handleClick = function handleClick() {
    console.log("clicked to show", data);
    setShowList(false);
    setChampSelected(data);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_Champ_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Main,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Champ_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Card,
      onClick: handleClick,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "http://ddragon.leagueoflegends.com/cdn/10.21.1/img/champion/" + data.image.full
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        children: data.id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 16
      }, _this), data.title.charAt(0).toUpperCase() + data.title.slice(1)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, _this);
};

_c = ChampContainer;
/* harmony default export */ __webpack_exports__["default"] = (ChampContainer);

var _c;

$RefreshReg$(_c, "ChampContainer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZnJvbnRlbmQvbWFpbnNjcmVlbi9jb21wb25lbnRzL2NoYW1wQ29udGFpbmVyLmpzeCJdLCJuYW1lcyI6WyJDaGFtcENvbnRhaW5lciIsImRhdGEiLCJzZXRTaG93TGlzdCIsImhhbmRsZUNsaWNrIiwiY29uc29sZSIsImxvZyIsInNldENoYW1wU2VsZWN0ZWQiLCJzdHlsZXMiLCJNYWluIiwiQ2FyZCIsImltYWdlIiwiZnVsbCIsImlkIiwidGl0bGUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQXdCO0FBQUEsTUFBdEJDLElBQXNCLFFBQXRCQSxJQUFzQjtBQUFBLE1BQWpCQyxXQUFpQixRQUFqQkEsV0FBaUI7O0FBQzdDLE1BQU1DLFdBQVcsR0FBQyxTQUFaQSxXQUFZLEdBQUk7QUFDbEJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBQThCSixJQUE5QjtBQUNBQyxlQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0FJLG9CQUFnQixDQUFDTCxJQUFELENBQWhCO0FBQ0gsR0FKRDs7QUFNRSxzQkFDSTtBQUFLLGFBQVMsRUFBRU0seURBQU0sQ0FBQ0MsSUFBdkI7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBRUQseURBQU0sQ0FBQ0UsSUFBdkI7QUFBNEIsYUFBTyxFQUFFTixXQUFyQztBQUFBLDhCQUNBO0FBQUssV0FBRyxFQUFFLGlFQUFnRUYsSUFBSSxDQUFDUyxLQUFMLENBQVdDO0FBQXJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQSxlQUdHO0FBQUEsa0JBQ0ZWLElBQUksQ0FBQ1c7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEgsRUFRQ1gsSUFBSSxDQUFDWSxLQUFMLENBQVdDLE1BQVgsQ0FBa0IsQ0FBbEIsRUFBcUJDLFdBQXJCLEtBQW1DZCxJQUFJLENBQUNZLEtBQUwsQ0FBV0csS0FBWCxDQUFpQixDQUFqQixDQVJwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFlSCxDQXRCRDs7S0FBTWhCLGM7QUF3QlNBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmIzZWNmNDJhNDhlYmFiYTI4NzE1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0NoYW1wLnNjc3MnXHJcblxyXG5jb25zdCBDaGFtcENvbnRhaW5lciA9ICh7ZGF0YSxzZXRTaG93TGlzdH0pID0+IHtcclxuICBjb25zdCBoYW5kbGVDbGljaz0oKT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhcImNsaWNrZWQgdG8gc2hvd1wiLGRhdGEpO1xyXG4gICAgICBzZXRTaG93TGlzdChmYWxzZSlcclxuICAgICAgc2V0Q2hhbXBTZWxlY3RlZChkYXRhKVxyXG4gIH0gIFxyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk1haW59PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNhcmR9b25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17XCJodHRwOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi8xMC4yMS4xL2ltZy9jaGFtcGlvbi9cIisgZGF0YS5pbWFnZS5mdWxsfS8+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAge2RhdGEuaWR9XHJcbiAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHtkYXRhLnRpdGxlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2RhdGEudGl0bGUuc2xpY2UoMSl9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhbXBDb250YWluZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==