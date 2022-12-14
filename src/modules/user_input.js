import { cardObjects, createCustomObjects } from "./cards.js";
import { getWeatherData, weatherDataList } from "./weatherdata.js";
import { renderCards } from "./ui.js";

const newCityInput = document.querySelector("[data-new-city-input]");
const searchBtn = document.querySelector("[data-search-button]");

function eventHandler() {
  const cityName = newCityInput.value;
  if (cityName == null || cityName == "") return alert("Input invalid.");
  newCityInput.value = "";
  getWeatherData(cityName);
}

searchBtn.onclick = function () {
  eventHandler();
};

export { searchBtn, newCityInput };
