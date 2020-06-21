import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import MaterialTable from "material-table";

import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const [columns, setColumns] = useState([
    {
      title: "Đối tượng",
      field: "name"
    },
    {
      title: "Địa chỉ",
      field: "address"
    },
    {
      title: "Hỏng từ km số",
      field: "from",
      type: "numeric"
    },
    {
      title: "đến km số",
      field: "to",
      type: "numeric"
    },
    {
      title: "Số lần sửa chữa",
      field: "brokentimes",
      type: "numeric"
      // lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
    }
  ]);

  const [data, setData] = useState([
    {
      name: "Cột điện số 12",
      address: "đường Thanh Niên",
      from: 5,
      to: 13,
      brokentimes: 2
    },
    {
      name: "Cột điện số 15",
      address: "đường Giải Phóng",
      from: 2,
      to: 4,
      brokentimes: 0
    },
    {
      name: "Cột điện số 7",
      address: "đường Phan Đình Giót",
      from: 1,
      to: 4,
      brokentimes: 1
    },
    {
      name: "Cột điện số 9",
      address: "đường Kim Liên",
      from: 6,
      to: 10,
      brokentimes: 4
    },
    {
      name: "Cột điện số 19",
      address: "đường Hoang Hoa Thám",
      from: 10,
      to: 13,
      brokentimes: 3
    },
    {
      name: "Cột điện số 20",
      address: "ga Hà Nội",
      from: 3,
      to: 5,
      brokentimes: 2
    }
  ]);

  return (
    <MaterialTable
      title="Quản lý đối tượng cột điện"
      columns={columns}
      data={data}
      editable={{
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData]);

              resolve();
            }, 1000)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
            }, 1000)
          }),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);
              resolve()
            }, 1000)
          })
      }}
      detailPanel={rowData => {
        return (
          // <iframe
          //   width="100%"
          //   height="315"
          //   src="https://www.youtube.com/embed/C0DPdy98e4c"
          //   frameborder="0"
          //   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          //   allowfullscreen
          // />
          <div className="d-flex" style={{ padding: "1rem" }}>
            <h2>Chi tiết đối tượng {`${rowData.name}`}</h2>
          </div>
        )
      }}
      onRowClick={(event, rowData, togglePanel) => togglePanel()}
    />
  )
}
