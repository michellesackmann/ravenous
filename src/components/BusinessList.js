import React from 'react';
import Business from './Business';

function BusinessList() {
    const businessList = [];
    for (let i = 0; i < 50; i++) {
        businessList.push(Business());
    }

    return <div>{businessList}</div>;
}

export default BusinessList;