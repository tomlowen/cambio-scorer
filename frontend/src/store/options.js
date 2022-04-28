const state = () => ({
    rounds: 5,
    isFiftyRulePlayed: true,
    leaguePoints: [
      1,0
    ],
})

const actions = {
  updateRounds({commit}, rounds) {
    commit('ROUNDS', rounds);
  },
  updateLeaguePoints({commit}, pointsArray) {
    commit('LEAGUE_POINTS', pointsArray);
  },
  toggleFiftyRule({commit}) {
    commit('TOGGLE_FIFTY_RULE');
  }
};

const mutations = {
  ROUNDS(state, rounds) {
    state.rounds = rounds;
  },
  LEAGUE_POINTS(state, pointsArray) {
    state.leaguePoints = pointsArray;
  },
  TOGGLE_FIFTY_RULE(state) {
    state.isFiftyRulePlayed = !state.isFiftyRulePlayed;
  }
}

const getters = {
  options: (state) => {
    return state;
  },

  leaguePoints: (state) => {
    return state.leaguePoints;
  },

  rounds: (state) => {
    return state.rounds;
  },

  isFiftyRulePlayed: (state) => {
    return state.isFiftyRulePlayed;
  }
}

export default {
  state,
  actions,
  mutations,
  getters,
}
