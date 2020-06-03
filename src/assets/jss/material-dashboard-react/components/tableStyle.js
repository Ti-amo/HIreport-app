import {
  warningColor,
  primaryColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  defaultFont
} from "assets/jss/material-dashboard-react.js";
import { blackColor } from "assets/jss/material-dashboard-react";

const tableStyle = theme => ({
  warningTableHeader: {
    color: warningColor[0]
  },
  primaryTableHeader: {
    color: primaryColor[0]
  },
  dangerTableHeader: {
    color: dangerColor[0]
  },
  successTableHeader: {
    color: successColor[0]
  },
  infoTableHeader: {
    color: infoColor[0]
  },
  roseTableHeader: {
    color: roseColor[0]
  },
  grayTableHeader: {
    color: grayColor[0]
  },
  table: {
    marginBottom: "0",
    width: "100%",
    maxWidth: "100%",
    backgroundColor: "transparent",
    borderSpacing: "0",
    borderCollapse: "collapse"
  },
  tableHeadCell: {
    color: "inherit",
    ...defaultFont,
    "&, &$tableCell": {
      fontSize: "1.5em",
      fontStyle: "bold"
    }
  },
  tableCell: {
    ...defaultFont,
    lineHeight: "1.42857143",
    padding: "0px 10px",
    verticalAlign: "middle",
    fontSize: "0.9rem"
  },
  tableResponsive: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  tableHeadRow: {
    height: "56px",
    color: "inherit",
    display: "table-row",
    outline: "none",
    verticalAlign: "middle"
  },
  tableBodyRow: {
    height: "40px",
    color: blackColor,
    display: "table-row",
    outline: "none",
    verticalAlign: "middle"
  },
  icon: {
    marginLeft: "12px",
    marginRight: "12px"
  },
  tableActions: {
    ...defaultFont,
    lineHeight: "1.42857143",
    padding: "0px 0px",
    verticalAlign: "middle",
    fontSize: "0.9rem"
  },
  tableActionButton: {
    width: "35px",
    height: "35px",
    padding: "0",
    margin: "0 10px"
  },
  tableActionButtonIcon: {
    width: "23px",
    height: "23px"
  },
  edit: {
    backgroundColor: "transparent",
    color: blackColor,
    boxShadow: "none"
  },
  close: {
    backgroundColor: "transparent",
    color: blackColor,
    boxShadow: "none"
  },
  share: {
    backgroundColor: "transparent",
    color: "inherit",
    boxShadow: "none"
  }
});

export default tableStyle;
