import Dashboard from "@material-ui/icons/Dashboard";
import PowerLine from "views/PowerLine/PowerLine";
import PowerPole from "views/PowerPole/PowerPole";
import RouteCorridor from "views/RouteCorridor/RouteCorridor";

const detailRoutes = [
  {
    path: "/daydien",
    name: "daydien",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: PowerLine,
    layout: "/admin"
  },
  {
    path: "/cotdien",
    name: "cotdien",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: PowerPole,
    layout: "/admin"
  },
  {
    path: "/hanhlangtuyen",
    name: "hanhlangtuyen",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: RouteCorridor,
    layout: "/admin"
  }
];

export default detailRoutes;
