import React, {useState} from "react"
import { useDispatch } from "react-redux";
import { addCommentAboutBook } from "../actions/addCommentAboutBook";
import { categories } from "../constants/add-comments"
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './addCommentAboutBook.css'
const AddCommentForm = () => { 
    const categoriesArr = categories;
    const [categoryOpen, setCategoryOpen] = useState(false)
    const [comment, setComment] = useState('')
    const [quote, setQuote] = useState('')
    const [category, setCategory] = useState('')
    const dispatch = useDispatch()


    const handleComment = (e) => {
        setComment(e.target.value)
    }
    const handleQuote = (e) => {
        setQuote(e.target.value)
    }
    const handleCategory = (category) => {
        setCategory(category)
        setCategoryOpen(false)
    }

    const handleSubmit=() => {
        if (comment === '' && quote === '') {
            const noData = () => toast("There is nothing to add");
            noData();
            return;
        }
        const data = {
            comment:
            quote,
            category:category.title,
            createdAt : new Date()
        }
        dispatch(addCommentAboutBook(data))
        const addData = () => toast("Great");
        addData();
    }

    return (
        <>
            <div className="add-form">
                <ToastContainer
                    position="top-left"
                    autoClose={1500}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                />
            <div className="form-item">
                <label>Comment</label>
                <input
                    placeholder="something"
                    value={comment}
                    onChange={(e) => handleComment(e)}
                />
            </div>
            <div className="form-item">
                <label>Quote</label>
                <input
                    placeholder="Enter Quote"
                    
                    onChange={(e) => handleQuote(e)}
                    value={quote}
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
                        <div className="category-container">
                            {categoriesArr.map((category) => (
                                <div
                                    className="category-item"
                                    style={{ borderRight: `5px solid ${category.color}` }}
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
                <div onClick={handleSubmit}>
                <label>Add</label>
            </div>
            </div>
                <div />
            </div>
        </>
    )
}
 
export default AddCommentForm