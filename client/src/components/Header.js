import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse,Container,FormInline } from 'mdbreact';
import {browserRouter as Router } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props),
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
            <Router>
              <div>
                <Navbar dark expand="md" fixed="top" scrolling>
                  <Container>
                    <NavbarBrand>
                      <strong className="white-text">MDB</strong>
                    </NavbarBrand>
                    <NavbarToggler onClick = { this.onClick } />
                    <Collapse isOpen = {this.state.collapse} navbar>
                      <NavbarNav left>
                        <NavItem active>
                          <Link to="#!">Sign In </Link>
                        </NavItem>
                        <NavItem>
                          <Link to="#!">Sign Up </Link>
                        </NavItem>
                        <NavItem>
                          <NavLink to="#!">Profile</NavLink>
                        </NavItem>
                      </NavbarNav>
                      <NavbarNav right >
                        <NavItem>
                          <FormInline waves>
                            <div className="md-form my-0">
                              <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                            </div>
                          </FormInline>
                        </NavItem>
                      </NavbarNav>
                    </Collapse>
                  </Container>
                </Navbar>
              { this.state.collapse && overlay}
              </div>
            </Router>
        )
    }
}
export default Header;