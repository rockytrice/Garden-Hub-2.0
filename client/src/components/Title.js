import React from "react";

class Title extends React.Component {
    render(){
        return(
            <div>
            <h1 style={{fontFamily:"Anton, sans-serif", fontSize:"30px"}}> Your Weather Forecast</h1>
            <p style={{fontFamily:"Anton, sans-serif", fontSize:"15px"}}>Find out your weather conditions and more...</p>
            </div>
        )
    }
}
export default Title;