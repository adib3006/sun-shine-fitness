import React from 'react';
import './Details.css';

const Details = ({list}) => {
    const total = list.reduce((previousValue, currentValue) => previousValue + currentValue.time,0);
    console.log(total);
    return (
        <div>
            <h2>Exercise Detail</h2>
            <div>
                <p>Exercise Time: {total}</p>
            </div>
        </div>
    );
};

export default Details;