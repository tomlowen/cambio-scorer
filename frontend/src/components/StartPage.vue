<template>
  <div>
    <div :v-for="player in players">
      <label>Player {{playerNumber}} name</label>
      <input type="text">
    </div>
    <div>
      <button>{{rounds}}</button>
      <input>
      <button>+</button>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  computed: {
    ...mapGetters(['rounds'])
  }
};
</script>
