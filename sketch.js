var balloon
var bg


function setup() {
  createCanvas(1000, 600)

  database = firebase.database()
  console.log(database)

  balloon = createSprite (300,300,50,50)
  balloon = loadImage("Hot Air Balloon-02.png")

  bg = loadImage ("Background.png")

 position = database.ref('ball/position')
 position.on("value",readPosition,showError)
}

function draw() {
  background(bg);

  if (position!==undefined){

    
  if (keyDown(UP_ARROW)){
    changePosition(0,-1)
  }
  if (keyDown(DOWN_ARROW)){
    changePosition(0,+1)
  }
  if (keyDown(LEFT_ARROW)){
    changePosition(-1,0)
  }
  if (keyDown(RIGHT_ARROW)){
    changePosition(1,0)
  }


  }

  drawSprites();
}

function changePosition(x,y){
 database.ref('ball/position').set({
   x : position.x + x,
   y : position.y + y
 })
}

function readPosition(data){
  position = data.val()
  ball.x = position.x
  ball.y = position.y      
}

function showError(){
  console.log("error")
}