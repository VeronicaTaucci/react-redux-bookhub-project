import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addToList } from '../actions/addToList';
const InfoModal = (book) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    const bookArr = book.book;
    console.log('bookArr', bookArr)
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{bookArr.volumeInfo.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{bookArr.volumeInfo.description}</Modal.Body>
                <span>Average rating: {bookArr.volumeInfo.averageRating}</span>
                <span>Language: {bookArr.volumeInfo.language}</span>
                <span>Published: {bookArr.volumeInfo.publishedDate}</span>
                <span>{bookArr.volumeInfo.averageRating}</span>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <button onClick={() => dispatch(addToList(bookArr))}>Add To List</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default InfoModal