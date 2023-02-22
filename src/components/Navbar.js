import React from 'react';
import { Nav, Navbar as Bar } from 'react-bootstrap'

class Navbar extends React.Component {

    render() {
        
        return <>
            
            <Bar collapseOnSelect className='navbar shadow' id='top' expand="lg" bg="white" variant="light" fixed='top'>
                <Bar.Brand href="/">
                    <img src="./images/succulent-club-logo.png" className='my-0 mx-2 align-top' height="50" width="50" alt="Succulent club logo" />
                    <span className='h2 dark-green-font align-bottom'>Succulent Club</span>
                </Bar.Brand>
                <Bar.Toggle aria-controls="responsive-navbar-nav" />
                <Bar.Collapse className='text-center' id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link className='mx-2' href="#about">About</Nav.Link>
                        <Nav.Link className='mx-2' href="#services">Services</Nav.Link>
                        <Nav.Link className='mx-2' href="#events">Events</Nav.Link>
                        <Nav.Link className='mx-2' href="#contact">Contact</Nav.Link>
                    </Nav>
                </Bar.Collapse>
            </Bar>
            
        </>;
    }
}
  
export default Navbar;