const newPlayer = (name, symbol, turn) => {
  const playerName = name;
  const token = symbol;
  const playerTurn = turn;
  return {
    playerName,
    token,
    playerTurn
  };
};