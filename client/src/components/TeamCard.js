import React from 'react';
import {  Row, Col, Card, CardBody, Avatar,  Fa,} from 'mdbreact';
const TeamPage = () =>  {
  return(
      <div>
    
      <Card className="my-5 px-5 pb-1 text-center">
        <CardBody>
          <h2 className="h1-responsive font-weight-bold my-5">The Team</h2>
          <p className="grey-text w-responsive mx-auto mb-5"></p>
          <Row className="text-md-left">
            <Col lg="6" md="12" className="mb-5">
              <Col md="4" lg="6" className="float-left">
                <Avatar src="https://i.postimg.cc/vTHnv10H/IMG_2722.jpg" className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid" tag="img" alt="Sample avatar"/>
              </Col>
              <Col md="8" lg="6" className="float-right">
                <h4 className="font-weight-bold mb-3">Rocky Trice</h4>
                <h6 className="font-weight-bold grey-text mb-3">Front End/Back End Developer</h6>
                <p className="grey-text"></p>
                <a className="p-2 fa-lg fb-ic">
                  <Fa icon="linkedin"/>
                </a>
                <a className="p-2 fa-lg tw-ic">
                  <Fa icon="github"/>
                </a>
                
              </Col>
            </Col>

            <Col lg="6" md="12" className="mb-5">
              <Col md="4" lg="6" className="float-left">
                <Avatar src="https://i.postimg.cc/MpZ2xzv2/FB_IMG_1529170697826.jpg" className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid" tag="img" alt=" avatar"/>
              </Col>
              <Col md="8" lg="6" className="float-right">
                <h4 className="font-weight-bold mb-3">Johathan Sells</h4>
                <h6 className="font-weight-bold grey-text mb-3">Back End Developer/IOT Specialist</h6>
                <p className="grey-text"></p>
                <a className="p-2 fa-lg fb-ic">
                  <Fa icon="linkedin"/>
                </a>
                <a className="p-2 fa-lg yt-ic">
                  <Fa icon="github"/>
                </a>
               
              </Col>
            </Col>
          </Row>
        </CardBody>
      </Card>
      </div>
   
  );
}

export default TeamPage;