
import { DISPLAY_RECORDS } from './types'

export const dispalyRecords = (data) => {
    console.log('addCommentAboutBook', data)
    return {
        type: DISPLAY_RECORDS,
        data: {
            data,
        }
    }
}
