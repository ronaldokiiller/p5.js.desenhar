function setup() {
  createCanvas(600, 600);
  background("black");
}

function draw() {
  
  
  fill("white");
  textSize(30);
  text("Desenhar", 10, 30);
  stroke("white");
  if(mouseIsPressed){
    circle(mouseX, mouseY, 10);
  }  
}

function doubleClicked(){
  setup();
}
