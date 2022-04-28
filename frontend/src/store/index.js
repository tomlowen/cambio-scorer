import Vuex from 'vuex'
import game from './game';
import league from './league';
import players from './players';
import options from './options';

export default new Vuex.Store({
  modules: {
    game,
    league,
    players,
    options
  }
})
