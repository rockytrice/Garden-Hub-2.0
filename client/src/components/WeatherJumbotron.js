import React from "react";
import { Jumbotron, Container } from 'reactstrap';
import Title from "./Title";
import Form from "./WeatherForm";
import WeatherContent from "./Weather";

const API_KEY= `${process.env.REACT_APP_API_KEY}`


class WeatherTron extends React.Component {
  state= {
    icon: "icon",
    temperature:"",
    maxtemperature:undefined ,
    mintemperature: undefined, 
    city:undefined ,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error: "",
    loading:true

  }
  getWeather= async(event)=> {
        event.preventDefault();
        const city=event.target.elements.city.value;
        const country=event.target.elements.country.value;
        
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=${API_KEY}&units=imperial`);
        const data = await api_call.json();
        console.log(data);
        this.setState({
          loading:data.false,
          temperature:data.list[0].main.temp,
          maxtemperature:data.list[0].main.temp_max,
          mintemperature:data.list[0].main.temp_min,
          city:data.city.name,
          country:data.city.country,
          humidity:data.list[0].main.humidity,
          description:data.list[0].weather[0].description,
           icon: data.list[0].weather[0].icon,
          err:"please enter values"


          
        });
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
      error={this.state.error}

       />
      }
    </Container>
  </Jumbotron> 
     )
    }
    
  }
 export default WeatherTron;