import React from 'react';
import './Details.css';
import Swal from 'sweetalert2';

const Details = ({list,time,setList}) => {
    const total = list.reduce((previousValue, currentValue) => previousValue + currentValue.time,0);
    const showToast = () => {
        Swal.fire(
            'Congratulation !',
            'You have completed todays tasks.',
            'success'
          );
        setList([]);
    }
    return (
        <div className='exercise'>
            <h2>Exercise Detail</h2>
            <div className='time'>
                <p>Exercise Time:</p>
                <p>{total} minutes.</p>
            </div>
            <div className='time'>
                <p>Break Time:</p>
                <p>{time} seconds.</p>
            </div>
            <button onClick={showToast} className='btn-complete'>Finish</button>
        </div>
    );
};

export default Details;