import React from 'react';
import './Details.css';

const Details = ({list,time}) => {
    const total = list.reduce((previousValue, currentValue) => previousValue + currentValue.time,0);

    return (
        <div className='exercise'>
            <h2>Exercise Detail</h2>
            <div>
                <p>Exercise Time: {total} minutes.</p>
            </div>
            <div>
                <p>Break Time: {time} seconds.</p>
            </div>
        </div>
    );
};

export default Details;