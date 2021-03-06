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
/* harmony import */ var _styles_championIndex_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/championIndex.scss */ "./frontend/champscreen/styles/championIndex.scss");
/* harmony import */ var _styles_championIndex_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_championIndex_scss__WEBPACK_IMPORTED_MODULE_5__);




var _jsxFileName = "C:\\Users\\X1\\Desktop\\lolcito\\frontend\\champscreen\\components\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();





var ChampScreen = function ChampScreen(_ref) {
  _s();

  var champSelected = _ref.champSelected;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      champion = _useState[0],
      setchampion = _useState[1];

  var urlSplash = "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + champSelected + "_0.jpg";

  var Skins = function Skins() {
    console.log("champion", champion);

    if (champion) {
      console.log("abemus champion");
    } else {
      console.log("No abemus");
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: "skin"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 12
    }, _this);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_4___default()({
              method: 'get',
              url: 'http://ddragon.leagueoflegends.com/cdn/10.21.1/data/es_MX/champion/' + champSelected + '.json'
            });

          case 2:
            response = _context.sent;
            console.log("campeon traido", response.data.data[champSelected]);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: _styles_championIndex_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Main,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _styles_championIndex_scss__WEBPACK_IMPORTED_MODULE_5___default.a.ChampInfoCont,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: _styles_championIndex_scss__WEBPACK_IMPORTED_MODULE_5___default.a.ImageContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
          src: urlSplash,
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: _styles_championIndex_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Info,
        children: "informacion"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _styles_championIndex_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Skins,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Skins, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, _this);
};

_s(ChampScreen, "woZkuE+adiCNGh9as++5Tawqa9A=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZnJvbnRlbmQvY2hhbXBzY3JlZW4vY29tcG9uZW50cy9pbmRleC5qc3giXSwibmFtZXMiOlsiQ2hhbXBTY3JlZW4iLCJjaGFtcFNlbGVjdGVkIiwidXNlU3RhdGUiLCJjaGFtcGlvbiIsInNldGNoYW1waW9uIiwidXJsU3BsYXNoIiwiU2tpbnMiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJyZXNwb25zZSIsImRhdGEiLCJzdHlsZXMiLCJNYWluIiwiQ2hhbXBJbmZvQ29udCIsIkltYWdlQ29udGFpbmVyIiwiSW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQXFCO0FBQUE7O0FBQUEsTUFBbkJDLGFBQW1CLFFBQW5CQSxhQUFtQjs7QUFBQSxrQkFDVEMsc0RBQVEsQ0FBQyxFQUFELENBREM7QUFBQSxNQUNsQ0MsUUFEa0M7QUFBQSxNQUN4QkMsV0FEd0I7O0FBRXpDLE1BQU1DLFNBQVMsR0FBQyxnRUFBOERKLGFBQTlELEdBQTRFLFFBQTVGOztBQUNBLE1BQU1LLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQUs7QUFDZkMsV0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF1QkwsUUFBdkI7O0FBQ0EsUUFBR0EsUUFBSCxFQUFZO0FBQ1JJLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBQ0gsS0FGRCxNQUVLO0FBQ0RELGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDSDs7QUFDRCx3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0gsR0FSRDs7QUFVSUMseURBQVMsZ01BQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDaUJDLDRDQUFLLENBQUM7QUFDdEJDLG9CQUFNLEVBQUUsS0FEYztBQUV0QkMsaUJBQUcsRUFBQyx3RUFBc0VYLGFBQXRFLEdBQW9GO0FBRmxFLGFBQUQsQ0FEdEI7O0FBQUE7QUFDQVksb0JBREE7QUFRQ04sbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCSyxRQUFRLENBQUNDLElBQVQsQ0FBY0EsSUFBZCxDQUFtQmIsYUFBbkIsQ0FBOUI7O0FBUkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxJQVNDLEVBVEQsQ0FBVDtBQVVJLHNCQUNKO0FBQUssYUFBUyxFQUFFYyxpRUFBTSxDQUFDQyxJQUF2QjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFFRCxpRUFBTSxDQUFDRSxhQUF2QjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBRUYsaUVBQU0sQ0FBQ0csY0FBdkI7QUFBQSwrQkFDSTtBQUFLLGFBQUcsRUFBRWIsU0FBVjtBQUFxQixhQUFHLEVBQUM7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUlJO0FBQUssaUJBQVMsRUFBRVUsaUVBQU0sQ0FBQ0ksSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQVVJO0FBQUssZUFBUyxFQUFFSixpRUFBTSxDQUFDVCxLQUF2QjtBQUFBLDZCQUNJLHFFQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESTtBQWdCUCxDQXZDRDs7R0FBTU4sVzs7S0FBQUEsVztBQXlDU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTMyMzNhYThjOGE2NDU4ZmYyNTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0LCB1c2VTdGF0ZX1mcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jaGFtcGlvbkluZGV4LnNjc3MnXHJcblxyXG5jb25zdCBDaGFtcFNjcmVlbiA9ICh7Y2hhbXBTZWxlY3RlZH0pID0+IHtcclxuY29uc3QgW2NoYW1waW9uLCBzZXRjaGFtcGlvbl0gPSB1c2VTdGF0ZSh7fSlcclxuY29uc3QgdXJsU3BsYXNoPVwiaHR0cDovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vaW1nL2NoYW1waW9uL3NwbGFzaC9cIitjaGFtcFNlbGVjdGVkK1wiXzAuanBnXCJcclxuY29uc3QgU2tpbnMgPSAoKT0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiY2hhbXBpb25cIixjaGFtcGlvbik7XHJcbiAgICBpZihjaGFtcGlvbil7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhYmVtdXMgY2hhbXBpb25cIik7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk5vIGFiZW11c1wiKTtcclxuICAgIH1cclxuICAgIHJldHVybiA8ZGl2PnNraW48L2Rpdj5cclxufVxyXG5cclxuICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgICAgICAgIHVybDonaHR0cDovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vMTAuMjEuMS9kYXRhL2VzX01YL2NoYW1waW9uLycrY2hhbXBTZWxlY3RlZCsnLmpzb24nLFxyXG4gICAgICAgIH0pO1xyXG4gICBcclxuICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2FtcGVvbiB0cmFpZG9cIiwgcmVzcG9uc2UuZGF0YS5kYXRhW2NoYW1wU2VsZWN0ZWRdKTtcclxuICAgICAgICAgICAgfSxbXSlcclxuICAgICAgICByZXR1cm4gKCAgXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk1haW59PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ2hhbXBJbmZvQ29udH0gPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkltYWdlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1cmxTcGxhc2h9IGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSW5mb30+XHJcbiAgICAgICAgICAgICAgICBpbmZvcm1hY2lvbiBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2tpbnN9PlxyXG4gICAgICAgICAgICA8U2tpbnMvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYW1wU2NyZWVuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=