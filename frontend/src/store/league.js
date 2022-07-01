import $helpers from '../util/helpers';
import axios from 'axios';

const state = () => ({
  leagues: [
    {
      id:0,
      participants: '',
      created_at: '',
      updated_at: '',
      completed_at: '',
      scores:[]
    }
  ],
})

const actions = {
  async createNewLeague(context, players) {
    const participantString = $helpers.getParticpantString(players);
    const scores = context.getters.players.map((p) => {
      return {
        'name': p.name,
        'gameScore': p.gameScore,
      }
    });


    await axios({
      method: 'post',
      url: 'https://cambio-scorer-backend.herokuapp.com/api/v1/leagues',
      data: {
        participants: participantString,
        scores: scores,
      }
      })
      .then((response) => context.commit('SET_LEAGUES', response.data))
      .then(()=> context.dispatch('createNewGame', null, { root: true }))
  },

  async updateLeague(context, league) {
    context.commit('SET_LEAGUES', league)
  },
}

const mutations = {
  SET_LEAGUES(state, leagues) {
    state.leagues = leagues;
  }
}

const getters = {
  leagues: (state) => {
    return state.leagues;
  }
}

export default {
  state,
  actions,
  mutations,
  getters,
}
