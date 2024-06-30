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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_SideBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SideBar */ \"(app-pages-browser)/./src/app/components/SideBar.tsx\");\n/* harmony import */ var _components_SubsidiarieCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SubsidiarieCard */ \"(app-pages-browser)/./src/app/components/SubsidiarieCard.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_WithAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/WithAuth */ \"(app-pages-browser)/./src/app/components/WithAuth.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Page = ()=>{\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [location, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [stock, setStock] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [subsidiaries, setSubsidiaries] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([\n        {\n            name: \"Loja 1\",\n            location: \"Florian\\xf3polis\"\n        }\n    ]);\n    // Função assíncrona para buscar as filiais do backend\n    const fetchSubsidiaries = async ()=>{\n        try {\n            // Faz uma requisição HTTP GET para a URL do backend\n            const response = await fetch(\"http://localhost:3125/api/subsidiaries\");\n            // Converte a resposta em JSON\n            const data = await response.json();\n            // Atualiza o estado 'items' com os dados recebidos\n            setSubsidiaries(data);\n        } catch (error) {\n            // Exibe uma mensagem de erro no console se a requisição falhar\n            console.error(\"Erro ao buscar itens:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        fetchSubsidiaries();\n    }, []); // O array vazio como segundo argumento garante que o useEffect seja executado apenas uma vez, quando o componente for montado\n    const createSubsidiary = async (subsidiaryData)=>{\n        const response = await fetch(\"http://localhost:3125/api/subsidiaries\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(subsidiaryData)\n        });\n        if (!response.ok) {\n            console.log(\"HTTP error! status: \".concat(response.status));\n        }\n        return response.json();\n    };\n    const handleAddSubsidiary = ()=>{\n        if (name && location) {\n            createSubsidiary({\n                name,\n                location,\n                stock\n            });\n            fetchSubsidiaries();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"h-screen w-screen flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SideBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\subsidiaries\\\\page.tsx\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:ml-64 ml-5 p-8 w-full flex flex-col md:flex-row md:mt-0 mt-8 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-[#513F46] p-6 rounded-2xl shadow-md mb-10 max-w-[400px] min-w-[400px] md:mr-20 h-2/5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-3xl mb-4 text-white\",\n                                children: \"Adicionar Nova Filial\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\subsidiaries\\\\page.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \" text-black p-2 px-4 mb-4 rounded-2xl bg-slate-100 w-full h-14 text-2xl\",\n                                placeholder: \"Nome da Filial\",\n                                value: name,\n                                onChange: (e)=>setName(e.target.value),\n                                maxLength: 15\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\subsidiaries\\\\page.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \" text-black p-2 px-4 mb-4 rounded-2xl bg-slate-100 w-full h-14 text-2xl\",\n                                placeholder: \"Localiza\\xe7\\xe3o\",\n                                value: location,\n                                onChange: (e)=>setLocation(e.target.value),\n                                maxLength: 15\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\subsidiaries\\\\page.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-blue-500 text-white p-2 px-4 rounded-2xl w-full h-14 text-2xl\",\n                                onClick: handleAddSubsidiary,\n                                children: \"Adicionar\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\subsidiaries\\\\page.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\subsidiaries\\\\page.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-[#513F46] p-6 rounded-2xl shadow-md min-w-[400px] w-1/2 min-h-[400px] h-5/6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-3xl mb-4 text-white\",\n                                children: \"Lista de Filiais\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\subsidiaries\\\\page.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-row justify-between mb-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-xl font-semibold text-center w-1/2 text-white\",\n                                        children: \"Nome\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\subsidiaries\\\\page.tsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-xl font-semibold text-center w-1/2 text-white\",\n                                        children: \"Localiza\\xe7\\xe3o\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\subsidiaries\\\\page.tsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\subsidiaries\\\\page.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 21\n                            }, undefined),\n                            subsidiaries.map((subsidiary, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubsidiarieCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    name: subsidiary.name,\n                                    location: subsidiary.location\n                                }, index, false, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\subsidiaries\\\\page.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 25\n                                }, undefined))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\subsidiaries\\\\page.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\subsidiaries\\\\page.tsx\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\subsidiaries\\\\page.tsx\",\n        lineNumber: 58,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Page, \"+LgPf4OXz+ZY8C6SZuKFg0bdL3Q=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_components_WithAuth__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Page));\nvar _c, _c1;\n$RefreshReg$(_c, \"Page\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc3Vic2lkaWFyaWVzL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUU0QztBQUNpQjtBQUNqQjtBQUNFO0FBRTlDLE1BQU1LLE9BQU87O0lBQ1QsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ0ssVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNPLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUyxjQUFjQyxnQkFBZ0IsR0FBR1YsK0NBQVFBLENBQUM7UUFDN0M7WUFBRUcsTUFBTTtZQUFVRSxVQUFVO1FBQWdCO0tBQy9DO0lBRUQsc0RBQXNEO0lBQ3RELE1BQU1NLG9CQUFvQjtRQUNsQixJQUFJO1lBQ0Esb0RBQW9EO1lBQ3BELE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtZQUM3Qiw4QkFBOEI7WUFDOUIsTUFBTUMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO1lBQ2hDLG1EQUFtRDtZQUNuREwsZ0JBQWdCSTtRQUNwQixFQUFFLE9BQU9FLE9BQU87WUFDWiwrREFBK0Q7WUFDL0RDLFFBQVFELEtBQUssQ0FBQyx5QkFBeUJBO1FBQzNDO0lBQ0o7SUFDSmpCLGdEQUFTQSxDQUFDO1FBQ05ZO0lBQ0osR0FBRyxFQUFFLEdBQUcsOEhBQThIO0lBRXRJLE1BQU1PLG1CQUFtQixPQUFPQztRQUM1QixNQUFNUCxXQUFXLE1BQU1DLE1BQU0sMENBQTBDO1lBQ3JFTyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ0w7UUFDdkI7UUFFQSxJQUFJLENBQUNQLFNBQVNhLEVBQUUsRUFBRTtZQUNoQlIsUUFBUVMsR0FBRyxDQUFDLHVCQUF1QyxPQUFoQmQsU0FBU2UsTUFBTTtRQUNwRDtRQUVBLE9BQU9mLFNBQVNHLElBQUk7SUFDdEI7SUFFRixNQUFNYSxzQkFBc0I7UUFDeEIsSUFBSXpCLFFBQVFFLFVBQVU7WUFDbEJhLGlCQUFpQjtnQkFBQ2Y7Z0JBQU1FO2dCQUFVRTtZQUFLO1lBQ3ZDSTtRQUNKO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ2tCO1FBQUtDLFdBQVU7OzBCQUNaLDhEQUFDakMsMkRBQU9BOzs7OzswQkFFUiw4REFBQ2tDO2dCQUFJRCxXQUFVOztrQ0FDWCw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUNYLDhEQUFDRTtnQ0FBR0YsV0FBVTswQ0FBMkI7Ozs7OzswQ0FDekMsOERBQUNHO2dDQUNHQyxNQUFLO2dDQUNMSixXQUFVO2dDQUNWSyxhQUFZO2dDQUNaQyxPQUFPakM7Z0NBQ1BrQyxVQUFVLENBQUNDLElBQU1sQyxRQUFRa0MsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO2dDQUN2Q0ksV0FBVzs7Ozs7OzBDQUVmLDhEQUFDUDtnQ0FDR0MsTUFBSztnQ0FDTEosV0FBVTtnQ0FDVkssYUFBWTtnQ0FDWkMsT0FBTy9CO2dDQUNQZ0MsVUFBVSxDQUFDQyxJQUFNaEMsWUFBWWdDLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztnQ0FDM0NJLFdBQVc7Ozs7OzswQ0FFZiw4REFBQ0M7Z0NBQ0dYLFdBQVU7Z0NBQ1ZZLFNBQVNkOzBDQUNaOzs7Ozs7Ozs7Ozs7a0NBS0wsOERBQUNHO3dCQUFJRCxXQUFVOzswQ0FDWCw4REFBQ0U7Z0NBQUdGLFdBQVU7MENBQTJCOzs7Ozs7MENBQ3pDLDhEQUFDQztnQ0FBSUQsV0FBVTs7a0RBQ1gsOERBQUNhO3dDQUFFYixXQUFVO2tEQUFxRDs7Ozs7O2tEQUNsRSw4REFBQ2E7d0NBQUViLFdBQVU7a0RBQXFEOzs7Ozs7Ozs7Ozs7NEJBRXJFckIsYUFBYW1DLEdBQUcsQ0FBQyxDQUFDQyxZQUFZQyxzQkFDM0IsOERBQUNoRCxtRUFBZ0JBO29DQUViSyxNQUFNMEMsV0FBVzFDLElBQUk7b0NBQ3JCRSxVQUFVd0MsV0FBV3hDLFFBQVE7bUNBRnhCeUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2pDO0dBakdNNUM7S0FBQUE7QUFtR04sK0RBQWUsTUFBQUQsZ0VBQVFBLENBQUNDLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9zdWJzaWRpYXJpZXMvcGFnZS50c3g/NjI0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0IFNpZGVCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2lkZUJhclwiO1xyXG5pbXBvcnQgU3Vic2lkaWFyaWVzQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9TdWJzaWRpYXJpZUNhcmRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgd2l0aEF1dGggZnJvbSBcIi4uL2NvbXBvbmVudHMvV2l0aEF1dGhcIjtcclxuXHJcbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtsb2NhdGlvbiwgc2V0TG9jYXRpb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbc3RvY2ssIHNldFN0b2NrXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3N1YnNpZGlhcmllcywgc2V0U3Vic2lkaWFyaWVzXSA9IHVzZVN0YXRlKFtcclxuICAgICAgICB7IG5hbWU6IFwiTG9qYSAxXCIsIGxvY2F0aW9uOiBcIkZsb3JpYW7Ds3BvbGlzXCIgfSxcclxuICAgIF0pO1xyXG5cclxuICAgIC8vIEZ1bsOnw6NvIGFzc8OtbmNyb25hIHBhcmEgYnVzY2FyIGFzIGZpbGlhaXMgZG8gYmFja2VuZFxyXG4gICAgY29uc3QgZmV0Y2hTdWJzaWRpYXJpZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAvLyBGYXogdW1hIHJlcXVpc2nDp8OjbyBIVFRQIEdFVCBwYXJhIGEgVVJMIGRvIGJhY2tlbmRcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzEyNS9hcGkvc3Vic2lkaWFyaWVzJyk7XHJcbiAgICAgICAgICAgICAgICAvLyBDb252ZXJ0ZSBhIHJlc3Bvc3RhIGVtIEpTT05cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICAvLyBBdHVhbGl6YSBvIGVzdGFkbyAnaXRlbXMnIGNvbSBvcyBkYWRvcyByZWNlYmlkb3NcclxuICAgICAgICAgICAgICAgIHNldFN1YnNpZGlhcmllcyhkYXRhKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIC8vIEV4aWJlIHVtYSBtZW5zYWdlbSBkZSBlcnJvIG5vIGNvbnNvbGUgc2UgYSByZXF1aXNpw6fDo28gZmFsaGFyXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIGJ1c2NhciBpdGVuczonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaFN1YnNpZGlhcmllcygpO1xyXG4gICAgfSwgW10pOyAvLyBPIGFycmF5IHZhemlvIGNvbW8gc2VndW5kbyBhcmd1bWVudG8gZ2FyYW50ZSBxdWUgbyB1c2VFZmZlY3Qgc2VqYSBleGVjdXRhZG8gYXBlbmFzIHVtYSB2ZXosIHF1YW5kbyBvIGNvbXBvbmVudGUgZm9yIG1vbnRhZG9cclxuICBcclxuICAgIGNvbnN0IGNyZWF0ZVN1YnNpZGlhcnkgPSBhc3luYyAoc3Vic2lkaWFyeURhdGE6IHsgbmFtZTogc3RyaW5nOyBsb2NhdGlvbjogc3RyaW5nOyBzdG9jazogc3RyaW5nIH0pID0+IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMxMjUvYXBpL3N1YnNpZGlhcmllcycsIHtcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHN1YnNpZGlhcnlEYXRhKSxcclxuICAgICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUFkZFN1YnNpZGlhcnkgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKG5hbWUgJiYgbG9jYXRpb24pIHtcclxuICAgICAgICAgICAgY3JlYXRlU3Vic2lkaWFyeSh7bmFtZSwgbG9jYXRpb24sIHN0b2NrfSlcclxuICAgICAgICAgICAgZmV0Y2hTdWJzaWRpYXJpZXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiaC1zY3JlZW4gdy1zY3JlZW4gZmxleFwiPlxyXG4gICAgICAgICAgICA8U2lkZUJhciAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDptbC02NCBtbC01IHAtOCB3LWZ1bGwgZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBtZDptdC0wIG10LTggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjNTEzRjQ2XSBwLTYgcm91bmRlZC0yeGwgc2hhZG93LW1kIG1iLTEwIG1heC13LVs0MDBweF0gbWluLXctWzQwMHB4XSBtZDptci0yMCBoLTIvNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtYi00IHRleHQtd2hpdGVcIj5BZGljaW9uYXIgTm92YSBGaWxpYWw8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB0ZXh0LWJsYWNrIHAtMiBweC00IG1iLTQgcm91bmRlZC0yeGwgYmctc2xhdGUtMTAwIHctZnVsbCBoLTE0IHRleHQtMnhsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb21lIGRhIEZpbGlhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezE1fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHRleHQtYmxhY2sgcC0yIHB4LTQgbWItNCByb3VuZGVkLTJ4bCBiZy1zbGF0ZS0xMDAgdy1mdWxsIGgtMTQgdGV4dC0yeGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxvY2FsaXphw6fDo29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bG9jYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TG9jYXRpb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezE1fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHAtMiBweC00IHJvdW5kZWQtMnhsIHctZnVsbCBoLTE0IHRleHQtMnhsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQWRkU3Vic2lkaWFyeX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkaWNpb25hclxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bIzUxM0Y0Nl0gcC02IHJvdW5kZWQtMnhsIHNoYWRvdy1tZCBtaW4tdy1bNDAwcHhdIHctMS8yIG1pbi1oLVs0MDBweF0gaC01LzZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWItNCB0ZXh0LXdoaXRlXCI+TGlzdGEgZGUgRmlsaWFpczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LWNlbnRlciB3LTEvMiB0ZXh0LXdoaXRlXCI+Tm9tZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtY2VudGVyIHctMS8yIHRleHQtd2hpdGVcIj5Mb2NhbGl6YcOnw6NvPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdWJzaWRpYXJpZXMubWFwKChzdWJzaWRpYXJ5LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3Vic2lkaWFyaWVzQ2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3N1YnNpZGlhcnkubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uPXtzdWJzaWRpYXJ5LmxvY2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKFBhZ2UpO1xyXG4iXSwibmFtZXMiOlsiU2lkZUJhciIsIlN1YnNpZGlhcmllc0NhcmQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIndpdGhBdXRoIiwiUGFnZSIsIm5hbWUiLCJzZXROYW1lIiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsInN0b2NrIiwic2V0U3RvY2siLCJzdWJzaWRpYXJpZXMiLCJzZXRTdWJzaWRpYXJpZXMiLCJmZXRjaFN1YnNpZGlhcmllcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImNyZWF0ZVN1YnNpZGlhcnkiLCJzdWJzaWRpYXJ5RGF0YSIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwibG9nIiwic3RhdHVzIiwiaGFuZGxlQWRkU3Vic2lkaWFyeSIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJoMiIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJtYXhMZW5ndGgiLCJidXR0b24iLCJvbkNsaWNrIiwicCIsIm1hcCIsInN1YnNpZGlhcnkiLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/subsidiaries/page.tsx\n"));

/***/ })

});