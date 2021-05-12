import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

class About extends React.Component {

    render() {
        
        return <>
            
            <Container className='bg-green' id='about' fluid>
            <Row className='min-vh-50'>
                <Col className='d-none d-xl-block p-0'>
                    <Image src="images/img-about.jpg" className='round-right h-100' fluid />
                </Col>
                <Col className='text-white text-center my-5' sm>
                    <h1 className='mb-0 mt-5'>About</h1>
                    <div className='h-100 d-flex align-items-center'>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nunc efficitur lectus mauris, eu feugiat turpis faucibus non. 
                        Fusce malesuada nibh ac diam rhoncus, et dictum sapien ultricies.
                        </p>
                    </div>
                </Col>
                <Col className='text-white text-center my-5' sm>
                    <h3 className='my-5'>Join Us</h3>
                    <p className='my-5'>
                    Join us and be up to date with the latest news.
                    </p>
                    <Button variant="outline-light shadow rounded-pill mb-5" style={{width: 150}}>Become <span className='d-block'>a member</span></Button>
                </Col>
            </Row>
            </Container>
            
        </>;
    }
}
  
export default About;