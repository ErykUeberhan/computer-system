import React, { useState } from 'react'
import './Search.sass'
import { FiSearch, FiPower, FiRefreshCcw, FiLock, FiMoon, FiLogOut } from 'react-icons/fi';

function Search() {
    const [searchValue, setSearchValue] = useState('')
    return (
        <div className='search'>
            <div className='search-field'>
                {searchValue.length > 0 ?
                    null
                    :
                    <div className='search-field-placeholder'><FiSearch className='search-field-placeholder-search' />Search...</div>
                }

                <input className='search-field-input' type='text' onChange={(e) => setSearchValue(e.target.value)} />
            </div>
            <div className='search-menu'>
                <FiPower className='search-menu-power' />
                <FiRefreshCcw className='search-menu-refresh' />
                <FiLock className='search-menu-lock' />
                <FiMoon className='search-menu-moon' />
                <FiLogOut className='search-menu-logout' />
            </div>
        </div>
    )
}

export default Search
