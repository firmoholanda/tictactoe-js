const newPlayer = (name, symbol) => {
  const pName = name;
  const token = symbol;
  return {pName, token}
}

// const winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]];

const gameBoard = () => {
  let board; //document.getElementByClassName('game-board')

  const init = () => {
    board = [null,null,null,null,null,null,null,null,null]; // having doubts here - board = ['','','','','','','','',''];
  }

  const setCell = (index, player) => {
    board[index] = player;
  }

  const getCell = (index, player) => {
    return board[index]
  }

  const checkWinCondition = () => {
    let isWin = false;
      // const winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]];
      if (board[0] != null && board[0] == board[1] && board[1] == board[2]) isWin = true;
      if (board[3] != null && board[3] == board[4] && board[4] == board[5]) isWin = true;
      if (board[6] != null && board[6] == board[7] && board[7] == board[8]) isWin = true;
      if (board[0] != null && board[0] == board[3] && board[3] == board[6]) isWin = true;
      if (board[1] != null && board[1] == board[4] && board[4] == board[7]) isWin = true;
      if (board[2] != null && board[2] == board[5] && board[5] == board[8]) isWin = true;
      if (board[0] != null && board[0] == board[4] && board[4] == board[8]) isWin = true;
      if (board[6] != null && board[6] == board[4] && board[4] == board[2]) isWin = true;
    return isWin;
  }

  const checkDrawCondition = () => {
    let isDraw = true;
    if (board.includes(null)) isDraw = false;
    return isDraw;
  }

  //still missing functions
  return {init, setCell, getCell, checkWinCondition, checkDrawCondition } //return something
}

const gameLogic = () => {

  const getPlayerTurn = () => {
    //gets whos turn is it
  }

  const changePlayerTurn = () => {
    //changes player turn
  }


  return {} //return something due to arrow function
}
