const rollDie = () => Math.floor(Math.random() * 6 + 1)

const playOnce = () => {
  const die1 = rollDie()
  const die2 = rollDie()
  const sum = die1 + die2
  let result = ''
  if (sum === 7 || sum === 11) result = 'win'
  else if (sum === 2 || sum === 3 || sum === 12) result = 'lose'
  else result = 'roll again'
  return { dice1: die1, dice2: die2, sum: sum, result: result }
}

function diceGameSimulation(numSimulations) {
  let resultArr = []
  for (let i = 0; i < numSimulations; i++) {
    resultArr.push(playOnce())
  }
  return resultArr
}

module.exports = diceGameSimulation
