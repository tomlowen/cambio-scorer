const state = () => (
  {
    players : [
      {
          name: null,
          roundScore: 0,
          gameScore: 0,
          leagueScore: 0,
          dealer: false,
      },
      {
          name: null,
          roundScore: 0,
          gameScore: 0,
          leagueScore: 0,
          dealer: false,
      }
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
      {
          name: null,
          roundScore: 0,
          gameScore: 0,
          leagueScore: 0,
          dealer: false,
      }
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
