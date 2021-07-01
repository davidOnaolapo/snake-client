const connect = require('./client.js')

let play;

const handleUserInput = function (data) {
  if (data === '\u0003') {
    process.exit();
  }

  if (data === 'w') {
    play.write("Move: up")
  }
  if (data === 'a') {
    play.write("Move: left")
  }
  if (data === 's') {
    play.write("Move: down")
  }
  if (data === 'd') {
    play.write("Move: right")
  }
};

const setUpInput = function (conn) {
  play = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on('data', handleUserInput);

  return stdin;
};

module.exports = setUpInput;