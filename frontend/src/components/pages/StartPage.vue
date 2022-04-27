<template>
  <div >
    <b-card class="start-card" bg-variant="light">
      <h1>Game setup</h1>
      <b-form @submit="handleSubmit">
        <b-form-group id="player-inputs">
          <div v-for="(player, index) in players" v-bind:key="index">
            <div class="player-input-row d-flex justify-content-between mb-3">
              <img src="/dealer.png" @click="setDealer({index})" :class="player.dealer ? 'dealer-icon selected' : 'dealer-icon'"/>

              <b-form-input
                class="name-input"
                type="text"
                :placeholder="'Player ' + (index + 1) + ' name'"
                :value="player.name"
                @input="rename({$event, index})"
              ></b-form-input>

              <b-button
                class="circular-button"
                variant="danger"
                @click="removePlayer(index)"
                :disabled="players.length < 2">
              -
              </b-button>
            </div>
          </div>

          <b-button
            variant="success"
            @click="addPlayer"
          >
          Add player
          </b-button>
        </b-form-group>

        <b-form-group id="round-inputs">
          <div class="d-flex justify-content-around">
            <b-button
            class="circular-button"
              variant="outline-secondary"
              :disabled="game.rounds === this.$constants.minRounds"
              @click="updateRounds(game.rounds - 1)"
            >
            -
            </b-button>

            <p>{{ game.rounds }} round{{game.rounds === 1 ? '' : 's'}}</p>

            <b-button
            class="circular-button"
              variant="outline-secondary"
              :disabled="game.rounds === this.$constants.maxRounds"
              @click="updateRounds(game.rounds + 1)"
            >
            +
            </b-button>
          </div>
        </b-form-group>

        <div class="d-grid gap-2">
          <b-button
            block
            type="submit"
            variant="primary"
          >
          Start scoring
          </b-button>
        </div>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  inject:
    ['$constants', '$helpers'],

  computed: {
    ...mapGetters([
      'game',
      'players'
    ]),
  },

  methods: {
    ...mapActions([
      'updateRounds',
      'removePlayer',
      'addPlayer',
      'rename',
      'createNewLeague',
      'createNewGame',
      'setDealer'
    ]),

    handleSubmit() {
      this.createNewLeague(this.players);
      this.$router.push('/scores');
    }
  }

};
</script>
