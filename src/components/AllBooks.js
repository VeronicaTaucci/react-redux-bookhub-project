import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { addToReadList } from '../actions/bookRead'
import ProgressModal from './ProgressModal'
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
const AllBooks = () => {
    const dispatch = useDispatch()
    const bookList = useSelector(state => state.books.bookList)  //added
    const counter = useSelector(state => state.count)

    return (
        <>

            Display Books i want to read
            <ul>
                {bookList.map((book) => {
                    return(
                    <div>
                    <img src={book.volumeInfo.imageLinks.thumbnail} key={book.id} />
                            <p>{book.volumeInfo.title}</p>
                            <Button variant='secondary' onClick={() => dispatch(addToReadList(book))}>Add To Books I've Read</Button>
                            <ProgressModal book={book}></ProgressModal> 
                    </div>)
                    }
                )}
            </ul>

        </>
    )

}
export default AllBooks