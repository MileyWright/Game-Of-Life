import React from 'react';
import useDarkMode from '../hooks/useDarkMode';
import {Link} from 'react-router-dom';
import './MainPage.css';

const Options = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);

    const toggleMode = e => {
        e.preventDefault();
	    setDarkMode(!darkMode);
    };

    return (
        <div className='mainContainer'>
            <h1 className='title'>Game of Life</h1>
            <div className='links'>
                    <button onClick={toggleMode} className={darkMode ? 'toggle toggled' : 'toggle'}>
                        {darkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
            </div>
            <div className='link'>
                <Link to='/'>
                    <button className='back'>
                        Back
                    </button>
                </Link>
            </div>
        </div>
        
    )
}

export default Options;