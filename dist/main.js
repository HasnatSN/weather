/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_weatherdata_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weatherdata.js */ \"./src/modules/weatherdata.js\");\n/* harmony import */ var _modules_user_input_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/user_input.js */ \"./src/modules/user_input.js\");\n/* harmony import */ var _modules_ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/ui.js */ \"./src/modules/ui.js\");\n\r\n\r\n\r\n\r\nconst anewCityInput = document.querySelector(\"[data-new-city-input]\");\r\n\r\nanewCityInput.addEventListener(\"click\", () => {\r\n    console.log(_modules_weatherdata_js__WEBPACK_IMPORTED_MODULE_0__.weatherDataList, \"index.js\");\r\n})\n\n//# sourceURL=webpack://weather/./src/index.js?");

/***/ }),

/***/ "./src/modules/cards.js":
/*!******************************!*\
  !*** ./src/modules/cards.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cardObjects\": () => (/* binding */ cardObjects),\n/* harmony export */   \"createCustomObjects\": () => (/* binding */ createCustomObjects)\n/* harmony export */ });\n/* harmony import */ var _weatherdata_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherdata.js */ \"./src/modules/weatherdata.js\");\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.js */ \"./src/modules/ui.js\");\n\r\n\r\n\r\nlet cardObjects = [];\r\n\r\nfunction createCardObjects(cityObject) {\r\n  return {\r\n    cityName: cityObject.name,\r\n    weather: cityObject.weather[0].main,\r\n    temp: cityObject.main.temp,\r\n    description: cityObject.weather[0].description,\r\n    country: cityObject.sys.country,\r\n    feelsLike: cityObject.main.feels_like,\r\n    humidity: cityObject.main.humidity,\r\n  };\r\n}\r\n\r\nfunction createCustomObjects() {\r\n  for (let cityObject of _weatherdata_js__WEBPACK_IMPORTED_MODULE_0__.weatherDataList) {\r\n    let cardObject = createCardObjects(cityObject);\r\n    cardObjects.push(cardObject);\r\n  }\r\n  (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.renderCards)();\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather/./src/modules/cards.js?");

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderCards\": () => (/* binding */ renderCards)\n/* harmony export */ });\n/* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards.js */ \"./src/modules/cards.js\");\n\r\n\r\n\r\nfunction renderCards() {\r\n    for (let cardObject of _cards_js__WEBPACK_IMPORTED_MODULE_0__.cardObjects) {\r\n        createCard(cardObject);\r\n    }\r\n}\r\n\r\nfunction createCard (cardObject) {\r\n    const cardArea = document.querySelector(\"[data-card-area]\")\r\n    console.log(cardArea, cardObject);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://weather/./src/modules/ui.js?");

/***/ }),

/***/ "./src/modules/user_input.js":
/*!***********************************!*\
  !*** ./src/modules/user_input.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newCityForm\": () => (/* binding */ newCityForm),\n/* harmony export */   \"newCityInput\": () => (/* binding */ newCityInput)\n/* harmony export */ });\n/* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards.js */ \"./src/modules/cards.js\");\n/* harmony import */ var _weatherdata_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherdata.js */ \"./src/modules/weatherdata.js\");\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui.js */ \"./src/modules/ui.js\");\n\r\n\r\n\r\n\r\nconst newCityForm = document.querySelector(\"[data-new-city-form]\");\r\nconst newCityInput = document.querySelector(\"[data-new-city-input]\");\r\n\r\nnewCityForm.addEventListener(\"submit\", e => {\r\n    e.preventDefault();\r\n    const cityName = newCityInput.value;\r\n    if (cityName == null || cityName == \"\") return alert(\"Input invalid.\")\r\n    newCityInput.value = \"\";\r\n    (0,_weatherdata_js__WEBPACK_IMPORTED_MODULE_1__.getWeatherData)(cityName);\r\n    (0,_cards_js__WEBPACK_IMPORTED_MODULE_0__.createCustomObjects)();\r\n})\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather/./src/modules/user_input.js?");

/***/ }),

/***/ "./src/modules/weatherdata.js":
/*!************************************!*\
  !*** ./src/modules/weatherdata.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWeatherData\": () => (/* binding */ getWeatherData),\n/* harmony export */   \"weatherDataList\": () => (/* binding */ weatherDataList)\n/* harmony export */ });\nlet weatherDataList = [];\r\n\r\n// let getWeatherData = new Promise((resolve) => {\r\n//   resolve(\r\n//     fetch(\r\n//       \"https://api.openweathermap.org/data/2.5/weather?q=Melk&units=metric&appid=ef6e090d0fed450ba07f747031ada8e4\"\r\n//     ).then((response) => {\r\n//       if (response.ok) {\r\n//         return response.json();\r\n//       }\r\n//       throw new Error(\"Something went wrong. -HSN\");\r\n//     })\r\n//   );\r\n// });\r\n\r\n// getWeatherData.then((data) => {\r\n//   weatherDataList.push(data);\r\n// });\r\n\r\n// const weatherDataFactory = (city) => {\r\n//   const weatherdata = new Promise((resolve) => {\r\n//     resolve(\r\n//       fetch(\r\n//         \"https://api.openweathermap.org/data/2.5/weather?q=\" +\r\n//           city +\r\n//           \"&units=metric&appid=ef6e090d0fed450ba07f747031ada8e4\"\r\n//       ).then((response) => {\r\n//         if (response.ok) {\r\n//           return response.json();\r\n//         }\r\n//         throw new Error(\"Something went wrong. -HSN\")\r\n//       })\r\n//     );\r\n//   });\r\n// };\r\n\r\nasync function getWeatherData(city) {\r\n  let promise = fetch(\r\n    \"https://api.openweathermap.org/data/2.5/weather?q=\" +\r\n      city +\r\n      \"&units=metric&appid=ef6e090d0fed450ba07f747031ada8e4\"\r\n  ).then((respone) => {\r\n    if (respone.ok) return respone.json();\r\n  });\r\n\r\n  let result = await promise;\r\n\r\n  if (result === null || result == \"\" || result === undefined) {\r\n    alert(\"City not found.\");\r\n    return;\r\n  }\r\n\r\n  weatherDataList.push(result);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather/./src/modules/weatherdata.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;