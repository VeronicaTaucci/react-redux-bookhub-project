import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { addToReadList } from '../actions/bookRead'
import ProgressModal from './ProgressModal'
import { useDispatch } from 'react-redux';
const AllBooks = () => {
    const dispatch = useDispatch()
    const booksIReadAlready = useSelector(state => state.books.readBooks)  //added

    return (
        <>

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
            </ul>

        </>
    )

}
export default AllBooks