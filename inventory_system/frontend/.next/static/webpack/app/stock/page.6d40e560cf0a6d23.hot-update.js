"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/stock/page",{

/***/ "(app-pages-browser)/./src/app/components/SelectSubsidiary.tsx":
/*!*************************************************!*\
  !*** ./src/app/components/SelectSubsidiary.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst SelectSubisidiary = (param)=>{\n    let { subisidiaries, onSelectsubisidiary } = param;\n    _s();\n    const [selectedsubisidiary, setSelectedsubisidiary] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleChange = (event)=>{\n        const subisidiary = event.target.value;\n        setSelectedsubisidiary(subisidiary);\n        onSelectsubisidiary(subisidiary);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col md:flexrow items-start\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"subisidiary-selector\",\n                className: \"mb-2 text-2xl text-white  w-52\",\n                children: \"Selecione a Filial\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\components\\\\SelectSubsidiary.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                id: \"subisidiary-selector\",\n                value: selectedsubisidiary,\n                onChange: handleChange,\n                className: \"px-3 py-2 min-w-32 w-52 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-600\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        className: \"text-black\",\n                        value: \"\",\n                        disabled: true,\n                        children: \"Selecione...\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\components\\\\SelectSubsidiary.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined),\n                    subisidiaries.map((subisidiary, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            className: \"text-black\",\n                            value: subisidiary,\n                            children: subisidiary\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\components\\\\SelectSubsidiary.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\components\\\\SelectSubsidiary.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\components\\\\SelectSubsidiary.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SelectSubisidiary, \"Bwt1JJROZhwmj2Cen/4mNRle/hY=\");\n_c = SelectSubisidiary;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SelectSubisidiary);\nvar _c;\n$RefreshReg$(_c, \"SelectSubisidiary\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9TZWxlY3RTdWJzaWRpYXJ5LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0M7QUFPeEMsTUFBTUUsb0JBQXNEO1FBQUMsRUFBRUMsYUFBYSxFQUFFQyxtQkFBbUIsRUFBRTs7SUFDakcsTUFBTSxDQUFDQyxxQkFBcUJDLHVCQUF1QixHQUFHTCwrQ0FBUUEsQ0FBUztJQUV2RSxNQUFNTSxlQUFlLENBQUNDO1FBQ3BCLE1BQU1DLGNBQWNELE1BQU1FLE1BQU0sQ0FBQ0MsS0FBSztRQUN0Q0wsdUJBQXVCRztRQUN2Qkwsb0JBQW9CSztJQUN0QjtJQUVBLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQU1DLFNBQVE7Z0JBQXVCRixXQUFVOzBCQUFpQzs7Ozs7OzBCQUNqRiw4REFBQ0c7Z0JBQ0NDLElBQUc7Z0JBQ0hOLE9BQU9OO2dCQUNQYSxVQUFVWDtnQkFDVk0sV0FBVTs7a0NBRVYsOERBQUNNO3dCQUFPTixXQUFVO3dCQUFhRixPQUFNO3dCQUFHUyxRQUFRO2tDQUFDOzs7Ozs7b0JBQ2hEakIsY0FBY2tCLEdBQUcsQ0FBQyxDQUFDWixhQUFhYSxzQkFDL0IsOERBQUNIOzRCQUFPTixXQUFVOzRCQUF5QkYsT0FBT0Y7c0NBQy9DQTsyQkFEaUNhOzs7Ozs7Ozs7Ozs7Ozs7OztBQU85QztHQTNCTXBCO0tBQUFBO0FBNkJOLCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL1NlbGVjdFN1YnNpZGlhcnkudHN4PzMyNzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIFNlbGVjdFN1YmlzaWRpYXJ5UHJvcHMge1xyXG4gIHN1YmlzaWRpYXJpZXM6IHN0cmluZ1tdO1xyXG4gIG9uU2VsZWN0c3ViaXNpZGlhcnk6IChzdWJpc2lkaWFyeTogc3RyaW5nKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBTZWxlY3RTdWJpc2lkaWFyeTogUmVhY3QuRkM8U2VsZWN0U3ViaXNpZGlhcnlQcm9wcz4gPSAoeyBzdWJpc2lkaWFyaWVzLCBvblNlbGVjdHN1YmlzaWRpYXJ5IH0pID0+IHtcclxuICBjb25zdCBbc2VsZWN0ZWRzdWJpc2lkaWFyeSwgc2V0U2VsZWN0ZWRzdWJpc2lkaWFyeV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PikgPT4ge1xyXG4gICAgY29uc3Qgc3ViaXNpZGlhcnkgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICBzZXRTZWxlY3RlZHN1YmlzaWRpYXJ5KHN1YmlzaWRpYXJ5KTtcclxuICAgIG9uU2VsZWN0c3ViaXNpZGlhcnkoc3ViaXNpZGlhcnkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleHJvdyBpdGVtcy1zdGFydFwiPlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cInN1YmlzaWRpYXJ5LXNlbGVjdG9yXCIgY2xhc3NOYW1lPVwibWItMiB0ZXh0LTJ4bCB0ZXh0LXdoaXRlICB3LTUyXCI+U2VsZWNpb25lIGEgRmlsaWFsPC9sYWJlbD5cclxuICAgICAgPHNlbGVjdFxyXG4gICAgICAgIGlkPVwic3ViaXNpZGlhcnktc2VsZWN0b3JcIlxyXG4gICAgICAgIHZhbHVlPXtzZWxlY3RlZHN1YmlzaWRpYXJ5fVxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwicHgtMyBweS0yIG1pbi13LTMyIHctNTIgdGV4dC1ibGFjayByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ncmVlbi02MDBcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPG9wdGlvbiBjbGFzc05hbWU9J3RleHQtYmxhY2snIHZhbHVlPVwiXCIgZGlzYWJsZWQ+U2VsZWNpb25lLi4uPC9vcHRpb24+XHJcbiAgICAgICAge3N1YmlzaWRpYXJpZXMubWFwKChzdWJpc2lkaWFyeSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxvcHRpb24gY2xhc3NOYW1lPSd0ZXh0LWJsYWNrJyBrZXk9e2luZGV4fSB2YWx1ZT17c3ViaXNpZGlhcnl9PlxyXG4gICAgICAgICAgICB7c3ViaXNpZGlhcnl9XHJcbiAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9zZWxlY3Q+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0U3ViaXNpZGlhcnk7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJTZWxlY3RTdWJpc2lkaWFyeSIsInN1YmlzaWRpYXJpZXMiLCJvblNlbGVjdHN1YmlzaWRpYXJ5Iiwic2VsZWN0ZWRzdWJpc2lkaWFyeSIsInNldFNlbGVjdGVkc3ViaXNpZGlhcnkiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInN1YmlzaWRpYXJ5IiwidGFyZ2V0IiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsImh0bWxGb3IiLCJzZWxlY3QiLCJpZCIsIm9uQ2hhbmdlIiwib3B0aW9uIiwiZGlzYWJsZWQiLCJtYXAiLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/SelectSubsidiary.tsx\n"));

/***/ })

});