function setup() {
  //virker det
  createCanvas(400, 400);
}

function draw() {
  background(220);
  line(width/3,0,width/3, height);
  line(width*2/3,0,width*2/3, height);
  line(0,height/3,width, height/3);
  line(0,height*2/3,width, height*2/3);
}
