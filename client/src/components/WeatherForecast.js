import React from 'react';
import { Card, CardBody, CardImage, CardTitle, CardText, CardGroup } from 'mdbreact';

class Forecast extends React.Component {
  render() {
    return (
        <CardGroup deck>

        <Card>
          <CardImage src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" alt="Card image cap" top hover overlay="white-slight"/>
          <CardBody>
            <CardTitle tag="h5">Monday</CardTitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          </CardBody>
        </Card>
      
        <Card>
          <CardImage src="https://mdbootstrap.com/img/Photos/Others/images/14.jpg" alt="Card image cap" top hover overlay="white-slight"/>
          <CardBody>
            <CardTitle tag="h5">Tuesday</CardTitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          </CardBody>
        </Card>
      
        <Card>
          <CardImage src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg" alt="Card image cap" top hover overlay="white-slight"/>
          <CardBody>
            <CardTitle tag="h5">Wednesday</CardTitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          </CardBody>
        </Card>

        <Card>
          <CardImage src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg" alt="Card image cap" top hover overlay="white-slight"/>
          <CardBody>
            <CardTitle tag="h5">Thursday</CardTitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          </CardBody>
        </Card>

        <Card>
          <CardImage src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg" alt="Card image cap" top hover overlay="white-slight"/>
          <CardBody>
            <CardTitle tag="h5">Friday</CardTitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          </CardBody>
        </Card>
      
      </CardGroup>
    )
  };
};
  export default Forecast;