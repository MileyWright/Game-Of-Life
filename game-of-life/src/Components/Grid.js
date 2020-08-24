import React, {useState, useRef, useCallback} from 'react';
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

const neighborCell = [
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0]
];

const Grid = () => {
    const [grid, setGrid] = useState(gridMap);
    const [running, setRunning] = useState(false);

    const runningRef = useRef(running);
    runningRef.current = running;

    const toggleGrid = ({ i, j}) => {
        setGrid( produce(grid, gridCopy => {
            gridCopy[i][j] = grid[i][j] ? 0 : 1; 
        }))
    }
    
    const toggleCellBackground = ({i, j}) => {
        let toggleBackground = 'cell';
        if(grid[i][j] === 1){       // if the grid cells is 1(true) then the cell background is changed when toggled
            return toggleBackground += "toggleBackground";
        } else {
            return toggleBackground // 0 (false) ? Then stay default 
        }
    }

    const startButton = () => {
        setRunning(!running);
        if(!running) {
            runningRef.current = true;
            runGrid()
        }
    }
    
    const runGrid = useCallback(() => {
        if (!runningRef.current) { // my runningRef will always be up to date in a useCallback
            return;
        }
        setGrid((grid) => {
            return produce(grid, gridCopy => {
                for (let i = 0; i < rows; i++) {
                    for (let j = 0; j < columns; j++) {
                        let neighbors = 0;
                        neighborCell.forEach(([x,y]) => {
                            const newI = i + x;
                            const newJ = j + y;
                            if(
                                newI >= 0 && newI < rows &&
                                newJ >= 0 && newJ < columns //checking to see if we haven't gone above or below our grid
                            ) {
                                neighbors += grid[newI][newJ]
                            }
                        })

                        if(neighbors < 2 || neighbors > 3) { //Rules: if the neighbor is less than 2 or greater than 3 the cell dies
                            gridCopy[i][j] = 0;
                        } else if (grid[i][j] === 0 && neighbors === 3) {
                            gridCopy[i][j] = 1;
                        }
                    }
                }
            })
        })
       
        setTimeout(runGrid, 1000)
    }, [])

    const clearGrid = () => {
        setGrid(gridMap)
    };

    console.log(grid)
    return (
        <>
            <button onClick = {startButton}>{running ? 'Stop' : 'Start'}</button>
            <button onClick = {clearGrid}> Clear</button>
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
        </>
    )
}

export default Grid;