import React from "react";
import { Jumbotron, Container } from 'reactstrap';
import axios from 'axios';
import Title from "./Title";
import Form from "./WeatherForm";
import WeatherContent from "./Weather";



class WeatherTron extends React.Component {
  state= {
    icon: "icon",
    
    latLng: [],
    todayComponentData: {},
    listComponentData: [],
    error: "",
    loading:true

  }
  
  componentDidMount() {
    // 1. navigator.geolocation will provide coordinates
    const geolocation = navigator.geolocation;
    if (geolocation) {
      // 3. This will be called when location access allowed
      const permissionGranted = (position) => {
        // We got position. Add it to state.
        // call the notifyStateChange function to fetch data.
        this.setState({
          latLng: [position.coords.latitude, position.coords.longitude]
        }, this.notifyStateChange);
      }
  
      // 4. This is when denied
      const permissionDenied = () => {
        console.log('Permission Denied');
      }
  
      // 2. getCurrentPosition will propmpt the permission dialog
      geolocation.getCurrentPosition(permissionGranted, permissionDenied);
    } else {
      console.log('GeoLocation not supported...Update the browser fella');
    }
    
  }
  
  notifyStateChange = () => {
    // Fetch data for new unit
    // Fetch data for city/zipcode
    // Fetch data for lat lng
    console.log(this.state);
  }
    
  fetchWeatherForecast = (hasLatLng) => {
    const API_KEY= `${process.env.REACT_APP_API_KEY}`
    const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast/';
    const queryParams = (hasLatLng) ? `lat=${this.state.latLng[0]}&lon=${this.state.latLng[1]}` : `q=${this.state.queryString}`;

    const url = `${BASE_URL}?${queryParams}&units=imperial&appid=${API_KEY}`;

    return axios.get(url).then(response => {
      return response.data;
    }).catch(error => {
      console.log('Error:', error);
    })
  }

  onSearchSubmit = (query) => {
    this.setState({
      queryString: query,
      latLng: []
    }, this.notifyStateChange)
  }
  notifyStateChange = () => {
    const hasLatLng = this.state.latLng.length > 0;
    const hasCityOrCountry = (this.state.queryString !== '');
  
    if (hasLatLng || hasCityOrCountry) {
      this.fetchWeatherForecast(hasLatLng).then(forecastData => {
        console.log('Forecast Data:', forecastData);
        // Extract component specific data...
      }).catch(error => {
        console.log('Error:', error);
      });
    }
    
  }
  
  extractDataForTodayComponent = (forecastData) => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
    const todayForecast = forecastData.list[0];
  
    const time = new Date(todayForecast.dt * 1000);
    const day = this.getDay(time);
    const date = `${monthNames[time.getMonth()]} ${time.getDate()}, ${time.getFullYear()}`
  
    const weatherId = todayForecast.weather[0].id;
    const description = todayForecast.weather[0].description;
  
    const hours = new Date().getHours();
    const isDayTime = hours > 6 && hours < 20;
    let mainTemperature = (isDayTime) ? todayForecast.temp.day : todayForecast.temp.night;
    mainTemperature = Math.round(mainTemperature);
    const minTemperature = Math.round(todayForecast.temp.min);
    const maxTemperature = Math.round(todayForecast.temp.max);
  
    const pressure = todayForecast.pressure;
    const humidity = todayForecast.humidity;
    const windSpeed = todayForecast.speed;
  
    return {
      day,
      date,
      weatherId,
      description,
      mainTemperature,
      minTemperature,
      maxTemperature,
      pressure,
      humidity,
      windSpeed
    }
  }
  
  // Takes date object or unix timestamp in ms and returns day string
  getDay = (time) => {
    const daysNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday ", "Friday", "Saturday"];
    return daysNames[(new Date(time).getDay())];
  }


  extractDataForListAndGraphComponent = (forecastData) => {
    const listComponentData = [];
  
    forecastData.list.forEach(forecast => {
      let item = {};
      item.day = this.getDay(forecast.dt * 1000);
      item.weatherId = forecast.weather[0].id;
      item.description = forecast.weather[0].description;
      item.mainTemperature = Math.round(forecast.temp.day);
  
      listComponentData.push(item);
    });
  
    // Remove first element as that represents today's weather
    // ListComponent displays next 6 days data
    listComponentData.shift();
  
    return {
      listComponentData,
    }
  }






    render() {
     return(
      <Jumbotron fluid>
       <Container fluid style={{textAlign:"center"}} >
        <Title />
       <Form getWeather={this.getWeather}/>
      {this.state.loading ? "Loading....":
      <WeatherContent
      city={this.state.city}
      country={this.state.country}
      icon={this.state.icon}
      temperature={this.state.temperature}
      mintemperature={this.state.mintemperature}
      maxtemperature={this.state.maxtemperature}
      humidity={this.state.humidity}
      description={this.state.description}
      sunrise={this.state.sunrise}
      sunset={this.state.sunset}
      wind={this.state.wind}
      error={this.state.error}

       />
      }
      
      </Container>
     </Jumbotron> 
     )
    }
    
};
    







  
 export default WeatherTron;







//  getWeather= async(event)=> {
//   event.preventDefault();
//   const city=event.target.elements.city.value;
//   const country=event.target.elements.country.value;
//   const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast/?q=${city},${country}&units=imperial&APPID=${API_KEY}`);
//   const data = await api_call.json();
//   console.log(data);
//   this.setState({
//     loading:data.false,
//     temperature:data.list[0].main.temp,
//     maxtemperature:data.list[0].main.temp_max,
//     mintemperature:data.list[0].main.temp_min,
//     city:data.city.name,
//     country:data.city.country,
//     humidity:data.list[0].main.humidity,
//     description:data.list[0].weather[0].description,
//      icon: data.list[0].weather[0].icon,
//     err:"please enter values"     
//   });
// }

// temperature:"",
//     maxtemperature:undefined ,
//     mintemperature: undefined, 
//     city:undefined ,
//     country:undefined,
//     humidity:undefined,
//     description:undefined,
//     sunrise:"",
//     sunset:"",
//     wind:"",