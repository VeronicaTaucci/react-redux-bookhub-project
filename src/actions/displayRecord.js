
import { DISPLAY_RECORDS } from './types'

export const dispalyRecords = (data) => {
    return {
        type: DISPLAY_RECORDS,
        data: {
            data,
        }
    }
}
