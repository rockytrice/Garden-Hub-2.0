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
            <NavLink to ="/signout" onClick={this.showAlert}><Fa icon="sign-out"/>Sign Out</NavLink>
          </NavItem>
          <NavItem>
            <Dropdown>
              <DropdownToggle nav caret>Dropdown</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem> 
                    <NavLink to="/dashboard">Dashboard</NavLink>
                  </DropdownItem>
                  <DropdownItem> 
                    <NavLink to ="/about">About</NavLink>
                  </DropdownItem>
                  <DropdownItem> 
                    <NavLink to ="/controls">MQTT Controls</NavLink>
                  </DropdownItem>
              </DropdownMenu>
            </Dropdown>            
          </NavItem>
        </NavbarNav>    
      );
    } else {
      return (
        <div>
          <NavbarNav right>
            <NavItem>
              <NavLink to ="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to ="/signup"><Fa icon="user-plus"/>Sign Up</NavLink>
            </NavItem>
            <NavItem>
            <NavLink to ="/signin"><Fa icon="user"/>Sign In</NavLink>
            </NavItem>  
          </NavbarNav>
        </div>
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
  // constructor(props) {
  //   super(props);

  //   this.toggle = this.toggle.bind(this);
  //   this.state = {
  //     isOpen: false
  //   };
  // }
  // toggle() {
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   });
  // }
  render() {
    return (
      <Navbar color="indigo" dark expand="md" scrolling>
        <NavbarBrand href="/">
            <strong>Navbar</strong>
        </NavbarBrand>
        { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
        <Collapse isOpen = { this.state.collapse } navbar>
        {this.renderLinks()} 
        </Collapse>
      </Navbar>

      // <div>
      //   <Navbar color="light"  light expand="md">
      //     <NavbarBrand style={{fontFamily:"GardenPartySans"}}>GardenHub 2.0</NavbarBrand>
      //     <NavbarToggler onClick={this.toggle} />
      //     <Collapse isOpen={this.state.isOpen} navbar>
      //       <Nav className="ml-auto" navbar>
      //      {this.renderLinks()}
      //       </Nav>
      //     </Collapse>
      //   </Navbar>
      // </div>
    );
  }
}
function mapStateToProps (state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);






