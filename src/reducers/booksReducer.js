const booksReducer = (state, action) => {

    //initialize our state 

    if (state === undefined) {
        state = {
            bookList: [],  //[{}]
            numberOfItems: 0,
        }
    }
    switch (action.type) {
    
        default:
            return state
    }
}


export default booksReducer