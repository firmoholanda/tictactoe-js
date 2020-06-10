const game = () => {
  const newPlayer = (name, symbol, turn) => {
    const playerName = name;
    const token = symbol;
    const playerTurn = turn;
    return {
      playerName,
      token,
      playerTurn
    };
  };

  const newBoard = () => {
    const tiles = [null, null, null, null, null, null, null, null, null];
    return {
      tiles
    }
  };

  const player1 = newPlayer('tom', 'X', true);
  const player2 = newPlayer('robert', 'O', false);
  const board = newBoard();

  const moveTile = (index, board, player) => {
    board.tiles[index] = player.token;
    return {
      board
    };
  };

  const checkWinCondition = board => {
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

  return {
    player1,
    player2,
    board,
    moveTile,
    checkWinCondition,
    checkDrawCondition
  };
};

module.exports = game;
