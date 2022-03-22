import { createStore } from 'vuex'
import game from './game';
import players from './players';

export default createStore({
  modules: {
    game,
    players,
  }
})
