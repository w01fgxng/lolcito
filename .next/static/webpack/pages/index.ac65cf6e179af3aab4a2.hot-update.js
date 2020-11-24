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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      champion = _useState[0],
      setChampion = _useState[1];

  var urlSplash = "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + champSelected + "_0.jpg";
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
            console.log("campeon traido", response);
            setChampion(response.data.data[champSelected]);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);

  var Skins = function Skins() {
    console.log("CAMPEON TRAIDO EN SKINS", champion);

    if (champion) {
      console.log("ya termino de cargar el get");
      console.log("URL COMPLETA", "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + champion.id + "_" + champion.skins[1].num.toString() + ".jpg");
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: _styles_championIndex_scss__WEBPACK_IMPORTED_MODULE_5___default.a.SkinsContainer,
        children: champion.skins.map(function (item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
            src: "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + champion.id + "_" + item.num.toString() + ".jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 32
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 20
      }, _this);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: "loading"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 20
      }, _this);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: _styles_championIndex_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Main,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _styles_championIndex_scss__WEBPACK_IMPORTED_MODULE_5___default.a.ChampInfoCont,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: _styles_championIndex_scss__WEBPACK_IMPORTED_MODULE_5___default.a.ImageContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
          src: urlSplash
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: _styles_championIndex_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Info,
        children: "informacion"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _styles_championIndex_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Skins,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Skins, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 9
  }, _this);
};

