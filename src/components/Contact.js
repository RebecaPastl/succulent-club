import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { FaInstagram, FaYoutube, FaTwitterSquare } from 'react-icons/fa';

class Services extends React.Component {

    render() {
        
        return <>
            
            <Container className='green bg-white' fluid>
            <Row className='justify-content-center justify-content-lg-end'>
                <h1 className='mr-5 mt-5'>Contact</h1>
            </Row>
            <Row className='text-center g-3'>
                <Col sm={8}>
                    <div> 
                        <div className='shadow mx-lg-5 my-5 py-1'>
                            <h2 className='text-left m-4 d-block'>Message us</h2>
                            <FaInstagram className='m-lg-5 my-5 d-block d-md-inline-block mx-auto' size={100}/>
                            <FaYoutube className='m-lg-5 my-5 d-block d-md-inline-block mx-auto' size={100}/>
                            <FaTwitterSquare className='m-lg-5 my-5 d-block d-md-inline-block mx-auto' size={100}/>
                            <p className='mb-4'>succulent-club@mail.com</p>
                        </div>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className='shadow my-5 align-items-center justify-content-center'>
                        <div className='pt-1'>
                            <h2 className='text-left mt-4 ml-4 mb-2'>Visit us</h2>
                            <p className='text-right mx-4 my-0'>43  Robson St<span className='d-block'>Richmond, BC V6B 3K9</span><span >604-601-5338</span></p> 
                        </div>
                        <div>
                            <Image variant="bottom" src="images/map.png" className='m-0 w-100 d-block' fluid />
                        </div>
                    </div>
                </Col>
            </Row>
            </Container>
            
        </>;
    }
}
  
export default Services;