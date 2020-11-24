webpackHotUpdate_N_E("pages/index",{

/***/ "./frontend/mainscreen/components/bodyContainer.jsx":
/*!**********************************************************!*\
  !*** ./frontend/mainscreen/components/bodyContainer.jsx ***!
  \**********************************************************/
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
/* harmony import */ var _styles_Body_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Body.scss */ "./frontend/mainscreen/styles/Body.scss");
/* harmony import */ var _styles_Body_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Body_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _champContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./champContainer */ "./frontend/mainscreen/components/champContainer.jsx");




var _jsxFileName = "C:\\Users\\X1\\Desktop\\lolcito\\frontend\\mainscreen\\components\\bodyContainer.jsx",
    _this = undefined,
    _s = $RefreshSig$();






var BodyContainer = function BodyContainer(_ref) {
  _s();

  var setShowList = _ref.setShowList,
      setChampSelected = _ref.setChampSelected;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      state = _useState[0],
      setState = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      champions = _useState2[0],
      setChampions = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      newChampionsList = _useState3[0],
      setNewChampionsList = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var response, array, eachone;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_5___default()({
              method: 'get',
              url: 'http://ddragon.leagueoflegends.com/cdn/10.21.1/data/es_MX/champion.json'
            });

          case 2:
            response = _context.sent;
            array = [];

            for (eachone in response.data.data) {
              array.push(response.data.data[eachone]);
            }

            setChampions(array);
            setNewChampionsList(array);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);

  var handleChange = function handleChange(e) {
    setState(e.target.value);
    var newChampList = champions.filter(function (item) {
      if (item.id.toLowerCase().includes(e.target.value.toLowerCase())) {
        return item;
      }

      return;
    });
    setNewChampionsList(newChampList);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: _styles_Body_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Main,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _styles_Body_scss__WEBPACK_IMPORTED_MODULE_4___default.a.SearchContainer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
        value: state,
        name: "champion",
        onChange: handleChange,
        type: "text",
        placeholder: "Campeon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _styles_Body_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ChampsContainer,
      children: newChampionsList.map(function (item) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_champContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
          setChampSelected: setChampSelected,
          setShowList: setShowList,
          data: item
        }, item.id, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 32
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }, _this);
};

_s(BodyContainer, "Y78HD6VezA5kxAIkTO1pB53AlNw=");

_c = BodyContainer;
/* harmony default export */ __webpack_exports__["default"] = (BodyContainer);

var _c;

