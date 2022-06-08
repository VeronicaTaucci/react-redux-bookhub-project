
import { RECORDS } from './types'

export const records = (recordsData) => {
    // console.log('addCommentAboutBook', recordsData)
    return {
        type: RECORDS,
        data: recordsData
    }
}
