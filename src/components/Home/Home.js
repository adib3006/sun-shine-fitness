import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import Break from '../Break/Break';
import Details from '../Details/Details';
import Header from '../Header/Header';
import Question from '../Questions/Question';
import Selfinfo from '../Selfinfo/Selfinfo';
import './Home.css';

const Home = () => {
    const [isSelected,setIsSelected] = useState([]);
    const [list,setList] = useState([]);
    const [time,setTime] = useState(0);

    useEffect(()=>{
        const breakTime = JSON.parse(localStorage.getItem('break-time'));
        setTime(breakTime);
    },[isSelected]);
    return (
        <div>
            <div className='home'>
                <div className='activity-container'>
                    <Header></Header>
                    <Activities 
                    list={list} 
                    setList={setList}
                    ></Activities>
                    <Question></Question>
                </div>
                <div className='info-container'>
                    <Selfinfo></Selfinfo>
                    <Break setIsSelected={setIsSelected}></Break>
                    <Details 
                    list={list} 
                    time={time} 
                    setList={setList}
                     ></Details>
                </div>
            </div>
        </div>
    );
};

export default Home;