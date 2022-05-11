import {ADD_TO_LIST, SEARCH_BOOK_LIST} from '../actions/types'
import { ADD_TO_READ} from '../actions/types'
import { ADD_COMMENT_ABOUT_BOOK} from '../actions/types'
import { DELETE_COMMENT_ABOUT_BOOK} from '../actions/types'


const booksReducer = (state, action) => {
    if (state === undefined) {
        state = {
            bookList: [],  //[{}] this is in the books I want to read
            numberOfReadBooks: 0, //how many books I already Read
            readBooks: [], //books I've read already
            commentsAboutBook: []
        }
    }
    switch (action.type) {
        case ADD_TO_LIST: {
            let newBookItems = [...state.bookList, action.data.book] //copying whatever is in state ) 
            // localStorage.setItem('bookList', JSON.stringify(newBookItems))
            return {
                ...state,
                bookList: newBookItems,
            }
        }
        case ADD_TO_READ:
            // console.log(action.data.book)
            let bookReadAlready = [...state.readBooks, action.data.book] //copying whatever is in state )
            return {
                ...state,
                readBooks: bookReadAlready,
                numberOfReadBooks: state.numberOfReadBooks + 1,
                bookList: state.bookList.filter((book) => book.id !== action.data.book.id)
            }
            case ADD_COMMENT_ABOUT_BOOK:
            // console.log('comments about book',action.data.data)
            let allCommentsAboutBook = [...state.commentsAboutBook, action.data.data]
            return {
                ...state,
                commentsAboutBook:allCommentsAboutBook
            }
        case DELETE_COMMENT_ABOUT_BOOK:
            let updatedComments = state.commentsAboutBook.filter((comment )=> comment.id !== action.data.comment.id);
            return {
                ...state,
                commentsAboutBook: updatedComments
            }
        case SEARCH_BOOK_LIST:
            let searchBook = state.readBooks.filter((comment) => comment.id !== action.data.comment.id);
            return {
                ...state,
                commentsAboutBook: updatedComments
            }
        default:
            return state
    }
}


export default booksReducer