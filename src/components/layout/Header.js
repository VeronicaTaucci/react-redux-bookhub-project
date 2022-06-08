import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
    return (
        <>
            <Navbar expand="lg" variant="light" bg="light">
                    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto mainNav">
                            <Link className='links' to="/">Search for a book</Link>
                            <Link className='links' to="/components/allbooks">My Collection</Link>
                            <Link className='links' to="/components/booksiread">Books I've already read</Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
         
        </>
    )
}

export default Header