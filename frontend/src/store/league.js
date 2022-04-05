import getParticpantString from '../util/helpers';
const axios = require('axios');

const state = () => ({
  rounds: 5,
})

const actions = {

  async createNewLeague({commit}, players) {
    const participantString = getParticpantString(players);
    await axios
      .post('https://cambio-scorer-backend.herokuapp.com/api/v1/leagues', {
        params: {
          participants: participantString
        }
      })
      .then(response => console.log(response))

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
