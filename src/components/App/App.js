import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';

const business = {
  imgSource: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Bordertown',
  state: 'NY',
  zipcode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviews: 90,
}

const businessList = [];
    for (let i = 0; i < 50; i++) {
        businessList.push(business);
    }

function App() {
  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList businessList={businessList}/>
    </div>
  );
}

export default App;
