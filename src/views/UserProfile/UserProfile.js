import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from "material-table";
import objectSource from "../../objectSource.js";
import problemSource from "problemSource.js";
import stageSource from "stageSource.js";

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

  const [stageColumns, setStageColumns] = useState([
    {
      title: "Đợt kiểm tra",
      field: "name"
    },
    {
      title: "Ngày bắt đầu",
      field: "startDate"
    },
    {
      title: "Ngày kết thúc",
      field: "endDate"
    }
  ]);

  const [probData, setProbData] = useState(problemSource);

  const [stageData, setStageData] = useState(stageSource);

  const [data, setData] = useState(objectSource);

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

      <br></br>

      <MaterialTable
        title="Quản lý dữ liệu về các đợt kiểm tra"
        columns={stageColumns}
        data={stageData}
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
