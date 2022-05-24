import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { addToReadList } from '../actions/bookRead'
import { deleteBook } from '../actions/deleteBook'
import ProgressModal from './ProgressModal'
import { useDispatch } from 'react-redux';
import './styling/homePage.css';
import Button from 'react-bootstrap/Button';

import Header from './layout/Header';
import Card from 'react-bootstrap/Card';
import { useState } from 'react'
const AllBooks = () => {
    const dispatch = useDispatch()
    const bookList = useSelector(state => state.books.bookList)  //added
    const [hideDiv, setHideDiv] = useState()
   
    
    useEffect(() => {
        const checkList = () => {
            console.log(bookList)
            if (bookList.length !==0) {
                setHideDiv(true)
            }
        }
        checkList()
    },[])
    

    return (
        <>

            <Header />
            {!hideDiv ? <h1> <br />you have no books in your collection
        </h1> : null}
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