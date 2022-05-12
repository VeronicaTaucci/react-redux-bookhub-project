import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addToReadList } from '../actions/bookRead';
import Rating from './Rating';
import AddCommentForm from './AddCommentAboutBook';
import './styling/progressModal.css';
import CommentsDisplay from './CommentsDisplay';
const ProgressModal = (book) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    const bookArr = book.book;
    return (
        <>
                <Button variant="outline-dark" onClick={handleShow}>
                My records about the Book
            </Button>
           
            <Modal className='modalBody' show={show} onHide={handleClose}>
                <Modal.Body className='modalBody'>
                <Modal.Header closeButton>
                    <Modal.Title>{bookArr.volumeInfo.title}</Modal.Title><br/>
                </Modal.Header>
                <Rating /><span> Pages: <input type='range' /></span>
                    <AddCommentForm />
            </Modal.Body>
            <CommentsDisplay/>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => dispatch(addToReadList(bookArr))}>Add To books I already read</Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ProgressModal