
import React from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import tomatoes from "../../../../images/tomatoes.jpg";
class Zone1 extends React.Component {
  render() {
    return (
      <Card>
        <CardImage className="img-fluid" src={tomatoes} />
        <CardBody>
            <CardTitle>Zone 1(Tomato plants)</CardTitle>
            <CardText>Click more info to see real time data for Zone 1</CardText>
            <Button href="">Button</Button>
        </CardBody>
    </Card>
    )
  }
}
export default Zone1;