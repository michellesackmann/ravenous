import React from 'react';
import './Business.css';


function Business(props) {
    return (
        <div className="card">
            <img src={props.imgSource} alt=""/>
            <h2>{props.name}</h2>
            <span className='card-text'>
                <p className='card-p-left'>
                {props.address} <br></br>
                {props.city} <br></br>
                {props.state} {props.zipcode}
                </p>
                <p className='card-p-right'>
                <p className='card-category'>{props.category.toUpperCase()}</p>
                <p className='card-rating'>{props.rating} stars</p>
                {props.reviews} reviews
                </p>
            </span>
        </div>
    );
}

export default Business;