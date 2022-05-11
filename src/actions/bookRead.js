import { ADD_TO_READ } from './types'
export const addToReadList = (book) => {
// console.log('add this book to read already',book)
    return {
        type: ADD_TO_READ,
        data: {
            book,
        }
    }
}