import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { addToReadList } from '../actions/bookRead'
import ProgressModal from './ProgressModal'
import { useDispatch } from 'react-redux';
const AllBooks = () => {
    const dispatch = useDispatch()
    const bookList = useSelector(state => state.books.bookList)  //added
    const counter = useSelector(state => state.count)

    return (
        <>

            Display Books
            <ul>
                {bookList.map((book) => {
                    return(
                    <div>
                    <img src={book.volumeInfo.imageLinks.thumbnail} key={book.id} />
                            <p>{book.volumeInfo.title}</p>
                            <button onClick={() => dispatch(addToReadList(book))}>Add To Books I've Read</button>
                            <ProgressModal book={book}><button>Progress</button></ProgressModal> 
                    </div>)
                    }
                )}
            </ul>
            <h1>{counter}</h1>

        </>
    )

}
export default AllBooks