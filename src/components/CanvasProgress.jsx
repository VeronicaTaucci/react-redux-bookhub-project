import React, {useState} from "react";

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { categories } from "../constants/add-comments"
const CanvasProgress = ({book}) => {
   
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const categoriesArr = categories;
    const [category, setCategory] = useState('')
    const [show, setShow] = useState(false)
    const [comment, setComment] = useState('')
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [categoryOpen, setCategoryOpen] = useState(false)
    const handleCategory = (category) => {
        setCategory(category)
        setCategoryOpen(false)
    }

console.log(book.volumeInfo.title);
    const handleSubmit = () => {

    }
    return (
        <>
            <Button variant="primary" onClick={handleShow} >
                Launch
            </Button>

            <Offcanvas show={show} onHide={handleClose} >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {/* comment */}

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
                            <Button variant="outline-dark" onClick={handleSubmit}>Add</Button>
                        </div>
                    </div>
                    <div />


                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default CanvasProgress
