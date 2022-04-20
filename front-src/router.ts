import { Router } from "@vaadin/router";

const root = document.querySelector(".root");
const router = new Router(root);

router.setRoutes([
  { path: "/", component: "home-page" },
  { path: "/two-page", component: "two-page" },
]);
