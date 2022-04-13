import constants from '../util/constants';
import getParticpantString from '../util/helpers';
import axios from 'axios';

const state = () => ({
  leagues: [
    {
      id:3,
      game_type:"cambio",
      participants:"andytom",
      is_complete:false,
      created_at: '2022-04-05T08:30:00.000000Z',
      updated_at: '2022-04-05T08:30:00.000000Z',
      completed_at: '',
      scores:[
        {
          "name": "tom",
          "score": 3
        },
        {
          "name": "andy",
          "score": 5
        }
      ]
    },
    {
      id:1,
      game_type:"cambio",
      participants:"andytom",
      is_complete:false,
      created_at: '2022-04-05T08:30:00.000000Z',
      updated_at: '2022-04-05T08:30:00.000000Z',
      completed_at: '2022-04-05T08:30:00.000000Z',
      scores:[
        {
          "name": "tom",
          "score": 4
        },
        {
          "name": "andy",
          "score": 3
        }
      ]
    },
  ],
})

const actions = {
  async createNewLeague(context, players) {
    console.log(players);
    console.log(getParticpantString);
    return
    const participantString = getParticpantString(players);
    console.log(participantString);
    await axios
      .post('https://cambio-scorer-backend.herokuapp.com/api/v1/leagues', {
        params: {
          participants: participantString
        }
      })
      .then(response => console.log(response))

    context.commit('SET', rounds);
  },

  initiateGame() {
  },

}

const mutations = {
  SET(state, leagues) {
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
