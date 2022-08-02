import { createCustomObjects } from "./cards";
import {retrieveWeatherData} from './memory';

let weatherDataList = retrieveWeatherData();

function checkObjectUnique(object) {
  if (weatherDataList.length <= 0) return false;

  for (let i = 0; i < weatherDataList.length; i++) {
    if (weatherDataList[i].name == object.name) return true;
  }

  return false;
}

async function getWeatherData(city) {
  let promise = fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric&appid=ef6e090d0fed450ba07f747031ada8e4"
  ).then((respone) => {
    if (respone.ok) return respone.json();
  });

  let result = await promise;

  if (result === null || result == "" || result === undefined)
    return alert("City not found.");

  if (checkObjectUnique(result)) return;

  weatherDataList.push(result);
  createCustomObjects();
}

export { getWeatherData, weatherDataList };
