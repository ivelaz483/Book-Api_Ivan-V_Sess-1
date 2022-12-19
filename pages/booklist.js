import React from 'react'

const booklist = (props) => {
    return (
        <>
        {props.books.map((book,index) => (
            <div>
                <div>
                <a className='list' href={book.volumeInfo.previewLink}>{book.volumeInfo.title}</a><br/><br/>
                </div>
            </div>
        ))}
        </>
    )
}

export default booklist
