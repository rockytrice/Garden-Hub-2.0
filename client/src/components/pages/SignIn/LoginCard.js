import React from "react";
import {Card, CardBody, Input,Fa,Button} from "mdbreact";
import SocialIcon from "./Icons"
const CardLogin = () => (
<Card id="classic-card" >
  <CardBody className="z-depth-2 white-text">
    <h3 className="text-center"><Fa icon="user"/> Login:</h3>
      <hr className="hr-light"/>
       <Input label="Your email" icon="envelope"/>
       <Input label="Your password" icon="lock" type="password"/>
         <div className="text-center mt-4 black-text">
          <Button outline color="white">Login</Button>
          <hr className="hr-light"/>
            <SocialIcon />
         </div>
     </CardBody>
   </Card>                  
);
export default CardLogin;