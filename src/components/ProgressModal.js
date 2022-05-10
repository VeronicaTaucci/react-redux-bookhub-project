import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addToReadList } from '../actions/bookRead';
const ProgressModal = (book) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    const bookArr = book.book;
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
                    <button onClick={() => dispatch(addToReadList(bookArr))}>Add To List</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ProgressModal