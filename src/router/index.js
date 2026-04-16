import { createRouter, createWebHistory } from "vue-router";
import Login from "@/components/Authentication/login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: Login,
    },
    {
      path: "/forgot-password",
      name: "ForgotPassword",
      component: () => import("@/components/Authentication/forgotPassword.vue"),
    },
    {
      path: "/home",
      name: "Layout",
      redirect: "/clients-summary",
      component: () => import("@/views/layout.vue"),
      children: [
        {
          path: "/clients-summary",
          name: "clients",
          component: () => import("@/components/Clients/ClientSummary/clientsView.vue"),
        },
        {
          path: "/client-details",
          name: "clientdetails",
          component: () => import("@/components/Clients/ClientSummary/SpecificClient.vue"),
        },
      ],
    },
  ],
});

export default router;
