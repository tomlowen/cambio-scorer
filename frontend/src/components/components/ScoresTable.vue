<template>
  <div>
    <h1>Round {{game.current_round}}</h1>
    <table>
      <tr>
        <th class="column dealer-col"></th>
        <th class="column name-col"></th>
        <th class="column total-score-col">Total score</th>
      </tr>
      <tr v-for="player in players" :key="player.name">
        <th class="column dealer-col">
          <img src="/dealer.png" v-if="player.dealer" class="dealer-icon selected">
        </th>
        <th class="column name-col">{{player.name}}</th>
        <th class="column total-score-col">{{player.gameScore}}</th>
      </tr>
    </table>
    <b-button v-if="game.current_round < game.rounds" id="show-btn" @click="$bvModal.show('round-input-modal')">Add Round {{game.current_round}} scores</b-button>
    <b-button v-else @click="submitRoundScore">Finish the game</b-button>
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
