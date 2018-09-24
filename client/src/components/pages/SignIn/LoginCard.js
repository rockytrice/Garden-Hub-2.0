import React, {Component} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {Card, CardBody, Input,Fa,Button} from "mdbreact";
import SocialIcon from "./Icons"

class CardLogin extends Component {

  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      message: ""
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    axios.post("/api/auth/login", { username, password })
      .then((result) => {
        localStorage.setItem("jwtToken", result.data.token);
        this.setState({ message: "" });
        this.props.history.push("/")
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.setState({ message: "Login failed. Username or password not match" });
        }
      });
  }

<Card id="classic-card" style={{marginTop:61}} >
  <CardBody className="z-depth-2 white-text">
    <h3 className="text-center"><Fa icon="user"/> Login:</h3>
      <hr className="hr-light"/>
       <Input label="Your email" icon="envelope"/>
       <Input label="Your password" icon="lock" type="password"/>
       <label for="inputEmail" class="sr-only">Email address</label>
       <input type="email" class="form-control" placeholder="Email address" name="username" value={username} onChange={this.onChange} required/>
         <div className="text-center mt-4 black-text">
          <Button outline color="white">Login</Button>
          <hr className="hr-light"/>
            <SocialIcon />
         </div>
     </CardBody>
   </Card>   

}
export default CardLogin;