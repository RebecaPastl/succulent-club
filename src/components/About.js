import React, { useState } from 'react';
import Greeting from './about/Greeting.js';
import Forms from './about/Forms.js';
import Thanks from './about/Thanks.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


function About () {

    const [greeting, setGreeting] = useState(true)
    const [formSuccess, setFormSuccess] = useState(false)
    const [registerSuccess, setRegisterSuccess] = useState(false)
    const [newUser, setNewUser] = useState()
    const [newEmail, setNewEmail] = useState()

    //function that opens form component
    const showForm = () => {
        setGreeting(false)
        setFormSuccess(true)
        setRegisterSuccess(false)
    }

    //function that shows greeting component when form is closed
    const hideForm = () => {
        setGreeting(true)
        setFormSuccess(false)
        setRegisterSuccess(false)
    }

    // function that gets the new user name and email, and calls the thanks component
    const formSubmited = (user, email) => {
        setGreeting(false)
        setFormSuccess(false)
        setRegisterSuccess(true)
        setNewUser(user)
        setNewEmail(email)
    }
        
        return <>
            
            <Container className='bg-dark-green' id='about' fluid>
                <Row className='min-vh-75 text-center g-3 d-flex justify-content-center'>

                    {/* render image in 1/3 of the width */}
                    <Col className='d-none d-xl-block p-0' sm={4}>
                        <Image src="images/img-about.jpg" className='round-right h-100 float-left' fluid />
                    </Col>

                    {/* render one of the 3 components in the other 2/3 of the width*/}
                    {greeting &&
                        <Greeting showForm={showForm} />
                    }
                    {formSuccess &&
                        <Forms hideForm={hideForm} formSubmited={formSubmited} props={{newUser, newEmail}}/>
                    }
                    {registerSuccess &&
                        <Thanks hideForm={hideForm} props={{newUser, newEmail}}/>
                    }                    
                
                </Row>
            </Container>
            
        </>;
}
  
export default About;