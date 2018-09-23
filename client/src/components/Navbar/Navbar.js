import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {  Navbar, NavbarNav, NavItem, Fa, SideNavItem, SideNavCat, SideNavNav, SideNav  } from 'mdbreact';
import "./Navbar.css";
class NavBar extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        toggleStateA: false,
        breakWidth: 1300,
        windowWidth: 0
    };
    }

    componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => this.setState({
    windowWidth: window.innerWidth
    });

    handleToggleClickA = () => {
    this.setState({
        toggleStateA: !this.state.toggleStateA
    });
    }

    render() {
    const navStyle = { paddingLeft: this.state.windowWidth > this.state.breakWidth ? '210px' : '16px' };
    
    return (
        <Router>
        <div className="fixed-sn light-blue-skin"  >
            <SideNav
            triggerOpening={this.state.toggleStateA}
            breakWidth={this.state.breakWidth}
            bg="https://images.unsplash.com/photo-1521798948753-02f843fd3e5d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7a2059a47213b313bb76f8996273d794&auto=format&fit=crop&w=1350&q=80"
            mask="slight"
            >
            <SideNavNav>
                <SideNavCat name="Dashboard" id="dash-board" icon="line-chart">
                <a href="/DashBoard">Home</a>
                </SideNavCat>
                <SideNavCat name="Overview" id="full-app" icon="eye">
                    <SideNavItem></SideNavItem>
                </SideNavCat>    
                <SideNavCat name="Instruction" id="instruction-cat" icon="hand-pointer-o">
                    <SideNavItem>Install</SideNavItem>
                </SideNavCat>
                <SideNavCat name="Control" id="controller" icon="toggle-on">
                    <SideNavItem>Instruction</SideNavItem>
                    <SideNavItem>Monthly meetings</SideNavItem>
                </SideNavCat>    
                <SideNavCat name="Units" id="temp" icon="thermometer-3">
                    <SideNavItem>Info</SideNavItem>
                    <SideNavItem>Monthly meetings</SideNavItem>  
                </SideNavCat>      
                <SideNavCat name="About" id="about-cat" icon="info-circle">
                    <a href="/About">Info</a>
                </SideNavCat>
                <SideNavCat name="Contact me" id="contact-me-cat" icon="envelope-o">
                    <SideNavItem>FAQ</SideNavItem>
                    <SideNavItem>Write a message</SideNavItem>
                </SideNavCat>
            </SideNavNav>
            </SideNav>
            <Navbar style={navStyle} double expand="md" fixed="top" scrolling > 
            <NavbarNav left >
                <NavItem>
                    <div onClick={this.handleToggleClickA} key="sideNavToggleA" style={{ lineHeight: '32px', marginRight: '1em', verticalAlign: 'middle' }}><Fa icon="bars" color="white" size="2x"></Fa></div>
                </NavItem>
                <NavItem className="d-none d-md-inline" style={{ paddingTop: 5, fontFamily: "GardenPartySans", fontSize:26, fontWeight:"bold"}}>
                    GardenHub 2.0
                </NavItem>
            </NavbarNav>
            </Navbar>
           
        </div>
        </Router>
    );
    }
};

export default NavBar;