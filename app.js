const weatherApi = new Weather('King of Prussia', 'PA', 'United States');
const ui = new UI();
const lsStorage = new LSStorage();

document.addEventListener('DOMContentLoaded', loadWeatherData);

function loadWeatherData(){
  let weatherData = lsStorage.loadFromLS();
  if(weatherData === null){
    weatherApi.getCurrentWeather()
            .then(results => {
              ui.loadWeatherData(results);
              lsStorage.setStorage(results);
            })
            .catch(err => console.log(err));
  } else {
    ui.loadWeatherData(weatherData);
  }
    
}

const modal = document.querySelector('#w-change-btn'); 

modal.addEventListener('click', getWeatherData);

function getWeatherData(){
  const city = document.querySelector('#city').value;
  const state = document.querySelector('#state').value;
  const country = document.querySelector('#country').value;

  weatherApi.changeLocation(city, state, country);

  weatherApi.getCurrentWeather().then((results) => {
    ui.loadWeatherData(results);
    lsStorage.setStorage(results);
  });
}

// // function pageLoad(){
// //   let weatherData;
// //   weatherApi.getCurrentWeather().then((result) => {
// //     weatherData = result;
// //   });
// // }