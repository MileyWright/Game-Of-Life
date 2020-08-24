import React from 'react';
import useDarkMode from '../hooks/useDarkMode';
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
        </div>
    )
}

export default Options;