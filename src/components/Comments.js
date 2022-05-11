import { useSelector } from "react-redux";

const Comments = () => {
    const comments = useSelector(state.comments)
    console.log('comment',comments)
    return (
        <></>
    )
}