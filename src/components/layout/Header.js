import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <ul>
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/components/allbooks">All Books</Link></li>

            </ul>
        </>
    )
}

export default Header