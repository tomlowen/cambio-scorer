import PlayerModel from '../util/models/playerModel'
import axios from 'axios';

const state = () => (
  {
    players : [
      new PlayerModel,
      new PlayerModel,
    ]
  }
)

const actions = {
  removePlayer({commit}, playerIndex) {
    commit('REMOVE_PLAYER', playerIndex);
  },
  addPlayer({commit}) {
    commit('ADD_PLAYER');
  },
  rename({commit}, payload) {
    commit('RENAME', payload);
  },
  async updatePlayerScores(context) {
    console.log(context.getters.players);
    const scores = context.getters.players.map((p) => {
      return {
        'name': p.name,
        'score': p.roundScore,
      }
    });

    await axios
      .post('http://localhost:8000/api/v1/rounds', {}, {
        params: {
          game_id: context.getters.game.id,
        },
        data: {
          scores: scores
        },
      })
      .then(response => context.commit('SET_GAME_SCORE', response.data.scores))
  },

  updateRoundScore({commit}, payload) {
    commit('SET_ROUND_SCORE', payload)
  }
}

const mutations = {

  ADD_PLAYER(state) {
    state.players = [...state.players,
      new PlayerModel,
    ];
  },

  REMOVE_PLAYER(state, playerIndex) {
    state.players = [
      ...state.players.slice(0, playerIndex),
      ...state.players.slice(playerIndex + 1, state.players.length)
    ];
  },

  RENAME(state, payload) {
    state.players = [
      ...state.players.slice(0, payload.index),
      {...state.players[payload.index], name: payload.$event},
      ...state.players.slice(payload.index + 1, state.players.length)
    ];
  },

  SET_ROUND_SCORE(state, payload) {
    state.players = [
      ...state.players.slice(0, payload.index),
      {...state.players[payload.index], roundScore: payload.$event.target.value},
      ...state.players.slice(payload.index + 1, state.players.length)
    ];
  },

  // SET_GAME_SCORE(state, payload) {
  //   state.players = [
  //     ...state.players.slice(0, payload.index),
  //     {...state.players[payload.index], gameScore: payload.$event.target.value},
  //     ...state.players.slice(payload.index + 1, state.players.length)
  //   ];
  // }
}

const getters = {
  players: (state) => {
    return state.players;
  }
}

export default {
  state,
  actions,
  mutations,
  getters,
}
