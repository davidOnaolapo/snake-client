const connect = require('./client.js')

console.log("Connecting ...");
const play = connect();

// const moves = ["Move: up", "Move: up", "Move: left", "Move: left"];

// let time = 50;

// for (let move of moves ) {
//   setTimeout(() => {
//     play.write(move);
//   }, time)
//   time += 50;
// }

const handleUserInput = function (data) {
  if (data === '\u0003') {
    play.destroy();
    process.exit();
  }
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on('data', handleUserInput);

  return stdin;
};

setupInput();

