// import game logic
import game from './logic/logic';

console.log(game);





const gameBoard = () => {
  let board = newBoard();

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
    board
  };
};

const gameLogic = () => {
  let player1;
  let player2;
  const tileset = [];
  const newGameBoard = gameBoard();
  console.log(newGameBoard.board);

  const setTile = () => {
    for (let i = 0; i < 9; i += 1) {
      tileset[i] = document.getElementById('cell' + i); // eslint-disable-line prefer-template
    }
  };

  const init = () => {
    newGameBoard.init();
    player1 = newPlayer(document.getElementById('player01Name').value, 'X', true);
    player2 = newPlayer(document.getElementById('player02Name').value, 'O', false);
    document.getElementById('info').innerText = `${player1.playerName} 's move`;
    setTile();
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

  const turnEnd = () => {
    [player1.playerTurn, player2.playerTurn] = [player2.playerTurn, player1.playerTurn];

    if (player1.playerTurn) {
      document.getElementById('info').innerText = `${player1.playerName} 's move`;
    } else {
      document.getElementById('info').innerText = `${player2.playerName} 's move`;
    }
  };

  const checkResult = () => {
    const thisWin = checkWinCondition(newGameBoard.board);
    console.log(checkWinCondition(newGameBoard.board));
    console.log(newGameBoard.board.tiles);
    const thisDraw = checkDrawCondition(newGameBoard.board);
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
          newGameBoard.board.tiles[index] = 'X';
        } else {
          cell.innerHTML = 'O';
          newGameBoard.board.tiles[index] = 'O';
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
