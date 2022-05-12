import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import Header from './layout/Header';
import InfoModal from './InfoModal';
import { addToList } from '../actions/addToList'
import './styling/homePage.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const API_KEY = process.env.REACT_APP_BOOK_API_KEY;
const Home = () => {

    const [searchedBooks, setSearchedBooks] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [randomQuote, setRandomQuote] = useState('')
    const dispatch = useDispatch();


    const [buttonText, setButtonText] = useState('Click');

    
    const searchResults = e => {
        setSearchInput(e.target.value);
}

    const handleInput = async () => {
        let url = `https://www.googleapis.com/books/v1/volumes?q=${searchInput}&maxResults=21`
    let results = await fetch(url, {
        headers: {
            Authorization: API_KEY
        }
    }); 
    let data = await results.json();
    // setData(data.Search);   //sets our state- replaces the empty array with our data
    setSearchedBooks(data.items);
    }

    useEffect(() => {
    const handleQuote =async ()=>{
        let fetchQuoteApi = await fetch('https://api.adviceslip.com/advice');
        let data = await fetchQuoteApi.json();
        // console.log(data)
        setRandomQuote(data.slip.advice);
    }
        handleQuote();
},[])

return (
    <>
        <div className='heroDiv'>
            <h1 className='quote'> "{randomQuote}"</h1>
            <div className="search">
                <input onChange={searchResults} type="text" className="searchTerm" placeholder="Search a book" />
                <button onClick={handleInput} type="submit" className="searchButton">
                    <i className="fa fa-search"></i>
                </button>
            </div>
        </div>
       
        <Header/>
        <div className='searchResults'>
            {searchedBooks.map((book) => (
            <Card key={book.id} style={{ width: '15rem' }} className='bookContainer'>
                <Card.Img variant="top" src={book.volumeInfo.imageLinks.thumbnail} />
            
                    <Card.Title>{book.volumeInfo.title}</Card.Title>
                    <div className='infoButtons'>
                    <InfoModal book={book}><Button >Add To List</Button></InfoModal>
                    <Button onClick={() => dispatch(addToList(book))} variant="outline-dark">Add To Wish List</Button>
                    </div>
                </Card>)) 
            }
        </div>
    </>
)
}

export default Home