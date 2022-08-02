import { weatherDataList } from "./weatherdata";
import { cardObjects } from "./cards";

const LOCAL_STORAGE_WEATHER_LIST_KEY = "weather.weatherDataList";
const LOCAL_STORAGE_CARD_OBJECTS_LIST_KEY = "weather.cardObjects";

function retrieveWeatherData() {
  const LOCAL_STORAGE_WEATHER_LIST_KEY = "weather.weatherDataList";
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_WEATHER_LIST_KEY)) || [];
}

function retrieveCardData() {
  const LOCAL_STORAGE_CARD_OBJECTS_LIST_KEY = "weather.cardObjects";
  return (
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_CARD_OBJECTS_LIST_KEY)) || []
  );
}

function writeData() {
  localStorage.setItem(
    LOCAL_STORAGE_WEATHER_LIST_KEY,
    JSON.stringify(weatherDataList)
  );
  localStorage.setItem(
    LOCAL_STORAGE_CARD_OBJECTS_LIST_KEY,
    JSON.stringify(cardObjects)
  );
}

export { retrieveCardData, retrieveWeatherData, writeData};
