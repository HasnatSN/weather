import { cardObjects } from "./cards.js";

function renderCards() {
  for (let cardObject of cardObjects) {
    createCard(cardObject);
  }
}

function appendChildrenToParent(parent, ...args) {
  for (let child of args) {
    parent.appendChild(child);
  }
}

function createCard(cardObject) {
  const cardAreaDiv = document.querySelector("[data-card-area]");
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
  deleteImg.src = "/weather/src/pictures/delete-button.png";
  weatherImg.src = "/weather/src/pictures/002-cloudy.png";
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

  cardAreaDiv.appendChild(weatherCardDiv);

  appendChildrenToParent(
    weatherCardDiv,
    cardTitleDiv,
    weatherImg,
    temperatureDiv,
    descriptionDiv,
    locationDiv,
    cardLastRowDiv
  );

  cardTitleDiv.appendChild(cityNameDiv, deleteImgDiv);
  deleteImgDiv.appendChild(deleteImg);
  cardLastRowDiv.appendChild(tempFeelDiv, humidityDiv);
  tempFeelDiv.appendChild(tempFeelIcon, feelsLikeDiv);
  feelsLikeDiv.appendChild(feelsLikeNumberDiv, feelsLikeTextDiv);
  humidityDiv.appendChild(humidityIcon, humidityDescDiv);
  humidityDescDiv.appendChild(humidityNumberDiv, humidityTextDiv);

  cityNameDiv.innerText = cardObject.cityName;
  temperatureDiv.innerText = cardObject.temp;
  descriptionDiv.innerText = cardObject.description;
  locationDiv.innerText = cardObject.cityName + ", " + cardObject.country;
  feelsLikeNumberDiv.innerText = cardObject.feelsLike;
  feelsLikeTextDiv.innerText = "Feels like";
  humidityNumberDiv.innerText = cardObject.humidity + "%";
  humidityTextDiv.innerText = "Humidity";
}

export { renderCards };
