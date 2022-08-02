import { weatherDataList } from "./weatherdata.js";
import { renderCards } from "./ui.js";
import { retrieveCardData } from "./memory.js";

let cardObjects = retrieveCardData();

function createCardObjects(cityObject) {
  return {
    cityName: cityObject.name,
    weather: cityObject.weather[0].main,
    temp: Math.floor(cityObject.main.temp),
    description: cityObject.weather[0].description,
    country: cityObject.sys.country,
    feelsLike: cityObject.main.feels_like,
    humidity: cityObject.main.humidity,
  };
}

function createCustomObjects() {
  cardObjects = [];
  for (let cityObject of weatherDataList) {
    let cardObject = createCardObjects(cityObject);
    cardObjects.push(cardObject);
  }
  renderCards();
}

export { createCustomObjects, cardObjects };
