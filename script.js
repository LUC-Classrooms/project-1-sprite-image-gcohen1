 /*
    Your Name; Gracie Cohen
    Completion date;
    Basic description of the image; A panda (going toward bamboo?)
    Basic description of user interactions to expect; click the mouse for the panda to move
    Citations of any code sources used for reference;
    */


// Global Variables go here
// These variables will define the location of the panda
var x; //horizontal location 
var y = 100
var d = 150 
var bodyColor = 0; //black
 

function setup(){
  // this function will run once
  createCanvas(800, 400); // create a 600x400 pixel drawing canvas
  x = width / 5; // initial location
  y = height / 2; 
    // set x speed:
    xSpeed = random (-4,4); // horizontal speed
}

function draw(){
  // this function runs again and again (60x per second)
  background(0,0,180); // 
  
  fill ("blue"); // blue text
  text ("click the mouse to move panda", 20, 50);  
  
  // add your image drawing code here

/* 
  Use the following if()...else() structure to incorporate mouse click control of your animation
*/
  if(mouseIsPressed){
    cheekColor = (128,0,0); // maroon
  } else {
    cheekColor = 255; // white
  }

  // Make panda

  push(); // create new drawing layer
  translate (x,y); // shift original point
    // shapes are relative to (0,0) 

  //Panda's head
  fill(bodycolor);
  ellipse (0, d, d)

  //Panda's face 



/** 
 * the mousePressed() function is separate from draw(). 
 * It only runs (one time) if the mouse is clicked
*/
function mousePressed(){
  // add code here if you want something to execute once each time the mouse is pressed
}