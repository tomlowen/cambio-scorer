<template>

</template>

<script>
import { mapGetters } from "vuex";


export default {
  components: {
    
  },
  computed: {
    ...mapGetters(["rounds", "players"]),
  },
};
</script>
