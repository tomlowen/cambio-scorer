<template>
  <div class="container">
    <h1>Cambio scorer</h1>
    <score-page></score-page>
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
