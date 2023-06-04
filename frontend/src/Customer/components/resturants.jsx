import React from 'react';
import "./resturants.css";

export default function resturants({ resturant }) {
    return (
        <div>
            <h1 className='abc'>{resturant.restaurantName}</h1>
            <div className='image'>
                <img src={resturant.restaurantLogo} className="img-fluid" style={{ height: '200px', width: '200px' }} />
            </div>
            <p className='p'>{resturant.restaurantDescription}</p>
        </div>
    );
};
