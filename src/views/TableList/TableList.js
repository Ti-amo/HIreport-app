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
                  onRequestSearch={() => console.log(searchValue)}
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
            <Table
              tableHeaderColor="info"
              tableHead={[
                "Tên báo cáo",
                "Người tạo",
                "Thời gian",
                "Loại báo cáo"
              ]}
              tableData={[
                [
                  "Đường dây điện số 5",
                  "Thế Hùng",
                  "15/10/2019",
                  "Đường dây điện"
                ],
                ["Cột điện số G4FGD", "Thế Hùng", "13/10/2019", "Cột điện"],
                [
                  "Đường dây điện số 3",
                  "Thế Hùng",
                  "15/10/2019",
                  "Đường dây điện"
                ],
                [
                  "Đường dây điện số 5",
                  "Thế Hùng",
                  "15/10/2019",
                  "Đường dây điện"
                ],
                [
                  "Đường dây điện số 5",
                  "Thế Hùng",
                  "15/10/2019",
                  "Đường dây điện"
                ]
                // ["Đường dây điện số 5", "Thế Hùng", "15/10/2019", "Đường dây điện"],
                // ["Đường dây điện số 5", "Thế Hùng", "15/10/2019", "Đường dây điện"],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
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
    </GridContainer>
  );
}
