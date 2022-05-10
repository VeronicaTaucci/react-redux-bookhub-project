import { ADD_TO_READ } from './types'
export const addToReadList = (book) => {

    return {
        type: ADD_TO_READ,
        data: {
            book,
        }
    }
}