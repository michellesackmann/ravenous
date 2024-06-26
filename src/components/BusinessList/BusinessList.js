import React from 'react';
import Business from '../Business/Business';
import './BusinessList.css'

function BusinessList() {
    const businessList = [];
    for (let i = 0; i < 50; i++) {
        businessList.push(Business());
    }

    return <div className='card-group'>{businessList}</div>;
}

export default BusinessList;