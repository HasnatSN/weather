import { cardObjects } from "./cards.js";
import { weatherDataList } from "./weatherdata.js";
import { writeData } from "./memory.js";

function renderCards() {
  const cardAreaDiv = document.querySelector("[data-card-area]");
  cardAreaDiv.innerHTML = "";
  for (let cardObject of cardObjects) {
    createCard(cardObject, cardAreaDiv);
  }

  writeData();
}

function appendChildrenToParent(parent, ...args) {
  for (let child of args) {
    parent.appendChild(child);
  }
}

function removeCardFromDom(index) {
  const cardList = document.querySelectorAll(".weather-card");

  for (let card of cardList) {
    if (card.dataset.index == index) {
      card.parentNode.removeChild(card);

      for (let cardObject of cardObjects) {
        if (card.childNodes[0].childNodes[0].innerText == cardObject.cityName) {
          let indexOfObjectToBeRomoved = cardObjects.indexOf(cardObject);
          cardObjects.splice(indexOfObjectToBeRomoved, 1);
          weatherDataList.splice(indexOfObjectToBeRomoved, 1);
        }
      }
    }
  }
  writeData();
  renderCards();
}

function getFittingImage(desc) {
  switch (desc) {
    case "clear sky":
      return "https://github.com/HasnatSN/weather/blob/main/src/pictures/001-sun.png?raw=true";

    case "few clouds":
      return "https://github.com/HasnatSN/weather/blob/main/src/pictures/002-cloudy.png?raw=true";

    case "scattered clouds":
      return "https://github.com/HasnatSN/weather/blob/main/src/pictures/003-cloud.png?raw=true";

    case "broken clouds":
      return "https://github.com/HasnatSN/weather/blob/main/src/pictures/009-broken.png?raw=true";

    case "shower rain":
      return "https://github.com/HasnatSN/weather/blob/main/src/pictures/004-rainy.png?raw=true";

    case "rain":
      return "https://github.com/HasnatSN/weather/blob/main/src/pictures/005-rainy-1.png?raw=true";

    case "thunderstorm":
      return "https://github.com/HasnatSN/weather/blob/main/src/pictures/006-storm.png?raw=true";

    case "snow":
      return "https://github.com/HasnatSN/weather/blob/main/src/pictures/007-snowflake.png?raw=true";

    case "mist":
      return "https://github.com/HasnatSN/weather/blob/main/src/pictures/008-windy.png?raw=true";

    default:
      return "https://github.com/HasnatSN/weather/blob/main/src/pictures/warm.png?raw=true";
  }
}

function createCard(cardObject, cardAreaDiv) {
  const weatherCardDiv = document.createElement("div");
  const cardTitleDiv = document.createElement("div");
  const cityNameDiv = document.createElement("div");
  const deleteImgDiv = document.createElement("div");
  const deleteImg = document.createElement("img");
  const weatherImg = document.createElement("img");
  const temperatureDiv = document.createElement("div");
  const descriptionDiv = document.createElement("div");
  const locationDiv = document.createElement("div");
  const cardLastRowDiv = document.createElement("div");
  const tempFeelDiv = document.createElement("div");
  const tempFeelIcon = document.createElement("i");
  const feelsLikeDiv = document.createElement("div");
  const feelsLikeNumberDiv = document.createElement("div");
  const feelsLikeTextDiv = document.createElement("div");
  const humidityDiv = document.createElement("div");
  const humidityIcon = document.createElement("i");
  const humidityDescDiv = document.createElement("div");
  const humidityNumberDiv = document.createElement("div");
  const humidityTextDiv = document.createElement("div");

  weatherCardDiv.classList.add("weather-card");
  cardTitleDiv.classList.add("card-title");
  cityNameDiv.classList.add("city-name");
  deleteImgDiv.classList.add("delete-image-div");

  temperatureDiv.classList.add("temperature");
  descriptionDiv.classList.add("description");
  locationDiv.classList.add("location");
  cardLastRowDiv.classList.add("card-last-row");
  tempFeelDiv.classList.add("temp-feel");
  tempFeelIcon.classList.add("fa-solid");
  tempFeelIcon.classList.add("fa-temperature-half");
  feelsLikeDiv.classList.add("feels-like");
  humidityDiv.classList.add("humidity");
  humidityIcon.classList.add("fa-solid");
  humidityIcon.classList.add("fa-droplet");

  deleteImg.src =
    "https://github.com/HasnatSN/weather/blob/main/src/pictures/delete-button.png?raw=true";
  weatherImg.src = getFittingImage(cardObject.description);

  let randomIndex = Math.floor(Math.random() * 1000000);
  weatherCardDiv.setAttribute("data-index", randomIndex);

  deleteImg.addEventListener("click", (e) => {
    removeCardFromDom(randomIndex);
  });

  cardAreaDiv.appendChild(weatherCardDiv);
  deleteImgDiv.appendChild(deleteImg);
  appendChildrenToParent(
    weatherCardDiv,
    cardTitleDiv,
    weatherImg,
    temperatureDiv,
    descriptionDiv,
    locationDiv,
    cardLastRowDiv
  );
  appendChildrenToParent(cardTitleDiv, cityNameDiv, deleteImgDiv);
  appendChildrenToParent(cardLastRowDiv, tempFeelDiv, humidityDiv);
  appendChildrenToParent(tempFeelDiv, tempFeelIcon, feelsLikeDiv);
  appendChildrenToParent(feelsLikeDiv, feelsLikeNumberDiv, feelsLikeTextDiv);
  appendChildrenToParent(humidityDiv, humidityIcon, humidityDescDiv);
  appendChildrenToParent(humidityDescDiv, humidityNumberDiv, humidityTextDiv);

  cityNameDiv.innerText = cardObject.cityName;
  temperatureDiv.innerText = cardObject.temp + "° C";
  descriptionDiv.innerText = cardObject.description;
  locationDiv.innerText = cardObject.cityName + ", " + cardObject.country;
  feelsLikeNumberDiv.innerText = cardObject.feelsLike + "° C";
  feelsLikeTextDiv.innerText = "Feels like";
  humidityNumberDiv.innerText = cardObject.humidity + "%";
  humidityTextDiv.innerText = "Humidity";
}

export { renderCards };
