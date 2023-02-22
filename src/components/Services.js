import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FaBookOpen } from 'react-icons/fa';
import { FaExchangeAlt } from 'react-icons/fa';
import { FaNewspaper } from 'react-icons/fa';

class Services extends React.Component {

    render() {
        
        return <>
            
            <Container className='bg-light-green' id='services' fluid>
            <Row className='text-center g-3'>
                {/* lg={{ order: 'last' }} changes the order of the cols in large screens */}
                <Col className='dark-green-font text-center my-5' sm={4} lg={{ order: 'last' }}>
                    <h1 className='mb-0 mt-5 mr-3 text-center text-lg-right'>Services</h1>
                    <div className='h-100 d-flex align-items-center'>
                        <p> Phasellus accumsan arcu bibendum neque semper, vel eleifend metus fringilla. 
                            Cras at dictum lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                </Col>
                <Col className='dark-green-font my-5' sm={8}>
                    <div className='align-items-center justify-content-center'>                    
                        <Card className='bg-light-green rounded-0 border-0 shadow mx-lg-5 my-5 d-block d-md-inline-block mx-auto' style={{minWidth:200, maxWidth:300, maxHeight:200}}>
                            <Card.Body className='p-0'>
                                <Card.Img variant='top' src='images/img-library.jpg' />
                                <Card.ImgOverlay className='overlay p-0 d-flex align-items-center justify-content-center'>
                                    <Card.Title className='my-0 w-100 bg-dark-green'>
                                        <h3 className='my-1 light-green-font'>Library</h3>
                                    </Card.Title>
                                </Card.ImgOverlay>
                            </Card.Body>
                        </Card>
                        <Card className='bg-light-green rounded-0 border-0 shadow mx-lg-5 my-5 d-block d-md-inline-block mx-auto' style={{minWidth:200, maxWidth:300, maxHeight:200}}>
                            <Card.Body className='p-0'>
                                <Card.Img variant='top' src='images/img-trades.jpg' />
                                <Card.ImgOverlay className='overlay p-0 d-flex align-items-center justify-content-center'>
                                    <Card.Title className='my-0 w-100 bg-dark-green'>
                                        <h3 className='my-1 light-green-font'>Trades</h3>
                                    </Card.Title>
                                </Card.ImgOverlay>
                            </Card.Body>
                        </Card>
                        <Card className='bg-light-green rounded-0 border-0 shadow mx-lg-5 my-5 d-block d-md-inline-block mx-auto' style={{minWidth:200, maxWidth:300, maxHeight:200}}>
                            <Card.Body className='p-0'>
                                <Card.Img variant='top' src='images/img-news.jpg' />
                                <Card.ImgOverlay className='overlay p-0 d-flex align-items-center justify-content-center'>
                                    <Card.Title className='my-0 w-100 bg-dark-green'>
                                        <h3 className='my-1 light-green-font'>News</h3>
                                    </Card.Title>
                                </Card.ImgOverlay>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>
            </Container>
            
        </>;
    }
}
  
export default Services;