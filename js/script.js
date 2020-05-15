const newPlayer = (name, symbol, turn) => {
  const playerName = name;
  const token = symbol;
  let playerTurn = turn
  return {playerName, token, playerTurn}
}

const gameBoard = () => {
  let board; //document.getElementByClassName('game-board')

  const init = () => {
    board = [null,null,null,null,null,null,null,null,null]; // having doubts here - board = ['','','','','','','','',''];
  }

  const setCell = (index, symbol) => {
    board[index] = symbol;
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
      (isWin) ? console.log("isiwn true") : console.log("iswin false");
    return isWin;
  }

  const checkDrawCondition = () => {
    let isDraw = true;
    if (board.includes(null)) isDraw = false;
    (isDraw) ? console.log("isdraw true") : console.log("isdrawFalse");
    return isDraw;
  }

  return {init, setCell, checkWinCondition, checkDrawCondition}
}

const gameLogic = () => {
  let player1;
  let player2;
  let newGameBoard = gameBoard();

  const init = () => {
    newGameBoard.init(); //sets baord to null
    player1 = newPlayer(document.getElementById('player01Name').value, 'X', true);
    player2 = newPlayer(document.getElementById('player02Name').value, 'O', false);
  }

  const turnEnd = () => {
    [player1.playerTurn, player2.playerTurn] = [player2.playerTurn, player1.playerTurn];
    console.log('player1 ' + player1.playerTurn);
    console.log('player2 ' + player2.playerTurn);
  }

  const setTile = () => {
    c0 = document.getElementById('cell0');
    c1 = document.getElementById('cell1');
    c2 = document.getElementById('cell2');
    c3 = document.getElementById('cell3');
    c4 = document.getElementById('cell4');
    c5 = document.getElementById('cell5');
    c6 = document.getElementById('cell6');
    c7 = document.getElementById('cell7');
    c8 = document.getElementById('cell8');
  }

  const moveTile = () => {
    setTile();

    c0.addEventListener('click', () => {
      console.log(player1.playerTurn);
      player1.playerTurn ? c0.innerHTML = 'X' : c0.innerHTML ='O';
      newGameBoard.setCell(0, c0.innerHTML);
      turnEnd();
      checkResult();
    });

    c1.addEventListener('click', () => {
      console.log(player1.playerTurn);
      player1.playerTurn ? c1.innerHTML = 'X' : c1.innerHTML ='O';
      newGameBoard.setCell(1, c1.innerHTML);
      turnEnd();
      checkResult();
    });

    c2.addEventListener('click', () => {
      console.log(player1.playerTurn);
      player1.playerTurn ? c2.innerHTML = 'X' : c2.innerHTML ='O';
      newGameBoard.setCell(2, c2.innerHTML);
      turnEnd();
      checkResult();
    });
    c3.addEventListener('click', () => {
      console.log(player1.playerTurn);
      player1.playerTurn ? c3.innerHTML = 'X' : c3.innerHTML ='O';
      newGameBoard.setCell(3, c3.innerHTML);
      turnEnd();
      checkResult();
    });
    c4.addEventListener('click', () => {
      console.log(player1.playerTurn);
      player1.playerTurn ? c4.innerHTML = 'X' : c4.innerHTML ='O';
      newGameBoard.setCell(4, c4.innerHTML);
      turnEnd();
      checkResult();
    });
    c5.addEventListener('click', () => {
      console.log(player1.playerTurn);
      player1.playerTurn ? c5.innerHTML = 'X' : c5.innerHTML ='O';
      newGameBoard.setCell(5, c5.innerHTML);
      turnEnd();
      checkResult();
    });
    c6.addEventListener('click', () => {
      console.log(player1.playerTurn);
      player1.playerTurn ? c6.innerHTML = 'X' : c6.innerHTML ='O';
      newGameBoard.setCell(6, c6.innerHTML);
      turnEnd();
      checkResult();
    });
    c7.addEventListener('click', () => {
      console.log(player1.playerTurn);
      player1.playerTurn ? c7.innerHTML = 'X' : c7.innerHTML ='O';
      newGameBoard.setCell(7, c7.innerHTML);
      turnEnd();
      checkResult();
    });
    c8.addEventListener('click', () => {
      console.log(player1.playerTurn);
      player1.playerTurn ? c8.innerHTML = 'X' : c8.innerHTML ='O';
      newGameBoard.setCell(8, c8.innerHTML);
      turnEnd();
      checkResult();
    });
  }

  const checkResult = () => {
    let thisWin = newGameBoard.checkWinCondition();
    let thisDraw = newGameBoard.checkDrawCondition();
    if (thisWin) {
      document.getElementById('winner-text').innerText = 'Congratulations';
    }
    if (thisDraw){
      document.getElementById('winner-text').innerText = 'Draw!';
    }
    return status;
  }

  return {init, turnEnd, moveTile, checkResult}
}

const testing = () => {
  let newGameLogic = gameLogic();
      newGameLogic.init();
      newGameLogic.moveTile();
}

testing();
