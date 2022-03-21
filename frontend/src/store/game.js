export const state = () => ({
  rounds: 5,
})

export const actions = {
  update({commit}, rounds) {
    commit('SET', rounds)
  }
}

export const mutations = {
  SET(state, rounds) {
    state.rounds = rounds;
  }
}

export const getters = {
  rounds: (state) => {
    return state.rounds;
  }
}
