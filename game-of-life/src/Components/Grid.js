import React, {useState} from 'react';
import produce from 'immer';
import "./Grid.css";


const rows = 25;
const columns = 25; //going to make these more dynamic. Users should be able to place how big or small they want the grid. 

const gridMap = () => {
    const gridRow = [];
    for(let i = 0; i < rows; i++){
        gridRow.push(Array.from(Array(columns), () => 0)) //creates my array like grid of all 0's (false)
    }
    return gridRow;
}

const Grid = () => {
    const [grid, setGrid] = (useState(gridMap))

    const toggleGrid = ({ i, j}) => {
        setGrid( produce(grid, gridCopy => {
            gridCopy[i][j] = 1;
        }))
    }
    
    const toggleCellBackground = ({i, j}) => {
        let toggleBackground = 'cell';
        if(grid[i][j] === 1){
            return toggleBackground += "toggleBackground";
        } else {
            return toggleBackground
        }
    }
    
    console.log(grid)
    return (
        <div className='grid'>
            {grid.map((gridRow, i) => {
                  return gridRow.map((column, j) => {
                     return (
                        <div
                            // className="cell"
                            key = {`${i}-${j}`}
                            onClick = {() => toggleGrid({ i ,j })}
                            className= {toggleCellBackground({i,j})}

                        />
                    )
                  })
            })}
        </div>
    )
}

export default Grid;