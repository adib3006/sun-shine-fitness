import React from 'react';
import './Break.css';

const Break = ({setIsSelected}) => {
    

    const handleSelected = (e) => {
        const breakTimeStr = e.target.innerText;
        const breakTime = breakTimeStr.slice(0,-1);
        localStorage.setItem('break-time',JSON.stringify(breakTime));
        setIsSelected([breakTime]);
    }
    return (
        <div>
            <h2 className='title'>Take a break</h2>
            <div className='break'>
                <div className='btn-container'>
                    <button onClick={(e)=>handleSelected(e)} className='btn-break'>10m</button>
                    <button onClick={(e)=>handleSelected(e)} className='btn-break'>15m</button>
                    <button onClick={(e)=>handleSelected(e)} className='btn-break'>20m</button>
                    <button onClick={(e)=>handleSelected(e)} className='btn-break'>25m</button>
                    <button onClick={(e)=>handleSelected(e)} className='btn-break'>30m</button>
                </div>
            </div>
        </div>
    );
};

export default Break;