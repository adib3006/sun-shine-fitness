import React from 'react';
import './Break.css';

const Break = ({setIsSelected}) => {
    

    const handleSelected = (e) => {
        const breakTime = e.target.value;
        localStorage.setItem('break-time',JSON.stringify(breakTime));
        setIsSelected([breakTime]);
    }
    return (
        <div>
            <h2 className='title'>Take a break</h2>
            <div className='break'>
                <div className='btn-container'>
                    <button value={"10"} onClick={(e)=>handleSelected(e,"value")} className='btn-break'>10</button>
                    <button value={"20"} onClick={(e)=>handleSelected(e,"value")} className='btn-break'>20</button>
                    <button value={"30"} onClick={(e)=>handleSelected(e,"value")} className='btn-break'>30</button>
                    <button value={"40"} onClick={(e)=>handleSelected(e,"value")} className='btn-break'>40</button>
                    <button value={"50"} onClick={(e)=>handleSelected(e,"value")} className='btn-break'>50</button>
                </div>
            </div>
        </div>
    );
};

export default Break;