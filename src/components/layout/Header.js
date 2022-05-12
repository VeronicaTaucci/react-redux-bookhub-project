import React from 'react'

import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Header = () => {
    return (
        <>
            
            
                <Navbar expand="lg" variant="light" bg="light">
                    <Container>
                       <Link to="/">search a book</Link>
                        <Link to="/components/allbooks">All the Books I want to read</Link>
                        <Link to="/components/booksiread">All the Books I read already</Link>
                    </Container>
                </Navbar>
        </>
    )
}

export default Header