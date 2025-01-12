
let px, py;

function setup() {
  createCanvas(600, 600);
  background(0);
  stroke(255)
  noFill()
  px= width/2;
  py= height/2;

  //نمودار سینوسی
  for(let i=0; i < 10; i++){
    bezier(50, 200, 250, i*10+50, 350, i*10+500, 490, 300)
  }
}

function draw() {
 
}

function mousePressed(){
  stroke(124, 68, 79)
  fill(124, 68, 79)
  
  curve(random(600), random(600), px, py, mouseX, mouseY, random(600), random(600))

  px=mouseX;
  py=mouseY
}
