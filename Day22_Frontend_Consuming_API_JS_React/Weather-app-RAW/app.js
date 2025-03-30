// Actual Code base for making call to weather API
// https://openweathermap.org/current  -> refer for updated docs at openweathermap
async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "<your-api-key>"; // Replace with your actual API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    // Check if the response is successful
    if (data.cod === 200) {
      displayWeather(data);
    } else {
      alert("City not found");
    }
  } catch (error) {
    alert("Failed to fetch weather data");
  }
}

// dummy code
// async function getWeather() {
//   const city = document.getElementById("city").value;

//   // Dummy API call to JSONPlaceholder
//   const url = `https://jsonplaceholder.typicode.com/posts`;

//   try {
//     const response = await fetch(url);
//     const data = await response.json();

//     // Simulating the weather data response
//     const weatherData = {
//       name: city,
//       sys: { country: "Country" },
//       main: { temp: 25, humidity: 60 },
//       weather: [{ description: "clear sky" }],
//       wind: { speed: 3 },
//     };

//     if (data) {
//       displayWeather(weatherData);
//     } else {
//       alert("City not found");
//     }
//   } catch (error) {
//     alert("Failed to fetch weather data");
//   }
// }

function displayWeather(data) {
  const weatherDataDiv = document.getElementById("weather-data");
  weatherDataDiv.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity} %</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}
