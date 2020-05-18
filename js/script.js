const newPlayer = (name, symbol, turn) => {
  const playerName = name;
  const token = symbol;
  const playerTurn = turn;
  return { playerName, token, playerTurn };
};

const gameBoard = () => {
  let board;

  const getBoard = () => {
    return board;
  }

  const init = () => {
    console.log('gameinit');
    board = [null,null,null,null,null,null,null,null,null];
    console.log('board: '+ board);
    for (var i = 0; i < 9; i++) {
      document.getElementById('cell'+i).innerHTML = '';
    };
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

  const blockCells = () => {
    const cells = document.querySelectorAll('.cell');
    [...cells].forEach(cell => { cell.style.pointerEvents = 'none'; });
  }

  return {
    init,
    setCell,
    checkWinCondition,
    checkDrawCondition,
    blockCells,
    getBoard
  };
};

const gameLogic = () => {
  let player1;
  let player2;
  let tileset = [];
  const newGameBoard = gameBoard();

  const init = () => {
    console.log('init gamelogic');
    newGameBoard.init();
    player1 = newPlayer(document.getElementById('player01Name').value, 'X', true);
    player2 = newPlayer(document.getElementById('player02Name').value, 'O', false);
    document.getElementById('info').innerText = `${player1.playerName} 's move`;
    setTile();
  };

  const setTile = () => {
    for (var i = 0; i < 9; i++) {
      tileset[i] = document.getElementById('cell'+i);
      console.log(tileset);
    }
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
      console.log('board: ' + newGameBoard.getBoard());
      document.getElementById('info').innerText = 'Congratulations!'
      document.getElementById('winner-text').innerText = 'Winner!';
    }
    if (thisDraw) {
      newGameBoard.blockCells();
      console.log('board: ' + newGameBoard.getBoard());
      document.getElementById('info').innerText = 'game over';
      document.getElementById('winner-text').innerText = 'Draw!';
    }
  };

  const moveTile = () => {
    function addTableCellEventListener(cell, index) {
      cell.addEventListener('click', () => {
        if (player1.playerTurn) {
          cell.innerHTML = 'X';
        } else {
          cell.innerHTML = 'O';
        }
        newGameBoard.setCell(index, cell.innerHTML);
        turnEnd();
        checkResult();
        cell.style.pointerEvents = 'none';
      });
    }

    for (var i = 0; i < 9; i++) {
      addTableCellEventListener(tileset[i], i);
    };
  };

  return {
    init,
    turnEnd,
    moveTile,
    checkResult,
  };
};


let newGameLogic = gameLogic();

const startGame = () => {
  newGameLogic.init();
  newGameLogic.moveTile();
};

document.getElementById('gameStart').addEventListener('click', () => {
  startGame();
});

document.getElementById('btnReset').addEventListener('click', () => {
  startGame();
});
