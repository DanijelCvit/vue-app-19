<template>
  <div id="app">
    <counter></counter>
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
export default {
  name: "app",
  data() {
    return {};
  },

  components: {
    Counter
  }
};
</script>
