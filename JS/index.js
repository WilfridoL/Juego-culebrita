import { generateFood, movePlayer } from "./playerFunction.js";

const displayTable = Array.from({length:20}, () => Array(20).fill(0)); // main array
// console.log(displayTable);

let start;
let move = 1
let snakeBody = 1;
const updateGameDisplay = () => {
    const display = document.getElementById('display')
    display.innerHTML = ""
    displayTable.forEach(event => {
        event.forEach(e => {
            if (e === 1) {
                display.innerHTML += '<div class="player"></div>' 
            }else if (e === 2) {
                display.innerHTML += '<div class="apple"></div>' 
            }else {
                display.innerHTML += '<div></div>'
            }
        })
    })
}

document.body.addEventListener('keydown', (event) => {
    if(event.key.toLocaleLowerCase() === 'w'){
        console.log('arriba');
        console.log(move);
        
        move = move != 2 ? 0 : 2 
        movePlayer(move)
    }
    if(event.key.toLocaleLowerCase() === 'a'){
        console.log('izquirda');
        console.log(move);
        
        move = move != 3 ? 1 : 3
        movePlayer(move)
    }
    if(event.key.toLocaleLowerCase() === 's'){
        console.log('abajo');
        console.log(move);
        
        move = move != 0 ? 2 : 0
        movePlayer(move)
    }
    if(event.key.toLocaleLowerCase() === 'd'){
        console.log('derecha');
        console.log(move);
        
        move = move != 1 ? 3 : 1
        movePlayer(move)
    }
    
})


generateFood()
updateGameDisplay()
console.log(displayTable);

start = setInterval(movePlayer, 1000);

export {
    displayTable,
    updateGameDisplay,
    move

}