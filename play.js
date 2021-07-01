const connect = require('./client.js')
const setUpInput = require('./input.js');


console.log("Connecting ...");
const play = connect();
setUpInput(play);


// const moves = ["Move: up", "Move: up", "Move: left", "Move: left"];

// let time = 50;

// for (let move of moves ) {
//   setTimeout(() => {
//     play.write(move);
//   }, time)
//   time += 50;
// }



