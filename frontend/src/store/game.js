const state = () => ({
  game: {
    id: 1,
    league_id: 1,
    game_type: 'cambio',
    rounds: 5,
    current_round: 2,
    is_50_reached: false,
    is_complete: false,
    created_at: '2022-04-13T15:25:26.000000Z',
    updated_at: '2022-04-13T15:30:48.000000Z',
    scores: [
        {
            id: 2,
            player_name: 'tom',
            score: 13,
            scoreable_type: 'game',
            scoreable_id: 1,
            created_at: '2022-04-13T15:26:22.000000Z',
            updated_at: '2022-04-13T15:30:48.000000Z'
        },
        {
            id: 4,
            player_name: 'andy',
            score: 15,
            scoreable_type: 'game',
            scoreable_id: 1,
            created_at: '2022-04-13T15:26:22.000000Z',
            updated_at: '2022-04-13T15:30:48.000000Z'
        }
    ]
},
})

const actions = {

  updateGame({commit}, game) {
      commit('SET', game);
  },

  initiateGame() {
  },

}

const mutations = {
  SET(state, game) {
    state.game = game;
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
