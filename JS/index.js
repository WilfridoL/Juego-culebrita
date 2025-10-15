const displayTable = Array.from({length:20}, () => Array(20).fill(0)); // main array
// console.log(displayTable);
// position (x, y)
let x = 9; 
let y = 9;
let start;
const updateGameDisplay = () => {
    const display = document.getElementById('display')
    display.innerHTML = ""
    displayTable.forEach(event => {
        event.forEach(e => {
            display.innerHTML += e === 1 ? '<div class="player"></div>' : '<div></div>'
        })
    })
}
const movePlayer = (i) => {
    displayTable[x][y] = 0
    !i ? y++ : i++
    displayTable[x][y] = 1
    if (y === displayTable[x].length - 1) {
        clearInterval(start)
        start = null
    }
    updateGameDisplay()
}


// document.body.addEventListener('keydown', () => {
//     if(key)
// })

updateGameDisplay()
start = setInterval(movePlayer, 1000);