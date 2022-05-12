import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import ListGroup from 'react-bootstrap/ListGroup';
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

    const [count, setCount] = useState(0)
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);


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
            <div className="star-rating">
                {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                        <button
                            type="button"
                            key={index}
                            className={index <= (hover || rating) ? "on" : "off"}
                            onClick={() => setRating(index)}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(rating)}
                        >
                            <span className="star">&#9733;</span>
                        </button>
                    );
                })}
                        </div>
                        
                    </Modal.Header>
                    
                    <ListGroup className='listGroup'>
                        <ListGroup.Item>Pages read: {count}<Button className="count" variant="outline-dark" onClick={() => setCount(count + 1)}>ADD</Button></ListGroup.Item>
                        <ListGroup.Item> <AddCommentForm /></ListGroup.Item>
                    </ListGroup>

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