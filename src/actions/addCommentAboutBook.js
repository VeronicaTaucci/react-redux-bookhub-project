
import { ADD_COMMENT_ABOUT_BOOK } from './types'

export const addCommentAboutBook = (data) => {
    // console.log('addCommentAboutBook',data)
    return {
        type: ADD_COMMENT_ABOUT_BOOK,
        data: {
            data,
        }
    }
}
