<template>
<div class="accordion" role="tablist">
    <b-card no-body class="mb-1" v-for="league in leagues" :key="league.id" @click="toggleAccordian(league.id)">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button v-if="league.id === Math.max(...this.leagueIds) && !league.completed_at" block v-b-toggle.accordion-1 variant="success" class="w-100">
          Current season
        </b-button>
        <b-button v-else block v-b-toggle.accordion-1 variant="dark" class="w-100">
          Last season
        </b-button>
      </b-card-header>
      <b-collapse :id="'accordian' + league.id" :visible="openAccordian === league.id" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <table>
            <tr>
              <th class="column name-col">Name</th>
              <th class="column total-score-col">Score</th>
            </tr>
            <tr v-for="score in league.scores" :key="score.player_name">
              <td class="column name-col">{{score.player_name}}</td>
              <td class="column total-score-col">{{score.score}}</td>
            </tr>
          </table>
        </b-card-body>
      </b-collapse>

      <b-button v-if="is_game_completed" block variant="light" class="w-100 mt-5" @click="startNewGame">
        Play another game
      </b-button>
    </b-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {

  computed: {
    ...mapGetters(["rounds", "players", 'leagues', 'is_game_completed']),

    leagueIds() {
      return this.leagues.map((l)=> l.id)
    }
  },

  data() {
    return {
      openAccordian: 0,
    }
  },

  mounted() {
      this.openAccordian = Math.max(...this.leagueIds)
  },

  methods: {
    ...mapActions(["startNewGame"]),

    toggleAccordian(id) {
      this.openAccordian = id;
    }
  }
};
</script>
