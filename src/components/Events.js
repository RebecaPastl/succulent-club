import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import { FaStore, FaHands, FaChalkboardTeacher, FaPagelines } from 'react-icons/fa';

class Events extends React.Component {

    render() {
        
        return <>
            
            <Container className='bg-green' id='events' fluid>
            <Row className='text-center g-3 justify-content-center'>
                <Col className='text-white my-lg-5' sm={8}>
                <h1 className='ml-lg-5 mt-5 text-left'>Events</h1>
                <div className='d-flex align-items-center justify-content-center'>
                    <CardDeck className='text-white mx-auto d-flex justify-content-center'>
                    <Card className='bg-green rounded-0 border-0 shadow mx-xl-5 my-5' style={{minWidth:150, maxWidth:150, height:150}}>
                        <Card.Body className='p-1 pt-2'>
                            <Card.Title>
                                <h2>Fairs</h2>
                            </Card.Title>
                            <FaStore size={80}/>
                        </Card.Body>
                    </Card>
                    <Card className='bg-green rounded-0 border-0 shadow mx-xl-5 my-5' style={{minWidth:150, maxWidth:150, height:150}}>
                        <Card.Body className='p-1 pt-2'>
                            <Card.Title>
                                <h2>Workshop</h2>
                            </Card.Title>
                            <FaPagelines size={80}/>
                        </Card.Body>
                    </Card>
                    <Card className='bg-green rounded-0 border-0 shadow mx-xl-5 my-5' style={{minWidth:150, maxWidth:150, height:150}}    >
                        <Card.Body className='p-1 pt-2'>
                            <Card.Title>
                                <h2>Panel</h2>
                            </Card.Title>
                            <FaChalkboardTeacher size={80}/>
                        </Card.Body>
                    </Card>
                    </CardDeck>
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