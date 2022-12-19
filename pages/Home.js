import React from 'react'
import { useEffect, useState } from "react"
import SearchBook from './searchbar.js'
import Bookpic from './bookpic.js'

const Home = () => {
    const [books, setBooks] = useState([])
    const [searchbook, setSearchbook] = useState('')
    const RequestBook = async() => {
        var url = `https://www.googleapis.com/books/v1/volumes?q=${searchbook}&key=AIzaSyD6VeuQD9G9f1HLzAqAEkca3QZnc44UM4I`;
        const response = await fetch(url)
        const data = await response.json()
        if(data.items){
            setBooks(data.items) 
        }
    }

    useEffect(() => {
        RequestBook(searchbook)
    },[searchbook])

    return (
        <div>
            <p id='sb'>Search Book</p>
            <SearchBook searchbook={searchbook} setSearchbook={setSearchbook}/>

            <Bookpic books={books} />
        </div>
    )
}

export default Home