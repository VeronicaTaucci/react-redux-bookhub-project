import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const SearchBookList = () => {
    const bookToSearch = useSelector(state => state.readBooks)
    const [filteredArr, setFilteredArr] = useState([]) 
    const [filteredText, setFilteredText] = useState("")

    const handleChange = (e) => {
        setFilteredText(e.target.value) 
        let filteredBooks = bookToSearch.filter((book) => {
            return book.volumeInfo.title.toLowerCase().includes(filteredText.toLowerCase())
        })
        setFilteredArr(filteredBooks)
        console.log(filteredBooks)
    }
    return (
        <>
            Search a book that I read:
            <input type="text" value={filteredText} onChange={handleChange} />
            <button>Search</button>

            <ul>
                {filteredArr.map((book) => {
                    return <li >
                        <h2>{book.volumeInfo.title}</h2>
                    </li>
                })}
            </ul>
        </>
    )
}

export default SearchBookList