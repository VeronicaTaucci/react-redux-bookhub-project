import {ADD_TO_LIST} from '../actions/types'
import { ADD_TO_READ} from '../actions/types'
import { ADD_COMMENT_ABOUT_BOOK} from '../actions/types'
const booksReducer = (state, action) => {

    //initialize our state 

    if (state === undefined) {
        state = {
            bookList: [],  //[{}] this is in the books I want to read
            numberOfReadBooks: 0, //how many books I already Read
            readBooks: [], //books I've read already
            commentsAboutBook:[]
        }
    }
    switch (action.type) {
        case ADD_TO_LIST:
            let newBookItems = [...state.bookList, action.data.book] //copying whatever is in state ) 
            return {
                ...state,
                bookList: newBookItems,
            }
        case ADD_TO_READ:
            let bookReadAlready = [...state.readBooks, action.data.book] //copying whatever is in state )
            return {
                ...state,
                readBooks: bookReadAlready,
                numberOfReadBooks: state.numberOfReadBooks + 1
            }
            case ADD_COMMENT_ABOUT_BOOK:
            console.log('comments about book',action.data.data)
            let allCommentsAboutBook = [...state.commentsAboutBook, action.data.data]
            return {
                ...state,
                commentsAboutBook:allCommentsAboutBook
            }
        default:
            return state
    }
}


export default booksReducer