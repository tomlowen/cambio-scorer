<template>
<b-card class="score-card" bg-variant="light">
    <b-tabs content-class="mt-3" fill v-model="tabIndex">
      <b-tab title="Scores" active>
        <scores-table></scores-table>
      </b-tab>
      <b-tab title="Leagues"><league-table></league-table></b-tab>
      <b-tab title="Rules"><rules></rules></b-tab>
    </b-tabs>
</b-card>
</template>

<script>
import LeagueTable from '../components/LeagueTable.vue';
import ScoresTable from '../components/ScoresTable.vue';
import Rules from '../components/Rules.vue';

export default {
  components: {
    ScoresTable,
    LeagueTable,
    Rules
  },

  computed: {
    tabIndex: {
        get () {
          return this.$store.state.tabIndex
        },
        set (value) {
          this.$store.commit('SET_TAB', value)
        }
      }
  }
};
</script>
