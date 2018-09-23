
import React from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';

class Zone1 extends React.Component {
  render() {
    return (
      <Card>
        <CardImage className="img-fluid" src="https://thumbs.dreamstime.com/b/tomate-et-plante-de-basilic-dans-le-pot-sur-la-terrasse-d-une-maison-54267341.jpg" waves />
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