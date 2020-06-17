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
import { Icon } from "@material-ui/core";
import Button from "components/CustomButtons/Button";
import AddIcon from "@material-ui/icons/Add";
import RpTemplate from "../../components/Report/ReportTemplate";
import { Link } from "react-router-dom";
import dataSource from "../../dataSource.js";

import Table2 from "components/Table/Table2.js";

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

const styles = {
  reportTempaltes: {
    marginBottom: "50px"
  },
  createButton: {
    marginLeft: "15px",
    marginBottom: "20px"
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
  }
};

const useStyles = makeStyles(styles);

const SearchReport = props => {

  const searchKey = props.searchKey;

  const results = dataSource.filter(item => item.title == { searchKey });
  return (
    <div>
      {results.map((item, index) => (
        <li key={index}>{item.reportName}</li>
      ))}
    </div>
  );
};

const TableList = props => {
  const classes = useStyles();
  const [searchValue, setSearchValue] = React.useState();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <div>
          {/* <Button
            className={classes.createButton}
            type="button"
            variant="contained"
            color="info"
          >
            <AddIcon />
            &nbsp; TẠO BÁO CÁO
          </Button> */}
        </div>
        <Card className={classes.reportTempaltes}>
          <CardHeader color="info">
            <h4 className={classes.cardTitleWhite}>Mẫu báo cáo</h4>
          </CardHeader>
          <CardBody>
            <GridContainer>
              <GridItem xs={4} sm={4} md={4}>
                <Link to="/create?type=daydien">
                  <RpTemplate
                    title="Đường dây điện"
                    des="Báo cáo về sự cố của đường dây điện"
                    image="https://st2.depositphotos.com/2317051/11374/i/950/depositphotos_113748554-stock-photo-black-and-white-silhouette-of.jpg"
                  ></RpTemplate>
                </Link>
              </GridItem>
              <GridItem xs={4} sm={4} md={4}>
                <Link to="/create?type=cotdien">
                  <RpTemplate
                    title="Cột điện"
                    des="Báo cáo về sự cố của cột điện"
                    image="https://previews.123rf.com/images/gbradic/gbradic1011/gbradic101100001/8202747-transmission-tower-silhouette.jpg"
                  ></RpTemplate>
                </Link>
              </GridItem>
              <GridItem xs={4} sm={4} md={4}>
                <Link to="/create?type=hanhlangtuyen">
                  <RpTemplate
                    title="Hành lang tuyến"
                    des="Báo cáo về sự cố của hành lang lưới điện"
                    image="https://st2.depositphotos.com/2193402/7266/v/950/depositphotos_72667421-stock-illustration-high-voltage-power-lines.jpg"
                  ></RpTemplate>
                </Link>
              </GridItem>
            </GridContainer>
          </CardBody>
        </Card>
        <Card className={classes.list}>
          <CardHeader color="info">
            <GridContainer>
              <GridItem xs={6} sm={6} md={6}>
                <h4 className={classes.cardTitleWhite}>Danh sách báo cáo</h4>
              </GridItem>
              <GridItem xs={5} sm={5} md={5}>
                <SearchBar
                  placeholder="Tìm kiếm báo cáo"
                  value={searchValue}
                  onChange={newValue => setSearchValue(newValue)}
                  onRequestSearch={() => (
                    <SearchReport searchKey={searchValue} />
                  )}
                  style={{
                    margin: "0 auto",
                    maxWidth: 800
                  }}
                />
              </GridItem>
            </GridContainer>
          </CardHeader>
          <CardBody>
            <Table2 rows={dataSource} headCells={headCells}></Table2>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default TableList;
