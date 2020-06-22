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
import objectSource from "../../objectSource.js";

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
      title: "Phường",
      field: "precinct",
      // type: "numeric"
    },
    {
      title: "Quận",
      field: "district",
      // type: "numeric"
    },
    {
      title: "Số lần sửa chữa",
      field: "brokentimes",
      type: "numeric"
      // lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
    }
  ]);

  const [probColumns, setProbColumns] = useState([
    {
      title: "Tên sự cố",
      field: "name"
    },
    {
      title: "Loại sự cố",
      field: "type"
    },
    {
      title: "Mức độ nghiêm trọng",
      field: "level",
      // type: "numeric"
    }
  ]);

  const [probData, setProbData] = useState([
    {
      name: "Đứt đây",
      type: "Dây điện",
      level: "Nghiêm trọng"
    },
    {
      name: "Chập cháy dây",
      type: "Dây điện",
      level: "Rất nghiêm trọng"
    },
    {
      name: "Dây quá cũ",
      type: "Dây điện",
      level: "Bình thường"
    },
    {
      name: "Gãy cột điện",
      type: "Cột điện",
      level: "Nghiêm trọng"
    },
    {
      name: "Cháy nổ cột điện",
      type: "Cột điện",
      level: "Rất nghiêm trọng"
    },
    {
      name: "Nứt vỡ cột điện",
      type: "Cột điện",
      level: "Bình thường"
    },
    {
      name: "Cháy rừng",
      type: "Hành lang tuyến",
      level: "Rất nghiêm trọng"
    },
    {
      name: "Động đất",
      type: "Hành lang tuyến",
      level: "Bình thường"
    },
    {
      name: "Sạt lở đất",
      type: "Hành lang tuyến",
      level: "Nghiêm trọng"
    }
  ]);

  const [data, setData] = useState([
    {
      name: "Cột điện số 12",
      address: "đường Thanh Niên",
      precinct: "Thụy Khuê",
      district: "Tây Hồ",
      brokentimes: 2
    },
    {
      name: "Cột điện số 15",
      address: "đường Giải Phóng",
      precinct: "Giáp Bát",
      district: "Hoàng Mai",
      brokentimes: 0
    },
    {
      name: "Cột điện số 7",
      address: "đường Phan Đình Giót",
      precinct: "Phương Liệt",
      district: "Thanh Xuân",
      brokentimes: 1
    },
    {
      name: "Cột điện số 9",
      address: "đường Kim Liên",
      precinct: "Kim Liên",
      district: "Đống Đa",
      brokentimes: 4
    },
    {
      name: "Cột điện số 19",
      address: "đường Hoàng Hoa Thám",
      precinct: "Thụy Khuê",
      district: "Tây Hồ",
      brokentimes: 3
    },
    {
      name: "Cột điện số 20",
      address: "đường Lê Duẩn",
      precinct: "Văn Miếu",
      district: "Đống Đa",
      brokentimes: 2
    }
  ]);

  return (
    <div>
      <MaterialTable
        title="Quản lý dữ liệu cột điện"
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

      <br></br>

      <MaterialTable
        title="Quản lý dữ liệu về các loại sự cố"
        columns={probColumns}
        data={probData}
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
    </div>

  )
}
