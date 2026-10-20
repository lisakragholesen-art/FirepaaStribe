let cell = 0;
let board = [0, 0, 0, 0, 0, 0, 0];
let player = -1;

for (let i = 0; i < 6; i++) {
  board.push([0, 0, 0, 0, 0, 0]);
}

function setup() {
  //virker det
  createCanvas(700, 600);
}

function draw() {
  background(220);
  //Spillepladen
  line(width / 7, 0, width / 7, height);
  line((width * 2) / 7, 0, (width * 2) / 7, height);
  line((width * 3) / 7, 0, (width * 3) / 7, height);
  line((width * 4) / 7, 0, (width * 4) / 7, height);
  line((width * 5) / 7, 0, (width * 5) / 7, height);
  line((width * 6) / 7, 0, (width * 6) / 7, height);

  line(0, height / 6, width, height / 6);
  line(0, (height * 2) / 6, width, (height * 2) / 6);
  line(0, (height * 3) / 6, width, (height * 3) / 6);
  line(0, (height * 4) / 6, width, (height * 4) / 6);
  line(0, (height * 5) / 6, width, (height * 5) / 6);
}

function mouseClicked() {
  for (let i = 0; i < 7; i++) {
    if (mouseX > 0 + (width / 7) * i && mouseX < width / 7 + (width / 7) * i) {
      console.log(i);
      board[i][0] = 1;
      console.log(board);
    }
  }
}
