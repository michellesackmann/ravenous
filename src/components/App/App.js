import './App.css';

import SearchBusinesses from '../../utilities/YelpApi';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';
import { useState } from 'react';

function App() {
  const [businesses, setBusinesses] = useState([]);

  const searchBusinesses = async (term, location, activeSorting) => {
    const businesses = await SearchBusinesses({
      category: term, 
      location: location, 
      sortOption: activeSorting
    });
    setBusinesses(businesses);
  }

  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar searchBusinesses={searchBusinesses}/>
      <BusinessList businessList={businesses}/>
    </div>
  );
}

export default App;
