import React from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';

class Zone2 extends React.Component {
  render() {
    return (
      <Card>
        <CardImage className="img-fluid" src="http://www.thekitchengarden.co.nz/wp-content/uploads/2013/04/tray-of-salad.jpg" />
        <CardBody>
            <CardTitle>Zone 2</CardTitle>
            <CardText>Click more Info to see real time data for zone 2.</CardText>
            <Button href="">Button</Button>
        </CardBody>
    </Card>
    )
  }
}
export default Zone2;