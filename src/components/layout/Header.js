import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Header = () => {
    return (
        <>
            
            
                <Navbar expand="lg" variant="light" bg="light">
                    <Container>
                       <Link className='links'  to="/">Search for a book</Link>
                        <Link className='links'  to="/components/allbooks">My Collection</Link>
                        <Link  className='links' to="/components/booksiread">Books I've already read</Link>
                    </Container>
                </Navbar>
        </>
    )
}

export default Header