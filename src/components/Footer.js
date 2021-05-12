import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

class Footer extends React.Component {

    render() {
        
        return <>
            
            <footer className='shadow green bg-white p-3 text-center'>
                <img src="./images/succulent-club-logo.png" className='my-0 mx-2' height="50" width="50" alt="Succulent club logo" />
                <span className='h2 green-header align-bottom'>Succulent Club</span>
                <div className='p-3 d-none d-md-inline-block float-right'>
                    <FaGithub className='mr-2' size={25}/>
                    <FaLinkedinIn className='mr-2'size={25}/>
                    <img src="./images/rp.png" className='my-0' height="27" width="50" alt="Succulent club logo" />
                </div>
            </footer>
            
        </>;
    }
}
  
export default Footer;