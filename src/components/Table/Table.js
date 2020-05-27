import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import ShareIcon from "@material-ui/icons/Share";
import Pagination from "@material-ui/lab/Pagination";
import Button from "components/CustomButtons/Button.js";
// core components
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";

const useStyles = makeStyles(styles);

export default function CustomTable(props) {
  const classes = useStyles();
  const { tableHead, tableData, tableHeaderColor } = props;
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow className={classes.tableHeadRow}>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={key}
                  >
                    {prop}
                  </TableCell>
                );
              })}
              <TableCell>
              </TableCell>
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData.map((prop, key) => {
            return (
              <TableRow key={key} className={classes.tableBodyRow}>
                <TableCell className={classes.tableCell} key={key}>
                  {prop.name}
                </TableCell>
                <TableCell className={classes.tableCell} key={key}>
                  {prop.createdBy}
                </TableCell><TableCell className={classes.tableCell} key={key}>
                  {prop.dateTime}
                </TableCell><TableCell className={classes.tableCell} key={key}>
                  {prop.title}
                </TableCell>
                <TableCell>
                  <Button
                    justIcon
                    round
                    color="transparent"
                    className={classes.icon}
                  >
                    <CreateIcon />
                  </Button>
                  <Button
                    justIcon
                    round
                    color="transparent"
                    className={classes.icon}
                  >
                    <DeleteIcon />
                  </Button>
                  <Button
                    justIcon
                    round
                    color="transparent"
                    className={classes.icon}
                  >
                    <ShareIcon />
                  </Button>
                  {/* <CreateIcon className={classes.icon}></CreateIcon> */}
                  {/* <DeleteIcon className={classes.icon}></DeleteIcon> */}
                  {/* <ShareIcon className={classes.icon}></ShareIcon> */}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <br />
      <Pagination count={10} color="info" />
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray"
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};
