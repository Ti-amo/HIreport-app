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
import LabelImportant from "@material-ui/icons/LabelImportant";
import Pagination from "@material-ui/lab/Pagination";
import Button from "components/CustomButtons/Button.js";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
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
              <TableRow hover key={key} className={classes.tableBodyRow}>
                <TableCell>
                  <LabelImportant />
                </TableCell>
                <TableCell className={classes.tableCell} key={key}>
                  {prop.name}
                </TableCell>
                <TableCell className={classes.tableCell} key={key}>
                  {prop.createdBy}
                </TableCell>
                <TableCell className={classes.tableCell} key={key}>
                  {prop.dateTime}
                </TableCell>
                <TableCell className={classes.tableCell} key={key}>
                  {prop.title}
                </TableCell>
                <TableCell className={classes.tableActions}>
                  <Tooltip
                    id="tooltip-top"
                    title="Chỉnh sửa"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <IconButton
                      aria-label="Edit"
                      className={classes.tableActionButton}
                    >
                      <Edit
                        className={
                          classes.tableActionButtonIcon + " " + classes.edit
                        }
                      />
                    </IconButton>
                  </Tooltip>
                  <Tooltip
                    id="tooltip-top-start"
                    title="xóa"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <IconButton
                      aria-label="Close"
                      className={classes.tableActionButton}
                    >
                      <Close
                        className={
                          classes.tableActionButtonIcon + " " + classes.close
                        }
                      />
                    </IconButton>
                  </Tooltip>
                  <Tooltip
                    id="tooltip-top-start"
                    title="Chia sẻ"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <IconButton
                      aria-label="Share"
                      className={classes.tableActionButton}
                    >
                      <ShareIcon
                        className={
                          classes.tableActionButtonIcon + " " + classes.share
                        }
                      />
                    </IconButton>
                  </Tooltip>
                </TableCell>
                {/* <TableCell className={classes.tableCell}>
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
                </TableCell> */}
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