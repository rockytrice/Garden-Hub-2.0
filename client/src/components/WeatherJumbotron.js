import React from "react";
import { Jumbotron, Container } from 'reactstrap';
import Title from "./Title";
import Form from "./WeatherForm";
import Forecast from "./WeatherForecast";
import cloudbackgroud from "../images/cloudbackground.jpg";
// const config2= require("../config2");

// const API_KEY = config2.API_KEY
const API_KEY = "52a664e93f6772d14f7ca04eaa53a9c9";

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
        
        loading:data.false,

        date1:data.list[0].dt,
        date2:data.list[9].dt,
        date3:data.list[16].dt,
        date4:data.list[24].dt,
        date5:data.list[32].dt,


        // maxtemperature data=======================================================
        maxtemperature1:Math.round(data.list[5].main.temp_max),
        maxtemperature2:Math.round(data.list[12].main.temp_max),
        maxtemperature3:Math.round(data.list[20].main.temp_max),
        maxtemperature4:Math.round(data.list[28].main.temp_max),
        maxtemperature5:Math.round(data.list[32].main.temp_max),


        // mintemperature data========================================================
        mintemperature1:Math.round(data.list[0].main.temp_min),
        mintemperature2:Math.round(data.list[10].main.temp_min),  
        mintemperature3:Math.round(data.list[17].main.temp_min),  
        mintemperature4:Math.round(data.list[25].main.temp_min),  
        mintemperature5:Math.round(data.list[30].main.temp_min),  

        city:data.city.name,
        country:data.city.country,

        // description data==========================================================
        description1:data.list[0].weather[0].description,
        description2:data.list[3].weather[0].description,
        description3:data.list[17].weather[0].description,
        description4:data.list[28].weather[0].description,
        description5:data.list[32].weather[0].description,

        // icon data================================================================
        icon1: data.list[0].weather[0].icon,
        icon2: data.list[11].weather[0].icon,
        icon3: data.list[17].weather[0].icon,
        icon4: data.list[28].weather[0].icon,
        icon5: data.list[32].weather[0].icon,

        err:"please enter values"     
      });
     }
         render () {
           return(

            <Jumbotron fluid style={{backgroundImage:`url(${cloudbackgroud})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
             <Container fluid style={{textAlign:"center", marginTop:"47px"}} >
              <Title />
                <Form getWeather={this.getWeather}/>
              {this.state.loading ? "Loading....":
              <Forecast
              date1={this.state.date1}
              date2={this.state.date2}
              date3={this.state.date3}
              date4={this.state.date4}
              date5={this.state.date5}

              icon1={this.state.icon1}
              icon2={this.state.icon2}
              icon3={this.state.icon3}
              icon4={this.state.icon4}
              icon5={this.state.icon5}

              mintemperature1={this.state.mintemperature1}
              maxtemperature1={this.state.maxtemperature1}
              
              mintemperature2={this.state.mintemperature2}
              maxtemperature2={this.state.maxtemperature2}

              mintemperature3={this.state.mintemperature3}
              maxtemperature3={this.state.maxtemperature3}

              mintemperature4={this.state.mintemperature4}
              maxtemperature4={this.state.maxtemperature4}

              mintemperature5={this.state.mintemperature5}
              maxtemperature5={this.state.maxtemperature5}


              description1={this.state.description1}
              description2={this.state.description2}
              description3={this.state.description3}
              description4={this.state.description4}
              description5={this.state.description5}


              error={this.state.error}
              />
              }
            </Container>
           </Jumbotron> 
           )
       }
} 
    
  

  
 export default WeatherTron;











