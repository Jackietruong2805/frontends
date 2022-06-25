<template>
  <main>
    <the-search></the-search>
    <the-service></the-service>
    <tour-list></tour-list>
  </main>
  <footer class="footer-bg">
    <div class="container">
      <the-footer></the-footer>
    </div>
    <div class="footer__copyright">
      <p>Copyright © 2019. All Rights Reserved by Luxtour</p>
    </div>
  </footer>
</template>

<script>
import TheSearch from "../components/TheSearch.vue";
import TheService from "../components/TheService.vue";
import TheFooter from "../components/TheFooter.vue";
import TourList from "../components/TourList.vue";
export default {
  components: {
    TheSearch,
    TheService,
    TheFooter,
    TourList,
  },
};
</script>

<style>
.footer-bg {
  background-color: rgb(9, 125, 112);
}
.footer__copyright {
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(128, 128, 128, 0.8);
}
</style>