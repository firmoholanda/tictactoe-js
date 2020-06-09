import gameBoard from '../src/inex';

describe('tests empty board', () => {
  test('it should return an array of empty strings', () => {
    const newBoard = gameBoard().board;
    expect(newBoard).toEqual(['', '', '', '', '', '', '', '', '']);
  });
});