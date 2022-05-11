import { useDispatch, useSelector } from "react-redux"
import moment from 'moment';

import { deleteCommentAboutBook } from '../actions/deleteCommentAboutBook'


const CommentsDisplay = () => {
    const comments = useSelector((state) => state.books.commentsAboutBook)
    const time = useSelector((state) => state.books.commentsAboutBook.createdAt)
    // console.log("commentsDisplay component", comments)
    const dispatch = useDispatch();

    
    
    return (
        <>
            <div>
                <h1>All the comments:</h1>
                <ul>
                    {comments.map((comment) => {
                    return(
                        <li>{comment.comment} Category: {comment.category} , created {moment(time).fromNow()}
                            <br/>
                            <button onClick={() => dispatch(deleteCommentAboutBook(comment))}>delete</button>
                        </li>
                    )
                })}
                </ul>
            </div>
        
        </>
    )
}
export default CommentsDisplay