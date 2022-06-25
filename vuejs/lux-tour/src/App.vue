<template>
  <header class="header">
    <the-header></the-header>
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer></footer>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
export default {
  name: "App",
  components: {
    TheHeader,
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  font-family: Helvetica;
}
.container {
  width: 77%;
  margin: 0 auto;
  padding: 10px 0;
}
.header {
  position: relative;
  z-index: 1;
}
</style>
