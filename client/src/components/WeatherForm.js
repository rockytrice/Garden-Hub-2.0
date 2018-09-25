import React from "react";
import {Button} from "mdbreact";

class  Form extends React.Component{
    render(){
        return (
            
            <form onSubmit={this.props.getWeather}>
            <input type="text" name="city" placeholder="City..." />
            <input type="text" name="country" placeholder="Country..." />
            <Button color="primary" type="submit">Get Weather</Button>
            </form>
        )
    }
}
export default Form;