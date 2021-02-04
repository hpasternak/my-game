var gameState=0;
var database,form,player,game,playerCount

function preload() {
  scene1img=loadImage("images/abovewater.jpg");
  scene2img=loadImage("images/underwater.jpg");
}
function setup() {
  createCanvas(displayWidth-30,displayHeight-30);
  database=firebase.database()
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  if(gameState === 0){
    background(scene1img);
    form.display();
  }
  if(playerCount === 1) {
    game.update(2);
    //gameState = 2
  }
  if(gameState === 2){
    clear()
    sceneimg = createSprite(displayWidth-30,displayHeight-30);
    sceneimg.addImage("scene",scene2img)
    //background(scene2img);
    }
}