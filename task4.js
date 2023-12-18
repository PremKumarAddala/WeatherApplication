async function getWeather() {
    const cityInput = document.getElementById('cityInput').value;
    const apiKey = "d7563d16bf80bd8068b568c53d65f430"
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      const weatherDetails = document.getElementById('weatherDetails');
      if (data.cod === 200) {
        const { name, main, weather } = data;
        weatherDetails.innerHTML = `
          <h2>Weather in ${name}</h2>
          <p>Temperature: ${main.temp} &#8451;</p>
          <p>Weather: ${weather[0].description}</p>
        `;
      } else {
        weatherDetails.innerHTML = `<p>City not found. Please enter a valid city name.</p>`;
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }
  
