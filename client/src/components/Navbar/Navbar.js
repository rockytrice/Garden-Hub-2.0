import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Input, Navbar, NavbarNav, NavItem, Fa, SideNavItem, SideNavCat, SideNavNav, SideNav,  } from 'mdbreact';

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
            logo="https://mdbootstrap.com/img/logo/mdb-transparent.png"
            triggerOpening={this.state.toggleStateA}
            breakWidth={this.state.breakWidth}
            bg="https://i0.wp.com/meqasa.com/blog/wp-content/uploads/2016/03/garden-watering.jpg?ssl=1"
            mask="strong"
            >
            
            <Input type="text" default="Search" style={{ color: '#fff', padding: '8px 10px 8px 30px', boxSizing: 'border-box'}} />
            <SideNavNav>
                <SideNavCat name="Submit blog" id="submit-blog-cat" icon="chevron-right">
                    <SideNavItem>Submit listing</SideNavItem>
                    <SideNavItem>Registration form</SideNavItem>
                </SideNavCat>
                <SideNavCat name="Instruction" id="instruction-cat" icon="hand-pointer-o">
                    <SideNavItem>For bloggers</SideNavItem>
                    <SideNavItem>For authors</SideNavItem>
                </SideNavCat>
                <SideNavCat name="About" id="about-cat" icon="eye">
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