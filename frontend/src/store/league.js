import getParticpantString from '../util/helpers';
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
    const participantString = getParticpantString(players);
    await axios
      .post('http://localhost:8000/api/v1/leagues', {}, {
        params: {
          participants: participantString
        }
      })
      .then((response) => context.commit('SET_LEAGUES', response.data))
      .then(()=> context.dispatch('createNewGame', null, { root: true }))
  },

  async updateLeague(context, league) {
    await axios
    .put('http://localhost:8000/api/v1/leagues' + league.id, {}, {
      data: {
        league: league
      }
    })
    .then((response) => context.commit('SET_LEAGUES', response.data))
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
