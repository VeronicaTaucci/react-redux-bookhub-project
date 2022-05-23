import { useDispatch, useSelector } from "react-redux"
import moment from 'moment';
import './styling/addCommentAboutBook.css'
import ListGroup from 'react-bootstrap/ListGroup';
import { deleteCommentAboutBook } from '../actions/deleteCommentAboutBook'
import Button from "react-bootstrap/esm/Button";


const CommentsDisplay = (bookId) => {
    // console.log(bookId.bookId)
    const comments = useSelector((state) => state.books.books)
    const dispatch = useDispatch();
    let id = bookId.bookId
    let filteredComments = comments.filter((comment) => comment.bookId == id)
    // console.log("commentsDisplay component", filteredComments)
    // state.bookList.filter((comment) => comment.id !== action.data.comment.id);
    
    return (
        <> 
            <div>
                <h1>All the comments:</h1>
                <ListGroup>
                    {filteredComments.map((comment) => {
                    return(
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