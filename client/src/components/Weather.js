import React from "react";
import "./Weather.css"
// import moment from "moment";

class  WeatherContent extends React.Component{
    render(){
        // const time = moment(this.props.sunrise);
        // const sunsettime=moment(this.props.sunset);
        // console.log(time);
        return (
            <div className="col-md-12">
              <div className="card text-center" style={{marginTop:17}}>
               <div className="card-header" style={{backgroundColor:"#ffbb33"}}>
                 <h1>Current Weather in {this.props.city},{this.props.country}</h1>
               </div>
               <div className="card-body2">
                 <h3 className="card-title"><img src={`http://openweathermap.org/img/w/${this.props.icon}.png`} alt="weather icon" width="108" />{this.props.description}</h3>
                 <ul className="card-text" style={{listStyle:"none",fontFamily:"Lora",fontSize:"30"}}>
                 <li> Temperature is {this.props.temperature}˚F</li>
                <li> Humidity is {this.props.humidity}%</li>    
               {/* <li> Sunrise at {moment.unix(time).format("LLL")}</li>    
               <li> Sunset at {moment.unix(sunsettime).format("LLL")} </li> */}
                 </ul>
               </div>
             </div>  
             </div>  
            
        )   
    }
}
export default WeatherContent;



 