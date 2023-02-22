import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import { FaStore, FaChalkboardTeacher, FaPagelines } from 'react-icons/fa';

class Events extends React.Component {

    render() {
        
        return <>
            
            <Container className='bg-dark-green' id='events' fluid>
            <Row className='text-center g-3 justify-content-center'>
                <Col className='light-green-font my-lg-5' sm={8}>
                <h1 className='ml-lg-5 mt-5 text-center text-lg-left'>Events</h1>
                <div className='align-items-center justify-content-center'>
                    <Card className='rounded-0 border-0 shadow mx-lg-5 my-5 d-block d-md-inline-block mx-auto' style={{minWidth:200, maxWidth:300, maxHeight:200}}>
                        <Card.Body className='p-0'>
                            <Card.Img variant='top' src='images/img-fairs.jpg' />
                            <Card.ImgOverlay className='overlay p-0 d-flex align-items-center justify-content-center'>
                                <Card.Title className='my-0 w-100 bg-light-green'>
                                    <h3 className='my-1 dark-green-font'>Fairs</h3>
                                </Card.Title>
                            </Card.ImgOverlay>
                        </Card.Body>
                    </Card>
                    <Card className='rounded-0 border-0 shadow mx-lg-5 my-5 d-block d-md-inline-block mx-auto' style={{minWidth:200, maxWidth:300, maxHeight:200}}>
                        <Card.Body className='p-0'>
                            <Card.Img variant='top' src='images/img-workshops.jpg' />
                            <Card.ImgOverlay className='overlay p-0 d-flex align-items-center justify-content-center'>
                                <Card.Title className='my-0 w-100 bg-light-green'>
                                    <h3 className='my-1 dark-green-font'>Workshops</h3>
                                </Card.Title>
                            </Card.ImgOverlay>
                        </Card.Body>
                    </Card>
                    <Card className='rounded-0 border-0 shadow mx-lg-5 my-5 d-block d-md-inline-block mx-auto' style={{minWidth:200, maxWidth:300, maxHeight:200}}>
                        <Card.Body className='p-0'>
                            <Card.Img variant='top' src='images/img-panels.jpg' />
                            <Card.ImgOverlay className='overlay p-0 d-flex align-items-center justify-content-center'>
                                <Card.Title className='my-0 w-100 bg-light-green'>
                                    <h3 className='my-1 dark-green-font'>Panels</h3>
                                </Card.Title>
                            </Card.ImgOverlay>
                        </Card.Body>
                    </Card>
                </div>
                </Col>
                <Col className='d-none d-xl-block p-0' sm={4}>
                    <Image src="images/img-events.jpg" className='round-left h-100 float-right' fluid />
                </Col>
            </Row>
            </Container>
            
        </>;
    }
}
  
export default Events;