_s(ChampScreen, "kphvG/W8Z0wpbsOiaAnkiC8pxWs=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZnJvbnRlbmQvY2hhbXBzY3JlZW4vY29tcG9uZW50cy9pbmRleC5qc3giXSwibmFtZXMiOlsiQ2hhbXBTY3JlZW4iLCJjaGFtcFNlbGVjdGVkIiwidXNlU3RhdGUiLCJjaGFtcGlvbiIsInNldENoYW1waW9uIiwidXJsU3BsYXNoIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiU2tpbnMiLCJpZCIsInNraW5zIiwibnVtIiwidG9TdHJpbmciLCJzdHlsZXMiLCJTa2luc0NvbnRhaW5lciIsIm1hcCIsIml0ZW0iLCJNYWluIiwiQ2hhbXBJbmZvQ29udCIsIkltYWdlQ29udGFpbmVyIiwiSW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQXVCO0FBQUE7O0FBQUEsTUFBcEJDLGFBQW9CLFFBQXBCQSxhQUFvQjs7QUFBQSxrQkFDUEMsc0RBQVEsRUFERDtBQUFBLE1BQ2hDQyxRQURnQztBQUFBLE1BQ3RCQyxXQURzQjs7QUFFdkMsTUFBTUMsU0FBUyxHQUFHLGdFQUFnRUosYUFBaEUsR0FBZ0YsUUFBbEc7QUFHQUsseURBQVMsZ01BQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDaUJDLDRDQUFLLENBQUM7QUFDekJDLG9CQUFNLEVBQUUsS0FEaUI7QUFFekJDLGlCQUFHLEVBQUUsd0VBQXdFUixhQUF4RSxHQUF3RjtBQUZwRSxhQUFELENBRHRCOztBQUFBO0FBQ0FTLG9CQURBO0FBS05DLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QkYsUUFBOUI7QUFDQU4sdUJBQVcsQ0FBQ00sUUFBUSxDQUFDRyxJQUFULENBQWNBLElBQWQsQ0FBbUJaLGFBQW5CLENBQUQsQ0FBWDs7QUFOTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELElBT04sRUFQTSxDQUFUOztBQVNBLE1BQU1hLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFDaEJILFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaLEVBQXVDVCxRQUF2Qzs7QUFFQSxRQUFJQSxRQUFKLEVBQWM7QUFDVlEsYUFBTyxDQUFDQyxHQUFSLENBQVksNkJBQVo7QUFDQUQsYUFBTyxDQUFDQyxHQUFSLENBQVksY0FBWixFQUE0QixnRUFBZ0VULFFBQVEsQ0FBQ1ksRUFBekUsR0FBOEUsR0FBOUUsR0FBb0ZaLFFBQVEsQ0FBQ2EsS0FBVCxDQUFlLENBQWYsRUFBa0JDLEdBQWxCLENBQXNCQyxRQUF0QixFQUFwRixHQUF1SCxNQUFuSjtBQUNBLDBCQUFPO0FBQUssaUJBQVMsRUFBRUMsaUVBQU0sQ0FBQ0MsY0FBdkI7QUFBQSxrQkFFQ2pCLFFBQVEsQ0FBQ2EsS0FBVCxDQUFlSyxHQUFmLENBQW1CLFVBQUFDLElBQUksRUFBRTtBQUNyQiw4QkFBTztBQUFLLGVBQUcsRUFBRSxnRUFBZ0VuQixRQUFRLENBQUNZLEVBQXpFLEdBQThFLEdBQTlFLEdBQW9GTyxJQUFJLENBQUNMLEdBQUwsQ0FBU0MsUUFBVCxFQUFwRixHQUEwRztBQUFwSDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFQO0FBQ0gsU0FGRDtBQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQVFILEtBWEQsTUFZSztBQUNELDBCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDSDtBQUVKLEdBbkJEOztBQXFCQSxzQkFDSTtBQUFLLGFBQVMsRUFBRUMsaUVBQU0sQ0FBQ0ksSUFBdkI7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBRUosaUVBQU0sQ0FBQ0ssYUFBdkI7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUVMLGlFQUFNLENBQUNNLGNBQXZCO0FBQUEsK0JBQ0k7QUFBSyxhQUFHLEVBQUVwQjtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFJSTtBQUFLLGlCQUFTLEVBQUVjLGlFQUFNLENBQUNPLElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFTSTtBQUFLLGVBQVMsRUFBRVAsaUVBQU0sQ0FBQ0wsS0FBdkI7QUFBQSw2QkFDSSxxRUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFlSCxDQWxERDs7R0FBTWQsVzs7S0FBQUEsVztBQW9EU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWM2NWNmNmUxNzlhZjNhYWI0YTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY2hhbXBpb25JbmRleC5zY3NzJ1xyXG5jb25zdCBDaGFtcFNjcmVlbiA9ICh7IGNoYW1wU2VsZWN0ZWQgfSkgPT4ge1xyXG4gICAgY29uc3QgW2NoYW1waW9uLCBzZXRDaGFtcGlvbl0gPSB1c2VTdGF0ZSgpXHJcbiAgICBjb25zdCB1cmxTcGxhc2ggPSBcImh0dHA6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuL2ltZy9jaGFtcGlvbi9zcGxhc2gvXCIgKyBjaGFtcFNlbGVjdGVkICsgXCJfMC5qcGdcIlxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgICAgICB1cmw6ICdodHRwOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi8xMC4yMS4xL2RhdGEvZXNfTVgvY2hhbXBpb24vJyArIGNoYW1wU2VsZWN0ZWQgKyAnLmpzb24nLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2FtcGVvbiB0cmFpZG9cIiwgcmVzcG9uc2UpO1xyXG4gICAgICAgIHNldENoYW1waW9uKHJlc3BvbnNlLmRhdGEuZGF0YVtjaGFtcFNlbGVjdGVkXSlcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IFNraW5zID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ0FNUEVPTiBUUkFJRE8gRU4gU0tJTlNcIiwgY2hhbXBpb24pO1xyXG5cclxuICAgICAgICBpZiAoY2hhbXBpb24pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ5YSB0ZXJtaW5vIGRlIGNhcmdhciBlbCBnZXRcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVVJMIENPTVBMRVRBXCIsIFwiaHR0cDovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vaW1nL2NoYW1waW9uL3NwbGFzaC9cIiArIGNoYW1waW9uLmlkICsgXCJfXCIgKyBjaGFtcGlvbi5za2luc1sxXS5udW0udG9TdHJpbmcoKSArIFwiLmpwZ1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2tpbnNDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYW1waW9uLnNraW5zLm1hcChpdGVtPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8aW1nIHNyYz17XCJodHRwOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi9pbWcvY2hhbXBpb24vc3BsYXNoL1wiICsgY2hhbXBpb24uaWQgKyBcIl9cIiArIGl0ZW0ubnVtLnRvU3RyaW5nKCkgKyBcIi5qcGdcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2PmxvYWRpbmc8L2Rpdj5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5NYWlufT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5DaGFtcEluZm9Db250fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSW1hZ2VDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1cmxTcGxhc2h9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSW5mb30+XHJcbiAgICAgICAgICAgICAgICAgICAgaW5mb3JtYWNpb25cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Ta2luc30+XHJcbiAgICAgICAgICAgICAgICA8U2tpbnMgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYW1wU2NyZWVuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=