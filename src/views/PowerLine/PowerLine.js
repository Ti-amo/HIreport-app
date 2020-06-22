import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import SearchBar from "material-ui-search-bar";
import { Icon, TextField } from "@material-ui/core";
import Button from "components/CustomButtons/Button";
import AddIcon from "@material-ui/icons/Add";
import { Autocomplete } from "@material-ui/lab";
// import SearchBar from "components/Search/Search.js";
import { Link } from "react-router-dom";
import dataSource from "../../dataSource.js";
import Table2 from "components/Table/Table2.js";
import queryString from "querystring"

const headCells = [
  // { id: "important", numeric: false, disablePadding: false, label: "" },
  {
    id: "reportName",
    numeric: false,
    disablePadding: true,
    label: "Tên sự cố"
  },
  { id: "level", numeric: true, disablePadding: false, label: "Mức độ" },
  {
    id: "createdAt",
    numeric: true,
    disablePadding: false,
    label: "Thời gian phát hiện sự cố"
  },
  { id: "type", numeric: true, disablePadding: false, label: "Loại sự cố" },
  { id: "action", numeric: false, disablePadding: false, label: "" }
];

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

const PowerLine = props => {
  console.log("AAAAA", queryString.parse(props))
  const classes = useStyles();
  const [searchValue, setSearchValue] = React.useState();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <div>
          <p className={classes.textTitle}>Báo cáo sự cố đường dây điện</p>
          <div className={classes.buttonWrap}>
            <a href="/create?type=daydien">
              <Button
                className={classes.createButton}
                type="button"
                variant="contained"
                color="info"
              >
                <AddIcon /> &nbsp; TẠO BÁO CÁO
              </Button>
            </a>
          </div>
        </div>

        <Card>
          <CardHeader color="info">
            <SearchBar
              placeholder="Tìm kiếm"
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
            <Table2
              rows={dataSource.filter(data => data.type == "Đường dây điện")}
              headCells={headCells}
            ></Table2>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default PowerLine;
