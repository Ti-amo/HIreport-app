import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
import Star from "@material-ui/icons/Star";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
import PowerLine from "views/PowerLine/PowerLine";
import PowerPole from "views/PowerPole/PowerPole";
import RouteCorridor from "views/RouteCorridor/RouteCorridor";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";

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
