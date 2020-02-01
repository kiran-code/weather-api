const weatherApi = new Weather('King of Prussia', 'PA', 'United States');
const ui = new UI();
const lsStorage = new LSStorage();

document.addEventListener('DOMContentLoaded', loadWeatherData);

function loadWeatherData(){
  let locationData = lsStorage.getLocationData();
  weatherApi.changeLocation(locationData);
  
  weatherApi.getCurrentWeather()
          .then(results => {
            ui.loadWeatherData(results);
          })
          .catch(err => console.log(err));
}

const modal = document.querySelector('#w-change-btn'); 

modal.addEventListener('click', getWeatherData);

function getWeatherData(){
  const city = document.querySelector('#city').value;
  const state = document.querySelector('#state').value;

  let locationData = {
    city: city,
    state: state
  }

  weatherApi.changeLocation(locationData);

  weatherApi.getCurrentWeather().then((results) => {
    ui.loadWeatherData(results);
    lsStorage.setLocationData(locationData);
    $('#locModal').modal('hide');
  });
}

// // function pageLoad(){
// //   let weatherData;
// //   weatherApi.getCurrentWeather().then((result) => {
// //     weatherData = result;
// //   });
// // }