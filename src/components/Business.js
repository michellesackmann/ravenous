import React from 'react';
import pizza from '../Pizza.png';
import '../App.css';


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
        <div className='card'>
            <img src={pizza} height="170"/>
            <h1 className="card-header">{name}</h1>
                <p>{address}</p>
                <p>{city}</p>
                <p>{state} {zipcode}</p>
                <p>{category}</p>
                <p>{rating} stars</p>
                <p>{reviews} reviews</p>
        </div>
    );
}

export default Business;