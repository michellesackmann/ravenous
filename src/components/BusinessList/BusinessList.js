import React from 'react';
import Business from '../Business/Business';
import './BusinessList.css'

function BusinessList(props) {
    const businesses = props.businessList;
    return (
        <div className='card-group'>
        {businesses?.map((business) => (
          <Business
          key={business.id}
          imgSource={business.image_url} 
          name={business.name} 
          address={business.location.address1}
          city={business.location.city}
          state={business.location.state}
          zipcode={business.location.zip_code}
          category={business.categories[0].title}
          rating={business.rating}
          reviews={business.reviews}/>
        ))}
        </div>
      );
}

export default BusinessList;