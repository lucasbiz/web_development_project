"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/subsidiaries/page",{

/***/ "(app-pages-browser)/./src/app/subsidiaries/page.tsx":
/*!***************************************!*\
  !*** ./src/app/subsidiaries/page.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_SideBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SideBar */ \"(app-pages-browser)/./src/app/components/SideBar.tsx\");\n/* harmony import */ var _components_SubsidiarieCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SubsidiarieCard */ \"(app-pages-browser)/./src/app/components/SubsidiarieCard.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_WithAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/WithAuth */ \"(app-pages-browser)/./src/app/components/WithAuth.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Page = ()=>{\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [location, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [subsidiaries, setSubsidiaries] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([\n        {\n            name: \"Loja 1\",\n            location: \"Florian\\xf3polis\"\n        }\n    ]);\n    const handleAddSubsidiary = ()=>{\n        if (name && location) {\n            setSubsidiaries([\n                ...subsidiaries,\n                {\n                    name,\n                    location\n                }\n            ]);\n            setName(\"\");\n            setLocation(\"\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"h-screen w-screen flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SideBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\subsidiaries\\\\page.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:ml-64 ml-5 p-8 w-full flex flex-col md:flex-row md:mt-0 mt-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-[#513F46] p-6 rounded-2xl shadow-md mb-10 max-w-[400px] md:mr-20 align-middle\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-3xl mb-4 text-white\",\n                                children: \"Adicionar Nova Filial\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\subsidiaries\\\\page.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \"bg-[#9B9B9B] text-black p-2 px-4 mb-4 rounded-2xl bg-slate-100 w-full h-14 text-2xl\",\n                                placeholder: \"Nome da Filial\",\n                                value: name,\n                                onChange: (e)=>setName(e.target.value),\n                                maxLength: 15\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\subsidiaries\\\\page.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \"bg-[#9B9B9B] text-black p-2 px-4 mb-4 rounded-2xl bg-slate-100 w-full h-14 text-2xl\",\n                                placeholder: \"Localiza\\xe7\\xe3o\",\n                                value: location,\n                                onChange: (e)=>setLocation(e.target.value),\n                                maxLength: 15\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\subsidiaries\\\\page.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-blue-500 text-white p-2 px-4 rounded-2xl w-full h-14 text-2xl\",\n                                onClick: handleAddSubsidiary,\n                                children: \"Adicionar\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\subsidiaries\\\\page.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\subsidiaries\\\\page.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-[#513F46] p-6 rounded-2xl shadow-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-3xl mb-4 text-white\",\n                                children: \"Lista de Filiais\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\subsidiaries\\\\page.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-row justify-between mb-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-xl font-semibold text-center w-1/2 text-white\",\n                                        children: \"Nome\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\subsidiaries\\\\page.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-xl font-semibold text-center w-1/2 text-white\",\n                                        children: \"Localiza\\xe7\\xe3o\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\subsidiaries\\\\page.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\subsidiaries\\\\page.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 21\n                            }, undefined),\n                            subsidiaries.map((subsidiary, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubsidiarieCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    name: subsidiary.name,\n                                    location: subsidiary.location\n                                }, index, false, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\subsidiaries\\\\page.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 25\n                                }, undefined))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\subsidiaries\\\\page.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\subsidiaries\\\\page.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\subsidiaries\\\\page.tsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Page, \"jDWlBlsmRzOI+B324C70ywp55UA=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_components_WithAuth__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Page));\nvar _c, _c1;\n$RefreshReg$(_c, \"Page\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc3Vic2lkaWFyaWVzL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUU0QztBQUNpQjtBQUM1QjtBQUNhO0FBRTlDLE1BQU1JLE9BQU87O0lBQ1QsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ0ssVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNPLGNBQWNDLGdCQUFnQixHQUFHUiwrQ0FBUUEsQ0FBQztRQUM3QztZQUFFRyxNQUFNO1lBQVVFLFVBQVU7UUFBZ0I7S0FDL0M7SUFFRCxNQUFNSSxzQkFBc0I7UUFDeEIsSUFBSU4sUUFBUUUsVUFBVTtZQUNsQkcsZ0JBQWdCO21CQUFJRDtnQkFBYztvQkFBRUo7b0JBQU1FO2dCQUFTO2FBQUU7WUFDckRELFFBQVE7WUFDUkUsWUFBWTtRQUNoQjtJQUNKO0lBRUEscUJBQ0ksOERBQUNJO1FBQUtDLFdBQVU7OzBCQUNaLDhEQUFDYiwyREFBT0E7Ozs7OzBCQUVSLDhEQUFDYztnQkFBSUQsV0FBVTs7a0NBQ1gsOERBQUNDO3dCQUFJRCxXQUFVOzswQ0FDWCw4REFBQ0U7Z0NBQUdGLFdBQVU7MENBQTJCOzs7Ozs7MENBQ3pDLDhEQUFDRztnQ0FDR0MsTUFBSztnQ0FDTEosV0FBVTtnQ0FDVkssYUFBWTtnQ0FDWkMsT0FBT2Q7Z0NBQ1BlLFVBQVUsQ0FBQ0MsSUFBTWYsUUFBUWUsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO2dDQUN2Q0ksV0FBVzs7Ozs7OzBDQUVmLDhEQUFDUDtnQ0FDR0MsTUFBSztnQ0FDTEosV0FBVTtnQ0FDVkssYUFBWTtnQ0FDWkMsT0FBT1o7Z0NBQ1BhLFVBQVUsQ0FBQ0MsSUFBTWIsWUFBWWEsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO2dDQUMzQ0ksV0FBVzs7Ozs7OzBDQUVmLDhEQUFDQztnQ0FDR1gsV0FBVTtnQ0FDVlksU0FBU2Q7MENBQ1o7Ozs7Ozs7Ozs7OztrQ0FLTCw4REFBQ0c7d0JBQUlELFdBQVU7OzBDQUNYLDhEQUFDRTtnQ0FBR0YsV0FBVTswQ0FBMkI7Ozs7OzswQ0FDekMsOERBQUNDO2dDQUFJRCxXQUFVOztrREFDWCw4REFBQ2E7d0NBQUViLFdBQVU7a0RBQXFEOzs7Ozs7a0RBQ2xFLDhEQUFDYTt3Q0FBRWIsV0FBVTtrREFBcUQ7Ozs7Ozs7Ozs7Ozs0QkFFckVKLGFBQWFrQixHQUFHLENBQUMsQ0FBQ0MsWUFBWUMsc0JBQzNCLDhEQUFDNUIsbUVBQWdCQTtvQ0FFYkksTUFBTXVCLFdBQVd2QixJQUFJO29DQUNyQkUsVUFBVXFCLFdBQVdyQixRQUFRO21DQUZ4QnNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNqQztHQS9ETXpCO0tBQUFBO0FBaUVOLCtEQUFlLE1BQUFELGdFQUFRQSxDQUFDQyxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvc3Vic2lkaWFyaWVzL3BhZ2UudHN4PzYyNDEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCBTaWRlQmFyIGZyb20gXCIuLi9jb21wb25lbnRzL1NpZGVCYXJcIjtcclxuaW1wb3J0IFN1YnNpZGlhcmllc0NhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvU3Vic2lkaWFyaWVDYXJkXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB3aXRoQXV0aCBmcm9tIFwiLi4vY29tcG9uZW50cy9XaXRoQXV0aFwiO1xyXG5cclxuY29uc3QgUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2xvY2F0aW9uLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtzdWJzaWRpYXJpZXMsIHNldFN1YnNpZGlhcmllc10gPSB1c2VTdGF0ZShbXHJcbiAgICAgICAgeyBuYW1lOiBcIkxvamEgMVwiLCBsb2NhdGlvbjogXCJGbG9yaWFuw7Nwb2xpc1wiIH0sXHJcbiAgICBdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVBZGRTdWJzaWRpYXJ5ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChuYW1lICYmIGxvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgIHNldFN1YnNpZGlhcmllcyhbLi4uc3Vic2lkaWFyaWVzLCB7IG5hbWUsIGxvY2F0aW9uIH1dKTtcclxuICAgICAgICAgICAgc2V0TmFtZShcIlwiKTtcclxuICAgICAgICAgICAgc2V0TG9jYXRpb24oXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImgtc2NyZWVuIHctc2NyZWVuIGZsZXhcIj5cclxuICAgICAgICAgICAgPFNpZGVCYXIgLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6bWwtNjQgbWwtNSBwLTggdy1mdWxsIGZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgbWQ6bXQtMCBtdC04XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjNTEzRjQ2XSBwLTYgcm91bmRlZC0yeGwgc2hhZG93LW1kIG1iLTEwIG1heC13LVs0MDBweF0gbWQ6bXItMjAgYWxpZ24tbWlkZGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIG1iLTQgdGV4dC13aGl0ZVwiPkFkaWNpb25hciBOb3ZhIEZpbGlhbDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctWyM5QjlCOUJdIHRleHQtYmxhY2sgcC0yIHB4LTQgbWItNCByb3VuZGVkLTJ4bCBiZy1zbGF0ZS0xMDAgdy1mdWxsIGgtMTQgdGV4dC0yeGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vbWUgZGEgRmlsaWFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MTV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1bIzlCOUI5Ql0gdGV4dC1ibGFjayBwLTIgcHgtNCBtYi00IHJvdW5kZWQtMnhsIGJnLXNsYXRlLTEwMCB3LWZ1bGwgaC0xNCB0ZXh0LTJ4bFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTG9jYWxpemHDp8Ojb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsb2NhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRMb2NhdGlvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MTV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcC0yIHB4LTQgcm91bmRlZC0yeGwgdy1mdWxsIGgtMTQgdGV4dC0yeGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVBZGRTdWJzaWRpYXJ5fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWRpY2lvbmFyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjNTEzRjQ2XSBwLTYgcm91bmRlZC0yeGwgc2hhZG93LW1kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIG1iLTQgdGV4dC13aGl0ZVwiPkxpc3RhIGRlIEZpbGlhaXM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdGV4dC1jZW50ZXIgdy0xLzIgdGV4dC13aGl0ZVwiPk5vbWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LWNlbnRlciB3LTEvMiB0ZXh0LXdoaXRlXCI+TG9jYWxpemHDp8OjbzwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7c3Vic2lkaWFyaWVzLm1hcCgoc3Vic2lkaWFyeSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN1YnNpZGlhcmllc0NhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtzdWJzaWRpYXJ5Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbj17c3Vic2lkaWFyeS5sb2NhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChQYWdlKTtcclxuIl0sIm5hbWVzIjpbIlNpZGVCYXIiLCJTdWJzaWRpYXJpZXNDYXJkIiwidXNlU3RhdGUiLCJ3aXRoQXV0aCIsIlBhZ2UiLCJuYW1lIiwic2V0TmFtZSIsImxvY2F0aW9uIiwic2V0TG9jYXRpb24iLCJzdWJzaWRpYXJpZXMiLCJzZXRTdWJzaWRpYXJpZXMiLCJoYW5kbGVBZGRTdWJzaWRpYXJ5IiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImgyIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm1heExlbmd0aCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwIiwibWFwIiwic3Vic2lkaWFyeSIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/subsidiaries/page.tsx\n"));

/***/ })

});