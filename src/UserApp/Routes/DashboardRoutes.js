import Home from "../Pages/Home/Home.js";
import Page2 from "../Pages/Page2/Page2.js";
import Fazendas from "../Pages/Fazendas/Fazendas.js";

var DashboardRoutes = [
  {
    path: "/home",
    name: "Home",
    icon: "business_bank",
    component: Home
  },
  {
    path: "/fazendas",
    name: "Fazendas",
    icon: "design_app",
    component: Fazendas
  },
  {
    path: "/page2",
    name: "Page2",
    icon: "design_app",
    component: Page2
  },
  { redirect: true, path: "/", pathTo: "/home", name: "Home" }
];
export default DashboardRoutes;
