<template>
  <div class="container">
    <h1>Cambio scorer</h1>
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

export default {
  components: {
    StartPage,
    ScorePage,
  },
}
</script>

<style>
  @import '../src/assets/css/index.css';
</style>
