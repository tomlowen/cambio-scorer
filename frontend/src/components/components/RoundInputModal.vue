<template>
  <b-modal id="round-input-modal" hide-footer>
    <h1 class="py-3">Round {{game.current_round}} scores</h1>

    <table class="w-100">
      <tr>
        <th class="column name-col"></th>
        <th class="column round-score-col"></th>
      </tr>
      <tr v-for="(player, index) in players" :key="player.name">
        <th class="column name-col">{{player.name}}</th>
        <th class="column round-score-col">
          <b-button
            class="circular-button"
              variant="outline-secondary"
              @click="updateRoundScore({score: player.roundScore - 1, index: index})"
            >
            -
            </b-button>

            <input type="number" class="score-input" :value="player.roundScore" @input="updateRoundScore({score: $event.target.value, index: index})"/>

            <b-button
            class="circular-button"
              variant="outline-secondary"
              @click="updateRoundScore({score: player.roundScore + 1, index: index})"
            >
            +
            </b-button>
        </th>
      </tr>
    </table>
    <div class="modal-buttons">
      <b-button class="mt-3" block @click="$bvModal.hide('round-input-modal')" variant="danger">Cancel</b-button>
      <b-button class="mt-3" block v-if="game.current_round < game.rounds" @click="submitRoundScore" variant="success">Save scores</b-button>
      <b-button class="mt-3" block v-else @click="submitRoundScore" variant="success">Finish the game</b-button>
    </div>
  </b-modal>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'players',
      'rounds',
      'game',
    ]),
  },

  methods: {
    ...mapActions([
      'updateRoundScore',
      'updatePlayerScores',
    ]),

    submitRoundScore() {
      this.updatePlayerScores();
      this.$bvModal.hide('round-input-modal');
    }
  },

};
</script>
