import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <FontAwesomeIcon className='icon' icon={faSun}></FontAwesomeIcon>
            <h1>Sun <span className='span'>Shine</span> Fitness</h1>
        </div>
    );
};

export default Header;