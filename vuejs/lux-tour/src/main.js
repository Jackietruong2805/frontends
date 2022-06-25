import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import HomePage from "./pages/HomePage.vue";
import SapaFourdays from "./pages/SapaFourdays.vue";
import SapaHaiphong from "./pages/SapaHaiphong.vue";
import SapaHaNoi from "./pages/SapaHanoi.vue";
import SapaTphcm from "./pages/SapaTphcm.vue";
const app = createApp(App);
const routes = [
  { path: "/", component: HomePage },
  { path: "/sapa4day", component: SapaFourdays },
  { path: "/sapahaiphong", component: SapaHaiphong },
  { path: "/sapahainoi", component: SapaHaNoi },
  { path: "/sapatphcm", component: SapaTphcm },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

app.use(router);
app.mount("#app");
