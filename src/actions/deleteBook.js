import { DELETE_BOOK } from './types'

export const deleteBook = (book) => {

    return {
        type: DELETE_BOOK,
        data: {
            book
        }
    }
}