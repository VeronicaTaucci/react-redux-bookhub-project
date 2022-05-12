import React from 'react'
import Home from '../HomePage'
import Header from './Header'

const BaseLayout = (props) => {
    return (
        <>
            
            {props.children}
        </>
    )
}

export default BaseLayout