let fire = require('./ship_method.js').fire;

function checkGameStatus(players) {
  return false;
}

function takeTurn (opposingPlayer, guessFunction) {
  let coordinates = guessFunction();
  fire(opposingPlayer, coordinates)
  let gameOver = checkGameStatus();

  return gameOver
}

module.exports.checkGameStatus = checkGameStatus;
module.exports.takeTurn = takeTurn;