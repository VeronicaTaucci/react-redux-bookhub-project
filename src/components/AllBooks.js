import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { addToReadList } from '../actions/bookRead'
import { deleteBook } from '../actions/deleteBook'
import DisplayRecords from './DisplayRecords'
import { useDispatch } from 'react-redux';
import './styling/homePage.css';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './layout/Header';
import Card from 'react-bootstrap/Card';
import { useState } from 'react'
const AllBooks = () => {
    const dispatch = useDispatch()
    const bookList = useSelector(state => state.books.bookList)  //added
    const [hideDiv, setHideDiv] = useState()
    const notify = (message) => toast.success(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });;
    
    useEffect(() => {
        const checkList = () => {
            // console.log(bookList)
            if (bookList.length !==0) {
                setHideDiv(true)
            }
        }
        checkList()
    },[])
    
const handleAddBook = (book) => {
    dispatch(addToReadList(book))
    notify('Great Job! moved to books you read already!')

}
const handleDelete = (book) => {
    dispatch(deleteBook(book))
    notify('book was deleted')
}
    return (
        <>

            <Header />
            
        <ToastContainer />
            {!hideDiv ? <h1> <br />you have no books in your collection
        </h1> : null}
            <div className='searchResults'>
                {bookList.map((book) => (
                    <Card key={book.id} style={{ width: '15rem' }} className='bookContainer'>
                        <Card.Img variant="top" src={book.volumeInfo.imageLinks.thumbnail} />

                        <Card.Title>{book.volumeInfo.title}</Card.Title>
                        <div className='infoButtons'>
                            <DisplayRecords recordBook={book}/>
                            <Button variant="outline-dark" onClick={() => handleAddBook(book)}>Add To Books I've Read</Button>
                            <Button variant="outline-dark" onClick={() => handleDelete(book)}>Delete</Button>
                        </div>
                    </Card>))
                }
            </div>

        </>
    )

}
export default AllBooks