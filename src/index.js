// import game logic
import Player from './controller/player';
import Board from './controller/board';

let player01, player02;
const tileset = [];
const newGameBoard = new Board;

// add event listiner to buttons
document.getElementById('gameStart').addEventListener('click', () => {
  startGame();
});

document.getElementById('btnReset').addEventListener('click', () => {
  window.location.reload();
});


const blockCells = () => {
  const cells = document.querySelectorAll('.cell');
  [...cells].forEach(cell => { cell.style.pointerEvents = 'none'; })
}

const unblockCells = () => {
  const cells = document.querySelectorAll('.cell');
  [...cells].forEach(cell => { cell.style.pointerEvents = 'auto'; })
}

const initializeBoad = () => {
  for (let i = 0; i < 9; i += 1) {
    document.getElementById('cell' + i).innerHTML = '';
  }
  document.getElementById('winner-text').innerHTML = '';
  unblockCells();
}

const setCell = (index, symbol) => {
  board[index] = symbol;
}

const setTile = () => {
  for (let i = 0; i < 9; i += 1) {
    tileset[i] = document.getElementById('cell' + i)
  }
}


const turnEnd = () => {
  [player01.turn, player02.turn] = [player02.turn, player01.turn];

  if (player01.turn) {
    document.getElementById('info').innerText = `${player01.name} 's move`;
  } else {
    document.getElementById('info').innerText = `${player02.name} 's move`;
  }
};

const checkResult = () => {
  const thisWin = checkWinCondition(newGameBoard.board);
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
      if (player01.turn) {
        cell.innerHTML = 'X';
        newGameBoard.tiles[index] = 'X';
      } else {
        cell.innerHTML = 'O';
        newGameBoard.tiles[index] = 'O';
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

const startGame = () => {

  let player01 = new Player(document.getElementById('player01Name').value, 'X', true);
  let player02 = new Player(document.getElementById('player02Name').value, 'O', false);

  document.getElementById('info').innerText = `${player01.name} 's move`;
  setTile();

  moveTile();
  document.getElementById('btnNewGame').style.display = 'none';
};
