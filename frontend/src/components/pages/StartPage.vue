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
            class="circular-button"
            variant="success"
            @click="addPlayer"
          >
          +
          </b-button>
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

        <b-button class="mt-3" variant="outline-dark" id="show-btn" @click="$bvModal.show('options-modal')">More options</b-button>
        <options-modal></options-modal>

      </b-form>
    </b-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import OptionsModal from '../components/OptionsModal.vue'

export default {
  components: {
    OptionsModal
  },

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
