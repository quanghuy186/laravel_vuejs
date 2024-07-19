import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/backend/Login.vue";
import Dashboard from "@/views/backend/Dashboard.vue";
import Slider from "@/views/backend/Slider.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/admin",
      name: "login",
      component: LoginView,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/slider",
      name: "slider",
      component: Slider,
    },
  ],
});

export default router;
