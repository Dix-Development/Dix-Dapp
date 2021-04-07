import Mouth from "views/Mouth.js";
import Icons from "views/Icons.js";
import AboutDix from "views/AboutDix.js";

var routes = [
  {
    path: "/AboutDix",
    name: "About Dix",
    icon: "tim-icons icon-money-coins",
    component: AboutDix,
    layout: "/dix",
  },
  {
    path: "/mouth",
    name: "Mouth",
    icon: "tim-icons icon-wallet-43",
    component: Mouth,
    layout: "/dix",
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "tim-icons icon-atom",
  //   component: Icons,
  //   layout: "/dix",
  // },
];
export default routes;
