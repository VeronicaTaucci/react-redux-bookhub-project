
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addToReadList } from '../actions/bookRead';

const ProgressBoard = (bookImg) => {
    let img= bookImg.bookImg.volumeInfo.imageLinks.thumbnail

    return (

        <>
           
                
            
            {/* <img src={img}/> */}
           
            
            
        </>
    )
}

export default ProgressBoard