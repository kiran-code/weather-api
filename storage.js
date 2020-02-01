class LSStorage {
  constructor(){
    this.city;
    this.state;
    this.defaultCity = 'Dallas';
    this.defaultState = 'TX';
  }

  getLocationData(){
    if(localStorage.getItem('city') === null){
      this.city = this.defaultCity;
    } else{
      this.city = localStorage.getItem('city');
    }

    if(localStorage.getItem('state') === null){
      this.state = this.defaultState;
    } else{
      this.state = localStorage.getItem('state');
    }

    let locationData = {
      city: this.city,
      state: this.state
    }
    return locationData;
  }

  setLocationData({city, state}){
    localStorage.setItem('city', city);
    localStorage.setItem('state', state);
  }
}