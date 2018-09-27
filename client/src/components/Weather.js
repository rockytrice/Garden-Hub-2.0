import React from "react";
// import {Card,CardHeader,CardBody,CardTitle,CardText} from "mdbreact";
import "./Weather.css"
// import Moment from "react-moment";
import moment from "moment";

class  WeatherContent extends React.Component{
    render(){
        const time = moment(this.props.sunrise);
        const sunsettime=moment(this.props.sunset);
        console.log(time);
        return (
            <div className="col-md-12">
              <div className="card text-center" style={{marginTop:17}}>
               <div className="card-header" style={{backgroundColor:"#4285F4"}}>
                 <h1>Current Weather in {this.props.city},{this.props.country}</h1>
               </div>
               <div className="card-body2">
                 <h3 className="card-title"><img src={`http://openweathermap.org/img/w/${this.props.icon}.png`} alt="weather icon" width="108" />{this.props.description}</h3>
                 <ul className="card-text" style={{listStyle:"none",fontFamily:"Lora",fontSize:"30"}}>
                 <li> Temperature is {this.props.temperature}˚F</li>
                <li> Humidity is {this.props.humidity}%</li>    
               <li> Sunrise at {moment.unix(time).format("LLL")}</li>    
               <li> Sunset at {moment.unix(sunsettime).format("LLL")} </li>
                 </ul>
               </div>
             </div>  
             </div>  
            

        //     <div>
        //     <div className= "row">
        //     <div className="col-md-4">
        //     <Card style={{width: '22rem', marginTop: '1rem'}}>
        //       <CardHeader color="primary-color" tag="h3">Current Weather in {this.props.city},{this.props.country} </CardHeader>
        //          <CardBody>
        //     <CardTitle> <img src={`http://openweathermap.org/img/w/${this.props.icon}.png`} alt="weather icon" width="108" />{this.props.description}</CardTitle>
        //     <CardText>
        //       <ul style={{listStyle:"none"}}>
        //         <li> Temperature is {this.props.temperature}</li>
        //         <li> Humidity is {this.props.humidity}%</li>    
        //        <li> Sunrise at {this.props.sunrise}</li>    
        //        <li> Sunset at {this.props.sunset} </li> 
        //      </ul>
        //       </CardText>
        //      </CardBody>
        //     </Card>
        //     </div>
        //    </div>
        //  </div>
        )   
    }
}
export default WeatherContent;



//  