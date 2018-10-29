import React from 'react';
import { Card, CardBody, CardImage, CardTitle, CardText, CardGroup } from 'mdbreact';

class Forecast extends React.Component {
  render() {

    return (
        <CardGroup deck>

        <Card>
          <CardImage src={`http://openweathermap.org/img/w/${this.props.icon1}.png`} alt="weather icon" width="200" height="200" />
          <CardBody>
            <CardTitle tag="h5">Monday</CardTitle>
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
            <CardTitle tag="h5">Tuesday</CardTitle>
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
            <CardTitle tag="h5">Wednesday</CardTitle>
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
            <CardTitle tag="h5">Thursday</CardTitle>
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
            <CardTitle tag="h5">Friday</CardTitle>
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