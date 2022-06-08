import {  useSelector } from "react-redux"

const RecordsDisplay = (book) => {
    let title = book.book.volumeInfo.title.replace(/ /g, "")
    // console.log(title)
    let allRecords = useSelector((state) => state.records)
    let sortedObj = allRecords[title]
    // console.log(sortedObj)
    

    return (
        <>
            {!sortedObj ? <h6> <br />you have no records
            </h6> :
            <div>Last Records about book:<br />
            rating: {sortedObj.rating}<br />
            pages: {sortedObj.count}<br />
                    category: {sortedObj.category.title}
            </div>
    }
        </>
    )
}

export default RecordsDisplay