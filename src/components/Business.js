import React from 'react';
import pizza from '../Pizza.png';


function Business() {
    const name = 'MarginOtto Pizzeria';
    const address = '1010 Paddington Way';
    const city = 'Bordertown';
    const state = 'NY';
    const zipcode = '10101';
    const category = 'Italian';
    const rating = 4.5;
    const reviews = 90;

    return (
        <div>
            <img src={pizza} height="175"/>
            <h1>{name}</h1>
            <ul>
                <li>{address}</li>
                <li>{city}</li>
                <li>{state} {zipcode}</li>
                <li>{category}</li>
                <li>{rating} stars</li>
                <li>{reviews} reviews</li>
            </ul>
        </div>
    );
}

export default Business;