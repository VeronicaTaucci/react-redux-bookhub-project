import {ADD_TO_LIST} from '../actions/types'
import { ADD_TO_READ} from '../actions/types'
import { DELETE_COMMENT_ABOUT_BOOK} from '../actions/types'
import { DELETE_BOOK} from '../actions/types'
import { DELETE_BOOK_I_READ} from '../actions/types'
import { ADD_RECORD_ABOUT_BOOK } from '../actions/types'

const booksReducer = (state, action) => {
    if (state === undefined) {
        state = {
            bookList: [],  //[{}] this is in the books I want to read
            numberOfReadBooks: 0, //how many books I already Read
            readBooks: [], //books I've read already
            commentsAboutBook: [],
            books: []
        }
    }
    switch (action.type) {
        case ADD_RECORD_ABOUT_BOOK:
            console.log("book records in state", state)
            let updatedRecord = [...state.books, action.data.data]
            return {
                ...state,
                books: updatedRecord
            }
        case ADD_TO_LIST: {
            let newBookItems = [...state.bookList, action.data.book] 
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
        // case ADD_COMMENT_ABOUT_BOOK:
        //     let updateComment = [...state.commentsAboutBook, action.data.data]
        //     // console.log('reducer',action.data)
        //     return {
        //         ...state,
        //         commentsAboutBook: updateComment
        //     }
            case DELETE_BOOK:
                let updatedBookList = state.bookList.filter((book) => book.id !== action.data.book.id);
                return {
                    ...state,
                    bookList: updatedBookList
                }
            case DELETE_BOOK_I_READ:
            let updatedBookIRead = state.readBooks.filter((book) => book.id !== action.data.book.id);
                return {
                    ...state,
                    readBooks: updatedBookIRead
                }
        case DELETE_COMMENT_ABOUT_BOOK:
            let updatedComments = state.books.filter((book) => book.comment !== action.data.comment);
            console.log(state.books)
            return {
                ...state,
                books: updatedComments
            }
        
        // case SEARCH_BOOK_LIST:
        //     let searchBook = state.readBooks.filter((comment) => comment.id !== action.data.comment.id);
        //     return {
        //         ...state,
        //         commentsAboutBook: updatedComments
        //     }
        default:
            return state
    }
}


export default booksReducer