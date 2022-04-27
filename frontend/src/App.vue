<template>
  <div class="container">
    <div class="header">
      <img class="logo" src="/cambio-card-game.png" />
      <button :hidden="!is_game_completed" @click="handleClick">Start new game</button>
    </div>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import StartPage from './components/pages/StartPage.vue';
import ScorePage from './components/pages/ScorePage.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    StartPage,
    ScorePage,
  },

  computed: {
    ...mapGetters(["game"]),
  },

  methods: {
      ...mapActions(["createNewGame"]),

      handleClick() {
        this.createNewGame();
        this.$router.push('/scores');
      }
  }
}
</script>
