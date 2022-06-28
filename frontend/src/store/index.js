import Vuex from 'vuex'
import game from './game';
import league from './league';
import players from './players';
import options from './options';

export default new Vuex.Store({
  state: () => ({
    tabIndex: 0
  }),

  getters: {
    tabIndex: (state) => {
      return state.tabIndex;
    }
  },

  actions: {
    changeTab({commit}, tabIndex) {
      commit('SET_TAB', tabIndex);
    }
  },

  mutations: {
    SET_TAB(state, tabIndex) {
      state.tabIndex = tabIndex;
    }
  },

  modules: {
    game,
    league,
    players,
    options
  }
})
