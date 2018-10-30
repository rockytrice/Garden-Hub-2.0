import React from "react";
import {Button,} from "mdbreact";

class  Form extends React.Component{   
  // form validation for weather form
state ={
  city: "",
  country: ""
}
submitHandler = (event) => {
  event.preventDefault();
  event.target.className += ' was-validated';
}

changeHandler = (event) => {
  this.setState({...this.state, [event.target.name]: event.target.value})
}

render() {
  return (
    <div className="form-container">
      <form onSubmit={this.props.getWeather}>
      <div>
        <input type="text" value={this.state.city} onChange={this.changeHandler} name="city" placeholder="Enter your City..." required/>
        <div className="invalid-feedback">Please provide a valid state.</div>
         <div className="valid-feedback">Looks good!</div>
      </div> 
      <div>
        <input value={this.state.country} onChange={this.changeHandler}  type="text" name="country" placeholder="Country..." required/>
        <div className="invalid-feedback">Please provide a valid country.</div>
         <div className="valid-feedback">Looks good!</div>

       </div>
        <Button color="yellow" type="submit">Get Weather</Button>
      </form>
    </div>
  );
}
    }
export default Form;






