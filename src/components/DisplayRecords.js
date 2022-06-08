import { useDispatch, useSelector } from "react-redux"
import './styling/addCommentAboutBook.css'
import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {addRecordAboutBook} from '../actions/addRecordAboutBook'
import {records} from '../actions/records'
import CommentsDisplay from './CommentsDisplay'
import { categories } from "../constants/add-comments"
import ListGroup from 'react-bootstrap/ListGroup';
import RecordsDisplay from "./RecordsDisplay";
const DisplayRecords = (book) => { 
 
    const categoriesArr = categories;
    const [category, setCategory] = useState('')
    const [comment, setComment] = useState('')
    const [title, setTitle] = useState('')
    const [categoryOpen, setCategoryOpen] = useState(false)
    const dispatch = useDispatch();
    const [count, setCount] = useState(0)
    const comments = useSelector((state) => state.books.books)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const recordsId = book.recordBook.id;
    let filteredRecords = comments.filter((record) => record.bookId === recordsId)
    const getRecords = useSelector((state) => state.records)
    let sortBy = book.recordBook.volumeInfo.title.replace(/ /g, "")
    let sorted = getRecords[sortBy]
    // let count1 = sorted.count
    console.log(sorted)
 




    const handleShow = (book) => {
        setShow(true)
        setTitle(book.recordBook.volumeInfo.title)
    };

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);


    const handleCategory = (category) => {
        setCategory(category)
        setCategoryOpen(false)
    }


    const handleSubmit = (book) => {
        const bookRecord = {
            bookId:book.recordBook.id,
            bookTitle: book.recordBook.volumeInfo.title,
            comment: comment,
        }
        dispatch(addRecordAboutBook(bookRecord))
        const recordsData = {
            bookTitle: book.recordBook.volumeInfo.title,
            bookId: book.recordBook.id,
            rating: rating,
            category: category,
            count: count,
            comment: comment,
        }
        dispatch(records(recordsData))
    }
    
return (
    <>
        <Button variant="outline-dark" onClick={handleShow}>
            My records about the Book
        </Button>
        <Modal className="mainModal" show={show} onHide={handleClose}>
            <Modal.Body>
               {book.recordBook.volumeInfo.title}
                   <div>
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
                    <ListGroup.Item>Pages read: {count}<Button className="count" variant="outline-dark" onClick={() => setCount(count + 1)}>ADD</Button></ListGroup.Item>
                    <div className="category-container-parent">
                        <div className="category">
                            <div
                                className="category-dropdown"
                                onClick={() => setCategoryOpen(!categoryOpen)}
                            >
                                <label>{category ? category.title : "Category"}</label>

                            </div>
                            {categoryOpen && (
                                <div >
                                    {categoriesArr.map((category) => (
                                        <div className="categoryItem"
                                            key={category.id}
                                            onClick={() => handleCategory(category)}
                                        >
                                            <label>{category.title}</label>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                        <div className="form-item">
                            <input className="comment"
                                placeholder="add a thought"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            />
                        </div>
                      
                        <div className="comment-add-button">
                            <div >
                                <Button variant="outline-dark" onClick={()=>handleSubmit(book)}>Add Records</Button>
                            </div>
                        </div>
                        <div /></div>
                <RecordsDisplay book={book.recordBook} />
                <CommentsDisplay bookId={book.recordBook.id} />

            </Modal.Body>         
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
       
        
    </>)
}

export default DisplayRecords