
import { RECORDS } from '../actions/types'

const records = (state, action) => {
    if (state === undefined) {
        state = {
        }
    }
        switch (action.type) {
            case RECORDS:
                let key1 = [action.data.bookTitle]
                let key = key1[0].replace(/ /g, "")
                // console.log(key)
                let obj = action.data
                // console.log(book)
                return {
                    ...state,
                    [key]:obj
                }
         default:
                return state
    }
    }
    export default records