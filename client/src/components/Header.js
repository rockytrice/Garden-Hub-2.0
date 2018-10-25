import React, { Component } from "react";
import { Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem } from 'reactstrap';
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
       
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to ="/signout" onClick={this.showAlert}><Fa icon="sign-out"/>Sign Out</NavLink>
            </NavItem>
            <NavItem>
              {/* <NavLink to ="/dashboard">dashboard</NavLink> */}
            </NavItem>
          </Nav>  
          
      );
    } else {
      return (
        <div>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to ="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to ="/signup"><Fa icon="user-plus"/>Sign Up</NavLink>
            </NavItem>
            <NavItem>
            <NavLink to ="/signin"><Fa icon="user"/>Sign In</NavLink>
            </NavItem>  
          </Nav>
        </div>
      )
    }
  }
  // here
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light"  light expand="md">
          <NavbarBrand style={{fontFamily:"GardenPartySans"}}>GardenHub 2.0</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
           {this.renderLinks()}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
function mapStateToProps (state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);




// constructor(props) {
//   super(props)
//   this.state = {
//     collapse : false
//   }
//   this.onClick = this.onClick.bind(this);
//   this.handleNavbarClick = this.handleNavbarClick.bind(this);
// }
// onClick(){
//   this.setState({
//       collapse: !this.state.collapse,
//   });
// }

// handleNavbarClick(){
//   this.setState({
//     collapse: false
//   });
// }
// render(){
// const overlay = <div id="sidenav-overlay" style={{backgroundColor: 'transparent'}} onClick={this.handleNavbarClick}/>
//   return (
//         <div>
//           <Navbar dark expand="md" fixed="top" scrolling>
//             <Container>
//               <NavbarBrand>
//                 <strong className="black-text" style={{fontFamily:"GardenPartySans", textAlign:"center",fontSize:20, fontWeight:"bolder"}} >GardenHub 2.0</strong>
//               </NavbarBrand>
//               <NavbarToggler onClick = { this.onClick } />
//               <Collapse isOpen = {this.state.collapse} navbar>
//                 <NavbarNav left>
//                 {this.renderLinks()}
//                 </NavbarNav>
//               </Collapse>
//             </Container>
//           </Navbar>
//         { this.state.collapse && overlay}
//         </div>
//   )
// } 