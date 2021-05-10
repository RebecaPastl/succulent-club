import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import { FaBookOpen } from 'react-icons/fa';
import { FaExchangeAlt } from 'react-icons/fa';
import { FaNewspaper } from 'react-icons/fa';

class Services extends React.Component {

    render() {
        
        return <>
            
            <Container className='bg-white' fluid>
            <Row className='text-center g-3'>
                {/* lg={{ order: 'last' }} changes the order of the cols in large screens */}
                <Col className='green text-center my-5' sm={4} lg={{ order: 'last' }}>
                    <h1 className='mb-0 mr-3 text-right'>Services</h1>
                    <div className='h-100 d-flex align-items-center'>
                        <p> Phasellus accumsan arcu bibendum neque semper, vel eleifend metus fringilla. 
                            Cras at dictum lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                </Col>
                <Col className='text-dark my-5' sm={8}>
                <div className='h-100 d-flex align-items-center'>
                    <CardDeck className='green mx-auto d-flex align-items-center'>
                    <Card className='rounded-0 border-0 shadow mx-lg-5 my-5' style={{minWidth:190, maxWidth:190, height:190}}>
                        <Card.Body className='h-50 mw-50'>
                            <Card.Title>
                                <h2>Library</h2>
                            </Card.Title>
                            <FaBookOpen size={100}/>
                        </Card.Body>
                    </Card>
                    <Card className='rounded-0 border-0 shadow mx-lg-5 my-5' style={{minWidth:190, maxWidth:190, height:190}}>
                        <Card.Body>
                            <Card.Title>
                                <h2>Trades</h2>
                            </Card.Title>
                            <FaExchangeAlt size={100}/>
                        </Card.Body>
                    </Card>
                    <Card className='rounded-0 border-0 shadow mx-lg-5 my-5' style={{minWidth:190, maxWidth:190, height:190}}    >
                        <Card.Body>
                            <Card.Title>
                                <h2>News</h2>
                            </Card.Title>
                            <FaNewspaper size={100}/>
                        </Card.Body>
                    </Card>
                    </CardDeck>
                </div>
                </Col>
            </Row>
            </Container>
            
        </>;
    }
}
  
export default Services;