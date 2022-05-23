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
    const [hideDiv, setHidediv] = useState(true);
    const dispatch = useDispatch();

    
    const searchResults = e => {
         setSearchInput(e.target.value);   
}

    const handleInput = async () => {
        try {
                let url = `https://www.googleapis.com/books/v1/volumes?q=${searchInput}&maxResults=21`
                let results = await fetch(url, {
                    headers: {
                        Authorization: API_KEY
                    }
                });
            let data = await results.json();
            if (data.items == undefined || data.item === "thumbnail") {
                setHidediv(false)
                console.log(data.items)
            }else{setSearchedBooks(data.items)}
                
            
        } catch (err) {
            console.log("err", err)
        }
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

    const handleNoPic = (book) => {
        const newPic = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.newyorker.com%2Fculture%2Fcultural-comment%2Fkirkus-reviews-plight-of-the-problematic-book-review&psig=AOvVaw0MumUZLKFjtqDcPNx71ZED&ust=1653090937781000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMitiuXh7PcCFQAAAAAdAAAAABAD'
        console.log(book.volumeInfo)
        if (book.volumeInfo.imageLinks === undefined) {
            book.volumeInfo.imageLinks = newPic
            return newPic
        } else {
            let bookPic = book.volumeInfo.imageLinks.thumbnail 
            console.log("imag oics",bookPic)
            return bookPic
    }
}
    return (
    
    <>
            <div className='heroDiv'>
                
            <h1 className='quote'><span>quote of the day:</span> "{randomQuote}"</h1>
            <div className="search">
                <input onChange={searchResults} type="text" className="searchTerm" placeholder="Search a book" />
                <button onClick={handleInput} type="submit" className="searchButton">
                    <i className="fa fa-search"></i>
                </button>
            </div>
        </div>
       
        <Header/>
        <div className='searchResults'>
            {!hideDiv ? <h1>Hmm..no results, try searching for something else!</h1> : null}
            {searchedBooks.map((book) => (
            <Card key={book.id} style={{ width: '15rem' }} className='bookContainer'>
                <Card.Img variant="top" src={handleNoPic(book)} alt="cover picture of the book" />
                {/* <Card.Img variant="top" src={book.items.imageLinks.thumbnail} /> */}
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