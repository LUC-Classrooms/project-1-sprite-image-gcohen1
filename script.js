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
var bodyColor = 255; // white
var angle = 0; // rotation 
var rotationSpeed = 0; 
var ySpeed, xSpeed; // set speed in 2 dimensions 

 

function setup(){
  // this function will run once
  createCanvas(600, 400); // create a 600x400 pixel drawing canvas
  x = width / 5; // initial location
  y = height / 2; 
    // set x and y speed:
    xSpeed = random (-2,2); // horizontal speed
    ySpeed = random(-2, 2); // pick a vertical speed
  }


function draw(){
  // this function runs again and again (60x per second)
  background(0,80,0); // 
  
  fill ("bodyColor"); // black text
  text ("Click the mouse to change the cheek color!", 50, 50);  
  
  // add your image drawing code here

/* 
  Use the following if()...else() structure to incorporate mouse click control of your animation
*/

    if(mouseIsPressed){
      bodyColor = (200) ; // 
    } else {
      bodyColor = 255 ; // white
    }
  
    x = x + xSpeed; // update location each frame
    y += ySpeed; // add the speed factor to the location value
    angle += rotationSpeed; // update angle each frame
 
   //if x is more than the width of the canvas OR less than zero, change horizontal direction
   if(x > width || x < 0){
     xSpeed = xSpeed * -1; // reverse direction by multiplying xSpeed by 0
   }
 
   //if y is more than the height of the canvas OR less than zero, change vertical direction
   if(y > height || y < 0){
     ySpeed = ySpeed * -1; // reverse direction by multiplying xSpeed by 0
   }

  
  // Make panda

  push(); // create new drawing layer
  translate (x,y); // shift original point
    // shapes are relative to (0,0) 

  // Panda's head
  fill(255);
  strokeWeight (3);
  ellipse (50, 10 ,100)

  // Panda's cheeks
  fill (bodyColor); // white cheeks
  strokeWeight (2);
  ellipse (21, 25 , 14); // cheek 2
  ellipse (80, 25 , 14); // cheek 1

  // Panda's nose
  fill (0); // nose is black
  triangle (50, 10 , 60); // black nose

  // Panda's eyes
  fill (0);  
  ellipse (25, 4 , 20); // right eye
  ellipse (76, 4 , 20); // left eye

  // Panda's ears
  fill (0); 
  ellipse (77, -42 , 24); // right ear
  ellipse (24, -42 , 24); // left ear

  // Bamboo
  fill (0, 255, 0); 
  rect (150,60,20); 
  rect (150,40,20); 
  rect (150,20,20); 
  rect (150,0,20); 
  rect (150,-20,20); 
  rect (150,-40,20); 
  rect (150,-60,20);
  rect (150,-80,20); 
  rect (150,-100,20);
  rect (150,-120,20);


/** 
 * the mousePressed() function is separate from draw(). 
 * It only runs (one time) if the mouse is clicked
*/
function mousePressed() {}
  // add code here if you want something to execute once each time the mouse is pressed
}