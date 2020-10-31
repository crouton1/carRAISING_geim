var database;
var form,game,player;
var gameState=0;
var playerCount;
var car1, car2, car3, car4, cars;
var allPlayers; //stores ALL player data used in getPlayerInfo()

/* 
.ref();
.set();
.on();
*/

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth,displayHeight);
  game = new Game();
  game.getState();
  game.start();  
}

function draw(){
  if (playerCount===4){
    game.update(1);
  }
  if (gameState===1){
    clear();
    game.play();
  }
  
}
