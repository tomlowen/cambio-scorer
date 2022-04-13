import Vuex from 'vuex'
import game from './game';
import league from './league';
import players from './players';

import constants from '../util/constants';
import helpers from '../util/helpers';
import axios from 'axios';

export default new Vuex.Store({
  modules: {
    game,
    league,
    players,
  }
})
