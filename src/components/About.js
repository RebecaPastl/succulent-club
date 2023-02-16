import React from 'react';
import Greeting from './about/Greeting.js';
//import Forms from './about/Forms.js';
import Thanks from './about/Thanks.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


class About extends React.Component {

    constructor(props) {
       
        super(props);

        this.state = {
            greeting:true,
            formSuccess: false,
            registerSuccess: false,
            newUser:'',
            newEmail:'',
        }
    
        this.showForm = this.showForm.bind(this)
        this.hideForm = this.hideForm.bind(this)
        this.formSubmited = this.formSubmited.bind(this)
                 
    }

    //function that opens form component
    showForm(){

        this.setState({
            
            greeting: false,
            formSuccess: true,
            registerSuccess: false,
            
        })

    }

    //function that shows greeting component when form is closed
    hideForm(){

        this.setState({
            
            greeting: true,
            formSuccess: false,
            registerSuccess: false,
            
        })

    }

    // function that gets the new user name and email, and calls the thanks component
    formSubmited(user, email){

        this.setState({
            
            greeting: false,
            formSuccess: false,
            registerSuccess: true,
            newUser:user,
            newEmail:email,

        })

    }

    render() {
        
        return <>
            
            <Container className='bg-green' id='about' fluid>
                <Row className='min-vh-75 text-center g-3 d-flex justify-content-center'>

                    {/* render image in 1/3 of the width */}
                    <Col className='d-none d-xl-block p-0' sm={4}>
                        <Image src="images/img-about.jpg" className='round-right h-100 float-left' fluid />
                    </Col>

                    {/* render one of the 3 components in the other 2/3 of the width*/}
                    {this.state.greeting &&
                        <Greeting showForm={this.showForm} />
                    }
                    {/* {this.state.formSuccess &&
                        <Forms hideForm={this.hideForm} formSubmited={this.formSubmited} newUser={this.state.newUser} newEmail={this.state.newEmail}/>
                    } */}
                    {this.state.registerSuccess &&
                        <Thanks hideForm={this.hideForm} newUser={this.state.newUser} newEmail={this.state.newEmail}/>
                    }                    
                </Row>
            </Container>
            
        </>;
    }
}
  
export default About;