var hr,min,sec;
var scAngle;


function setup() {
  createCanvas(400,400);
  //added by siddhi
  angleMode(DEGREES)
}

function draw() {
  background(50); 
  sec = second();
  min = minute();
  hr = hour();

  hrAngle = map(hr, 0, 12, 0, 360);
  minAngle = map(min, 0, 60, 0, 360);
  secAngle = map(sec, 0, 60, 0, 360);
  translate(200, 200); // common translate for arcs as well
  rotate(-90)  //To add it from 12

  push();
    stroke(255, 0, 0);
    strokeWeight(5);
   
    rotate(secAngle);
    line(0, 0, 100, 0);
  pop();

  push();
  stroke(0, 255, 0);
  strokeWeight(5);
  
    rotate(minAngle);
    line(0, 0, 80, 0);
    pop();


      
    

    //drawing the arcs
    strokeWeight(10);
    noFill();
    //Seconds
    stroke(255,0,0);
    arc(0,0,300,300,0,secAngle);
    //Minutes
    stroke(0,255,0);
    arc(0,0,280,280,0,minAngle);
    
  drawSprites();
}
