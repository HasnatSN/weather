import { cardObjects, createCustomObjects } from "./cards.js";
import { getWeatherData, weatherDataList} from "./weatherdata.js";
import { renderCards } from "./ui.js";

const newCityForm = document.querySelector("[data-new-city-form]");
const newCityInput = document.querySelector("[data-new-city-input]");

newCityForm.addEventListener("submit", e => {
    e.preventDefault();
    const cityName = newCityInput.value;
    if (cityName == null || cityName == "") return alert("Input invalid.")
    newCityInput.value = "";
    getWeatherData(cityName);
})


export {newCityForm, newCityInput}