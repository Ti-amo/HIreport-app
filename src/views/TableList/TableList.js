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

<<<<<<< HEAD
import Table2 from "components/Table/Table2.js";

function createData(reportName, owner, createdAt, type) {
  return { reportName, owner, createdAt, type };
}

const rows = [
  createData("Đường dây điện số 12","Thế Hùng", "14/10/2019","Đường dây điện"),
  createData("Đường dây điện số 7","Quang Anh", "13/10/2019","Đường dây điện"),
  createData("Cột điện 15","Thế Tung","14/10/2019","Đường dây điện"),
  createData("Hành lang tuyến số 25", "Quang Hùng", "15/10/2019","Hành lang tuyến"),
  createData("Hành lang tuyến số 26", "Quang Anh", "16/10/2019","Hành lang tuyến"),
  createData("Hành lang tuyến số 27", "Văn Hùng", "15/10/2019","Hành lang tuyến"),
  createData("Hành lang tuyến số 28", "Quang Tùng", "12/10/2019","Hành lang tuyến"),
  createData("Hành lang tuyến số 29", "Quang Hoàng", "15/10/2019","Hành lang tuyến"),
  createData("Hành lang tuyến số 30", "Văn Hùng", "24/10/2019","Hành lang tuyến"),
  createData("Hành lang tuyến số 31", "Phùng hoàng", "17/10/2019","Hành lang tuyến"),
  createData("Hành lang tuyến số 32", "Quang Hùng", "19/10/2019","Hành lang tuyến")
  // createData("Gingerbread", 356, 16.0, 49, 3.9),
  // createData("Honeycomb", 408, 3.2, 87, 6.5),
  // createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  // createData("Jelly Bean", 375, 0.0, 94, 0.0),
  // createData("KitKat", 518, 26.0, 65, 7.0),
  // createData("Lollipop", 392, 0.2, 98, 0.0),
  // createData("Marshmallow", 318, 0, 81, 2.0),
  // createData("Nougat", 360, 19.0, 9, 37.0),
  // createData("Oreo", 437, 18.0, 63, 4.0),
];

const headCells = [
  { id: "important", numeric: false, disablePadding: false, label: "" },
  { id: "reportName", numeric: false, disablePadding: true, label: "Tên báo cáo" },
  { id: "owner", numeric: true, disablePadding: false, label: "Người tạo" },
  { id: "createdAt", numeric: true, disablePadding: false, label: "Thời gian tạo" },
  { id: "type", numeric: true, disablePadding: false, label: "Loại báo cáo" },
  { id: "action", numeric: false, disablePadding: false, label: "" },
];
=======
import dataSource from "../../dataSource.js";
>>>>>>> myreportdetail

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
  console.log("AAA", props);

  const searchKey = props.searchKey;

  const results = dataSource.filter(item => item.title == { searchKey });
  return (
    <div>
      {results.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </div>
  );
};

export default function TableList() {
  const classes = useStyles();
  const [searchValue, setSearchValue] = React.useState();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <div>
          <Button
            className={classes.createButton}
            type="button"
            variant="contained"
            color="info"
          >
            <AddIcon />
            &nbsp; TẠO BÁO CÁO
          </Button>
        </div>
        <Card className={classes.reportTempaltes}>
          <CardHeader color="info">
            <h4 className={classes.cardTitleWhite}>Mẫu báo cáo</h4>
          </CardHeader>
          <CardBody>
            <GridContainer>
              <GridItem xs={4} sm={4} md={4}>
                <RpTemplate
                  title="Đường dây điện"
                  des="Báo cáo về sự cố của đường dây điện"
                  image="https://st2.depositphotos.com/2317051/11374/i/950/depositphotos_113748554-stock-photo-black-and-white-silhouette-of.jpg"
                ></RpTemplate>
              </GridItem>
              <GridItem xs={4} sm={4} md={4}>
                <RpTemplate
                  title="Cột điện"
                  des="Báo cáo về sự cố của cột điện"
                  image="https://previews.123rf.com/images/gbradic/gbradic1011/gbradic101100001/8202747-transmission-tower-silhouette.jpg"
                ></RpTemplate>
              </GridItem>
              <GridItem xs={4} sm={4} md={4}>
                <RpTemplate
                  title="Hành lang tuyến"
                  des="Báo cáo về sự cố của hành lang lưới điện"
                  image="https://st2.depositphotos.com/2193402/7266/v/950/depositphotos_72667421-stock-illustration-high-voltage-power-lines.jpg"
                ></RpTemplate>
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
            {/* <h4 className={classes.cardTitleWhite}>Simple Table</h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p> */}


          </CardHeader>
          <CardBody>
            <Table2 rows={rows} headCells={headCells}></Table2>
          {/* <Table
              tableHeaderColor="info"
              tableHead={[
                "",
                "Tên báo cáo",
                "Người tạo",
                "Thời gian tạo",
                "Loại báo cáo"
              ]}
              tableData={dataSource}
            /> */}
          </CardBody>
        </Card>
      </GridItem>
<<<<<<< HEAD
      {/* <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>
              Table on Plain Background
            </h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Name", "Country", "City", "Salary"]}
              tableData={[
                ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],
                ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],
                ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],
                [
                  "4",
                  "Philip Chaney",
                  "$38,735",
                  "Korea, South",
                  "Overland Park"
                ],
                [
                  "5",
                  "Doris Greene",
                  "$63,542",
                  "Malawi",
                  "Feldkirchen in Kärnten"
                ],
                ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem> */}
    </GridContainer >
=======
    </GridContainer>
>>>>>>> myreportdetail
  );
}
