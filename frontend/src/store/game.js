import axios from 'axios';

const state = () => ({
  game: {
    id: 0,
    league_id: 0,
    rounds: 5,
    current_round: 1,
    is_50_reached: false,
    completed_at: '',
    created_at: '',
    updated_at: '',
},
})

const actions = {
  updateGame({commit}, game) {
      commit('SET_GAME', game);
  },

  incrementGameRounds({commit}) {
    commit('INCREMENT_ROUND');
  },

  async finishGame({commit, dispatch, getters}) {
    dispatch('changeTab', 1);
    const scores = getters.players.map((p) => {
      return {
        'name': p.name,
        'gameScore': p.gameScore,
      }
    });

    await axios({
      method: 'put',
      url: 'http://localhost:8000/api/v1/leagues/' + getters.leagues[0].id,
      data: {
        scores: scores,
      }
      })
      .then((response) => {
        commit('SET_LEAGUE', response.data.data)
      })
  },

  async createNewGame({commit, getters}) {
    await axios
      .post('http://localhost:8000/api/v1/games', {}, {
        params: {
          rounds: getters.options.rounds,
          league_id: getters.leagues[0].id
        }
      })
      .then((response) => {
        commit('SET_GAME', response.data.data)
      }
      )},
};

const mutations = {
  SET_GAME(state, game) {
    state.game = game;
  },

  INCREMENT_ROUND(state) {
    state.game.current_round++;
  }
}

const getters = {
  game: (state) => {
    return state.game;
  },
  is_game_completed: (state) => {
    return state.game.completed_at ? 1 : 0;
  }
}

export default {
  state,
  actions,
  mutations,
  getters,
}
