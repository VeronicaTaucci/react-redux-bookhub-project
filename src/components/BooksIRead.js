import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { addToReadList } from '../actions/bookRead'
import ProgressModal from './ProgressModal'
import { useDispatch } from 'react-redux';
import SearchBookList from './SearchBookList';

import './styling/homePage.css';

import Card from 'react-bootstrap/Card';
const AllBooks = () => {
    const dispatch = useDispatch()
    const booksIReadAlready = useSelector(state => state.books.readBooks)  //added

    return (
        <>
            {/* <SearchBookList/>
            Display Books I Read Already
            <ul>
                {booksIReadAlready.map((book) => {
                    return (
                        <div>
                            <img src={book.volumeInfo.imageLinks.thumbnail} key={book.id} />
                            <p>{book.volumeInfo.title}</p>
                            <ProgressModal book={book}><button>Progress</button></ProgressModal>
                        </div>)
                }
                )}
            </ul> */}
            <div className='searchResults'>
                {booksIReadAlready.map((book) => {
                    return (
                        <Card key={book.id} style={{ width: '15rem' }} className='bookContainer'>
                            <Card.Img variant="top" src={book.volumeInfo.imageLinks.thumbnail} />

                            <Card.Title>{book.volumeInfo.title}</Card.Title>
                            <div className='infoButtons'>
                                <ProgressModal book={book}></ProgressModal>
                                {/* <Button variant="outline-dark" onClick={() => dispatch(addToReadList(book))}>Add To Books I've Read</Button>
                                <Button variant="outline-dark" onClick={() => dispatch(deleteBook(book))}>Delete</Button> */}
                            </div>
                        </Card>)
                }
                )}
            </div>

        </>
    )

}
export default AllBooks