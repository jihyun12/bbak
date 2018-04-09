function drawSnowman(x,y, size){
strokeWeight(6);
stroke(0);
fill(255);
//body//
ellipse(x,y-50,size,size);
ellipse(x,y,size+20,size+20);
//eyes//
point(x-10,y-52);
point(x+10,y-52);
//mouse//
strokeWeight(3);
noFill();
arc(x,y-150,x-310,y-90,radians(87),radians(93));
//muffler//
fill(227,114,114);
noStroke();
rect(x-25,y-39,49,15,5);
 triangle(x+20,y-35,x+36,y-30,x+33,y-36);
//button//
stroke(0);
strokeWeight(4);
point(x,y-18);
point(x,y-5);
point(x,y+8);
}



function setup() {
  
  createCanvas(600,400);
  background(100);
  drawSnowman(520,300,50);

}