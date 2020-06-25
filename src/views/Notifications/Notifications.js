import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table3 from "components/Table/Table3.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import SearchBar from "material-ui-search-bar";
import dataSource from "../../dataSource.js";

const styles = {
  buttonWrap: {
    textAlign: "right"
  },
  createButton: {
    marginLeft: "15px",
    marginBottom: "20px",
    justifyContent: "flex-end"
  },
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  textTitle: {
    fontSize: "2rem",
    fontWeight: "400",
    textAlign: "center",
    color: "black"
  }
};

const useStyles = makeStyles(styles);

const headCells = [
  { id: "important", numeric: false, disablePadding: false, label: "" },
  {
    id: "reportName",
    numeric: false,
    disablePadding: true,
    label: "Tên báo cáo"
  },
  { id: "owner", numeric: true, disablePadding: false, label: "Người tạo" },
  {
    id: "createdAt",
    numeric: true,
    disablePadding: false,
    label: "Thời gian tạo"
  },
  { id: "type", numeric: true, disablePadding: false, label: "Loại báo cáo" },
  { id: "action", numeric: false, disablePadding: false, label: "" }
];

export default function Notification() {
  const classes = useStyles();
  const [searchValue, setSearchValue] = React.useState();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <div>
          <p className={classes.textTitle}>Báo cáo quan trọng</p>
          <div className={classes.buttonWrap}>
          </div>
        </div>

        <Card>
          <CardHeader color="info">
            <SearchBar
              placeholder="Tìm kiếm báo cáo"
              value={searchValue}
              onChange={newValue => setSearchValue(newValue)}
              onRequestSearch={() => console.log("SEARCH VALUE", searchValue)}
              style={{
                margin: "0 auto",
                maxWidth: 800
              }}
            />
          </CardHeader>
          <CardBody>
            <Table3
              rows={dataSource.filter(data => data.isImportant == true)}
              headCells={headCells}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
