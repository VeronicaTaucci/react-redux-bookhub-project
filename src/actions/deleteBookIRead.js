import { DELETE_BOOK_I_READ } from './types'

export const deleteBookIRead = (book) => {
    return {
        type: DELETE_BOOK_I_READ,
        data: {
            book
        }
    }
}