import { ADD_TO_LIST } from './types'
export const addToList = (book) => {
    console.log(book)
    return {
        type: ADD_TO_LIST,
        data: {
            book,
        }
    }
}