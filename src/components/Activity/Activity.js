import React, { useState } from 'react';
import './Activity.css';

const Activity = ({list,setList,activity}) => {
    const {name,picture,age,time,} = activity;
    const [toggle,setToggle] = useState(true);
    const handleClick = () => {
        setToggle(current => false);
        const info = {time};
        if(list){
            setList([...list,info]);
            return;
        }
        else{
            setList([info]);
            return;
        }
      };
    return (
        <div className='activity'>
            <h2>{name}</h2>
            <img src={picture} alt="" />
            <p>Age limit: {age} years</p>
            <p>Duration: {time} min</p>
            <button onClick={handleClick} className={toggle ? 'btn-start' : 'btn-selected'}>
                {toggle ? "Start":"Selected"}
            </button>
        </div>
    );
};

export default Activity;