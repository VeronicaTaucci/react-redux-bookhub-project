
import { combineReducers } from 'redux'
import booksReducer from './booksReducer'
import records from './records'


const rootReducer = combineReducers({
    books: booksReducer,
    records:records
})


export default rootReducer