import React from 'react';
import Navbar from './Navbar.js'
import Card from 'react-bootstrap/Card'
import { BsChevronCompactDown as Arrow } from 'react-icons/bs';

class Header extends React.Component {

    render() {
        
        return <>
            
            <header>
                <Navbar />
                <Card className='border-0'>
                    <Card.Img  src="./images/banner.jpg" alt='Succulent Club banner' />
                    <Card.ImgOverlay> 
                        <Card.Title>
                            <h1 className='header-h1 dark-green-font mx-5 mt-3 float-left text-center opacity-4'>Succulent <span className="d-block">Club</span></h1>
                        </Card.Title>
                    </Card.ImgOverlay>
                    <Card.ImgOverlay className='d-flex flex-column justify-content-end text-center'>
                        <Card.Text>
                            <a className='hover' href='#about'><Arrow className='arrow dark-green-font'/></a>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </header>
            
        </>;
    }
}
  
export default Header;
  