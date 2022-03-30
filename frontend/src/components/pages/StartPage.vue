<template>
  <div>
    <div v-for="(player, index) in players" v-bind:key="index">
      <label>Player {{index + 1}} name</label>

      <input type="text" :value="player.name" @change="rename({$event, index})">

      <button @click="removePlayer(index)">Remove player</button>
    </div>

    <button @click="addPlayer">Add player</button>

    <div>
      <button
        :disabled="rounds === this.$constants.minRounds"
        @click="updateRounds(rounds - 1)"
      >
      -
      </button>

      <p>{{ rounds }}</p>

      <button
        :disabled="rounds === this.$constants.maxRounds"
        @click="updateRounds(rounds + 1)"
      >
      +
      </button>
    </div>

    <div>
      <button>Start scoring</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  components: { ScoresTable },
  inject:
    ['$constants'],

  computed: {
    ...mapGetters([
      'rounds',
      'players'
    ]),
  },

  methods: {
    ...mapActions([
      'updateRounds',
      'removePlayer',
      'addPlayer',
      'rename',
    ])
  }

};
</script>
