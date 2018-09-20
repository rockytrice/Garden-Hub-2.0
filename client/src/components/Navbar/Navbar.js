import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {  Navbar, NavbarNav, NavItem, Fa, SideNavItem, SideNavCat, SideNavNav, SideNav,  } from 'mdbreact';

class DoubleNavigationPage extends React.Component {
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
        <div className="fixed-sn light-blue-skin">
            <SideNav
            triggerOpening={this.state.toggleStateA}
            breakWidth={this.state.breakWidth}
            bg="https://i0.wp.com/meqasa.com/blog/wp-content/uploads/2016/03/garden-watering.jpg?ssl=1"
            mask="strong"
            >
            <SideNavNav>
                <SideNavCat name="Dashboard" id="dash-board" icon="line-chart">
                    <SideNavItem>Submit listing</SideNavItem>
                    <SideNavItem>Registration form</SideNavItem>
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
                    <SideNavItem>Instruction</SideNavItem>
                    <SideNavItem>Monthly meetings</SideNavItem>  
                </SideNavCat>      
                <SideNavCat name="About" id="about-cat" icon="info-circle">
                    <SideNavItem>Instruction</SideNavItem>
                    <SideNavItem>Monthly meetings</SideNavItem>
                </SideNavCat>
                <SideNavCat name="Contact me" id="contact-me-cat" icon="envelope-o">
                    <SideNavItem>FAQ</SideNavItem>
                    <SideNavItem>Write a message</SideNavItem>
                </SideNavCat>
            </SideNavNav>
            </SideNav>
            <Navbar style={navStyle} double expand="md" fixed="top" scrolling>
            <NavbarNav left>
                <NavItem>
                    <div onClick={this.handleToggleClickA} key="sideNavToggleA" style={{ lineHeight: '32px', marginRight: '1em', verticalAlign: 'middle' }}><Fa icon="bars" color="white" size="2x"></Fa></div>
                </NavItem>
                <NavItem className="d-none d-md-inline" style={{ paddingTop: 5 }}>
                    Material Design for Bootstrap
                </NavItem>
            </NavbarNav>
            </Navbar>
           
        </div>
        </Router>
    );
    }
};

export default DoubleNavigationPage;