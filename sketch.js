'use strict';

let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
let player;
let coins = [];

function setup() {
  cnv = createCanvas(w, h);

  player = new Player();
  coins.push(new Coins());
}

function draw() {
  switch (state){
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;
  case 'level 1':
    level1();
    cnv.mouseClicked(titleMouseClicked);
    break;
  case 'you win':
    youWin();
    cnv.mouseClicked(youWinMouseClicked);
    break;
  default:
    break;
  }
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    play.direction = 'left'
  } else if (keyCode == RIGHT_ARROW) {
    play.direction = 'right'
  } else if (keyCode == UP_ARROW) {
    play.direction = 'up'
  } else if (keyCode == DOWN_ARROW) {
    play.direction = 'down'
  } else if (key = ' ') {
    player.direction = 'still';
  }
}

function canvasClicked(){

}

function title() {
  background(0);
  textSize(80);
  fill(255);
  textAlign(CENTER);
  text('MY GAME', w/2, h/5);

  textSize(30);
  text('click anywhere to start', w/2, h/2)
}

function titleMouseClicked(){
  console.log('canvas is clicked on title page')
  state = 'level 1'
}

function level1(){
  background(50, 150, 200);
//  text('click for points', w/2, h - 30);

  player.display();
  player.move();

  for (let i = 0; i < coins.length; i++){
    coins[i].display();
    coins[i].move();


  }

  //check for collision, if there is a collision increase points by 1
  //iterate backwards through array
  for (let i = coins.length - 1; i >= 0; i --){
  if(dist(player.x, player.y, coins[0].x, coins[0].y) <= (player.r + coins[0].r) / 2){
    points++;
    console.log(points);
    coins.splice(i, 1);
  }
}

  text(`points: ${points}`, w/4, h - 30);
}

function level1MouseClicked(){
  // points++;
  // console.log('points = ' + points);
  //
  // if (points >= 10){
  //   state = 'you win';
  // }
}

  function youWin(){
    background(255, 50, 80);
    textSize(80);
    stroke(255);
    text('YOU WIN!', w/2, h/2);

    textSize(30);
    text('click anywhere to restart', w/2, h * 3/4)

  }

  function youWinMouseClicked(){
    state = 'level 1';
    points = 0;
  }
