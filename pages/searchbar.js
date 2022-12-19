import React from 'react'

const search = (props) => {

    return (
            <div className='search'>
            <input
            className='search'       
            placeholder='Search by title...' 
            value={props.value}
            onChange={(event) => props.setSearchbook(event.target.value)}
            >
            </input>
        </div>
    )
}

export default search;