import React from 'react';
import './Activity.css';

const Activity = (props) => {
    const {name,picture,age,time} = props.activity;
    return (
        <div className='activity'>
            <h2>{name}</h2>
            <img src={picture} alt="" />
            <p>Age limit: {age} years</p>
            <p>Duration: {time} min</p>
            <button className='btn-start'>Start</button>
        </div>
    );
};

export default Activity;