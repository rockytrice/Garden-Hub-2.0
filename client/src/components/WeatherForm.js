import React from "react";
import {Button,} from "mdbreact";

class  Form extends React.Component{   
      render() {
        return (
          <div className="form-container">
            <form onSubmit={this.props.getWeather}>
              <input type="text" name="city" placeholder="Enter your City..."/>
              <input type="text" name="country" placeholder="Country..."/>
              <Button color="primary" type="submit">Get Weather</Button>
            </form>
          </div>
        );
      }
    }
export default Form;






// / constructor(props) {
    //     super(props);
    //     this.state = {
    //       queryString: ''
    //     };
    //   }
    
    //   handleQueryStringChange = (e) => {
    //     this.setState({
    //       queryString: e.target.value
    //     })
    //   }
      
    //   handleSearch = (e) => {
    //     e.preventDefault();
    //     console.log('Fetch weather data for:', this.state.queryString);
    //   }