export default class PlayerModel {
  name = null;
  roundScore = 0;
  gameScore = 0;
  dealer = false;

  constructor(name = null, gameScore = 0, dealer = false) {
    this.name = name;
    this.gameScore = gameScore;
    this.dealer = dealer;
  }
}
