import { createRouter, createWebHistory } from "vue-router";
import CountryGridPage from "@/pages/CountryGrid";
import NotFoundPage from "@/pages/NotFound";
import CountryInfo from "@/pages/CountryInfo";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "CountryGridPage",
      component: CountryGridPage,
    },
    {
      path: "/country/:country",
      name: "CountryInfoPage",
      props: true,
      component: CountryInfo,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFoundPage",
      component: NotFoundPage,
    },
  ],
});

export default router;
