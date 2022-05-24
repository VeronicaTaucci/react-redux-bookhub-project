import { DELETE_COMMENT_ABOUT_BOOK } from './types'

export const deleteCommentAboutBook = (comment) => {
    return {
        type: DELETE_COMMENT_ABOUT_BOOK,
        data: {
            comment:comment.comment
        }
    }
}