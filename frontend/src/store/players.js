import PlayerModel from '../util/models/playerModel'

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
      {...state.players[payload.index], name: payload.$event.target.value},
      ...state.players.slice(payload.index + 1, state.players.length)
    ];
  }
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
