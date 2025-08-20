import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue"; // Nuevo componente para la página de inicio
import Equipos from "../components/Equipos.vue"; // El componente de equipos

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/equipos",
    name: "Equipos",
    component: Equipos,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
