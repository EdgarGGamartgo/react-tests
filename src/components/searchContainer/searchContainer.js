import React, { useState } from 'react'
import { Search } from './../search/search'

export const SearchContainer = () => {
    const [search, setSearch] = useState('')

    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    
    return (
        <div>
            <Search value={search} onChange={(e) => handleChange(e)}>
                Search:
            </Search>

            <p>Searches for {search ? search : '...'}</p>
        </div>
    )
}