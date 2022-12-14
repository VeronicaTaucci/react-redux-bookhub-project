import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { addToReadList } from '../actions/bookRead'
import { addRecordAboutBook } from '../actions/addRecordAboutBook'
import ProgressModal from './ProgressModal'
import SearchBookList from './SearchBookList';
import Header from './layout/Header'
import './styling/homePage.css';
// import DisplayRecords from './DisplayRecords'
import { deleteBookIRead } from '../actions/deleteBookIRead'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AddCommentForm from './AddCommentAboutBook';
import { DISPLAY_RECORDS } from '../actions/types';


const RecordAboutBook = ({bookTitle}) => {
    const [addComment, setAddComment] = useState("")
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [category, setCategory] = useState("")
    const [pageRead, setPageRead] = useState(0)
    const dispatch = useDispatch()

    
    const submitForm = () => {
        const bookRecord = {
            book:{
            comment: addComment,
            rating: rating,
            category: category,
            pageRead: pageRead,
            bookTitle:bookTitle
            }
        }
        // console.log("bookRecord in component",bookRecord)
        dispatch(addRecordAboutBook(bookRecord))
}
const handleChange = (e) => {
    setAddComment(e.target.value)
    e.target.value=''
}
    return(
        <>
            {/* rating  */}
            <div>{ bookTitle}</div>
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
                <div>Pages Read {pageRead}<Button className="count " variant="outline-dark" onClick={() => setPageRead(pageRead + 1)}>+</Button></div>
            </div>

            {/* comment  */}

            <div className="form-item">
                <input className="comment"
                    placeholder="add a thought"
                    // value={addComment}
                    onChange={handleChange}
                />
            </div>
            <div className="comment-add-button">
                <div >
                    <Button variant="outline-dark" onClick={submitForm}>Add</Button>
                </div>
            </div>
            <div>Display Records:
                {/* <DisplayRecords bookTitle={ bookTitle}/> */}
            </div>
            
        </>
    )
}

export default RecordAboutBook