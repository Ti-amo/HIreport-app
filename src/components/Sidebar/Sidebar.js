/*eslint-disable*/
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import Divider from '@material-ui/core/Divider'
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import LinearScaleIcon from '@material-ui/icons/LinearScale';
import PolymerIcon from '@material-ui/icons/Polymer';
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit';
import ControlPoint from '@material-ui/icons/ControlPoint'
import DonutLarge from '@material-ui/icons/DonutLarge'

// core components
import AdminNavbarLinks from "components/Navbars/AdminNavbarLinks.js";
import RTLNavbarLinks from "components/Navbars/RTLNavbarLinks.js";

import styles from "assets/jss/material-dashboard-react/components/sidebarStyle.js";

const useStyles = makeStyles(styles);
export default function Sidebar(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName) {
    return window.location.href.indexOf(routeName) > -1 ? true : false;
  }
  const { color, logo, image, logoText, routes } = props;
  var links = (
    <List className={classes.list}>
      {routes.map((prop, key) => {
        {/* console.log("PROPS", prop) */ }
        var activePro = " ";
        var listItemClasses;
        if (prop.path === "/upgrade-to-pro") {
          activePro = classes.activePro + " ";
          listItemClasses = classNames({
            [" " + classes[color]]: true
          });
        } else {
          listItemClasses = classNames({
            [" " + classes[color]]: activeRoute(prop.layout + prop.path)
          });
        }
        const whiteFontClasses = classNames({
          [" " + classes.whiteFont]: activeRoute(prop.layout + prop.path)
        });

        return (
          <NavLink
            to={prop.layout + prop.path}
            className={activePro + classes.item}
            activeClassName="active"
            key={key}
          >

            <ListItem
              button className={classes.itemLink + listItemClasses}
            // onClick={prop.path === "/myreports" ? (handleClick) : null} 
            >
              {typeof prop.icon === "string" ? (
                <Icon
                  className={classNames(classes.itemIcon, whiteFontClasses, {
                    [classes.itemIconRTL]: props.rtlActive
                  })}
                >
                  {prop.icon}
                </Icon>
              ) : (
                  <prop.icon
                    className={classNames(classes.itemIcon, whiteFontClasses, {
                      [classes.itemIconRTL]: props.rtlActive
                    })}
                  />
                )}

              <ListItemText
                primary={props.rtlActive ? prop.rtlName : prop.name}
                className={classNames(classes.itemText, whiteFontClasses, {
                  [classes.itemTextRTL]: props.rtlActive
                })}
                disableTypography={true}
              />
              {prop.path === "/myreports" ? (open ? <ExpandLess onClick={handleClick} /> : <ExpandMore onClick={handleClick} />)
                : null}
            </ListItem>
            {prop.path === "/myreports" ? (
              <Collapse in={open} timeout="auto" unmountOnExit>
                <Divider />

                <List component="div" disablePadding>
                  <NavLink
                    to={prop.layout + prop.path + "/daydien"}
                    className={activePro + classes.item}
                    activeClassName="active"
                    key={key}
                  >
                    <ListItem button className={classes.nested}>
                      <Icon
                        className={classNames(classes.itemIcon, whiteFontClasses, {
                          [classes.itemIconRTL]: props.rtlActive
                        })}
                      >
                        <LinearScaleIcon />
                      </Icon>
                      <ListItemText
                        primary="Báo cáo về đường dây điện"
                        className={classes.nestedText}
                        disableTypography={true}
                      />
                    </ListItem>
                  </NavLink>
                  <NavLink
                    to={prop.layout + prop.path + "/cotdien"}
                    className={activePro + classes.item}
                    activeClassName="active"
                    key={key}
                  >
                    <ListItem button className={classes.nested}>
                      <Icon
                        className={classNames(classes.itemIcon, whiteFontClasses, {
                          [classes.itemIconRTL]: props.rtlActive
                        })}
                      >
                        <VerticalSplitIcon />
                      </Icon>
                      <ListItemText
                        primary="Báo cáo về cột điện"
                        className={classes.nestedText}
                        disableTypography={true}
                      />
                    </ListItem>
                  </NavLink>

                  <NavLink
                    to={prop.layout + prop.path + "/hanhlangtuyen"}
                    className={activePro + classes.item}
                    activeClassName="active"
                    key={key}
                  >
                    <ListItem button className={classes.nested}>
                      <Icon
                        className={classNames(classes.itemIcon, whiteFontClasses, {
                          [classes.itemIconRTL]: props.rtlActive
                        })}
                      >
                        <PolymerIcon />
                      </Icon>
                      <ListItemText
                        primary="Báo cáo về hành lang tuyến"
                        className={classes.nestedText}
                        disableTypography={true}
                      />
                    </ListItem>
                  </NavLink>

                </List>
              </Collapse>

            ) : null}


          </NavLink>
        );
      })}
      <a
        href="https://hi01-efd.web.app"
        className={classes.item}
        activeClassName="active"
        target="_blank"
      >
        <ListItem button className={classes.itemLink}>
          <Icon
            className={classNames(classes.itemIcon)}
          >
            <ControlPoint />
          </Icon>
          <ListItemText
            primary="Tạo công trình khắc phục sự cố"
            className={classes.itemText}
            disableTypography={true}
          />
        </ListItem>
      </a>
      <a
        href="https://hi02-qlgs-foradmin.web.app"
        className={classes.item}
        activeClassName="active"
        target="_blank"
      >
        <ListItem button className={classes.itemLink}>
          <Icon
            className={classNames(classes.itemIcon)}
          >
            <DonutLarge

            />
          </Icon>
          <ListItemText
            primary="Thông tin đợt kiểm tra"
            className={classes.itemText}
            disableTypography={true}
          />
        </ListItem>
      </a>
    </List>
  );
  var brand = (
    <div className={classes.logo}>
      <NavLink
        to={routes[0].layout + routes[0].path}
      >
        <div className={classes.headlogo}>
          <span style={{ fontSize: 22, color: "#00ACC1" }}>
            <i className="fas fa-chart-bar ml2"></i> &nbsp;

          </span>
          <span style={{ fontSize: 22, color: "white" }}>REPORT APP</span>

        </div>

      </NavLink>
    </div>
  );
  return (
    <div>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={props.rtlActive ? "left" : "right"}
          open={props.open}
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive
            })
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>
            {props.rtlActive ? <RTLNavbarLinks /> : <AdminNavbarLinks />}
            {links}
          </div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          anchor={props.rtlActive ? "right" : "left"}
          variant="permanent"
          open
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive
            })
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>{links}</div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
    </div>
  );
}

Sidebar.propTypes = {
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  bgColor: PropTypes.oneOf(["purple", "blue", "green", "orange", "red"]),
  logo: PropTypes.string,
  image: PropTypes.string,
  logoText: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  open: PropTypes.bool
};
