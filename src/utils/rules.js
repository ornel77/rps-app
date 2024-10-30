export const rules = (player, houseChoice) => {
  const rules = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  let winner;
  if (player === houseChoice) {
    winner = null;
  } else if (rules[player] === houseChoice) {
    winner = true;
  } else {
    winner = false;
  }

  return winner;
};

export const getHouseChoice = () => {
  const getIndex = () => Math.floor(Math.random() * 3);
  const theHouse = ["rock", "paper", "scissors"];
  const houseChoice = theHouse[getIndex()];

  return houseChoice
};
