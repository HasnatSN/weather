const newCityForm = document.querySelector("[data-new-city-form]");
const newCityInput = document.querySelector("[data-new-city-input]");
const cities = [];

newCityForm.addEventListener("submit", e => {
    e.preventDefault();
    const cityName = newCityInput.value;
    if (cityName == null || cityName == "") return alert("Input invalid.")
    newCityInput.value = "";
    cities.push(cityName);
    console.log(cities);
})


export {newCityForm, newCityInput, cities}