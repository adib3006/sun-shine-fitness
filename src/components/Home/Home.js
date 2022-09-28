import React from 'react';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className='home'>
                <div className='activity-container'>
                    <Header></Header>
                    <h1>activities</h1>
                </div>
                <div className='info-container'>
                    <h1>info</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;