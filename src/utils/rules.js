export const rules = (player, houseChoice) => {
  const rules = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };
//   let scorePlayer = 0;
//   let scoreHouse = 0;
  let winner = false
 

//   if (rules[player] === houseChoice)
//     return `me ${rules[player]} / the house ${houseChoice} DRAW`;

  if (rules[houseChoice] === player) {
    winner === true

  } else {
    winner === false
 
  }

  return winner
};

export const getHouseChoice = () => {
  const getIndex = () => Math.floor(Math.random() * 3);
  const theHouse = ["rock", "paper", "scissors"];
  const houseChoice = theHouse[getIndex()];

  return houseChoice
};
