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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_SideBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SideBar */ \"(app-pages-browser)/./src/app/components/SideBar.tsx\");\n/* harmony import */ var _components_SubsidiarieCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SubsidiarieCard */ \"(app-pages-browser)/./src/app/components/SubsidiarieCard.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_WithAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/WithAuth */ \"(app-pages-browser)/./src/app/components/WithAuth.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Page = ()=>{\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [location, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [stock, setStock] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [subsidiaries, setSubsidiaries] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([\n        {\n            name: \"Loja 1\",\n            location: \"Florian\\xf3polis\"\n        }\n    ]);\n    // Função assíncrona para buscar as filiais do backend\n    const fetchSubsidiaries = async ()=>{\n        try {\n            // Faz uma requisição HTTP GET para a URL do backend\n            const response = await fetch(\"http://localhost:3125/api/subsidiaries\");\n            // Converte a resposta em JSON\n            const data = await response.json();\n            // Atualiza o estado 'items' com os dados recebidos\n            setSubsidiaries(data);\n        } catch (error) {\n            // Exibe uma mensagem de erro no console se a requisição falhar\n            console.error(\"Erro ao buscar itens:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        fetchSubsidiaries();\n    }, []); // O array vazio como segundo argumento garante que o useEffect seja executado apenas uma vez, quando o componente for montado\n    const createSubsidiary = async (subsidiaryData)=>{\n        const response = await fetch(\"http://localhost:3125/api/subsidiaries\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(subsidiaryData)\n        });\n        if (!response.ok) {\n            throw new Error(\"HTTP error! status: \".concat(response.status));\n        }\n        return response.json();\n    };\n    const handleAddSubsidiary = ()=>{\n        if (name && location) {\n            createSubsidiary({\n                name,\n                location,\n                stock\n            });\n            fetchSubsidiaries();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"h-screen w-screen flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SideBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\subsidiaries\\\\page.tsx\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:ml-64 ml-5 p-8 w-full flex flex-col md:flex-row md:mt-0 mt-8 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-[#513F46] p-6 rounded-2xl shadow-md mb-10 max-w-[400px] min-w-[400px] md:mr-20 h-2/5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-3xl mb-4 text-white\",\n                                children: \"Adicionar Nova Filial\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\subsidiaries\\\\page.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \" text-black p-2 px-4 mb-4 rounded-2xl bg-slate-100 w-full h-14 text-2xl\",\n                                placeholder: \"Nome da Filial\",\n                                value: name,\n                                onChange: (e)=>setName(e.target.value),\n                                maxLength: 15\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\subsidiaries\\\\page.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \" text-black p-2 px-4 mb-4 rounded-2xl bg-slate-100 w-full h-14 text-2xl\",\n                                placeholder: \"Localiza\\xe7\\xe3o\",\n                                value: location,\n                                onChange: (e)=>setLocation(e.target.value),\n                                maxLength: 15\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\subsidiaries\\\\page.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-blue-500 text-white p-2 px-4 rounded-2xl w-full h-14 text-2xl\",\n                                onClick: handleAddSubsidiary,\n                                children: \"Adicionar\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\subsidiaries\\\\page.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\subsidiaries\\\\page.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-[#513F46] p-6 rounded-2xl shadow-md min-w-[400px] w-1/2 min-h-[400px] h-5/6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-3xl mb-4 text-white\",\n                                children: \"Lista de Filiais\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\subsidiaries\\\\page.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-row justify-between mb-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-xl font-semibold text-center w-1/2 text-white\",\n                                        children: \"Nome\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\subsidiaries\\\\page.tsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-xl font-semibold text-center w-1/2 text-white\",\n                                        children: \"Localiza\\xe7\\xe3o\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\subsidiaries\\\\page.tsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\subsidiaries\\\\page.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 21\n                            }, undefined),\n                            subsidiaries.map((subsidiary, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubsidiarieCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    name: subsidiary.name,\n                                    location: subsidiary.location\n                                }, index, false, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\subsidiaries\\\\page.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 25\n                                }, undefined))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\subsidiaries\\\\page.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\subsidiaries\\\\page.tsx\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\GitHub\\\\web_development_project\\\\inventory_system\\\\frontend\\\\src\\\\app\\\\subsidiaries\\\\page.tsx\",\n        lineNumber: 58,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Page, \"+LgPf4OXz+ZY8C6SZuKFg0bdL3Q=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_components_WithAuth__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Page));\nvar _c, _c1;\n$RefreshReg$(_c, \"Page\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc3Vic2lkaWFyaWVzL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUU0QztBQUNpQjtBQUNqQjtBQUNFO0FBRTlDLE1BQU1LLE9BQU87O0lBQ1QsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ0ssVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNPLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUyxjQUFjQyxnQkFBZ0IsR0FBR1YsK0NBQVFBLENBQUM7UUFDN0M7WUFBRUcsTUFBTTtZQUFVRSxVQUFVO1FBQWdCO0tBQy9DO0lBRUQsc0RBQXNEO0lBQ3RELE1BQU1NLG9CQUFvQjtRQUNsQixJQUFJO1lBQ0Esb0RBQW9EO1lBQ3BELE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtZQUM3Qiw4QkFBOEI7WUFDOUIsTUFBTUMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO1lBQ2hDLG1EQUFtRDtZQUNuREwsZ0JBQWdCSTtRQUNwQixFQUFFLE9BQU9FLE9BQU87WUFDWiwrREFBK0Q7WUFDL0RDLFFBQVFELEtBQUssQ0FBQyx5QkFBeUJBO1FBQzNDO0lBQ0o7SUFDSmpCLGdEQUFTQSxDQUFDO1FBQ05ZO0lBQ0osR0FBRyxFQUFFLEdBQUcsOEhBQThIO0lBRXRJLE1BQU1PLG1CQUFtQixPQUFPQztRQUM1QixNQUFNUCxXQUFXLE1BQU1DLE1BQU0sMENBQTBDO1lBQ3JFTyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ0w7UUFDdkI7UUFFQSxJQUFJLENBQUNQLFNBQVNhLEVBQUUsRUFBRTtZQUNoQixNQUFNLElBQUlDLE1BQU0sdUJBQXVDLE9BQWhCZCxTQUFTZSxNQUFNO1FBQ3hEO1FBRUEsT0FBT2YsU0FBU0csSUFBSTtJQUN0QjtJQUVGLE1BQU1hLHNCQUFzQjtRQUN4QixJQUFJekIsUUFBUUUsVUFBVTtZQUNsQmEsaUJBQWlCO2dCQUFDZjtnQkFBTUU7Z0JBQVVFO1lBQUs7WUFDdkNJO1FBQ0o7SUFDSjtJQUVBLHFCQUNJLDhEQUFDa0I7UUFBS0MsV0FBVTs7MEJBQ1osOERBQUNqQywyREFBT0E7Ozs7OzBCQUVSLDhEQUFDa0M7Z0JBQUlELFdBQVU7O2tDQUNYLDhEQUFDQzt3QkFBSUQsV0FBVTs7MENBQ1gsOERBQUNFO2dDQUFHRixXQUFVOzBDQUEyQjs7Ozs7OzBDQUN6Qyw4REFBQ0c7Z0NBQ0dDLE1BQUs7Z0NBQ0xKLFdBQVU7Z0NBQ1ZLLGFBQVk7Z0NBQ1pDLE9BQU9qQztnQ0FDUGtDLFVBQVUsQ0FBQ0MsSUFBTWxDLFFBQVFrQyxFQUFFQyxNQUFNLENBQUNILEtBQUs7Z0NBQ3ZDSSxXQUFXOzs7Ozs7MENBRWYsOERBQUNQO2dDQUNHQyxNQUFLO2dDQUNMSixXQUFVO2dDQUNWSyxhQUFZO2dDQUNaQyxPQUFPL0I7Z0NBQ1BnQyxVQUFVLENBQUNDLElBQU1oQyxZQUFZZ0MsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO2dDQUMzQ0ksV0FBVzs7Ozs7OzBDQUVmLDhEQUFDQztnQ0FDR1gsV0FBVTtnQ0FDVlksU0FBU2Q7MENBQ1o7Ozs7Ozs7Ozs7OztrQ0FLTCw4REFBQ0c7d0JBQUlELFdBQVU7OzBDQUNYLDhEQUFDRTtnQ0FBR0YsV0FBVTswQ0FBMkI7Ozs7OzswQ0FDekMsOERBQUNDO2dDQUFJRCxXQUFVOztrREFDWCw4REFBQ2E7d0NBQUViLFdBQVU7a0RBQXFEOzs7Ozs7a0RBQ2xFLDhEQUFDYTt3Q0FBRWIsV0FBVTtrREFBcUQ7Ozs7Ozs7Ozs7Ozs0QkFFckVyQixhQUFhbUMsR0FBRyxDQUFDLENBQUNDLFlBQVlDLHNCQUMzQiw4REFBQ2hELG1FQUFnQkE7b0NBRWJLLE1BQU0wQyxXQUFXMUMsSUFBSTtvQ0FDckJFLFVBQVV3QyxXQUFXeEMsUUFBUTttQ0FGeEJ5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTakM7R0FqR001QztLQUFBQTtBQW1HTiwrREFBZSxNQUFBRCxnRUFBUUEsQ0FBQ0MsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3N1YnNpZGlhcmllcy9wYWdlLnRzeD82MjQxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgU2lkZUJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9TaWRlQmFyXCI7XHJcbmltcG9ydCBTdWJzaWRpYXJpZXNDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL1N1YnNpZGlhcmllQ2FyZFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB3aXRoQXV0aCBmcm9tIFwiLi4vY29tcG9uZW50cy9XaXRoQXV0aFwiO1xyXG5cclxuY29uc3QgUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2xvY2F0aW9uLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtzdG9jaywgc2V0U3RvY2tdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbc3Vic2lkaWFyaWVzLCBzZXRTdWJzaWRpYXJpZXNdID0gdXNlU3RhdGUoW1xyXG4gICAgICAgIHsgbmFtZTogXCJMb2phIDFcIiwgbG9jYXRpb246IFwiRmxvcmlhbsOzcG9saXNcIiB9LFxyXG4gICAgXSk7XHJcblxyXG4gICAgLy8gRnVuw6fDo28gYXNzw61uY3JvbmEgcGFyYSBidXNjYXIgYXMgZmlsaWFpcyBkbyBiYWNrZW5kXHJcbiAgICBjb25zdCBmZXRjaFN1YnNpZGlhcmllcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIC8vIEZheiB1bWEgcmVxdWlzacOnw6NvIEhUVFAgR0VUIHBhcmEgYSBVUkwgZG8gYmFja2VuZFxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMTI1L2FwaS9zdWJzaWRpYXJpZXMnKTtcclxuICAgICAgICAgICAgICAgIC8vIENvbnZlcnRlIGEgcmVzcG9zdGEgZW0gSlNPTlxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIC8vIEF0dWFsaXphIG8gZXN0YWRvICdpdGVtcycgY29tIG9zIGRhZG9zIHJlY2ViaWRvc1xyXG4gICAgICAgICAgICAgICAgc2V0U3Vic2lkaWFyaWVzKGRhdGEpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgLy8gRXhpYmUgdW1hIG1lbnNhZ2VtIGRlIGVycm8gbm8gY29uc29sZSBzZSBhIHJlcXVpc2nDp8OjbyBmYWxoYXJcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gYnVzY2FyIGl0ZW5zOicsIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoU3Vic2lkaWFyaWVzKCk7XHJcbiAgICB9LCBbXSk7IC8vIE8gYXJyYXkgdmF6aW8gY29tbyBzZWd1bmRvIGFyZ3VtZW50byBnYXJhbnRlIHF1ZSBvIHVzZUVmZmVjdCBzZWphIGV4ZWN1dGFkbyBhcGVuYXMgdW1hIHZleiwgcXVhbmRvIG8gY29tcG9uZW50ZSBmb3IgbW9udGFkb1xyXG4gIFxyXG4gICAgY29uc3QgY3JlYXRlU3Vic2lkaWFyeSA9IGFzeW5jIChzdWJzaWRpYXJ5RGF0YTogeyBuYW1lOiBzdHJpbmc7IGxvY2F0aW9uOiBzdHJpbmc7IHN0b2NrOiBzdHJpbmcgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzEyNS9hcGkvc3Vic2lkaWFyaWVzJywge1xyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoc3Vic2lkaWFyeURhdGEpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUFkZFN1YnNpZGlhcnkgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKG5hbWUgJiYgbG9jYXRpb24pIHtcclxuICAgICAgICAgICAgY3JlYXRlU3Vic2lkaWFyeSh7bmFtZSwgbG9jYXRpb24sIHN0b2NrfSlcclxuICAgICAgICAgICAgZmV0Y2hTdWJzaWRpYXJpZXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiaC1zY3JlZW4gdy1zY3JlZW4gZmxleFwiPlxyXG4gICAgICAgICAgICA8U2lkZUJhciAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDptbC02NCBtbC01IHAtOCB3LWZ1bGwgZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBtZDptdC0wIG10LTggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjNTEzRjQ2XSBwLTYgcm91bmRlZC0yeGwgc2hhZG93LW1kIG1iLTEwIG1heC13LVs0MDBweF0gbWluLXctWzQwMHB4XSBtZDptci0yMCBoLTIvNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtYi00IHRleHQtd2hpdGVcIj5BZGljaW9uYXIgTm92YSBGaWxpYWw8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB0ZXh0LWJsYWNrIHAtMiBweC00IG1iLTQgcm91bmRlZC0yeGwgYmctc2xhdGUtMTAwIHctZnVsbCBoLTE0IHRleHQtMnhsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb21lIGRhIEZpbGlhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezE1fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHRleHQtYmxhY2sgcC0yIHB4LTQgbWItNCByb3VuZGVkLTJ4bCBiZy1zbGF0ZS0xMDAgdy1mdWxsIGgtMTQgdGV4dC0yeGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxvY2FsaXphw6fDo29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bG9jYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TG9jYXRpb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezE1fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHAtMiBweC00IHJvdW5kZWQtMnhsIHctZnVsbCBoLTE0IHRleHQtMnhsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQWRkU3Vic2lkaWFyeX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkaWNpb25hclxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bIzUxM0Y0Nl0gcC02IHJvdW5kZWQtMnhsIHNoYWRvdy1tZCBtaW4tdy1bNDAwcHhdIHctMS8yIG1pbi1oLVs0MDBweF0gaC01LzZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWItNCB0ZXh0LXdoaXRlXCI+TGlzdGEgZGUgRmlsaWFpczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LWNlbnRlciB3LTEvMiB0ZXh0LXdoaXRlXCI+Tm9tZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtY2VudGVyIHctMS8yIHRleHQtd2hpdGVcIj5Mb2NhbGl6YcOnw6NvPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdWJzaWRpYXJpZXMubWFwKChzdWJzaWRpYXJ5LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3Vic2lkaWFyaWVzQ2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3N1YnNpZGlhcnkubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uPXtzdWJzaWRpYXJ5LmxvY2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKFBhZ2UpO1xyXG4iXSwibmFtZXMiOlsiU2lkZUJhciIsIlN1YnNpZGlhcmllc0NhcmQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIndpdGhBdXRoIiwiUGFnZSIsIm5hbWUiLCJzZXROYW1lIiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsInN0b2NrIiwic2V0U3RvY2siLCJzdWJzaWRpYXJpZXMiLCJzZXRTdWJzaWRpYXJpZXMiLCJmZXRjaFN1YnNpZGlhcmllcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImNyZWF0ZVN1YnNpZGlhcnkiLCJzdWJzaWRpYXJ5RGF0YSIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJoYW5kbGVBZGRTdWJzaWRpYXJ5IiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImgyIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm1heExlbmd0aCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwIiwibWFwIiwic3Vic2lkaWFyeSIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/subsidiaries/page.tsx\n"));

/***/ })

});