// import game logic
import game from './logic/logic';

console.log(game)

const gameBoard = () => {
  let board;

  const blockCells = () => {
    const cells = document.querySelectorAll('.cell');
    [...cells].forEach(cell => { cell.style.pointerEvents = 'none'; });
  };

  const unblockCells = () => {
    const cells = document.querySelectorAll('.cell');
    [...cells].forEach(cell => { cell.style.pointerEvents = 'auto'; });
  };

  const init = () => {
    for (let i = 0; i < 9; i += 1) {
      document.getElementById('cell' + i).innerHTML = ''; // eslint-disable-line prefer-template
    }
    document.getElementById('winner-text').innerHTML = '';
    unblockCells();
  };

  const setCell = (index, symbol) => {
    board[index] = symbol;
  };

  return {
    init,
    setCell,
    blockCells,
    unblockCells,
  };
};

const gameLogic = () => {
  let player1;
  let player2;
  const tileset = [];
  const newGameBoard = gameBoard();

  const setTile = () => {
    for (let i = 0; i < 9; i += 1) {
      tileset[i] = document.getElementById('cell' + i); // eslint-disable-line prefer-template
    }
  };

  const init = () => {
    newGameBoard.init();
    player1 = game.newPlayer(document.getElementById('player01Name').value, 'X', true);
    player2 = game.newPlayer(document.getElementById('player02Name').value, 'O', false);
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
      document.getElementById('info').innerText = 'Congratulations!';
      document.getElementById('winner-text').innerText = 'Winner!';
      document.getElementById('btnReset').style.display = 'inline';
    }
    if (thisDraw) {
      newGameBoard.blockCells();
      document.getElementById('info').innerText = 'game over';
      document.getElementById('winner-text').innerText = 'Draw!';
      document.getElementById('btnReset').style.display = 'inline';
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

    for (let i = 0; i < 9; i += 1) {
      addTableCellEventListener(tileset[i], i);
    }
  };

  return {
    init,
    turnEnd,
    moveTile,
    checkResult,
  };
};


const newGameLogic = gameLogic();

const startGame = () => {
  newGameLogic.init();
  newGameLogic.moveTile();
  document.getElementById('btnNewGame').style.display = 'none';
};

document.getElementById('gameStart').addEventListener('click', () => {
  startGame();
});

document.getElementById('btnReset').addEventListener('click', () => {
  window.location.reload();
});
