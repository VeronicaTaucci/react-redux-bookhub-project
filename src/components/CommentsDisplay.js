import { useDispatch, useSelector } from "react-redux"
import moment from 'moment';
import './styling/addCommentAboutBook.css'
import ListGroup from 'react-bootstrap/ListGroup';
import { deleteCommentAboutBook } from '../actions/deleteCommentAboutBook'
import Button from "react-bootstrap/esm/Button";


const CommentsDisplay = () => {
    const comments = useSelector((state) => state.books.commentsAboutBook)
    const time = useSelector((state) => state.books.commentsAboutBook.createdAt)
    console.log("commentsDisplay component", comments)
    const dispatch = useDispatch();

    
    
    return (
        <> 
            <div>
                <h1>All the comments:</h1>
                <ListGroup>
                    {comments.map((comment) => {
                    return(
                        // <div>
                        //    <div>{comment.comment} <br/> <span>Category: {comment.category}</span> <br/> created {moment(time).fromNow()}</div>
                        //     <button onClick={()=>dispatch(deleteCommentAboutBook(comment))}>delete</button></div>
                        
                      
                        <ListGroup.Item className="listGroup">{comment.comment}
                            <Button variant="outline-dark" onClick={() => dispatch(deleteCommentAboutBook(comment))}>delete</Button>
                            </ListGroup.Item>
                      
                    )
                })}
                </ListGroup>
            </div>
        
        </>
    )
}
export default CommentsDisplay