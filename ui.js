class UI{
  constructor(){

    this.location = document.querySelector('#w-location');
    this.description = document.querySelector('#w-description');
    this.temperatureString = document.querySelector('#w-temparature-string');
    this.icon = document.querySelector('#w-icon');
    this.precipitation = document.querySelector('#w-precipitation');
    this.dewpoint = document.querySelector('#w-dewpoint');
    this.sunset = document.querySelector('#w-sunset');
    this.windSpeed = document.querySelector('#w-wind-speed');

  }

  loadWeatherData(weatherData){
    console.log('loadWeatherData ', weatherData);
    this.location.textContent = weatherData.city_name;
    this.description.textContent = weatherData.weather.description;
    this.temperatureString.textContent = `${this.ascii(weatherData.temp)}`;
    // this.icon.setAttribute('src', weatherData.weather.code);
    this.precipitation.textContent = `Precipitation: ${weatherData.precip}`;
    this.dewpoint.textContent = `dew point:  ${weatherData.dewpt}`;
    this.sunset.textContent = `Sunset: ${weatherData.sunset}`;
    this.windSpeed.textContent = `Wind Speed: ${weatherData.wind_spd}`;
  }  

  ascii (a) { return String.fromCharCode(a); }
}