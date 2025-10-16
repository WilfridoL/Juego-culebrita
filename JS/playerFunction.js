import { displayTable, move, updateGameDisplay } from "./index.js";
// position (x, y)
let x = 9; 
let y = 9;

const movePlayer = (event = move) => {
    displayTable[x][y] = 0
    switch (event) {
        case 0:
            x--
            break;
        case 1:
            y--
            break;
        case 2:
            x++
            break;
        case 3:
            y++
            break;
    }
    displayTable[x][y] = 1
    if (y === displayTable[x].length - 1) {
        clearInterval(start)
        start = null
    }
    updateGameDisplay()
}

const generateFood = () => {
    let positionX = Math.floor(Math.random() * (displayTable[0].length - 1))
    let positionY = Math.floor(Math.random() * (displayTable[0].length - 1))
    
    if (displayTable[positionX][positionY] === 0) {
        displayTable[positionX][positionY] = 2
        updateGameDisplay()
    }
}

export {
    movePlayer,
    generateFood
}