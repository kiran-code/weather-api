class LSStorage {
  constructor(){

  }

  loadFromLS(){
    if(localStorage.getItem('weatherData') !== null){
      return JSON.parse(localStorage.getItem('weatherData'));
    } else {
      return null;
    }
  }

  setStorage(weatherData){
    localStorage.clear();
    localStorage.setItem('weatherData', JSON.stringify(weatherData));
  }
}