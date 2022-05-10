import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <ul>
                <li> <Link to="/">search a book</Link></li>
                <li> <Link to="/components/allbooks">All the Books I want to read</Link></li>
                <li> <Link to="/components/allbooks">All the Books I read already</Link></li>

            </ul>
        </>
    )
}

export default Header