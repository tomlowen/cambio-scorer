const state = () => ({
  game: {
    id: 1,
    league_id: 1,
    rounds: 5,
    current_round: 1,
    is_50_reached: false,
    is_complete: false,
    created_at: '2022-04-13T15:25:26.000000Z',
    updated_at: '2022-04-13T15:30:48.000000Z',
},
})

const actions = {

  updateGame({commit}, game) {
      commit('SET_GAME', game);
  },

  updateRounds({commit}, rounds) {
    commit('ROUNDS', rounds);
  },

  incrementGameRounds({commit, state}) {
    console.log(state.game.current_round);
    commit('INCREMENT_ROUND');
  },


}

const mutations = {
  SET_GAME(state, game) {
    state.game = game;
  },
  ROUNDS(state, rounds) {
    state.game.rounds = rounds;
  },
  INCREMENT_ROUND(state) {
    state.game.current_round++;
  }
}

const getters = {
  game: (state) => {
    return state.game;
  }
}

export default {
  state,
  actions,
  mutations,
  getters,
}
