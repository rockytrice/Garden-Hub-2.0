import React from "react";
import {Button} from "mdbreact";

class  Form extends React.Component{
    render(){
        return (
            <div>
            <input type="text" name="city" placeholder="City..." />
            <input type="text" name="country" placeholder="Country..." />
            <Button color="primary">Get Weather</Button>

            </div>
        )
    }
}
export default Form;