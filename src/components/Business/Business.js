import React from 'react';
import pizza from './Pizza.png';
import '../App/App.css';


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
            <img src={pizza} />
            <h1 className="card-header">{name}</h1>
            <span className='card-text'>
                <p className='card-p-left'>
                {address} <br></br>
                {city} <br></br>
                {state} {zipcode}
                </p>
                <p className='card-p-right'>
                {category} <br></br>
                {rating} stars <br></br>
                {reviews} reviews
                </p>
            </span>
        </div>
    );
}

export default Business;