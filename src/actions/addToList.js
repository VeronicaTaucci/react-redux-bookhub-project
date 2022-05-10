import { ADD_TO_LIST } from './types'
export const addToList = (book) => {
    
    return {
        type: ADD_TO_LIST,
        data: {
            book,
        }
    }
}