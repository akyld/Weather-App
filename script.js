const getWeatherData = (city) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a202be0622msh65e4832c89a572bp1050bbjsnfbfd5c5983d0',
            'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        }
    };

    return fetch(`https://open-weather13.p.rapidapi.com/city/${city}`, options)
	.then(response => response.json())
	.then(data => data)
	.catch(err => console.error(err));
}

const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  console.log(city);
  const data = await getWeatherData(city);
  showWeatherData(data);
}

const showWeatherData = (weatherData) => {
  console.log(weatherData);
  document.getElementById('city-name').innerText = weatherData.name
  document.getElementById('weather-type').innerText = weatherData.weather[0].main;
  document.getElementById('temp').innerText = weatherData.main.temp;
  document.getElementById('min-temp').innerText = weatherData.main.temp_min;
  document.getElementById('max-temp').innerText = weatherData.main.temp_max;

}

// https://rapidapi.com/worldapi/api/open-weather13/