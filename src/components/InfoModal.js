import React, { useState} from 'react';
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
    return (
        <>
            {/* <Button variant="outline-dark" onClick={handleShow}>
               See Details
            </Button>
            <Modal  show={show} onHide={handleClose}>
               <div >
                    <h1>{bookArr.volumeInfo.title}</h1>
                <p className='volumeInfo'>{bookArr.volumeInfo.description}</p>
                <span>Average rating: {bookArr.volumeInfo.averageRating}</span>
                <span>Language: {bookArr.volumeInfo.language}</span>
                <span>Published: {bookArr.volumeInfo.publishedDate}</span>
                </div>
                    <Button variant="outline-dark" onClick={() => dispatch(addToList(bookArr))}>Add To List</Button>
                    <Button variant="outline-dark" onClick={handleClose}>
                        Close
                    </Button>
            </Modal> */}

            <Button variant="outline-dark" onClick={handleShow}>
                See Details
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {bookArr.volumeInfo.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        {bookArr.volumeInfo.description}
                    </p>
                    <ul>
                        <li>Average rating: {bookArr.volumeInfo.averageRating}</li>
                        <li>Language: {bookArr.volumeInfo.language}</li>
                        <li>Published: {bookArr.volumeInfo.publishedDate}</li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-dark" onClick={() => dispatch(addToList(bookArr))}>Add To List</Button>
                    <Button variant="outline-dark" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default InfoModal