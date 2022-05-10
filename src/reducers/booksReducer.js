import {ADD_TO_LIST} from '../actions/types'
const booksReducer = (state, action) => {

    //initialize our state 

    if (state === undefined) {
        state = {
            bookList: [],  //[{}]
            numberOfItems: 0,
        }
    }
    switch (action.type) {
        case ADD_TO_LIST:
            console.log(action.data.book)
            let newBookItems = [...state.bookList,action.data.book] //copying whatever is in state )
            return {
                ...state,
                bookList: newBookItems,
                numberOfItems: state.numberOfItems + 1
            }
        default:
            return state
    }
}


export default booksReducer