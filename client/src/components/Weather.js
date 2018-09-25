import React from "react";



class  WeatherContent extends React.Component{
    render(){
        return (
            <div>
            <ul>
            <img src={`http://openweathermap.org/img/w/${this.props.icon}.png`} alt="weather icon" />
            <li>{this.props.city}</li>
            <li>{this.props.temperature} </li>
            <li>{this.props.mintemperature}</li>
            <li>{this.props.maxtemperature}</li>
            <li>{this.props.humidity}</li>
            <li>{this.props.description} </li>
            <li></li>
            </ul>
            </div>
        )
    }
}
export default WeatherContent;