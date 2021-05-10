import React from 'react';
import { Nav, Navbar as Bar } from 'react-bootstrap'

class Navbar extends React.Component {

    render() {
        
        return <>
            
            <Bar collapseOnSelect className='navbar shadow' expand="lg" bg="white" variant="light" fixed='top'>
                <Bar.Brand href="#home">
                    <img src="./images/succulent-club-logo.png" className='my-0 mx-2 align-top' height="50" width="50" alt="Succulent club logo" />
                    <span className='h2 green-header align-bottom'>Succulent Club</span>
                </Bar.Brand>
                <Bar.Toggle aria-controls="responsive-navbar-nav" />
                <Bar.Collapse className='text-center' id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link className='mx-2' href="#deets">About</Nav.Link>
                        <Nav.Link className='mx-2' href="#deets">Services</Nav.Link>
                        <Nav.Link className='mx-2' href="#deets">Events</Nav.Link>
                        <Nav.Link className='mx-2' href="#deets">Contact</Nav.Link>
                    </Nav>
                </Bar.Collapse>
            </Bar>
            
        </>;
    }
}
  
export default Navbar;