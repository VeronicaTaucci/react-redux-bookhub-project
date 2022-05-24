import { useDispatch, useSelector } from "react-redux"
import './styling/addCommentAboutBook.css'
import ListGroup from 'react-bootstrap/ListGroup';
import { deleteCommentAboutBook } from '../actions/deleteCommentAboutBook'
import Button from "react-bootstrap/esm/Button";


const CommentsDisplay = (bookId) => {
    const comments = useSelector((state) => state.books.books)
    const dispatch = useDispatch();
    let id = bookId.bookId
    let filteredComments = comments.filter((comment) => comment.bookId === id)
    
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