const state = () => ({
  rounds: 5,
})

const actions = {
  updateRounds({commit}, rounds) {
    if(typeof rounds === "number") {
      commit('SET', rounds);
    } else {
      commit('SET', 0);
    }
  }

  

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
