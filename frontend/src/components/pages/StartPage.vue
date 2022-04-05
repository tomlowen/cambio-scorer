<template>
  <div>
    <b-card bg-variant="light">
      <b-form @submit="handleSubmit">
        <b-form-group id="player-inputs">
          <div v-for="(player, index) in players" v-bind:key="index">
            <div class="d-flex justify-content-between mb-3">
              <b-form-input
                class="pr-3"
                type="text"
                :placeholder="'Player ' + (index + 1) + ' name'"
                :value="player.name"
                @change="rename({$event, index})"
              ></b-form-input>

              <b-button
                variant="danger"
                @click="removePlayer(index)">
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
              variant="outline-secondary"
              :disabled="rounds === this.$constants.minRounds"
              @click="updateRounds(rounds - 1)"
            >
            -
            </b-button>

            <p>{{ rounds }} round{{rounds === 1 ? '' : 's'}}</p>

            <b-button
              variant="outline-secondary"
              :disabled="rounds === this.$constants.maxRounds"
              @click="updateRounds(rounds + 1)"
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
            @click="handleSubmit"
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
      'createNewLeague'
    ]),

    handleSubmit() {
      console.log('start game');
      this.createNewLeague(this.players);
      //move to new page
      //get game
    }
  }

};
</script>
