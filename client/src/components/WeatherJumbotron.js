import React from "react";
import { Jumbotron, Container } from 'reactstrap';
import Title from "./Title";
import Form from "./WeatherForm";
import WeatherContent from "./Weather";
const config2= require("../config2");


const API_KEY = config2.API_KEY

class WeatherTron extends React.Component {
  state={
    temperature:"",
    maxtemp:"",
    mintemp:"",
    loading:true,
    city:"",
    country:"",
    humidity:"",
    description:"",
    icon:"",
    err:"",
    // sunrise:"",
    // sunset:"",
    date:""
  
  }
  
  getWeather= async(event)=> {
      event.preventDefault();
      const city=event.target.elements.city.value;
      const country=event.target.elements.country.value;
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast/?q=${city},${country}&units=imperial&APPID=${API_KEY}`);
      const data = await api_call.json();
      console.log(data);
      this.setState({
        //  temperature: Math.round(data.main.temp),
         temperature: Math.round(data.list[0].main.temp),

        //  date:data.dt,
        loading:data.false,
        // maxtemperature:data.main.temp_max,
        maxtemperature:data.list[0].main.temp_max,
        // mintemperature:data.main.temp_min,
        mintemperature:data.list[0].main.temp_min,
        city:data.city.name,
        // city:city.name,
        // country:data.sys.country,
        country:data.city.country,
        // humidity:data.main.humidity,
        humidity:data.list[0].main.humidity,
        // sunrise:data.sys.sunrise,
        // sunset:data.sys.sunset,
        description:data.list[0].weather[0].description,
         icon: data.list[0].weather[0].icon,
        err:"please enter values"     
      });
     }
         render () {
           return(

            <Jumbotron fluid>
             <Container fluid style={{textAlign:"center", marginTop:"47px"}} >
              <Title />
                <Form getWeather={this.getWeather}/>
              {this.state.loading ? "Loading....":
              <WeatherContent
              // date={this.data.date}
              city={this.state.city}
              country={this.state.country}
              icon={this.state.icon}
              temperature={this.state.temperature}
              mintemperature={this.state.mintemperature}
              maxtemperature={this.state.maxtemperature}
              humidity={this.state.humidity}
              description={this.state.description}
              // sunrise={this.state.sunrise}
              // sunset={this.state.sunset}
              wind={this.state.wind}
              error={this.state.error}
              />
              }
            </Container>
           </Jumbotron> 
           )
       }
} 
    
  

  
 export default WeatherTron;











