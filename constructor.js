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
