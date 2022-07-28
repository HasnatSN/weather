let getWeatherData = new Promise((resolve, reject) => {
  resolve(
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Vienna,CA&appid=ef6e090d0fed450ba07f747031ada8e4"
    ).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Something went wrong.");
    })
  );
});

getWeatherData
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

export { getWeatherData };

// https://api.openweathermap.org/data/2.5/weather?q=Vienna,CA&appid=ef6e090d0fed450ba07f747031ada8e4
