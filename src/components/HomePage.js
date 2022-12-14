import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import Header from './layout/Header';
import InfoModal from './InfoModal';
import { addToList } from '../actions/addToList'
import './styling/homePage.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const API_KEY = process.env.REACT_APP_BOOK_API_KEY;
const Home = () => {

    const [searchedBooks, setSearchedBooks] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [randomQuote, setRandomQuote] = useState('')
    const [hideDiv, setHidediv] = useState(true);
    const dispatch = useDispatch();
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
            if (data.items === undefined || data.item === "thumbnail") {
                setHidediv(false)
                // console.log(data.items)
            } else {
                setHidediv(true)
                setSearchedBooks(data.items)
            }

            
        } catch (err) {
            console.log("err", err)
        }
        setSearchInput('')
} 

    useEffect(() => {
    const handleQuote =async ()=>{
        let fetchQuoteApi = await fetch('https://zenquotes.io/api/random');
        let data = await fetchQuoteApi.json();
        // console.log(data[0].q)
        let quote = data[0].q
        setRandomQuote(quote);
    }
        handleQuote();
},[])

    const handleNoPic = (book) => {
        const newPic = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.newyorker.com%2Fculture%2Fcultural-comment%2Fkirkus-reviews-plight-of-the-problematic-book-review&psig=AOvVaw0MumUZLKFjtqDcPNx71ZED&ust=1653090937781000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMitiuXh7PcCFQAAAAAdAAAAABAD'
        // console.log(book.volumeInfo)
        if (book.volumeInfo.imageLinks === undefined) {
            book.volumeInfo.imageLinks = newPic
            return newPic
        } else {
            let bookPic = book.volumeInfo.imageLinks.thumbnail 
            // console.log("imag oics",bookPic)
            return bookPic
    }
}
const addToCollection = (book) => {
    dispatch(addToList(book)) 
    notify('Nice choice! book was moved to your collection!')
}
    return (
    
    <>
        <ToastContainer />
            <div className='heroDiv'>
                <h1 className='quote'>quote of the day:<span className='quoteCursive'>"{randomQuote}"</span> </h1>
            <div className="search">
                <input onChange={searchResults} value={searchInput} type="text" className="searchTerm" placeholder="Search a book" />
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
                    <Button onClick={() => addToCollection(book)} variant="outline-dark">Add To My Collection</Button>
                    </div>
                </Card>)) 
            }
        </div>
    </>
)
}

export default Home