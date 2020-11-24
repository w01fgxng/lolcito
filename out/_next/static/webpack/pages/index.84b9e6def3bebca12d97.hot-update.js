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

  var setShowList = _ref.setShowList;

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
          setShowList: setShowList,
          setChampSelected: setChampSelected,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZnJvbnRlbmQvbWFpbnNjcmVlbi9jb21wb25lbnRzL2JvZHlDb250YWluZXIuanN4Il0sIm5hbWVzIjpbIkJvZHlDb250YWluZXIiLCJzZXRTaG93TGlzdCIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsImNoYW1waW9ucyIsInNldENoYW1waW9ucyIsIm5ld0NoYW1waW9uc0xpc3QiLCJzZXROZXdDaGFtcGlvbnNMaXN0IiwidXNlRWZmZWN0IiwiYXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJyZXNwb25zZSIsImFycmF5IiwiZWFjaG9uZSIsImRhdGEiLCJwdXNoIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwibmV3Q2hhbXBMaXN0IiwiZmlsdGVyIiwiaXRlbSIsImlkIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInN0eWxlcyIsIk1haW4iLCJTZWFyY2hDb250YWluZXIiLCJDaGFtcHNDb250YWluZXIiLCJtYXAiLCJzZXRDaGFtcFNlbGVjdGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUFtQjtBQUFBOztBQUFBLE1BQWpCQyxXQUFpQixRQUFqQkEsV0FBaUI7O0FBQUEsa0JBRVhDLHNEQUFRLENBQUMsRUFBRCxDQUZHO0FBQUEsTUFFOUJDLEtBRjhCO0FBQUEsTUFFdkJDLFFBRnVCOztBQUFBLG1CQUdKRixzREFBUSxDQUFDLEVBQUQsQ0FISjtBQUFBLE1BRzlCRyxTQUg4QjtBQUFBLE1BR25CQyxZQUhtQjs7QUFBQSxtQkFJV0osc0RBQVEsQ0FBQyxFQUFELENBSm5CO0FBQUEsTUFJOUJLLGdCQUo4QjtBQUFBLE1BSVpDLG1CQUpZOztBQU1yQ0MseURBQVMsZ01BQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDY0MsNENBQUssQ0FBQztBQUN0QkMsb0JBQU0sRUFBRSxLQURjO0FBRXRCQyxpQkFBRyxFQUFDO0FBRmtCLGFBQUQsQ0FEbkI7O0FBQUE7QUFDSEMsb0JBREc7QUFNREMsaUJBTkMsR0FNTyxFQU5QOztBQU9QLGlCQUFXQyxPQUFYLElBQXNCRixRQUFRLENBQUNHLElBQVQsQ0FBY0EsSUFBcEMsRUFBeUM7QUFDcENGLG1CQUFLLENBQUNHLElBQU4sQ0FBV0osUUFBUSxDQUFDRyxJQUFULENBQWNBLElBQWQsQ0FBbUJELE9BQW5CLENBQVg7QUFDSjs7QUFDRFQsd0JBQVksQ0FBQ1EsS0FBRCxDQUFaO0FBQ0FOLCtCQUFtQixDQUFDTSxLQUFELENBQW5COztBQVhPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFZTixFQVpNLENBQVQ7O0FBYUEsTUFBTUksWUFBWSxHQUFFLFNBQWRBLFlBQWMsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3RCZixZQUFRLENBQUNlLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVI7QUFDQSxRQUFNQyxZQUFZLEdBQUNqQixTQUFTLENBQUNrQixNQUFWLENBQWlCLFVBQUFDLElBQUksRUFBRTtBQUN0QyxVQUFHQSxJQUFJLENBQUNDLEVBQUwsQ0FBUUMsV0FBUixHQUFzQkMsUUFBdEIsQ0FBK0JSLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULENBQWVLLFdBQWYsRUFBL0IsQ0FBSCxFQUFnRTtBQUM1RCxlQUFPRixJQUFQO0FBQ0g7O0FBQ0Q7QUFDSCxLQUxrQixDQUFuQjtBQU1BaEIsdUJBQW1CLENBQUNjLFlBQUQsQ0FBbkI7QUFDSixHQVREOztBQWFBLHNCQUNJO0FBQUssYUFBUyxFQUFFTSx3REFBTSxDQUFDQyxJQUF2QjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFFRCx3REFBTSxDQUFDRSxlQUF2QjtBQUFBLDZCQUNBO0FBQU8sYUFBSyxFQUFFM0IsS0FBZDtBQUFxQixZQUFJLEVBQUMsVUFBMUI7QUFBcUMsZ0JBQVEsRUFBRWUsWUFBL0M7QUFBNkQsWUFBSSxFQUFDLE1BQWxFO0FBQXlFLG1CQUFXLEVBQUM7QUFBckY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUlJO0FBQUssZUFBUyxFQUFFVSx3REFBTSxDQUFDRyxlQUF2QjtBQUFBLGdCQUVReEIsZ0JBQWdCLENBQUN5QixHQUFqQixDQUFxQixVQUFDUixJQUFELEVBQVM7QUFDMUIsNEJBQU8scUVBQUMsdURBQUQ7QUFBaUIscUJBQVcsRUFBRXZCLFdBQTlCO0FBQTJDLDBCQUFnQixFQUFFZ0MsZ0JBQTdEO0FBQThGLGNBQUksRUFBRVQ7QUFBcEcsV0FBcUZBLElBQUksQ0FBQ0MsRUFBMUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUNILE9BRkQ7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFrQkgsQ0FsREQ7O0dBQU16QixhOztLQUFBQSxhO0FBb0RTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44NGI5ZTZkZWYzYmViY2ExMmQ5Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Cb2R5LnNjc3MnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IENoYW1wc0NvbnRhaW5lciBmcm9tICcuL2NoYW1wQ29udGFpbmVyJ1xyXG5cclxuY29uc3QgQm9keUNvbnRhaW5lciA9ICh7c2V0U2hvd0xpc3R9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtjaGFtcGlvbnMsIHNldENoYW1waW9uc109IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW25ld0NoYW1waW9uc0xpc3QsIHNldE5ld0NoYW1waW9uc0xpc3RdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICAgICAgdXJsOidodHRwOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi8xMC4yMS4xL2RhdGEvZXNfTVgvY2hhbXBpb24uanNvbicsXHJcblxyXG4gICAgICAgfSk7XHJcbiAgICAgICBjb25zdCBhcnJheSA9IFtdXHJcbiAgICAgICBmb3IgKGNvbnN0IGVhY2hvbmUgaW4gcmVzcG9uc2UuZGF0YS5kYXRhKXtcclxuICAgICAgICAgICAgYXJyYXkucHVzaChyZXNwb25zZS5kYXRhLmRhdGFbZWFjaG9uZV0pXHJcbiAgICAgICB9XHJcbiAgICAgICBzZXRDaGFtcGlvbnMoYXJyYXkpXHJcbiAgICAgICBzZXROZXdDaGFtcGlvbnNMaXN0KGFycmF5KVxyXG4gICAgfSwgW10pXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPShlKSA9PiB7XHJcbiAgICAgICAgIHNldFN0YXRlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgY29uc3QgbmV3Q2hhbXBMaXN0PWNoYW1waW9ucy5maWx0ZXIoaXRlbT0+e1xyXG4gICAgICAgICAgICAgaWYoaXRlbS5pZC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGUudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCkpKXtcclxuICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbVxyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgcmV0dXJuIFxyXG4gICAgICAgICB9KVxyXG4gICAgICAgICBzZXROZXdDaGFtcGlvbnNMaXN0KG5ld0NoYW1wTGlzdClcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5NYWlufT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5TZWFyY2hDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3N0YXRlfSBuYW1lPVwiY2hhbXBpb25cIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQ2FtcGVvblwiLz4gICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNoYW1wc0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Q2hhbXBpb25zTGlzdC5tYXAoKGl0ZW0pPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENoYW1wc0NvbnRhaW5lciBzZXRTaG93TGlzdD17c2V0U2hvd0xpc3R9IHNldENoYW1wU2VsZWN0ZWQ9e3NldENoYW1wU2VsZWN0ZWR9IGtleT0ge2l0ZW0uaWR9IGRhdGE9e2l0ZW19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9keUNvbnRhaW5lclxyXG4iXSwic291cmNlUm9vdCI6IiJ9