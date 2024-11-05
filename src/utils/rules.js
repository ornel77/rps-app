export const rules = (player, houseChoice) => {
  const rules = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  let winner;
  if (player === houseChoice) {
    winner = "draw";
  } else if (rules[player] === houseChoice) {
    winner = "win";
  } else {
    winner = "lost";
  }

  return winner;
};

export const getHouseChoice = () => {
  const getIndex = () => Math.floor(Math.random() * 3);
  const theHouse = ["rock", "paper", "scissors"];
  const houseChoice = theHouse[getIndex()];

  return houseChoice
};
