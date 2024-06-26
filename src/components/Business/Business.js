import React from 'react';
import './Business.css';


function Business() {
    const imgSource = 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg';
    const name = 'MarginOtto Pizzeria';
    const address = '1010 Paddington Way';
    const city = 'Bordertown';
    const state = 'NY';
    const zipcode = '10101';
    const category = 'Italian';
    const rating = 4.5;
    const reviews = 90;

    return (
        <div className="card">
            <img src={imgSource} alt="pizza"/>
            <h2>{name}</h2>
            <span className='card-text'>
                <p className='card-p-left'>
                {address} <br></br>
                {city} <br></br>
                {state} {zipcode}
                </p>
                <p className='card-p-right'>
                <p className='card-category'>{category.toUpperCase()}</p>
                <p className='card-rating'>{rating} stars</p>
                {reviews} reviews
                </p>
            </span>
        </div>
    );
}

export default Business;