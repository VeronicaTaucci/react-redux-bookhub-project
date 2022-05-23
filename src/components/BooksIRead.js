import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import Header from './layout/Header'
import './styling/homePage.css';
import DisplayRecords from './DisplayRecords'
import CanvasProgress from './CanvasProgress'
import { deleteBookIRead } from '../actions/deleteBookIRead'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { categories } from "../constants/add-comments"
const AllBooks = () => {
    const dispatch = useDispatch()
    const booksIReadAlready = useSelector(state => state.books.readBooks)  //added
    const categoriesArr = categories;
    const [category, setCategory] = useState('')
    const [comment, setComment] = useState('')
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [visible, setVisible] = useState(false)
    const [categoryOpen, setCategoryOpen] = useState(false)
    const handleCategory = (category) => {
        setCategory(category)
        setCategoryOpen(false)
    }


    const handleSubmit = () => {

    }
    
    return (
        <>
            <Header/>
            <div className='searchResults'>
                {booksIReadAlready.map((book) => {
                    return (
                        <Card key={book.id} style={{ width: '15rem' }} className='bookContainer'>
                            <Card.Img variant="top" src={book.volumeInfo.imageLinks.thumbnail} />
                            <Card.Title>{book.volumeInfo.title}</Card.Title>
                            {/* <CanvasProgress key={book.volumeInfo.id} book={book}/> */}
                            
                            <div className='infoButtons'>
                                {/* <Button variant="outline-dark" onClick={(book) => setVisible(!visible)}>{visible ? 'Hide' : 'Show'}</Button> */}
                                
                                <DisplayRecords recordBook={book} />    
                                <Button variant="outline-dark" onClick={() => dispatch(deleteBookIRead(book))}>Delete</Button>
                            </div>
                            
                        </Card>)
                }
                )}
            </div>

        </>
    )

}
export default AllBooks