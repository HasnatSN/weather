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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_weatherdata_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weatherdata.js */ \"./src/modules/weatherdata.js\");\n/* harmony import */ var _modules_user_input_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/user_input.js */ \"./src/modules/user_input.js\");\n/* harmony import */ var _modules_ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/ui.js */ \"./src/modules/ui.js\");\n\r\n\r\n\n\n//# sourceURL=webpack://weather/./src/index.js?");

/***/ }),

/***/ "./src/modules/cards.js":
/*!******************************!*\
  !*** ./src/modules/cards.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cardObjects\": () => (/* binding */ cardObjects),\n/* harmony export */   \"createCustomObjects\": () => (/* binding */ createCustomObjects)\n/* harmony export */ });\n/* harmony import */ var _weatherdata_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherdata.js */ \"./src/modules/weatherdata.js\");\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.js */ \"./src/modules/ui.js\");\n\r\n\r\n\r\nlet cardObjects = [];\r\n\r\nfunction createCardObjects(cityObject) {\r\n  return {\r\n    cityName: cityObject.name,\r\n    weather: cityObject.weather[0].main,\r\n    temp: Math.floor(cityObject.main.temp),\r\n    description: cityObject.weather[0].description,\r\n    country: cityObject.sys.country,\r\n    feelsLike: cityObject.main.feels_like,\r\n    humidity: cityObject.main.humidity,\r\n  };\r\n}\r\n\r\nfunction createCustomObjects() {\r\n  cardObjects = [];\r\n  for (let cityObject of _weatherdata_js__WEBPACK_IMPORTED_MODULE_0__.weatherDataList) {\r\n    let cardObject = createCardObjects(cityObject);\r\n    cardObjects.push(cardObject);\r\n  }\r\n  (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.renderCards)();\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather/./src/modules/cards.js?");

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderCards\": () => (/* binding */ renderCards)\n/* harmony export */ });\n/* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards.js */ \"./src/modules/cards.js\");\n/* harmony import */ var _weatherdata_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherdata.js */ \"./src/modules/weatherdata.js\");\n\r\n\r\n\r\nfunction renderCards() {\r\n  const cardAreaDiv = document.querySelector(\"[data-card-area]\");\r\n  cardAreaDiv.innerHTML = \"\";\r\n  for (let cardObject of _cards_js__WEBPACK_IMPORTED_MODULE_0__.cardObjects) {\r\n    createCard(cardObject, cardAreaDiv);\r\n  }\r\n}\r\n\r\nfunction appendChildrenToParent(parent, ...args) {\r\n  for (let child of args) {\r\n    parent.appendChild(child);\r\n  }\r\n}\r\n\r\nfunction removeCardFromDom(index) {\r\n  const cardList = document.querySelectorAll(\".weather-card\");\r\n\r\n  for (let card of cardList) {\r\n    if (card.dataset.index == index) {\r\n      card.parentNode.removeChild(card);\r\n\r\n      for (let cardObject of _cards_js__WEBPACK_IMPORTED_MODULE_0__.cardObjects) {\r\n        if (card.childNodes[0].childNodes[0].innerText == cardObject.cityName) {\r\n          let indexOfObjectToBeRomoved = _cards_js__WEBPACK_IMPORTED_MODULE_0__.cardObjects.indexOf(cardObject);\r\n          _cards_js__WEBPACK_IMPORTED_MODULE_0__.cardObjects.splice(indexOfObjectToBeRomoved, 1);\r\n          _weatherdata_js__WEBPACK_IMPORTED_MODULE_1__.weatherDataList.splice(indexOfObjectToBeRomoved, 1);\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  renderCards();\r\n}\r\n\r\nfunction createCard(cardObject, cardAreaDiv) {\r\n  // createElements();\r\n  // addClassesToElements();\r\n  // addSourcesToImages();\r\n  // appendAllChildrenToParents(cardAreaDiv);\r\n  // addTextContent(cardObject);\r\n\r\n  const weatherCardDiv = document.createElement(\"div\");\r\n  const cardTitleDiv = document.createElement(\"div\");\r\n  const cityNameDiv = document.createElement(\"div\");\r\n  const deleteImgDiv = document.createElement(\"div\");\r\n  const deleteImg = document.createElement(\"img\");\r\n  const weatherImg = document.createElement(\"img\");\r\n  const temperatureDiv = document.createElement(\"div\");\r\n  const descriptionDiv = document.createElement(\"div\");\r\n  const locationDiv = document.createElement(\"div\");\r\n  const cardLastRowDiv = document.createElement(\"div\");\r\n  const tempFeelDiv = document.createElement(\"div\");\r\n  const tempFeelIcon = document.createElement(\"i\");\r\n  const feelsLikeDiv = document.createElement(\"div\");\r\n  const feelsLikeNumberDiv = document.createElement(\"div\");\r\n  const feelsLikeTextDiv = document.createElement(\"div\");\r\n  const humidityDiv = document.createElement(\"div\");\r\n  const humidityIcon = document.createElement(\"i\");\r\n  const humidityDescDiv = document.createElement(\"div\");\r\n  const humidityNumberDiv = document.createElement(\"div\");\r\n  const humidityTextDiv = document.createElement(\"div\");\r\n\r\n  weatherCardDiv.classList.add(\"weather-card\");\r\n  cardTitleDiv.classList.add(\"card-title\");\r\n  cityNameDiv.classList.add(\"city-name\");\r\n  deleteImgDiv.classList.add(\"delete-image-div\");\r\n\r\n  temperatureDiv.classList.add(\"temperature\");\r\n  descriptionDiv.classList.add(\"description\");\r\n  locationDiv.classList.add(\"location\");\r\n  cardLastRowDiv.classList.add(\"card-last-row\");\r\n  tempFeelDiv.classList.add(\"temp-feel\");\r\n  tempFeelIcon.classList.add(\"fa-solid\");\r\n  tempFeelIcon.classList.add(\"fa-temperature-half\");\r\n  feelsLikeDiv.classList.add(\"feels-like\");\r\n  humidityDiv.classList.add(\"humidity\");\r\n  humidityIcon.classList.add(\"fa-solid\");\r\n  humidityIcon.classList.add(\"fa-droplet\");\r\n\r\n  deleteImg.src = \"/weather/src/pictures/delete-button.png\";\r\n  weatherImg.src = \"/weather/src/pictures/002-cloudy.png\";\r\n\r\n  let randomIndex = Math.floor(Math.random() * 1000000);\r\n  weatherCardDiv.setAttribute(\"data-index\", randomIndex);\r\n\r\n  deleteImg.addEventListener(\"click\", (e) => {\r\n    removeCardFromDom(randomIndex);\r\n  });\r\n\r\n  cardAreaDiv.appendChild(weatherCardDiv);\r\n  deleteImgDiv.appendChild(deleteImg);\r\n  appendChildrenToParent(\r\n    weatherCardDiv,\r\n    cardTitleDiv,\r\n    weatherImg,\r\n    temperatureDiv,\r\n    descriptionDiv,\r\n    locationDiv,\r\n    cardLastRowDiv\r\n  );\r\n  appendChildrenToParent(cardTitleDiv, cityNameDiv, deleteImgDiv);\r\n  appendChildrenToParent(cardLastRowDiv, tempFeelDiv, humidityDiv);\r\n  appendChildrenToParent(tempFeelDiv, tempFeelIcon, feelsLikeDiv);\r\n  appendChildrenToParent(feelsLikeDiv, feelsLikeNumberDiv, feelsLikeTextDiv);\r\n  appendChildrenToParent(humidityDiv, humidityIcon, humidityDescDiv);\r\n  appendChildrenToParent(humidityDescDiv, humidityNumberDiv, humidityTextDiv);\r\n\r\n  cityNameDiv.innerText = cardObject.cityName;\r\n  temperatureDiv.innerText = cardObject.temp + \"° C\";\r\n  descriptionDiv.innerText = cardObject.description;\r\n  locationDiv.innerText = cardObject.cityName + \", \" + cardObject.country;\r\n  feelsLikeNumberDiv.innerText = cardObject.feelsLike + \"° C\";\r\n  feelsLikeTextDiv.innerText = \"Feels like\";\r\n  humidityNumberDiv.innerText = cardObject.humidity + \"%\";\r\n  humidityTextDiv.innerText = \"Humidity\";\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather/./src/modules/ui.js?");

