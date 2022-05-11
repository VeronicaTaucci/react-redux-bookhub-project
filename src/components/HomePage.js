import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import InfoModal from './InfoModal';
import { addToList } from '../actions/addToList'
import AllBooks from './AllBooks';
import './styling/homePage.css' 
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
    // setData(data.Search);   //sets our state- replaces the empty array with our data
    setSearchedBooks(data.items);
}
    

return (
    <>
        <div className="wrap">
            <div className="search">
                <input onChange={searchResults} type="text" className="searchTerm" placeholder="Search a book"/>
                <button onClick={handleInput} type="submit" className="searchButton">
                        <i className="fa fa-search"></i>
                    </button>
            </div>
        </div>
        <div className='searchResults'>
            {searchedBooks.map(book => (
                <div key={book.id} className="bookContainer">
                    <img src={book.volumeInfo.imageLinks.thumbnail} />
                    <div>{book.volumeInfo.title}</div>
                    <button onClick={() => dispatch(addToList(book))}>Add To List</button>
                    <InfoModal book={book}><button>Add To List</button></InfoModal> 
                </div>
            ))}
         </div> 
    </>
)
}

export default Home