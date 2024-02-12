import React from 'react'
import './style.css'

const Searchbar = ({ value, handleSearchKey, clrarSearch, formSubmit }) => ( // value ne as a props thi mekyu che // 
    <div className='searchBar-wrap'>
        <form onSubmit={formSubmit}>
            <input type='text' onChange={handleSearchKey} placeholder='Search By Category' value={value} />
            {value && <span onClick={clrarSearch}>X</span>}
            <button>Go</button>
        </form>

    </div>
);

export default Searchbar
// Searchbar ne pages na Home ma import kairu che // 