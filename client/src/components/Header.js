import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavbarToggler, Collapse,Container } from 'mdbreact';
import {  NavLink } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
          collapse : false
        }
        this.onClick = this.onClick.bind(this);
        this.handleNavbarClick = this.handleNavbarClick.bind(this);
      }
      onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
      }
    
      handleNavbarClick(){
        this.setState({
          collapse: false
        });
      }
      render(){
      const overlay = <div id="sidenav-overlay" style={{backgroundColor: 'transparent'}} onClick={this.handleNavbarClick}/>
        return (
              <div>
                <Navbar dark expand="md" fixed="top" scrolling>
                  <Container>
                    <NavbarBrand>
                      <strong className="black-text">MDB</strong>
                    </NavbarBrand>
                    <NavbarToggler onClick = { this.onClick } />
                    <Collapse isOpen = {this.state.collapse} navbar>
                      <NavbarNav left>
                      <NavItem>
                        <NavLink to ="/">Home</NavLink>
                      </NavItem>
                        <NavItem>
                        <NavLink to ="/signup">Sign Up</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink to ="/signin">Sign In</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink to ="/dashboard">dashboard</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink to ="/signout">Sign Out</NavLink>
                        </NavItem>
                      </NavbarNav>
                    </Collapse>
                  </Container>
                </Navbar>
              { this.state.collapse && overlay}
              </div>
        )
    }
}
export default Header;