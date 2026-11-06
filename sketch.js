let board = [];
let player = 1;
let winCheck;
let gameOver = false;
let message = "";

for (let i = 0; i < 7; i++) {
  board.push([0, 0, 0, 0, 0, 0]);
}

function setup() {
  //virker det=
  createCanvas(700, 600);

  winCheck = new WinCheck(board);
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

  if (!gameOver) {
    const winner = winCheck.checkWin(board);
    if (winner !== 0) {
      gameOver = true;
      message = (winner == 1 ? "Red" : "Yellow") + " wins!";
    } else if (winCheck.checkDraw(board)) {
      gameOver = true;
      message = "Draw!";
    }
  }

  if (gameOver) {
    fill(0);
    textSize(48);
    textAlign(CENTER, CENTER);
    text(message, width / 2, height / 2);
  }
}

function mouseClicked() {
  if (gameOver) return;

  for (let i = 0; i < 7; i++) {
    if (mouseX > 0 + (width / 7) * i && mouseX < width / 7 + (width / 7) * i) {
      console.log(i);
      if (board[i][0] == 0) {
        console.log("hej");
        for (let j = 0; j < 6; j++) {
          if (board[i][j] != 0) {
            board[i][j - 1] = player;
            break;
          } else if (j == 5) {
            board[i][j] = player;
          }
        }
        player = player * -1;
      }
      console.log(board);
    }
  }
  class WinCheck {
    constructor(board) {
      this.board = board;
      this.rows = this.board.length;
      this.cols = this.board[0].length;
    }

    checkWin(board) {
      this.board = board;
      // 7x6
      //check horizontal
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          const current = this.board[i][j];

          if (current == 0) continue;

          if (
            j + 3 < this.cols &&
            this.board[i][j + 1] == current &&
            this.board[i][j + 2] == current &&
            this.board[i][j + 3] == current
          ) {
            return current;
          }
          //check vertical
          if (
            i + 3 < this.rows &&
            this.board[i + 1][j] == current &&
            this.board[i + 2][j] == current &&
            this.board[i + 3][j] == current
          ) {
            return current;
          }
          // Check diagonal down-right
          if (
            i + 3 < this.rows &&
            j + 3 < this.cols &&
            this.board[i + 1][j + 1] === current &&
            this.board[i + 2][j + 2] === current &&
            this.board[i + 3][j + 3] === current
          ) {
            return current;
          }

          // Check diagonal down-left
          if (
            i + 3 < this.rows &&
            j - 3 >= 0 &&
            this.board[i + 1][j - 1] === current &&
            this.board[i + 2][j - 2] === current &&
            this.board[i + 3][j - 3] === current
          ) {
            return current;
          }
        }
      }
      return 0;
    }

    checkDraw(board) {
      this.board = board;
      //check horizontal
      for (let i = 0; i < this.rows; i++) {
        //check vertical
        for (let j = 0; j < this.cols; j++) {
          if (this.board[i][j] == 0) {
            return false;
          }
        }
      }
      return true;
    }
  }
}
