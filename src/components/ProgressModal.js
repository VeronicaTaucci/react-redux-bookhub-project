import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addToReadList } from '../actions/bookRead';
import Rating from './Rating';
import ProgressBoard from './ProgressBoard';
import AddCommentForm from './AddCommentAboutBook';
const ProgressModal = (book) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    const bookArr = book.book;
    return (
        <>
            <Modal.Body>
            <Button variant="primary" onClick={handleShow}>
                records about the book
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{bookArr.volumeInfo.title}</Modal.Title><br/>
                </Modal.Header>
                <Rating /><span> Pages: <input type='range' /></span>
                    <AddCommentForm />
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => dispatch(addToReadList(bookArr))}>Add To books I already read</Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
                </Modal>
            </Modal.Body>
        </>
    );
}

export default ProgressModal