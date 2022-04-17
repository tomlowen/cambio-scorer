import axios from 'axios';

const state = () => ({
  game: {
    id: 0,
    league_id: 0,
    rounds: 5,
    current_round: 1,
    is_50_reached: false,
    is_complete: false,
    created_at: '',
    updated_at: '',
},
})

const actions = {
  updateGame({commit}, game) {
      commit('SET_GAME', game);
  },

  updateRounds({commit}, rounds) {
    commit('ROUNDS', rounds);
  },

  incrementGameRounds({commit}) {
    commit('INCREMENT_ROUND');
  },

  async createNewGame({commit, getters}) {
    await axios
      .post('http://localhost:8000/api/v1/games', {}, {
        params: {
          rounds: getters.game.rounds,
          league_id: getters.leagues[0].id
        }
      })
      .then((response) => {
        console.log(response.data.data)
        commit('SET_GAME', response.data.data)
      }
      )},
};

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
