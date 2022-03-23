const state = () => ({
  rounds: 5,
})

const actions = {

  updateRounds({commit}, rounds) {
      commit('SET', rounds);
  },

  initiateGame() {
  },

}

const mutations = {
  SET(state, rounds) {
    state.rounds = rounds;
  }
}

const getters = {
  rounds: (state) => {
    return state.rounds;
  }
}

export default {
  state,
  actions,
  mutations,
  getters,
}
