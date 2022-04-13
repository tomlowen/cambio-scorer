<template>
      <b-tabs content-class="mt-3">
      <b-tab title="Scores" active>

      </b-tab>
      <b-tab title="Leagues"><league-table></league-table></b-tab>
      <b-tab title="Rules"><rules></rules></b-tab>
    </b-tabs>
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
};
</script>
