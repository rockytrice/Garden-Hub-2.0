import React from "react";
import {Card,CardHeader,CardBody,CardTitle,CardText} from "mdbreact";


class  WeatherContent extends React.Component{
    render(){
        return (
            <React.Fragment> 
            <div className= "row">
            <div className="col-md-4">
            <Card style={{width: '22rem', marginTop: '1rem'}}>
              <CardHeader color="primary-color" tag="h3">Current Weather in {this.props.city},{this.props.country} </CardHeader>
                 <CardBody>
            <CardTitle> <img src={`http://openweathermap.org/img/w/${this.props.icon}.png`} alt="weather icon" width="108" />{this.props.description}</CardTitle>
            <CardText>
              <ul style={{listStyle:"none"}}>
                <li> Temperature is {this.props.temperature}</li>
                <li> Humidity is {this.props.humidity}%</li>    
               <li> Sunrise at {this.props.sunrise}</li>    
               <li> Sunset at {this.props.sunset} </li> 
             </ul>
              </CardText>
             </CardBody>
            </Card>
            </div>
            <div className="col-md-8">
             <div class="card text-center" style={{marginTop:17}}>
              <div class="card-header">
                <h1>Forecast For the Week</h1>
              </div>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>  
            </div>  
            </div>        
          </React.Fragment>




        )   
    }
}
export default WeatherContent;



