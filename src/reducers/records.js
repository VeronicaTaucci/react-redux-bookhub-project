
import { ADD_RECORD_ABOUT_BOOK } from '../actions/types'

const records = (state, action) => {
    if (state === undefined) {
        state = {
            books:[]
        }
    }
        switch (action.type) {
            case ADD_RECORD_ABOUT_BOOK:
                console.log("book records in state",state)
                // let updatedRecord = state.books.filter((book) => book.title !== action.data.bookRecord.book.bookTitle)
                return {
                    ...state,
                    book: [...state, action.data.bookRecord]
                }
         default:
                return state
    }
    }
    export default records