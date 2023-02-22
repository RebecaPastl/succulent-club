import React from 'react';
import Button from 'react-bootstrap/Button'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

class Footer extends React.Component {

    render() {
        
        return <>
            
            <footer className='shadow dark-green bg-white p-3 text-center'>
                <Button variant='white' onClick={this.props.backToTop}>
                    <img src="./images/succulent-club-logo.png" className='my-0 mx-2' height="50" width="50" alt="Succulent club logo" />
                    <span className='h2 dark-green-font align-bottom'>Succulent Club</span>
                </Button>
                <div className='p-3 d-none d-md-inline-block float-right'>
                    <a className='green hover' href='https://github.com/RebecaPastl'> 
                        <FaGithub className='mr-2' size={25}/>
                    </a>
                    <a className='green hover' href='https://www.linkedin.com/in/rebeca-pastl-b4b000116/'>
                        <FaLinkedinIn className='mr-2'size={25}/>
                    </a>
                    <img src="./images/rp.png" className='my-0' height="27" width="50" alt="Succulent club logo" />
                </div>
            </footer>
            
        </>;
    }
}
  
export default Footer;