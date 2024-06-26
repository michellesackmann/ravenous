import React from 'react';
import background from '../background_image.jpg';

function SearchBar() {
    return (
        <div className='App-header' style={{ backgroundImage: `url(${background})` }}>
            <span className='filter-group'>
                <button className='filter-button'>Best Match</button>
                <button className='filter-button'>Highest Rated</button>
                <button className='filter-button'>Most Reviewed</button>
            </span>
            <span className='search-group'>
                <input className='search-box' placeholder="Search businesses"></input>
                <input className='search-box' placeholder='Where?'></input>
            </span>
            <button className='button'>Let's go!</button>
        </div>
    );
}

export default SearchBar;