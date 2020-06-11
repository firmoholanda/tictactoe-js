class Board {
  constructor(tiles = [null, null, null, null, null, null, null, null, null]) {
    this.tiles = tiles;
  }

/*
  checkWinCondition {
    let isWin = false;
    if (board.tiles[0] != null && board.tiles[0] === board.tiles[1] && board.tiles[1] === board.tiles[2]) isWin = true;
    if (board.tiles[3] != null && board.tiles[3] === board.tiles[4] && board.tiles[4] === board.tiles[5]) isWin = true;
    if (board.tiles[6] != null && board.tiles[6] === board.tiles[7] && board.tiles[7] === board.tiles[8]) isWin = true;
    if (board.tiles[0] != null && board.tiles[0] === board.tiles[3] && board.tiles[3] === board.tiles[6]) isWin = true;
    if (board.tiles[1] != null && board.tiles[1] === board.tiles[4] && board.tiles[4] === board.tiles[7]) isWin = true;
    if (board.tiles[2] != null && board.tiles[2] === board.tiles[5] && board.tiles[5] === board.tiles[8]) isWin = true;
    if (board.tiles[0] != null && board.tiles[0] === board.tiles[4] && board.tiles[4] === board.tiles[8]) isWin = true;
    if (board.tiles[6] != null && board.tiles[6] === board.tiles[4] && board.tiles[4] === board.tiles[2]) isWin = true;
    return isWin;
  };
  
  const checkDrawCondition = board => {
    let isDraw = true;
    if (board.tiles.includes(null)) {
      isDraw = false;
    }
    return isDraw;
  };
   */
}

export default Board;