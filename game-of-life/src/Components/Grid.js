import React, {useState} from 'react';

const rows = 25;
const columns = 25;

const gridMap = () => {
    const gridRow = [];
    for(let i = 0; i < rows; i++){
        gridRow.push(Array.from(Array(columns), () => 0))
    }
    return gridRow;
}

const Grid = () => {
    const [grid, setGrid] = (useState(gridMap))
    


    return (
        <div className='grid'>
            {grid}
        </div>
    )
}

export default Grid;