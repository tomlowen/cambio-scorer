<template>
  <div>
    <h3>Current round: {{game.current_round}}</h3>
    <table>
      <tr>
        <th>Player</th>
        <th>Round score</th>
        <th>Total score</th>
      </tr>
      <tr v-for="player in players" :key="player.name">
        <th>{{player.name}}</th>
        <th><input :value="player.gameScore" /></th>
        <th>{{player.gameScore}}</th>
      </tr>
    </table>
    <b-button v-if="game.current_round < game.rounds" @click="moveToNextRound">Move to next round</b-button>
    <b-button v-else @click="finishGame">Finish the game</b-button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";


export default {
  data() {
    return {
      
    }
  },

  computed: {
    ...mapGetters(["game", 'players']),
  },

  methods: {
    moveToNextRound() {

    },

    finishGame() {

    }
  }
};
</script>
