
// import { DELETE_COMMENT_ABOUT_BOOK } from './types'
import { ADD_COMMENT_ABOUT_BOOK } from './types'
export const addCommentAboutBook = (data) => {
        // console.log('comments about book data',data)
    return {
        type: ADD_COMMENT_ABOUT_BOOK,
        data: {
            data,
        }
    }
}
