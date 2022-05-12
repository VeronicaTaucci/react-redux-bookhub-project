import { useDispatch, useSelector } from "react-redux"
import moment from 'moment';

import { deleteCommentAboutBook } from '../actions/deleteCommentAboutBook'


const CommentsDisplay = () => {
    const comments = useSelector((state) => state.books.commentsAboutBook)
    const time = useSelector((state) => state.books.commentsAboutBook.createdAt)
    console.log("commentsDisplay component", comments)
    const dispatch = useDispatch();

    
    
    return (
        <> 
            <div>
                <h1>All the comments:</h1>
                <ul>
                    {comments.map((comment) => {
                    return(
                        <div>
                           <div>{comment.comment} <br/> <span>Category: {comment.category}</span> <br/> created {moment(time).fromNow()}</div>   
                            <button onClick={()=>dispatch(deleteCommentAboutBook(comment))}>delete</button></div>
                      
                    )
                })}
                </ul>
            </div>
        
        </>
    )
}
export default CommentsDisplay