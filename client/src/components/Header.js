import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
 import {  NavLink } from "react-router-dom";
import { connect } from "react-redux";
import  "./Header.css";
import { Fa } from "mdbreact";

class Header extends Component {     
  showAlert() {
    alert("Successfully Signed Out");
  }

  renderLinks(){
    if (this.props.authenticated){
      return (
        <NavbarNav right>
          <NavItem>
            <Dropdown>
              <DropdownToggle nav caret>Dropdown</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem> 
                    <NavLink to="/dashboard"><Fa icon="line-chart"/>Dashboard</NavLink>
                  </DropdownItem>
                  <DropdownItem className="about"> 
                  <NavLink to ="/about"><Fa icon="info"/>About</NavLink>
                  </DropdownItem>
                  <DropdownItem> 
                    <NavLink to ="/controls"><Fa icon="toggle-on"/>MQTT Controls</NavLink>
                  </DropdownItem>
              </DropdownMenu>
            </Dropdown>            
          </NavItem>
          <NavItem>
            <NavLink to ="/signout" onClick={this.showAlert}><Fa icon="sign-out"/>Sign Out</NavLink>
          </NavItem>
        </NavbarNav>    
      );
    } else {
      return (
        <NavbarNav right>
          {/* <NavItem>
            <NavLink to ="/">Home</NavLink>
          </NavItem> */}
          <NavItem>
            <NavLink to ="/signup"><Fa icon="user-plus"/>Sign Up</NavLink>
          </NavItem>
          <NavItem>
          <NavLink to ="/signin"><Fa icon="user"/>Sign In</NavLink>
          </NavItem>  
        </NavbarNav>
      )
    }
  }
  constructor(props) {
    super(props);
    this.state = {
        collapse: false,
        isWideEnough: false,
    };
  this.onClick = this.onClick.bind(this);
  }
  
  onClick(){
    this.setState({
        collapse: !this.state.collapse,
    });
  }
  render() {
    return (
      <Navbar  style={{backgroundColor:"#212121"}} dark expand="md" fixed="top" scrolling>
        <NavbarBrand style={{fontFamily:"GardenPartySans",fontSize:"20px", color:"#ffffff"}}>
            GardenHub 2.0
        </NavbarBrand>
        { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
        <Collapse isOpen = { this.state.collapse } navbar>
        {this.renderLinks()} 
        </Collapse>
      </Navbar>

    );
  }
}
function mapStateToProps (state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);






