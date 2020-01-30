const weatherApi = new Weather();

const modal = document.querySelector('#w-change-btn'); 

modal.addEventListener('click', getWeatherData);

function getWeatherData(){
  const city = document.querySelector('#city').value;
  const state = document.querySelector('#state').value;
  const country = document.querySelector('#country').value;

  let weatherData;
  weatherApi.getCurrentWeather(city, state, country).then((result) => {
    console.log(result.weatherData)
  });
  
}