import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";

const AllBooks = () => {

    const bookList = useSelector(state => state.books.bookList)  //added
    const counter = useSelector(state => state.count)
console.log('all books', bookList)

    return (
        <>

            Display Books
            <ul>
                {bookList.map((book) => {
                    return(
                    <div>
                    <img src={book.volumeInfo.imageLinks.thumbnail} key={book.id} />
                        <p>{book.volumeInfo.title}</p>
                    </div>)
                    }
                )}
            </ul>
            <h1>{counter}</h1>

        </>
    )

}
export default AllBooks