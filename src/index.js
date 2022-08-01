import { weatherDataList } from "./modules/weatherdata.js";
import { newCityForm } from "./modules/user_input.js";
import { renderCards } from "./modules/ui.js";

const anewCityInput = document.querySelector("[data-new-city-input]");

anewCityInput.addEventListener("click", () => {
    console.log(weatherDataList, "index.js");
})