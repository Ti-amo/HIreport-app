import React from "react";
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
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Admin from "layouts/Admin.js";
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from '@material-ui/core/FormLabel';
import avatar from "assets/img/faces/marc.jpg";
import { Link, BrowserRouter as Router, useLocation } from "react-router-dom";

import objectSource from "../objectSource";

const styles = {
  root: {
    textAlign: "center",
    width: "auto",
    marginLeft: "2rem"
  },
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

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Create = props => {
  let queryParam = useQuery().get("type");
  console.log("AAA", queryParam);

  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [name, setName] = React.useState("");
  const [valueRadio, setValueRadio] = React.useState("");

  const handleChangeValueRadio = event => {
    setValueRadio(event.target.value);
  };
  const today = new Date();

  const handleChangeName = event => {
    setName(event.target.value);
  };

  const handleChange = event => {
    setAge(event.target.value);
  };
  return (
    <div className="width-100 justify-content-center overflow-scroll">
      <GridContainer className="justify-content-center">
        <GridItem xs={20} sm={15} md={10} clas>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>
                Báo cáo{" "}
                {queryParam == "daydien"
                  ? "đường dây điện"
                  : `${
                  queryParam == "cotdien" ? "cột điện" : "hành lang tuyến"
                  }`}
              </h4>
              <p className={classes.cardCategoryWhite}>Bản báo cáo mới</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={2}>
                  <p>Tên báo cáo :</p>
                </GridItem>

                <GridItem xs={12} sm={12} md={2}>
                  <TextField
                    id="filled-password-input"
                    type="text"
                    variant="outlined"
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={2}>
                  <p>Đối tượng :</p>
                </GridItem>

                <GridItem xs={12} sm={12} md={2}>
                  <TextField
                    id="filled-password-input"
                    type="text"
                    variant="outlined"
                    select
                    label="Chọn đối tượng"
                    value={name}
                    onChange={handleChangeName}
                    helperText="Chọn đối tượng trong danh sách đối tượng đã quản lý"
                  >
                    {objectSource.map((obj, index) => (
                      <MenuItem key={index} value={obj.name}>
                        {obj.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </GridItem>

                <GridItem xs={12} sm={12} md={1}>
                  <p>Ngày tạo :</p>
                </GridItem>

                <GridItem xs={12} sm={12} md={2}>
                  <TextField
                    id="filled-password-input"
                    type="text"
                    variant="outlined"
                    value={
                      today.getDate() +
                      "/" +
                      (today.getMonth() + 1) +
                      "/" +
                      today.getFullYear()
                    }
                  />
                </GridItem>
              </GridContainer>

              <br></br>
              {objectSource.map(obj => {
                if (obj.name === name)
                  return (
                    <React.Fragment>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={2}>
                          <p>Địa điểm kiểm tra :</p>
                        </GridItem>

                        <GridItem xs={12} sm={12} md={1}>
                          <p>Quận</p>
                        </GridItem>

                        <GridItem xs={12} sm={12} md={2}>
                          <TextField
                            id="filled-password-input"
                            type="text"
                            variant="outlined"
                            value={obj.quan}
                          />
                        </GridItem>

                        <GridItem xs={12} sm={12} md={1}>
                          <p>Phường</p>
                        </GridItem>

                        <GridItem xs={12} sm={12} md={2}>
                          <TextField
                            id="filled-password-input"
                            type="text"
                            variant="outlined"
                            value={obj.phuong}
                          />
                        </GridItem>

                        <GridItem xs={12} sm={12} md={1}>
                          <p>Đường</p>
                        </GridItem>

                        <GridItem xs={12} sm={12} md={3}>
                          <TextField
                            id="filled-password-input"
                            type="text"
                            variant="outlined"
                            value={obj.address}
                          />
                        </GridItem>
                      </GridContainer>

                      <br></br>

                      <GridContainer>
                        <GridItem xs={12} sm={12} md={2}>
                          <p>Vị trí dây điện :</p>
                        </GridItem>

                        <GridItem xs={12} sm={12} md={8}>
                          <TextField
                            id="filled-password-input"
                            type="text"
                            variant="outlined"
                            fullWidth
                            value={`Từ km số ${obj.from} đến km số ${obj.to}`}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}></GridItem>
                      </GridContainer>
                    </React.Fragment>
                  );
              })}

              <br></br>

              <GridContainer>
                <GridItem xs={12} sm={12} md={2}>
                  <p>Ngày kiểm tra :</p>
                </GridItem>

                <GridItem xs={12} sm={12} md={1}>
                  <p>Từ</p>
                </GridItem>

                <GridItem xs={12} sm={12} md={4}>
                  <TextField
                    id="date"
                    type="date"
                    // defaultValue={today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()}
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={1}>
                  <p>Đến</p>
                </GridItem>

                <GridItem xs={12} sm={12} md={4}>
                  <TextField
                    id="date"
                    type="date"
                    // defaultValue={today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()}
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </GridItem>
              </GridContainer>

              <br></br>

              <GridContainer>
                <GridItem xs={12} sm={12} md={2}>
                  <p>Người kiểm tra :</p>
                </GridItem>

                <GridItem xs={12} sm={12} md={5}>
                  <FormControl variant="outlined" fullWidth>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={age}
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>Văn Hoàng</em>
                      </MenuItem>
                      <MenuItem value={10}>Quang Anh</MenuItem>
                      <MenuItem value={20}>Thế Hùng</MenuItem>
                      <MenuItem value={30}>Việt Tùng</MenuItem>
                    </Select>
                  </FormControl>
                </GridItem>

                <GridItem xs={12} sm={12} md={5}></GridItem>
              </GridContainer>

              <br></br>

              <GridContainer>
                <h6>
                  <b>Kết quả kiểm tra :</b>
                </h6>
              </GridContainer>

              <br></br>

              <GridContainer>
                <GridItem xs={12} sm={12} md={2}>
                  <p>Vị trí xảy ra sự cố (nếu có) :</p>
                </GridItem>

                <GridItem xs={12} sm={12} md={8}>
                  <TextField
                    id="filled-password-input"
                    type="text"
                    variant="outlined"
                    fullWidth
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={2}></GridItem>
              </GridContainer>

              <br></br>

              <GridContainer>
                <GridItem xs={12} sm={12} md={2}>
                  <p>Mô tả thêm về sự cố :</p>
                </GridItem>

                <GridItem xs={12} sm={12} md={8}>
                  <TextField
                    id="filled-password-input"
                    type="text"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={2}></GridItem>
              </GridContainer>

              <br></br>

              <GridContainer>
                <GridItem xs={12} sm={12} md={2}>
                  <p>Ảnh chụp từ drone :</p>
                </GridItem>

                <GridItem xs={12} sm={12} md={8}>
                  <label htmlFor="upload-photo">
                    <input
                      style={{ display: "none" }}
                      id="upload-photo"
                      name="upload-photo"
                      type="file"
                    />

                    <Button
                      color="secondary"
                      variant="contained"
                      component="span"
                    >
                      Upload image
                    </Button>
                  </label>
                </GridItem>
                <GridItem xs={12} sm={12} md={2}></GridItem>
              </GridContainer>

              <br></br>

              <GridContainer>
                <GridItem xs={12} sm={12} md={2}>
                  <p>Đánh giá mức độ hỏng hóc :</p>
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                  <FormControl component="fieldset">
                    <RadioGroup
                      row
                      aria-label="position"
                      name="position"
                      value={valueRadio} onChange={handleChangeValueRadio}
                    >
                      <FormControlLabel
                        value="Rất nghiêm trọng"
                        control={<Radio color="primary" />}
                        label="Rất nghiêm trọng"
                      />
                      <FormControlLabel
                        value="Nghiêm trọng"
                        control={<Radio color="primary" />}
                        label="Nghiêm trọng"
                      />
                      <FormControlLabel
                        value="An toàn"
                        control={<Radio color="primary" />}
                        label="An toàn"
                      />
                    </RadioGroup>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={2}></GridItem>
                <GridItem xs={12} sm={12} md={2}></GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Link to={`/admin/myreports/` + `${queryParam}`}>
                <Button color="info">Tạo mới</Button>
              </Link>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default Create;
