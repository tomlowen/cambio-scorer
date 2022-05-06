<template>
  <div class="w-100">
    <h1 class="py-3">Round {{game.current_round}}</h1>
    <div v-for="player in players" :key="player.name">
      <b-card class="mb-3">
          <div class="player-score-card">
            <div class="column dealer-col">
              <img src="/dealer.png" v-if="player.dealer" class="dealer-icon selected">
            </div>
            <div class="column name-col">{{player.name}}</div>
            <div class="column total-score-col">{{player.gameScore}}</div>
          </div>
      </b-card>
      </div>
    <b-button class="w-100 py-2 my-3" block v-if="game.current_round < game.rounds" id="show-btn" @click="$bvModal.show('round-input-modal')">Add Round {{game.current_round}} scores</b-button>
    <b-button class="w-100 py-2 my-3" block v-else @click="submitRoundScore">Finish the game</b-button>
    <round-input-modal></round-input-modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import RoundInputModal from '../components/RoundInputModal.vue'

export default {
  components: {
    RoundInputModal
  },

  computed: {
    ...mapGetters(["game", 'players']),
  },

  methods: {
    ...mapActions([
      'updateRoundScore',
      'updatePlayerScores',
    ]),

    submitRoundScore() {
      this.updatePlayerScores();
    }
  },
  };
</script>
