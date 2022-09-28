import React, { useState } from 'react';
import Activities from '../Activities/Activities';
import Break from '../Break/Break';
import Details from '../Details/Details';
import Header from '../Header/Header';
import Selfinfo from '../Selfinfo/Selfinfo';
import './Home.css';

const Home = () => {
    const [isSelected,setIsSelected] = useState([]);
    const [list,setList] = useState([]);
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
                    <Details list={list}></Details>
                </div>
            </div>
        </div>
    );
};

export default Home;