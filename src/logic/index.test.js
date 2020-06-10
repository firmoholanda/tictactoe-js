const game = require('./index');

const newGame = game();

test('player name should be tom', () => {
  expect(newGame.player1.playerName).toEqual('tom');
});

test('player name should be robert', () => {
  expect(newGame.player2.playerName).toEqual('robert');
});

test('board should have a null array', () => {
  expect(newGame.board.tiles).toEqual([null, null, null, null, null, null, null, null, null]);
});

test('Draw condition should be false', () => {
  expect(newGame.checkDrawCondition(newGame.board)).toEqual(false);
});

test('board should have first tile changed to X', () => {
  newGame.moveTile(0, newGame.board, newGame.player1);
  expect(newGame.board.tiles).toEqual(['X', null, null, null, null, null, null, null, null]);
});

test('Win condition should be false', () => {
  newGame.moveTile(0, newGame.board, newGame.player1);
  expect(newGame.checkWinCondition(newGame.board)).toEqual(false);
});

test('Win condition should be true for condition 1', () => {
  newGame.moveTile(0, newGame.board, newGame.player1);
  newGame.moveTile(1, newGame.board, newGame.player1);
  newGame.moveTile(2, newGame.board, newGame.player1);
  expect(newGame.checkWinCondition(newGame.board)).toEqual(true);
});

test('Win condition should be true for condition 2', () => {
  newGame.moveTile(3, newGame.board, newGame.player1);
  newGame.moveTile(4, newGame.board, newGame.player1);
  newGame.moveTile(5, newGame.board, newGame.player1);
  expect(newGame.checkWinCondition(newGame.board)).toEqual(true);
});

test('Win condition should be true for condition 3', () => {
  newGame.moveTile(6, newGame.board, newGame.player1);
  newGame.moveTile(7, newGame.board, newGame.player1);
  newGame.moveTile(8, newGame.board, newGame.player1);
  expect(newGame.checkWinCondition(newGame.board)).toEqual(true);
});

test('Win condition should be true for condition 4', () => {
  newGame.moveTile(0, newGame.board, newGame.player1);
  newGame.moveTile(3, newGame.board, newGame.player1);
  newGame.moveTile(6, newGame.board, newGame.player1);
  expect(newGame.checkWinCondition(newGame.board)).toEqual(true);
});

test('Draw condition should be true', () => {
  expect(newGame.checkDrawCondition(newGame.board)).toEqual(true);
});
