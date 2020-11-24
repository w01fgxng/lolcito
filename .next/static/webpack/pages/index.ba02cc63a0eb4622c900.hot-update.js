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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + champSelected + "_0.jpg"),
      urlSplash = _useState2[0],
      setUrlSplash = _useState2[1];

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

  var Changeskin = function Changeskin(url) {
    setUrlSplash(url);
  };

  var Skins = function Skins() {
    console.log("CAMPEON TRAIDO EN SKINS", champion);

    if (champion) {
      console.log("ya termino de cargar el get");
      console.log("URL COMPLETA", "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + champion.id + "_" + champion.skins[1].num.toString() + ".jpg");
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: _styles_championIndex_scss__WEBPACK_IMPORTED_MODULE_5___default.a.SkinsContainer,
        children: champion.skins.map(function (item) {
          var url = "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + champion.id + "_" + item.num.toString() + ".jpg";
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
            onMouseEnter: function onMouseEnter() {
              return Changeskin(url);
            },
            src: url
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 32
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 20
      }, _this);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: "loading"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
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
          lineNumber: 44,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: _styles_championIndex_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Info,
        children: "informacion"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _styles_championIndex_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Skins,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Skins, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 9
  }, _this);
};

_s(ChampScreen, "GdrP58ao2c+pTjmZdlls9bd8on0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZnJvbnRlbmQvY2hhbXBzY3JlZW4vY29tcG9uZW50cy9pbmRleC5qc3giXSwibmFtZXMiOlsiQ2hhbXBTY3JlZW4iLCJjaGFtcFNlbGVjdGVkIiwidXNlU3RhdGUiLCJjaGFtcGlvbiIsInNldENoYW1waW9uIiwidXJsU3BsYXNoIiwic2V0VXJsU3BsYXNoIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiQ2hhbmdlc2tpbiIsIlNraW5zIiwiaWQiLCJza2lucyIsIm51bSIsInRvU3RyaW5nIiwic3R5bGVzIiwiU2tpbnNDb250YWluZXIiLCJtYXAiLCJpdGVtIiwiTWFpbiIsIkNoYW1wSW5mb0NvbnQiLCJJbWFnZUNvbnRhaW5lciIsIkluZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUF1QjtBQUFBOztBQUFBLE1BQXBCQyxhQUFvQixRQUFwQkEsYUFBb0I7O0FBQUEsa0JBQ1BDLHNEQUFRLEVBREQ7QUFBQSxNQUNoQ0MsUUFEZ0M7QUFBQSxNQUN0QkMsV0FEc0I7O0FBQUEsbUJBRUxGLHNEQUFRLENBQUMsZ0VBQWdFRCxhQUFoRSxHQUFnRixRQUFqRixDQUZIO0FBQUEsTUFFaENJLFNBRmdDO0FBQUEsTUFFckJDLFlBRnFCOztBQUl2Q0MseURBQVMsZ01BQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDaUJDLDRDQUFLLENBQUM7QUFDekJDLG9CQUFNLEVBQUUsS0FEaUI7QUFFekJDLGlCQUFHLEVBQUUsd0VBQXdFVCxhQUF4RSxHQUF3RjtBQUZwRSxhQUFELENBRHRCOztBQUFBO0FBQ0FVLG9CQURBO0FBS05DLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QkYsUUFBOUI7QUFDQVAsdUJBQVcsQ0FBQ08sUUFBUSxDQUFDRyxJQUFULENBQWNBLElBQWQsQ0FBbUJiLGFBQW5CLENBQUQsQ0FBWDs7QUFOTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELElBT04sRUFQTSxDQUFUOztBQVNBLE1BQU1jLFVBQVUsR0FBQyxTQUFYQSxVQUFXLENBQUNMLEdBQUQsRUFBTztBQUNwQkosZ0JBQVksQ0FBQ0ksR0FBRCxDQUFaO0FBQ0gsR0FGRDs7QUFJQSxNQUFNTSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQ2hCSixXQUFPLENBQUNDLEdBQVIsQ0FBWSx5QkFBWixFQUF1Q1YsUUFBdkM7O0FBQ0EsUUFBSUEsUUFBSixFQUFjO0FBQ1ZTLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLDZCQUFaO0FBQ0FELGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEIsZ0VBQWdFVixRQUFRLENBQUNjLEVBQXpFLEdBQThFLEdBQTlFLEdBQW9GZCxRQUFRLENBQUNlLEtBQVQsQ0FBZSxDQUFmLEVBQWtCQyxHQUFsQixDQUFzQkMsUUFBdEIsRUFBcEYsR0FBdUgsTUFBbko7QUFDQSwwQkFBTztBQUFLLGlCQUFTLEVBQUVDLGlFQUFNLENBQUNDLGNBQXZCO0FBQUEsa0JBRUNuQixRQUFRLENBQUNlLEtBQVQsQ0FBZUssR0FBZixDQUFtQixVQUFBQyxJQUFJLEVBQUk7QUFDdkIsY0FBTWQsR0FBRyxHQUFDLGdFQUFnRVAsUUFBUSxDQUFDYyxFQUF6RSxHQUE4RSxHQUE5RSxHQUFvRk8sSUFBSSxDQUFDTCxHQUFMLENBQVNDLFFBQVQsRUFBcEYsR0FBMEcsTUFBcEg7QUFDQSw4QkFBTztBQUFLLHdCQUFZLEVBQUU7QUFBQSxxQkFBSUwsVUFBVSxDQUFDTCxHQUFELENBQWQ7QUFBQSxhQUFuQjtBQUF3QyxlQUFHLEVBQUVBO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQVA7QUFDSCxTQUhEO0FBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBUUgsS0FYRCxNQVlLO0FBQ0QsMEJBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNIO0FBQ0osR0FqQkQ7O0FBbUJBLHNCQUNJO0FBQUssYUFBUyxFQUFFVyxpRUFBTSxDQUFDSSxJQUF2QjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFFSixpRUFBTSxDQUFDSyxhQUF2QjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBRUwsaUVBQU0sQ0FBQ00sY0FBdkI7QUFBQSwrQkFDSTtBQUFLLGFBQUcsRUFBRXRCO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUlJO0FBQUssaUJBQVMsRUFBRWdCLGlFQUFNLENBQUNPLElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFTSTtBQUFLLGVBQVMsRUFBRVAsaUVBQU0sQ0FBQ0wsS0FBdkI7QUFBQSw2QkFDSSxxRUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFlSCxDQW5ERDs7R0FBTWhCLFc7O0tBQUFBLFc7QUFxRFNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmJhMDJjYzYzYTBlYjQ2MjJjOTAwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NoYW1waW9uSW5kZXguc2NzcydcclxuY29uc3QgQ2hhbXBTY3JlZW4gPSAoeyBjaGFtcFNlbGVjdGVkIH0pID0+IHtcclxuICAgIGNvbnN0IFtjaGFtcGlvbiwgc2V0Q2hhbXBpb25dID0gdXNlU3RhdGUoKVxyXG4gICAgY29uc3QgW3VybFNwbGFzaCwgc2V0VXJsU3BsYXNoXSA9IHVzZVN0YXRlKFwiaHR0cDovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vaW1nL2NoYW1waW9uL3NwbGFzaC9cIiArIGNoYW1wU2VsZWN0ZWQgKyBcIl8wLmpwZ1wiKVxyXG5cclxuICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgICAgIHVybDogJ2h0dHA6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLzEwLjIxLjEvZGF0YS9lc19NWC9jaGFtcGlvbi8nICsgY2hhbXBTZWxlY3RlZCArICcuanNvbicsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjYW1wZW9uIHRyYWlkb1wiLCByZXNwb25zZSk7XHJcbiAgICAgICAgc2V0Q2hhbXBpb24ocmVzcG9uc2UuZGF0YS5kYXRhW2NoYW1wU2VsZWN0ZWRdKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgQ2hhbmdlc2tpbj0odXJsKT0+e1xyXG4gICAgICAgIHNldFVybFNwbGFzaCh1cmwpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgU2tpbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDQU1QRU9OIFRSQUlETyBFTiBTS0lOU1wiLCBjaGFtcGlvbik7XHJcbiAgICAgICAgaWYgKGNoYW1waW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieWEgdGVybWlubyBkZSBjYXJnYXIgZWwgZ2V0XCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVSTCBDT01QTEVUQVwiLCBcImh0dHA6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuL2ltZy9jaGFtcGlvbi9zcGxhc2gvXCIgKyBjaGFtcGlvbi5pZCArIFwiX1wiICsgY2hhbXBpb24uc2tpbnNbMV0ubnVtLnRvU3RyaW5nKCkgKyBcIi5qcGdcIik7XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlNraW5zQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGFtcGlvbi5za2lucy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybD1cImh0dHA6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuL2ltZy9jaGFtcGlvbi9zcGxhc2gvXCIgKyBjaGFtcGlvbi5pZCArIFwiX1wiICsgaXRlbS5udW0udG9TdHJpbmcoKSArIFwiLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8aW1nIG9uTW91c2VFbnRlcj17KCk9PkNoYW5nZXNraW4odXJsKX0gc3JjPXt1cmx9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gPGRpdj5sb2FkaW5nPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5NYWlufT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5DaGFtcEluZm9Db250fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSW1hZ2VDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1cmxTcGxhc2h9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSW5mb30+XHJcbiAgICAgICAgICAgICAgICAgICAgaW5mb3JtYWNpb25cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Ta2luc30+XHJcbiAgICAgICAgICAgICAgICA8U2tpbnMgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYW1wU2NyZWVuIl0sInNvdXJjZVJvb3QiOiIifQ==