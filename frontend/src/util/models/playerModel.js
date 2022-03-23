export default class PlayerModel {
  name = null;
  roundScore = 0;
  gameScore = 0;
  leagueScore = 0;
  dealer = false;

  constructor(name = null) {
    this.name = name;
  }
}
