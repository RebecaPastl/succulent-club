import React from 'react';
import Col from 'react-bootstrap/Col';
import { CgClose } from 'react-icons/cg';

class Thanks extends React.Component {

    render() {
        
        return <>

            {/* render thank you note */}
            <Col className='light-green-font my-3 d-flex align-items-center justify-content-center' sm={8}>
                <div className='w-100 bg-dark-green shadow px-sm-5 p-3'>

                    {/* close button floating right */}
                    <CgClose 
                        className='light-green-font d-md-inline-block float-right' 
                        role="button"  
                        size={30} 
                        onClick={this.props.hideForm}
                    />

                    {/* heading in the middle */}
                    <h3 className='display-4 m-5'>
                        Thank you!
                    </h3>

                    {/* thank you message */}
                    <p className='m-5'>{this.props.newUser}, you will get a confirmation on {this.props.newEmail}.</p>      
                </div>
            </Col>
        </>;
    }
}
  
export default Thanks;