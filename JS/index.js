import { generateFood, movePlayer } from "./playerFunction.js";

const displayTable = Array.from({length:20}, () => Array(20).fill(0)); // main array

let start;
let move = 1
let limitMove; // limit movement in the same direction

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
    if(event.key.toLocaleLowerCase() === 'w' && limitMove != event.key){
        limitMove = event.key
        move = move != 2 ? 0 : 2 
        movePlayer(move)
    }
    if(event.key.toLocaleLowerCase() === 'a' && limitMove != event.key){
        limitMove = event.key
        move = move != 3 ? 1 : 3
        movePlayer(move)
    }
    if(event.key.toLocaleLowerCase() === 's' && limitMove != event.key){
        limitMove = event.key
        move = move != 0 ? 2 : 0
        movePlayer(move)
    }
    if(event.key.toLocaleLowerCase() === 'd' && limitMove != event.key){
        limitMove = event.key
        move = move != 1 ? 3 : 1
        movePlayer(move)
    }
    
})

document.getElementById('play').addEventListener('click', () => start = setInterval(movePlayer, 1000))


generateFood()
updateGameDisplay()


export {
    displayTable,
    updateGameDisplay,
    move

}

// posible solucion amuentar el tamaño de la culebra
// colocarle un id al div del player y buscar las coordenadas donde se encuentra