const state = () => ({
  game: {
    id: 1,
    league_id: 1,
    rounds: 5,
    current_round: 2,
    is_50_reached: false,
    is_complete: false,
    created_at: '2022-04-13T15:25:26.000000Z',
    updated_at: '2022-04-13T15:30:48.000000Z',
},
})

const actions = {

  updateGame({commit}, game) {
      commit('SET', game);
  },

  updateRounds({commit}, rounds) {
    commit('ROUNDS', rounds);
  },

  initiateGame() {
  },


}

const mutations = {
  SET(state, game) {
    state.game = game;
  },
  ROUNDS(state, rounds) {
    state.game.rounds = rounds;
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
