import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Activities.css';

const Activities = ({list,setList}) => {
    const [activities,setActivities] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setActivities(data))
    },[]);
    return (
        <div className='display'>
            <h2 className='title'>Pick Best activities for today from {activities.length} activities.</h2>
            <div className='activities-container'>
                {
                    activities.map(activity => <Activity 
                        activity={activity} 
                        key={activity.id}
                        list={list}
                        setList={setList}
                        ></Activity>)
                }
            </div>
        </div>
    );
};

export default Activities;