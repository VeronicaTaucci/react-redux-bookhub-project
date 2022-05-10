import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { addToList } from '../actions/addToList'
import AllBooks from './AllBooks';
const API_KEY = process.env.REACT_APP_BOOK_API_KEY;

const Home = () => {

    const [searchedBooks, setSearchedBooks] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const dispatch = useDispatch();


    const searchResults = e => {
        setSearchInput(e.target.value);
}

const handleInput = async () => {
    let url = `https://www.googleapis.com/books/v1/volumes?q=${searchInput}`

    let results = await fetch(url, {
        headers: {
            Authorization: API_KEY
        }
    }); 

    let data = await results.json();
    console.log('data', data);
    // setData(data.Search);   //sets our state- replaces the empty array with our data
    setSearchedBooks(data.items);
}

return (
    <>
        <input className="col-4 mb-5 p-1" onChange={searchResults} />
        <button  onClick={handleInput}>Search</button>

        <div >
            {searchedBooks.map(book => (
                <div key={book.id} >
                    <img src={book.volumeInfo.imageLinks.thumbnail} />
                    <div>{book.volumeInfo.title}</div>
                    <button  onClick={() => dispatch(addToList(book)) }>Add To List</button>
                </div>
            ))}
        </div>
    </>
)
}

export default Home