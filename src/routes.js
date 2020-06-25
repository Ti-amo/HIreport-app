
import Dashboard from "@material-ui/icons/Dashboard";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import History from "@material-ui/icons/History";
import Star from "@material-ui/icons/Star";
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";


const dashboardRoutes = [
  {
    path: "/home",
    name: "Trang chủ",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/object",
    name: "Quản lý dữ liệu",
    rtlName: "ملف تعريفي للمستخدم",
    icon: LibraryBooks,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/myreports",
    name: "Báo cáo của tôi",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/recentlyreports",
    name: "Báo cáo gần đây",
    rtlName: "طباعة",
    icon: History,
    component: Typography,
    layout: "/admin"
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "الرموز",
  //   icon: BubbleChart,
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   rtlName: "خرائط",
  //   icon: LocationOn,
  //   component: Maps,
  //   layout: "/admin"
  // },
  {
    path: "/importantreports",
    name: "Báo cáo quan trọng",
    rtlName: "إخطارات",
    icon: Star,
    component: NotificationsPage,
    layout: "/admin"
  }
  // {
  //   path: "/rtl-page",
  //   name: "RTL Support",
  //   rtlName: "پشتیبانی از راست به چپ",
  //   icon: Language,
  //   component: RTLPage,
  //   layout: "/rtl"
  // },
  // {
  //   path: "/upgrade-to-pro",
  //   name: "Upgrade To PRO",
  //   rtlName: "التطور للاحترافية",
  //   icon: Unarchive,
  //   component: UpgradeToPro,
  //   layout: "/admin"
  // }
];

export default dashboardRoutes;
