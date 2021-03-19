var hr, mn, sc;
var hrAngle, mnAngle, scAngle;

function setup() {
  createCanvas(800,400);
 angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200, 200);
  rotate(-90);
  //caluclating time using predefined functions from p5.js 
  hr=hour();
  mn=minute();
  sc=second();
//will first have variable
//next two numbers are the range of the variable secs: 0-60 seconds
//next two numbers are mapping values (drawing these elements)
scAngle=map(sc, 0, 60, 0, 360);
mnAngle=map(mn, 0, 60, 0, 360);
hrAngle=map(hr%12, 0, 12, 0, 360);

    //second hand
    push();
    rotate(scAngle);
    //red color
    stroke(255, 0, 0);
    strokeWeight(7);
    line(0, 0, 100, 0);
    pop();

    //minute hand
    push();
    rotate(mnAngle);
    //green color
    stroke(0, 255, 0);
    strokeWeight(7);
    line(0, 0, 75, 0);
    pop();

    //hour hand
    push();
    rotate(hrAngle);
    //blue color
    stroke(0, 0, 255);
    strokeWeight(7);
    line(0, 0, 50, 0);
    pop();

    //creating point for arc
    stroke(255, 0, 255);
    point(0,0);
    strokeWeight(10);
    noFill();

    //seconds arc
    stroke(255, 0, 0);
    //first two values represent the starting point
    //next two values are the width and height values
    //the last two angles to start and stop the arc (won't be exceeding)
    arc(0, 0, 300, 300, 0, scAngle);

    //minutes arc
    stroke(0, 255, 0);
    arc(0, 0, 280, 280, 0, mnAngle);

    //hours arc
    stroke(0, 0, 255);
    arc(0, 0, 260, 260, 0, hrAngle);



drawSprites();
}