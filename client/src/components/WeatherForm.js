import React from "react";

class  Form extends React.Component{
    render(){
        return (
            <div>
            <input type="text" name="city" placeholder="City" />
            <input type="text" name="country" placeholder="Country" />
            
            </div>
        )
    }
}
export default Form;