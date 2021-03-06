class Weather{
  constructor(city, state, country){
    this.api_key = '414bb717d95045de8e19ed5fb9a60485';
    this.city = city;
    this.state = state;
  }

  async getCurrentWeather(){
    const url = `https://api.weatherbit.io/v2.0/current?state=${this.state}&city=${this.city}&key=${this.api_key}`;
    
    const response = await fetch(url);

    const responseData = await response.json();
    
    return responseData.data[0];
  }

  changeLocation(locationData){
    this.city = locationData.city;
    this.state = locationData.state;
  }

}