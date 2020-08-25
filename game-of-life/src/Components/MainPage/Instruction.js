import React from 'react';
import {Link} from 'react-router-dom';
import './MainPage.css';

const Instruction = () => {
    return(
        <div className='mainContainer'>
            <h1 className='title'>Game of Life</h1>
            <div className='rules'>
                <h1>Rules</h1>
                <li> Any live cell with fewer than 2 live neighbors dies, as if by underpopulation.</li>
                <li> Any live cell with 2 or 3 live neighbors lives on to the next generation.</li>
                <li> Any live cell with more than 3 live neighbors dies, as if by overpopulation.</li>
                <li> Any dead cell with exactly 3 live neighbors becomes a live cell, as if by reproduction.</li>
            </div>
            <div className='about'>
                <h1>About</h1>
                <p>The Game of Life is a <a href='https://en.wikipedia.org/wiki/Cellular_automaton'>cellular automation</a> created by <a href='https://en.wikipedia.org/wiki/John_Horton_Conway'>John Horton Conway</a> in 1970. Although it is called a game,
                    it actually has zero players. The player only participates in setting the initial state, and the evolution of 
                    the patterns begins moving forward. The general setup is a grid with cells showing as 'alive' or 'dead'.</p>
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

export default Instruction;