import PlayerModel from '../util/models/playerModel'
import axios from 'axios';

const state = () => (
  {
    players : [
      new PlayerModel(null, 0, true),
      new PlayerModel,
    ]
  }
)

const actions = {
  removePlayer({commit, getters}, playerIndex) {
    if(getters.players[playerIndex].dealer) {
      if(playerIndex === 0) {
        commit('SET_DEALER', {index: 1});
      } else {
        commit('SET_DEALER', {index: 0});
      }
    }
    commit('REMOVE_PLAYER', playerIndex);
  },
  addPlayer({commit}) {
    commit('ADD_PLAYER');
  },
  rename({commit}, payload) {
    commit('RENAME', payload);
  },
  setDealer({commit}, payload) {
    commit('SET_DEALER', payload);
  },
  async updatePlayerScores(context) {
    const dealer = context.getters.players.indexOf(context.getters.players.find(p=>p.dealer));
    const scores = context.getters.players.map((p) => {
      return {
        'name': p.name,
        'score': p.roundScore,
      }
    });

    await axios({
      method: 'post',
      url: 'https://cambio-scorer-backend.herokuapp.com/api/v1/rounds/?game_id=' + context.getters.game.id,
      data: {
        scores: scores,
      }
    })
    .then(async function (response) {
      context.commit('SET_GAME_SCORE', response.data.scores);
      context.dispatch('updateGame', response.data);
      if(response.data.completed_at) {
        context.dispatch('finishGame');
        }
      })
    .then(function () {
      if(dealer === context.getters.players.length -1) {
        context.commit('SET_DEALER', {index: 0});
      } else {
        context.commit('SET_DEALER', {index: dealer + 1});
      }
    })
  },

  updateRoundScore({commit}, payload) {
    commit('SET_ROUND_SCORE', payload)
  },

  resetScores({commit}) {
    commit('RESET_SCORES')
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

  SET_DEALER(state, payload) {
    let players = state.players;
    const dealer = players.find(p=>p.dealer);
    if(dealer) {
      dealer.dealer = false
    }
    players[payload.index].dealer = true;
    state.players = players;
  },

  SET_ROUND_SCORE(state, payload) {
    state.players = [
      ...state.players.slice(0, payload.index),
      {...state.players[payload.index], roundScore: Number(payload.score)},
      ...state.players.slice(payload.index + 1, state.players.length)
    ];
  },

  SET_GAME_SCORE(state, payload) {
    let players = [];
    payload.forEach(function (player) {
      const { player_name, score } = player;
      players.push(new PlayerModel(player_name, score))
    })
    state.players = players;
  },

  RESET_SCORES(state) {
    state.players.forEach(function (player) {
      player.gameScore = 0;
    })
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
