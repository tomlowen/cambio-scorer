import Vuex from 'vuex'
import game from './game';
import players from './players';

export default new Vuex.Store({
  modules: {
    game,
    players,
  }
})
