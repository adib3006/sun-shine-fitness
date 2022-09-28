import React, { useState } from 'react';
import Activities from '../Activities/Activities';
import Break from '../Break/Break';
import Header from '../Header/Header';
import Selfinfo from '../Selfinfo/Selfinfo';
import './Home.css';

const Home = () => {
    const [isSelected,setIsSelected] = useState([]);
    const [list,setList] = useState([]);
    console.log(isSelected);
    console.log(list);
    return (
        <div>
            <div className='home'>
                <div className='activity-container'>
                    <Header></Header>
                    <Activities list={list} setList={setList}></Activities>
                </div>
                <div className='info-container'>
                    <Selfinfo></Selfinfo>
                    <Break isSelected={isSelected} setIsSelected={setIsSelected}></Break>
                </div>
            </div>
        </div>
    );
};

export default Home;