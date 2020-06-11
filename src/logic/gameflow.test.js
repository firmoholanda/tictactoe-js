const game = require('./logic');

const newGame = game();

test('player1 should not win', () => {
  newGame.moveTile(0, newGame.board, newGame.player1);
  newGame.moveTile(1, newGame.board, newGame.player2);
  newGame.moveTile(3, newGame.board, newGame.player1);
  newGame.moveTile(2, newGame.board, newGame.player2);
  expect(newGame.checkWinCondition(newGame.board)).toEqual(false);
});

test('player 1 should win', () => {
  newGame.moveTile(0, newGame.board, newGame.player1);
  newGame.moveTile(1, newGame.board, newGame.player2);
  newGame.moveTile(3, newGame.board, newGame.player1);
  newGame.moveTile(2, newGame.board, newGame.player2);
  newGame.moveTile(6, newGame.board, newGame.player1);
  expect(newGame.checkWinCondition(newGame.board)).toEqual(true);
});

test('player turn should change', () => {
  expect(newGame.player1.playerTurn).toBe(true);
  expect(newGame.player2.playerTurn).toBe(false);
});
