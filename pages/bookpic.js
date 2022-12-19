import React from 'react'

const bookpic = (props) => {
    return (
        <>
        {props.books.map((book,index) => (
            <div className='flex'>
                <div className='pic'>
                <img id='pic' src={book.volumeInfo.imageLinks.thumbnail}></img>
                </div>

                <div className='info'>
                <p className='tit'>{book.volumeInfo.title}</p>
                <p className='aut'>{book.volumeInfo.authors}</p>
                <a className='btn' href={book.volumeInfo.previewLink}>READ</a>
                </div>
        
            </div>
        ))}
        </>
    )
}

export default bookpic
