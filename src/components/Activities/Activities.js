import React, { useEffect, useState } from 'react';

const Activities = () => {
    const [activities,setActivities] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setActivities(data))
    },[])
    console.log(activities)
    return (
        <div className='activities-container'>
            <h2>total activities: {activities.length}</h2>
        </div>
    );
};

export default Activities;