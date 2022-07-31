let getWeatherData = new Promise((resolve, reject) => {
  resolve(
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=ef6e090d0fed450ba07f747031ada8e4"
    ).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Something went wrong. -HSN");
    })
  );
});

getWeatherData
  .then((data) => {
    console.log(data);
  });

export { getWeatherData };
