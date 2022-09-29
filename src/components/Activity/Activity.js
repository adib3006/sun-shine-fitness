import React, { useState } from 'react';
import './Activity.css';

const Activity = ({list,setList,activity}) => {
    const {name,picture,dificulty,time,type} = activity;
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
            <p><span className='activity-category'>Type: </span>{type}</p>
            <p><span className='activity-category'>Dificulty: </span>{dificulty}</p>
            <p><span className='activity-category'>Duration: </span>{time} min</p>
            <button onClick={handleClick} className={toggle ? 'btn-start' : 'btn-selected'}>
                {toggle ? "Start":"Selected"}
            </button>  
        </div>
    );
};

export default Activity;