import React, { act, useState } from 'react';
import './SearchBar.css'

function SearchBar() {
    const [term, setTerm] = useState('');
    const handleTermChange = (event) => {
        setTerm(event.target.value);
    }

    const [location, setLocation] = useState('');
    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    }

    const [activeSorting, setActiveSorting] = useState('');
    const handleSortingClick = (event) => {
        setActiveSorting(event.target.value);
    }

    const handleSubmit = () => {
        console.log(`Searching Yelp with ${term}, ${location}, ${activeSorting}`);
    }

    return (
        <div className='search-bar-header'>
            <span className='filter-group'>
                <button 
                className={activeSorting === 'best_match' ? 'filter-button-active' : 'filter-button'}
                value='best_match'
                onClick={handleSortingClick}>Best Match</button>
                <button 
                className={activeSorting === 'highest_rated' ? 'filter-button-active' : 'filter-button'}
                value='highest_rated'
                onClick={handleSortingClick}>Highest Rated</button>
                <button 
                className={activeSorting === 'most_reviewed' ? 'filter-button-active' : 'filter-button'}
                value='most_reviewed'
                onClick={handleSortingClick}>Most Reviewed</button>
            </span>
            <span className='search-group'>
                <input 
                className='search-box' 
                placeholder="Search businesses"
                onChange={handleTermChange}>
                </input>
                <input 
                className='search-box' 
                placeholder='Where?'
                onChange={handleLocationChange}>
                </input>
            </span>
            <button className='button' onClick={handleSubmit}>Let's go!</button>
        </div>
    );
}

export default SearchBar;