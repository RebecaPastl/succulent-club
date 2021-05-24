import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


class Greeting extends React.Component {

    render() {
        
        return <>

            <Col className='text-white text-center my-5' sm={4}>
                <h1 className='display-4 my-4'>About</h1>
                <p className='my-5'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nunc efficitur lectus mauris, eu feugiat turpis faucibus non. 
                    Fusce malesuada nibh ac diam rhoncus, et dictum sapien ultricies.
                </p>
            </Col>
            <Col className='text-white my-5 d-flex align-items-center justify-content-center' sm={4}>
                <div>
                    <h3>Join Us</h3>
                    <p className='my-3'>
                    Join us and be up to date with the latest news.
                    </p>
                    <Button variant="outline-light shadow hover rounded-pill" style={{width: 150}} onClick={this.props.showForm}>Become <span className='d-block'>a member</span></Button>
                </div>
            </Col>
        </>
    }

}
  
export default Greeting;