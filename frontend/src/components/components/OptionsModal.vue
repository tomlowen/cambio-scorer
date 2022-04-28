<template>
  <b-modal id="options-modal" hide-footer>
        <b-form-group id="round-inputs">
          <div class="d-flex justify-content-around">
            <b-button
            class="circular-button"
              variant="outline-secondary"
              :disabled="rounds === this.$constants.minRounds"
              @click="updateRounds(rounds - 1)"
            >
            -
            </b-button>

            <p>{{ rounds }} round{{rounds === 1 ? '' : 's'}}</p>

            <b-button
            class="circular-button"
              variant="outline-secondary"
              :disabled="rounds === this.$constants.maxRounds"
              @click="updateRounds(rounds + 1)"
            >
            +
            </b-button>
          </div>
        </b-form-group>

        <div>
          <b-form-checkbox
            id="fifty-checkbox"
            v-model="isFiftyRulePlayed"
            name="fifty-checkbox"
          >
            Enable first to 50 rule
          </b-form-checkbox>

          <div>State: <strong>{{ isFiftyRulePlayed }}</strong></div>
        </div>

        <div>
          <p>League points</p>
          <table>
            <tr v-for="(points, index) in leaguePoints" v-bind:key="index">
              <td>{{this.$helpers.stringifyNumber(index + 1)}}</td>
              <td>{{points}}</td>
            </tr>
          </table>
        </div>

    <b-button class="mt-3" block @click="$bvModal.hide('options-modal')">Close Me</b-button>
  </b-modal>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {

  inject:
    ['$constants', '$helpers'],

  computed: {
    ...mapGetters([
      'rounds',
      'isFiftyRulePlayed',
      'leaguePoints',
    ]),
  },

  methods: {
    ...mapActions([
      'updateRounds',
      'updateLeaguePoints'
    ]),
  }
};
</script>
