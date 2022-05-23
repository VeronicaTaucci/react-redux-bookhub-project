import { useDispatch, useSelector } from "react-redux"
import './styling/addCommentAboutBook.css'
import React, {useState,useEffect} from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {addRecordAboutBook} from '../actions/addRecordAboutBook'
import CommentsDisplay from './CommentsDisplay'
import { categories } from "../constants/add-comments"
import ListGroup from 'react-bootstrap/ListGroup';
const DisplayRecords = (book) => { 
 
    const categoriesArr = categories;
    const [category, setCategory] = useState('')
    const [comment, setComment] = useState('')
    const [title, setTitle] = useState('')
    const [visible, setVisible] = useState(false)
    const [categoryOpen, setCategoryOpen] = useState(false)
    const dispatch = useDispatch();
    const [count, setCount] = useState(0)
    const comments = useSelector((state) => state.books.books)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    console.log(book.recordBook.id)
    const recordsId = book.recordBook.id;
    let filteredRecords = comments.filter((record) => record.bookId == recordsId)
    console.log(filteredRecords)




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
            rating: rating,
            category: category,
            count:count,
        }
        dispatch(addRecordAboutBook(bookRecord))
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


                        <div className="form-item">
                            <input className="comment"
                                placeholder="add a thought"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            />
                        </div>
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
                        <div className="comment-add-button">
                            <div >
                                <Button variant="outline-dark" onClick={()=>handleSubmit(book)}>Add</Button>
                            </div>
                        </div>
                        <div /></div>
                
                <CommentsDisplay bookId={book.recordBook.id} />
                {/* <div>
                    <h1>All the comments:</h1>
                    <ul>
                        {displayTheComment.filter((comment) => { comment.bookTitle == book.recordBook.volumeInfo.title
                    return(
                        // <div>
                        //    <div>{comment.comment} <br/> <span>Category: {comment.category}</span> <br/> created {moment(time).fromNow()}</div>
                        //     <button onClick={()=>dispatch(deleteCommentAboutBook(comment))}>delete</button></div>
                        
                      
                        <li >comment.comment
                            <Button variant="outline-dark" >delete</Button>
                            </li>
                      
                    )
                })}
                </ul>
                </div> */}

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