$RefreshReg$(_c, "BodyContainer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZnJvbnRlbmQvbWFpbnNjcmVlbi9jb21wb25lbnRzL2JvZHlDb250YWluZXIuanN4Il0sIm5hbWVzIjpbIkJvZHlDb250YWluZXIiLCJzZXRTaG93TGlzdCIsInNldENoYW1wU2VsZWN0ZWQiLCJ1c2VTdGF0ZSIsInN0YXRlIiwic2V0U3RhdGUiLCJjaGFtcGlvbnMiLCJzZXRDaGFtcGlvbnMiLCJuZXdDaGFtcGlvbnNMaXN0Iiwic2V0TmV3Q2hhbXBpb25zTGlzdCIsInVzZUVmZmVjdCIsImF4aW9zIiwibWV0aG9kIiwidXJsIiwicmVzcG9uc2UiLCJhcnJheSIsImVhY2hvbmUiLCJkYXRhIiwicHVzaCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm5ld0NoYW1wTGlzdCIsImZpbHRlciIsIml0ZW0iLCJpZCIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJzdHlsZXMiLCJNYWluIiwiU2VhcmNoQ29udGFpbmVyIiwiQ2hhbXBzQ29udGFpbmVyIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUFvQztBQUFBOztBQUFBLE1BQWxDQyxXQUFrQyxRQUFsQ0EsV0FBa0M7QUFBQSxNQUF0QkMsZ0JBQXNCLFFBQXRCQSxnQkFBc0I7O0FBQUEsa0JBRTVCQyxzREFBUSxDQUFDLEVBQUQsQ0FGb0I7QUFBQSxNQUUvQ0MsS0FGK0M7QUFBQSxNQUV4Q0MsUUFGd0M7O0FBQUEsbUJBR3JCRixzREFBUSxDQUFDLEVBQUQsQ0FIYTtBQUFBLE1BRy9DRyxTQUgrQztBQUFBLE1BR3BDQyxZQUhvQzs7QUFBQSxtQkFJTkosc0RBQVEsQ0FBQyxFQUFELENBSkY7QUFBQSxNQUkvQ0ssZ0JBSitDO0FBQUEsTUFJN0JDLG1CQUo2Qjs7QUFNdERDLHlEQUFTLGdNQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2NDLDRDQUFLLENBQUM7QUFDdEJDLG9CQUFNLEVBQUUsS0FEYztBQUV0QkMsaUJBQUcsRUFBQztBQUZrQixhQUFELENBRG5COztBQUFBO0FBQ0hDLG9CQURHO0FBTURDLGlCQU5DLEdBTU8sRUFOUDs7QUFPUCxpQkFBV0MsT0FBWCxJQUFzQkYsUUFBUSxDQUFDRyxJQUFULENBQWNBLElBQXBDLEVBQXlDO0FBQ3BDRixtQkFBSyxDQUFDRyxJQUFOLENBQVdKLFFBQVEsQ0FBQ0csSUFBVCxDQUFjQSxJQUFkLENBQW1CRCxPQUFuQixDQUFYO0FBQ0o7O0FBQ0RULHdCQUFZLENBQUNRLEtBQUQsQ0FBWjtBQUNBTiwrQkFBbUIsQ0FBQ00sS0FBRCxDQUFuQjs7QUFYTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELElBWU4sRUFaTSxDQUFUOztBQWFBLE1BQU1JLFlBQVksR0FBRSxTQUFkQSxZQUFjLENBQUNDLENBQUQsRUFBTztBQUN0QmYsWUFBUSxDQUFDZSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFSO0FBQ0EsUUFBTUMsWUFBWSxHQUFDakIsU0FBUyxDQUFDa0IsTUFBVixDQUFpQixVQUFBQyxJQUFJLEVBQUU7QUFDdEMsVUFBR0EsSUFBSSxDQUFDQyxFQUFMLENBQVFDLFdBQVIsR0FBc0JDLFFBQXRCLENBQStCUixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlSyxXQUFmLEVBQS9CLENBQUgsRUFBZ0U7QUFDNUQsZUFBT0YsSUFBUDtBQUNIOztBQUNEO0FBQ0gsS0FMa0IsQ0FBbkI7QUFNQWhCLHVCQUFtQixDQUFDYyxZQUFELENBQW5CO0FBQ0osR0FURDs7QUFhQSxzQkFDSTtBQUFLLGFBQVMsRUFBRU0sd0RBQU0sQ0FBQ0MsSUFBdkI7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBRUQsd0RBQU0sQ0FBQ0UsZUFBdkI7QUFBQSw2QkFDQTtBQUFPLGFBQUssRUFBRTNCLEtBQWQ7QUFBcUIsWUFBSSxFQUFDLFVBQTFCO0FBQXFDLGdCQUFRLEVBQUVlLFlBQS9DO0FBQTZELFlBQUksRUFBQyxNQUFsRTtBQUF5RSxtQkFBVyxFQUFDO0FBQXJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFJSTtBQUFLLGVBQVMsRUFBRVUsd0RBQU0sQ0FBQ0csZUFBdkI7QUFBQSxnQkFFUXhCLGdCQUFnQixDQUFDeUIsR0FBakIsQ0FBcUIsVUFBQ1IsSUFBRCxFQUFTO0FBQzFCLDRCQUFPLHFFQUFDLHVEQUFEO0FBQWlCLDBCQUFnQixFQUFFdkIsZ0JBQW5DO0FBQXNELHFCQUFXLEVBQUVELFdBQW5FO0FBQStGLGNBQUksRUFBRXdCO0FBQXJHLFdBQXNGQSxJQUFJLENBQUNDLEVBQTNGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDSCxPQUZEO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBa0JILENBbEREOztHQUFNMUIsYTs7S0FBQUEsYTtBQW9EU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGEyYWQ4ODZiNjQyOTU3M2Q4YmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQm9keS5zY3NzJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBDaGFtcHNDb250YWluZXIgZnJvbSAnLi9jaGFtcENvbnRhaW5lcidcclxuXHJcbmNvbnN0IEJvZHlDb250YWluZXIgPSAoe3NldFNob3dMaXN0LHNldENoYW1wU2VsZWN0ZWR9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtjaGFtcGlvbnMsIHNldENoYW1waW9uc109IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW25ld0NoYW1waW9uc0xpc3QsIHNldE5ld0NoYW1waW9uc0xpc3RdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICAgICAgdXJsOidodHRwOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi8xMC4yMS4xL2RhdGEvZXNfTVgvY2hhbXBpb24uanNvbicsXHJcblxyXG4gICAgICAgfSk7XHJcbiAgICAgICBjb25zdCBhcnJheSA9IFtdXHJcbiAgICAgICBmb3IgKGNvbnN0IGVhY2hvbmUgaW4gcmVzcG9uc2UuZGF0YS5kYXRhKXtcclxuICAgICAgICAgICAgYXJyYXkucHVzaChyZXNwb25zZS5kYXRhLmRhdGFbZWFjaG9uZV0pXHJcbiAgICAgICB9XHJcbiAgICAgICBzZXRDaGFtcGlvbnMoYXJyYXkpXHJcbiAgICAgICBzZXROZXdDaGFtcGlvbnNMaXN0KGFycmF5KVxyXG4gICAgfSwgW10pXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPShlKSA9PiB7XHJcbiAgICAgICAgIHNldFN0YXRlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgY29uc3QgbmV3Q2hhbXBMaXN0PWNoYW1waW9ucy5maWx0ZXIoaXRlbT0+e1xyXG4gICAgICAgICAgICAgaWYoaXRlbS5pZC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGUudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCkpKXtcclxuICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbVxyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgcmV0dXJuIFxyXG4gICAgICAgICB9KVxyXG4gICAgICAgICBzZXROZXdDaGFtcGlvbnNMaXN0KG5ld0NoYW1wTGlzdClcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5NYWlufT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5TZWFyY2hDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3N0YXRlfSBuYW1lPVwiY2hhbXBpb25cIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQ2FtcGVvblwiLz4gICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNoYW1wc0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Q2hhbXBpb25zTGlzdC5tYXAoKGl0ZW0pPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENoYW1wc0NvbnRhaW5lciBzZXRDaGFtcFNlbGVjdGVkPXtzZXRDaGFtcFNlbGVjdGVkfSAgc2V0U2hvd0xpc3Q9e3NldFNob3dMaXN0fSBrZXk9IHtpdGVtLmlkfSBkYXRhPXtpdGVtfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvZHlDb250YWluZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==