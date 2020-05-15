const newPlayer = (name, symbol, turn) => {
  const playerName = name;
  const token = symbol;
  const playerTurn = turn;
  return { playerName, token, playerTurn };
};

const gameBoard = () => {
  let board;

  const init = () => {
    board = [null, null, null, null, null, null, null, null, null];
    document.getElementById('cell0').innerHTML = '';
    document.getElementById('cell1').innerHTML = '';
    document.getElementById('cell2').innerHTML = '';
    document.getElementById('cell3').innerHTML = '';
    document.getElementById('cell4').innerHTML = '';
    document.getElementById('cell5').innerHTML = '';
    document.getElementById('cell6').innerHTML = '';
    document.getElementById('cell7').innerHTML = '';
    document.getElementById('cell8').innerHTML = '';
    document.getElementById('winner-text').innerHTML = '';
  };

  const setCell = (index, symbol) => {
    board[index] = symbol;
  };

  const checkWinCondition = () => {
    let isWin = false;
    if (board[0] != null && board[0] === board[1] && board[1] === board[2]) isWin = true;
    if (board[3] != null && board[3] === board[4] && board[4] === board[5]) isWin = true;
    if (board[6] != null && board[6] === board[7] && board[7] === board[8]) isWin = true;
    if (board[0] != null && board[0] === board[3] && board[3] === board[6]) isWin = true;
    if (board[1] != null && board[1] === board[4] && board[4] === board[7]) isWin = true;
    if (board[2] != null && board[2] === board[5] && board[5] === board[8]) isWin = true;
    if (board[0] != null && board[0] === board[4] && board[4] === board[8]) isWin = true;
    if (board[6] != null && board[6] === board[4] && board[4] === board[2]) isWin = true;

    return isWin;
  };

  const checkDrawCondition = () => {
    let isDraw = true;
    if (board.includes(null)) isDraw = false;

    return isDraw;
  };

  function blockCells() {
    const cells = document.querySelectorAll('.cell');
    [...cells].forEach(cell => cell.style.pointerEvents = 'none');
  }

  return {
    init,
    setCell,
    checkWinCondition,
    checkDrawCondition,
    blockCells,
  };
};

const gameLogic = () => {
  let player1;
  let player2;
  let c0, c1, c2, c3, c4, c5, c6, c7, c8;
  const newGameBoard = gameBoard();

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
  };

  const init = () => {
    newGameBoard.init();
    player1 = newPlayer(document.getElementById('player01Name').value, 'X', true);
    player2 = newPlayer(document.getElementById('player02Name').value, 'O', false);
    document.getElementById('info').innerText = `${player1.playerName} 's move`;
    setTile();
  };

  const turnEnd = () => {
    [player1.playerTurn, player2.playerTurn] = [player2.playerTurn, player1.playerTurn];

    if (player1.playerTurn) {
      document.getElementById('info').innerText = `${player1.playerName} 's move`;
    } else {
      document.getElementById('info').innerText = `${player2.playerName} 's move`;
    }
  };

  const checkResult = () => {
    const thisWin = newGameBoard.checkWinCondition();
    const thisDraw = newGameBoard.checkDrawCondition();
    if (thisWin) {
      newGameBoard.blockCells();
      document.getElementById('winner-text').innerText = 'Winner!';
    }
    if (thisDraw) {
      newGameBoard.blockCells();
      document.getElementById('info').innerText = 'game over';
      document.getElementById('winner-text').innerText = 'Draw!';
    }
  };

  const moveTile = () => {
    function addTableCellEventListener(cell, index) {
      cell.addEventListener('click', () => {
        player1.playerTurn ? cell.innerHTML = 'X' : cell.innerHTML = 'O';
        newGameBoard.setCell(index, cell.innerHTML);
        turnEnd();
        checkResult();
        cell.style.pointerEvents = 'none';
      });
    }

    addTableCellEventListener(c0, 0);
    addTableCellEventListener(c1, 1);
    addTableCellEventListener(c2, 2);
    addTableCellEventListener(c3, 3);
    addTableCellEventListener(c4, 4);
    addTableCellEventListener(c5, 5);
    addTableCellEventListener(c6, 6);
    addTableCellEventListener(c7, 7);
    addTableCellEventListener(c8, 8);
  };

  return {
    init,
    turnEnd,
    moveTile,
    checkResult,
  };
};

const startGame = () => {
  const newGameLogic = gameLogic();
  newGameLogic.init();
  newGameLogic.moveTile();
};

document.getElementById('gameStart').addEventListener('click', () => {
  startGame();
});
