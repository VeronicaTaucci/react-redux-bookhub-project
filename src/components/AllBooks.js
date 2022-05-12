import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { addToReadList } from '../actions/bookRead'
import { deleteBook } from '../actions/deleteBook'
import ProgressModal from './ProgressModal'
import { useDispatch } from 'react-redux';
import './styling/homePage.css';
import Button from 'react-bootstrap/Button';

import Header from './layout/Header';
import Card from 'react-bootstrap/Card';
const AllBooks = () => {
    const dispatch = useDispatch()
    const bookList = useSelector(state => state.books.bookList)  //added
    const counter = useSelector(state => state.count)

    return (
        <>

{/*             
            <ul>
                {bookList.length === 0 ? <div>YOU HAVE NO BOOKS</div> : bookList.map((book) => {
                    return(
                    <div>
                    <img src={book.volumeInfo.imageLinks.thumbnail} key={book.id} />
                            <p>{book.volumeInfo.title}</p>
                            <Button variant='secondary' onClick={() => dispatch(addToReadList(book))}>Add To Books I've Read</Button>
                            <Button variant='secondary' onClick={() => dispatch(deleteBook(book))}>Delete</Button>
                            <ProgressModal book={book}></ProgressModal> 
                    </div>)
                    }
                )}
            </ul> */}
            <Header/>
            <div className='searchResults'>
                {bookList.map((book) => (
                    <Card key={book.id} style={{ width: '15rem' }} className='bookContainer'>
                        <Card.Img variant="top" src={book.volumeInfo.imageLinks.thumbnail} />

                        <Card.Title>{book.volumeInfo.title}</Card.Title>
                        <div className='infoButtons'>
                            <ProgressModal book={book}></ProgressModal>
                            <Button variant="outline-dark" onClick={() => dispatch(addToReadList(book))}>Add To Books I've Read</Button>
                            <Button variant="outline-dark" onClick={() => dispatch(deleteBook(book))}>Delete</Button>
                        </div>
                    </Card>))
                }
            </div>

        </>
    )

}
export default AllBooks