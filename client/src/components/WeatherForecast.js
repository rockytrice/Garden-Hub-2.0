import React from 'react';
import { Card, CardBody, CardImage, CardTitle, CardText, CardGroup } from 'mdbreact';
 import moment from "moment";

class Forecast extends React.Component {
  render() {

    const date1= moment(this.props.date1);
    const date2= moment(this.props.date2);
    const date3= moment(this.props.date3);
    const date4= moment(this.props.date4);
    const date5= moment(this.props.date5);


    return (
        <CardGroup deck>

        <Card>
          <CardImage src={`http://openweathermap.org/img/w/${this.props.icon1}.png`} alt="weather icon" width="200" height="200" />
          <CardBody>
            <CardTitle tag="h5">{moment.unix(date1).format("MMM Do YYYY")}</CardTitle>
            <CardText style={{listStyle:"none"}}>
            <li>
                {this.props.description1}
            </li> 
            <li>
                {this.props.maxtemperature1}
            </li> 
             <li>
                {this.props.mintemperature1}
             </li> 
            </CardText>
          </CardBody>
        </Card>
      
        <Card> 
        <CardImage src={`http://openweathermap.org/img/w/${this.props.icon2}.png`} alt="weather icon" width="200" height="200" />
          <CardBody>
            <CardTitle tag="h5">{moment.unix(date2).format("MMM Do YYYY")}</CardTitle>
            <CardText style={{listStyle:"none"}}>
            <li>
                {this.props.description2}
            </li> 
            <li>
                {this.props.maxtemperature2}
            </li> 
             <li>
                {this.props.mintemperature2}
             </li> 
            </CardText>
          </CardBody>
        </Card>
      
        <Card>
        <CardImage src={`http://openweathermap.org/img/w/${this.props.icon3}.png`} alt="weather icon" width="200" height="200" />
          <CardBody>
            <CardTitle tag="h5">{moment.unix(date3).format("MMM Do YYYY")}</CardTitle>
            <CardText style={{listStyle:"none"}}>
            <li>
                {this.props.description3}
            </li> 
            <li>
                {this.props.maxtemperature3}
            </li> 
             <li>
                {this.props.mintemperature3}
             </li> 
            </CardText>
          </CardBody>
        </Card>

        <Card>
        <CardImage src={`http://openweathermap.org/img/w/${this.props.icon4}.png`} alt="weather icon" width="200" height="200" />
          <CardBody>
            <CardTitle tag="h5">{moment.unix(date4).format("MMM Do YYYY")}</CardTitle>
            <CardText style={{listStyle:"none"}}>
            <li>
                {this.props.description4}
            </li> 
            <li>
                {this.props.maxtemperature4}
            </li> 
             <li>
                {this.props.mintemperature4}
             </li> 
            </CardText>
          </CardBody>
        </Card>

        <Card>
        <CardImage src={`http://openweathermap.org/img/w/${this.props.icon5}.png`} alt="weather icon" width="200" height="200" />
          <CardBody>
            <CardTitle tag="h5">{moment.unix(date5).format("MMM Do YYYY")}</CardTitle>
            <CardText style={{listStyle:"none"}}>
            <li>
                {this.props.description5}
            </li> 
            <li>
                {this.props.maxtemperature5}
            </li> 
             <li>
                {this.props.mintemperature5}
             </li>  
            </CardText>
          </CardBody>
        </Card>
      
      </CardGroup>
    )
  };
};
  export default Forecast;