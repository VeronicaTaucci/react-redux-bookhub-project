import { SEARCH_BOOK_LIST } from './types'
export const searchBookList = (book) => {
    return {
        type: SEARCH_BOOK_LIST,
        data: {
            book,
        }
    }
}