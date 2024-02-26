 /*
    Your Name; Gracie Cohen
    Completion date;
    Basic description of the image; A panda (going toward bamboo?)
    Basic description of user interactions to expect; click the mouse for the panda to move
    Citations of any code sources used for reference;
    */


// Global Variables go here
// These variables will define the location of the panda
translate(x, y); // x and y are declared and initialized properly
var x; //horizontal location 
var y = 100
var d = 150 
var bodyColor = 255; //black
 

function setup(){
  // this function will run once
  createCanvas(600, 400); // create a 600x400 pixel drawing canvas
  x = width / 5; // initial location
  y = height / 2; 
    // set x speed:
    xSpeed = random (-4,4); // horizontal speed
}

function draw(){
  // this function runs again and again (60x per second)
  background(0,0,180); // 
  
  fill ("bodyColor"); // black text
  text ("Click the mouse to move panda!", 50, 50);  
  
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

  // Panda's head
  fill(255);
  ellipse (0, d, d)

  // Panda's cheeks
  fill (255); // white cheeks
  ellipse (); // cheek 2
  ellipse (); // cheek 1

  // Panda's nose
  fill (bodyColor); // nose is black
  triangle (); // white nose

  // Panda's eyes
  fill (bodyColor); 
  ellipse (); // right eye
  ellipse (); // left eye

  // Panda's ears
  fill (bodyColor)
  arc (); // right ear
  arc (); // left ear

  
/** 
 * the mousePressed() function is separate from draw(). 
 * It only runs (one time) if the mouse is clicked
*/
function mousePressed() {}
  // add code here if you want something to execute once each time the mouse is pressed
}