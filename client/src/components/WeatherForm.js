import React from "react";
import {Button,} from "mdbreact";

class  Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          queryString: ''
        };
      }
    
      handleQueryStringChange = (e) => {
        this.setState({
          queryString: e.target.value
        })
      }
      
      handleSearch = (e) => {
        e.preventDefault();
        console.log('Fetch weather data for:', this.state.queryString);
      }
      
      render() {
        return (
          <div className="form-container">
            <form onSubmit={this.handleSearch}>
              <input
                type="text"
                value={this.state.queryString}
                name="searchBox"
                id="searchBox"
                placeholder="Enter City or Zipcode"
                onChange={this.handleQueryStringChange} />
            
              <Button color="primary" onClick={this.handleSearch}>Search</Button>
            </form>
          </div>
        );
      }
    }
export default Form;