import React, {useState} from 'react';
import "./Grid.css";
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
    
console.log(grid)

    return (
        <div className='grid'>
            {grid.map((gridRow, i) => {
                  return gridRow.map((column, j) => {
                     return (
                        <div
                            className="cell"
                            key = {`${i}-${j}`}
                            
                        />
                    )
                  })
            })}
        </div>
    )
}

export default Grid;