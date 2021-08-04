var bgImg, issImg, scImg1, scImg2, scImg3, scImg4;
var iss, spacecraft, hasDocked = false

function preload() {
  scImg1 = loadImage("images/spacecraft1.png")
  scImg2 = loadImage("images/spacecraft2.png")
  scImg3 = loadImage("images/spacecraft3.png")
  scImg4 = loadImage("images/spacecraft4.png")
  bgImg = loadImage("images/spacebg.jpg")
  issImg = loadImage("images/iss.png")
}

function setup() {
  createCanvas(800, 400);
  iss = createSprite(400, 200, 50, 50);
  iss.addImage(issImg)
  iss.scale = 0.5

  spacecraft = createSprite(250, 250, 50, 50)
  spacecraft.addImage(scImg1)
  spacecraft.scale = 0.15

}

function draw() {
  background(bgImg);
  if (keyDown("left")) {
    console.log("Left")
    spacecraft.addImage(scImg3)
    spacecraft.x = spacecraft.x - 5;
  }
  if (keyDown("right")) {
    console.log("right")
    spacecraft.addImage(scImg4)
    spacecraft.x = spacecraft.x + 5;
  }

  if(keyDown ("up")){
    console.log ("up")
 spacecraft.addImage(scImg2)
 spacecraft.y = spacecraft.y - 5;
  }
  if(keyDown ("down")){
    console.log ("down")
 spacecraft.addImage(scImg2)
 spacecraft.y = spacecraft.y + 5;
  }

  
console.log("y:" + spacecraft.y)
console.log("x:" + spacecraft.x)
if(spacecraft.x > 350 && spacecraft.x < 450 && spacecraft.y > 150 && spacecraft.y < 250 ){
  fill("white")
  textSize(25)
  text("docking is successful!", 100, 100)

  

}
  drawSprites();
}