/***/ }),

/***/ "./src/modules/user_input.js":
/*!***********************************!*\
  !*** ./src/modules/user_input.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newCityInput\": () => (/* binding */ newCityInput),\n/* harmony export */   \"searchBtn\": () => (/* binding */ searchBtn)\n/* harmony export */ });\n/* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards.js */ \"./src/modules/cards.js\");\n/* harmony import */ var _weatherdata_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherdata.js */ \"./src/modules/weatherdata.js\");\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui.js */ \"./src/modules/ui.js\");\n\r\n\r\n\r\n\r\nconst newCityInput = document.querySelector(\"[data-new-city-input]\");\r\nconst searchBtn = document.querySelector(\"[data-search-button]\");\r\n\r\nfunction eventHandler() {\r\n  const cityName = newCityInput.value;\r\n  if (cityName == null || cityName == \"\") return alert(\"Input invalid.\");\r\n  newCityInput.value = \"\";\r\n  (0,_weatherdata_js__WEBPACK_IMPORTED_MODULE_1__.getWeatherData)(cityName);\r\n}\r\n\r\nsearchBtn.onclick = function() {(eventHandler())};\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather/./src/modules/user_input.js?");

/***/ }),

/***/ "./src/modules/weatherdata.js":
/*!************************************!*\
  !*** ./src/modules/weatherdata.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWeatherData\": () => (/* binding */ getWeatherData),\n/* harmony export */   \"weatherDataList\": () => (/* binding */ weatherDataList)\n/* harmony export */ });\n/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards */ \"./src/modules/cards.js\");\n\r\n\r\nlet weatherDataList = [];\r\n\r\n// let getWeatherData = new Promise((resolve) => {\r\n//   resolve(\r\n//     fetch(\r\n//       \"https://api.openweathermap.org/data/2.5/weather?q=Melk&units=metric&appid=ef6e090d0fed450ba07f747031ada8e4\"\r\n//     ).then((response) => {\r\n//       if (response.ok) {\r\n//         return response.json();\r\n//       }\r\n//       throw new Error(\"Something went wrong. -HSN\");\r\n//     })\r\n//   );\r\n// });\r\n\r\n// getWeatherData.then((data) => {\r\n//   weatherDataList.push(data);\r\n// });\r\n\r\n// const weatherDataFactory = (city) => {\r\n//   const weatherdata = new Promise((resolve) => {\r\n//     resolve(\r\n//       fetch(\r\n//         \"https://api.openweathermap.org/data/2.5/weather?q=\" +\r\n//           city +\r\n//           \"&units=metric&appid=ef6e090d0fed450ba07f747031ada8e4\"\r\n//       ).then((response) => {\r\n//         if (response.ok) {\r\n//           return response.json();\r\n//         }\r\n//         throw new Error(\"Something went wrong. -HSN\")\r\n//       })\r\n//     );\r\n//   });\r\n// };\r\n\r\nfunction checkObjectUnique(object) {\r\n  if (weatherDataList.length <= 0) return false;\r\n\r\n  for (let i = 0; i < weatherDataList.length; i++) {\r\n    if (weatherDataList[i].name == object.name) return true;\r\n  }\r\n\r\n  return false;\r\n}\r\n\r\nasync function getWeatherData(city) {\r\n  let promise = fetch(\r\n    \"https://api.openweathermap.org/data/2.5/weather?q=\" +\r\n      city +\r\n      \"&units=metric&appid=ef6e090d0fed450ba07f747031ada8e4\"\r\n  ).then((respone) => {\r\n    if (respone.ok) return respone.json();\r\n  });\r\n\r\n  let result = await promise;\r\n\r\n  if (result === null || result == \"\" || result === undefined)\r\n    return alert(\"City not found.\");\r\n\r\n  if (checkObjectUnique(result)) return;\r\n\r\n  weatherDataList.push(result);\r\n  (0,_cards__WEBPACK_IMPORTED_MODULE_0__.createCustomObjects)();\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather/./src/modules/weatherdata.js?");

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