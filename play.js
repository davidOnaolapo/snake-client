const connect = require('./client.js')
const setUpInput = require('./input.js');


console.log("Connecting ...");
const play = connect();
setUpInput(play);


const statements = ["Say: I'm finna win", "Say: Its lit", "Say: I love you", "Say: Covid aint lit"];

let time = 50;

for (let says of statements ) {
  setTimeout(() => {
    play.write(says);
  }, time)
  time += 500;
}



