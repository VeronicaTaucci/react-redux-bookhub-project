import { ADD_RECORD_ABOUT_BOOK } from './types'
export const addRecordAboutBook = (bookRecord) => {
    // console.log("bookRecord in action",bookRecord)
    return {
        type: ADD_RECORD_ABOUT_BOOK,
        data: {
            data: bookRecord
        }
    }
}
