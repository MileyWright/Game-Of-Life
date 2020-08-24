import React from 'react';
import {Link} from 'react-router-dom';
import './MainPage.css';

const MainPage = () => {

    return (
        <div className='mainContainer'>
            <h1 className='title'>Game of Life</h1>
            <div className='links'>
                <Link to='play'>
                    <button>
                        Play
                    </button>
                </Link>
                <Link to='instructions'>
                    <button>
                        Instructions
                    </button>
                </Link>
                <Link to='options'>
                    <button>
                        Options
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default MainPage;