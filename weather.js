class Weather{
  constructor(){
    this.api_key = '414bb717d95045de8e19ed5fb9a60485';
  }

  async getCurrentWeather(city, state, country){
    const url = 'http://api.weatherbit.io/v2.0/current';

    const weatherResponse = await fetch(`${url}?state=${state}&city=${city}&country=${country}&key=${this.api_key}`);

    const weatherData = await weatherResponse.json();
    console.log('weather',weatherData);


    return {
      weatherData
    }
  }

}