import React from 'react';
import Business from '../Business/Business';
import './BusinessList.css'

function BusinessList(props) {
    const businesses = props.businessList;
    return (
        <div className='card-group'>
        {businesses.map((business) => (
          <Business
          imgSource={business.imgSource} 
          name={business.name} 
          address={business.address}
          city={business.city}
          state={business.state}
          category={business.category}
          rating={business.rating}
          reviews={business.reviews}/>
        ))}
        </div>
      );
}

export default BusinessList;