var expect = require('chai').expect;

describe('GAME INSTANCE FUNCTIONS', function () {
  describe('checkGameStatus', function () {
    var checkGameStatus = require('../game_logic/game_instance.js').checkGameStatus;
    it('should tell me when the game is over', function () {
      var players = [
        {
					ships: [
						{
							locations: [[0, 0]],
							damage: [[0, 0]]
						}
					]
        }
      ];
      var actual = checkGameStatus(players);
      expect(actual).to.be.false;
    });
  });

  describe('takeTurn', function () {
    let takeTurn = require('../game_logic/game_instance').takeTurn;
    let guess, player;

    beforeEach(function () {
      guess = function () { return [0, 0]; };
      player = {
        ships: [
          {
            locations: [[0, 0]],
            damageShip: []
          }
        ]
      }
    })

    it('should return false if the game ends', function () {
      let actual = takeTurn(player, guess);
      expect(actual).to.be.false;
    })
  })
});