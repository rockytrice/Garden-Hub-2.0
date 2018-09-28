
import React from 'react';
import { Card, CardBody, CardImage, CardTitle, CardText,Tooltip,Col,CardFooter,Row } from 'mdbreact';
import tomatoes from "../../../../images/tomatoes.jpg";

class Zone extends React.Component {
  render() {
    return (
  <section className="text-center my-5">
   <Row>
   <Col lg="4" md="12" className="mb-lg-0 mb-4">
    <Card wide ecommerce>
      <CardImage cascade src={tomatoes} style={{width:400,height:300}}/>
      <CardBody cascade className="text-center">
        <a href="" className="text-muted">
          <h5>Zone 1</h5>
        </a>
        <CardTitle>
          <strong><a href="">Tamatoes</a></strong>
        </CardTitle>
        <CardText></CardText>
        <CardFooter className="px-1">
          <span className="float-left font-weight-bold">
            
          </span>
          <span className="float-right">
            <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-eye grey-text ml-3" tooltipContent="Quick look"/>
            <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-heart grey-text ml-3" tooltipContent="Add to watchlist"/>
          </span>
        </CardFooter>
      </CardBody>
    </Card>
  </Col>
  <Col lg="4" md="12" className="mb-lg-0 mb-4">
  <Card cascade>
    <CardImage cascade tag="div">
        <div className="heading2" style={{background: '#21d192'}}>
            <h2 className="h2-responsive">Temperature</h2>
            <p>data</p>
        </div>
      </CardImage>
      <CardBody cascade>
          <CardTitle>Card title</CardTitle>
          <CardText></CardText>
      </CardBody>
    </Card>
   </Col>
   <Col lg="4" md="12" className="mb-lg-0 mb-4">
  <Card cascade>
    <CardImage cascade tag="div">
        <div className="heading2" style={{background: '#21d192'}}>
            <h2 className="h2-responsive">Soil Moisture</h2>
            <p>data</p>
        </div>
    </CardImage>
    <CardBody cascade>
          <CardTitle>Card title</CardTitle>
          <CardText></CardText>
    </CardBody>
  </Card>
 </Col>
  
  </Row>
 </section> 
   
    )
  }
}
export default Zone;
