import { weatherDataList } from "./weatherdata.js";
import { renderCards } from "./ui.js";

let cardObjects = [];

function createCardObjects(cityObject) {
  return {
    cityName: cityObject.name,
    weather: cityObject.weather[0].main,
    temp: cityObject.main.temp,
    description: cityObject.weather[0].description,
    country: cityObject.sys.country,
    feelsLike: cityObject.main.feels_like,
    humidity: cityObject.main.humidity,
  };
}

function createCustomObjects() {
  for (let cityObject of weatherDataList) {
    let cardObject = createCardObjects(cityObject);
    cardObjects.push(cardObject);
  }
  renderCards();
}

export { createCustomObjects, cardObjects };
