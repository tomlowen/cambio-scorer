<template>
  <div>
    <h1>Round {{game.current_round}}</h1>
    <table>
      <tr>
        <th class="column dealer-col"></th>
        <th class="column name-col"></th>
        <th class="column round-score-col">Round score</th>
        <th class="column total-score-col">Total score</th>
      </tr>
      <tr v-for="(player, index) in players" :key="player.name">
        <th class="column dealer-col">
          <img src="/dealer.png" v-if="player.dealer" class="dealer-icon selected">
        </th>
        <th class="column name-col">{{player.name}}</th>
        <th class="column round-score-col"><input class="score-input" :value="player.roundScore" @input="updateRoundScore({$event, index})"/></th>
        <th class="column total-score-col">{{player.gameScore}}</th>
      </tr>
    </table>
    <b-button v-if="game.current_round < game.rounds" @click="submitRoundScore">Move to next round</b-button>
    <b-button v-else @click="submitRoundScore">Finish the game</b-button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {

  computed: {
    ...mapGetters(["game", 'players']),
  },

  methods: {
    ...mapActions([
      'updateRoundScore',
      'updatePlayerScores',
      'incrementGameRounds'
    ]),

    submitRoundScore() {
      this.updatePlayerScores();
    }
  },
  };
</script>
