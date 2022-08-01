import { weatherData, weatherDataList } from "./modules/weatherdata.js";
import { newCityForm, newCityInput, cities } from "./modules/user_input.js";

const anewCityForm = document.querySelector("[data-new-city-form]");

anewCityForm.addEventListener("click", () => {
    console.log(weatherDataList);
})