import React from "react";
// @material-ui/core components
import { makeStyles, useTheme } from "@material-ui/core/styles";
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
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import avatar from "assets/img/faces/marc.jpg";
import Input from '@material-ui/core/Input';
import Chip from '@material-ui/core/Chip';

import { Link, BrowserRouter as Router, useLocation } from "react-router-dom";

import objectSource from "../objectSource";
import problemSource from "../problemSource";
import stageSource from "../stageSource";

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
  },
  formControl: {
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: 2
  }
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Thế Hùng",
  "Quang Anh",
  "Văn Tùng",
  "Việt Hoàng",
  "Văn Hùng",
  "Quang Tùng",
  "Việt Anh",
  "Thế Hoàng",
  "Việt Tùng",
  "Văn Anh"
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const useStyles = makeStyles(styles);

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Create = props => {
  let queryParam = useQuery().get("type");
  console.log("AAA", queryParam);

  const classes = useStyles();
  const theme = useTheme();
  const [namePole1, setNamePole1] = React.useState("");
  const [namePole2, setNamePole2] = React.useState("");
  const [probName, setProbName] = React.useState("");
  const [nameStage, setNameStage] = React.useState("");

  const [personName, setPersonName] = React.useState(["Thế Hùng"]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };

  // const handleChangeValueRadio = event => {
  //   setValueRadio(event.target.value);
  // };
  const today = new Date();

  const handleChangeName1 = event => {
    setNamePole1(event.target.value);
  };

  const handleChangeName2 = event => {
    setNamePole2(event.target.value);
  };

  const handleChangeProbName = event => {
    setProbName(event.target.value);
  };

  const handleChangeStage = event => {
    setNameStage(event.target.value);
  };

  return (
    <div style={{ height: "100vh", overflow: "scroll" }}>
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

                  <GridItem xs={12} sm={12} md={4}>
                    <TextField
                      id="filled-password-input"
                      type="text"
                      variant="outlined"
                      placeholder="Nhập tên báo cáo"
                      fullWidth
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={1}>
                    <p>Ngày tạo :</p>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={5}>
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

                <GridContainer>
                  <GridItem xs={12} sm={12} md={2}>
                    <p>Đợt kiểm tra :</p>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={6}>
                    <TextField
                      id="filled-password-input"
                      type="text"
                      variant="outlined"
                      select
                      fullWidth
                      label="Chọn đợt kiểm tra"
                      value={nameStage}
                      onChange={handleChangeStage}
                      helperText="Chọn đợt kiểm tra trong danh sách đã quản lý"
                    >
                      {stageSource.map((obj, index) => (
                        <MenuItem key={index} value={obj.name}>
                          {obj.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}></GridItem>

                </GridContainer>

                <br></br>
                {stageSource.map(obj => {
                  if (obj.name === nameStage)
                    return (
                      <React.Fragment>
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={2}>
                            <p>Ngày kiểm tra :</p>
                          </GridItem>

                          <GridItem xs={12} sm={12} md={1}>
                            <p>Từ</p>
                          </GridItem>

                          <GridItem xs={12} sm={12} md={3}>
                            <TextField
                              id="date"
                              type="text"
                              variant="outlined"
                              defaultValue={obj.startDate}
                              className={classes.textField}
                              InputLabelProps={{
                                shrink: true
                              }}
                            />
                          </GridItem>

                          <GridItem xs={12} sm={12} md={1}>
                            <p>Đến</p>
                          </GridItem>

                          <GridItem xs={12} sm={12} md={3}>
                            <TextField
                              id="date"
                              type="text"
                              variant="outlined"
                              value={obj.endDate}
                              className={classes.textField}
                              InputLabelProps={{
                                shrink: true
                              }}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={2}></GridItem>
                        </GridContainer>
                      </React.Fragment>
                    );
                })}

                {/* <br></br> */}

                {/* <GridContainer>
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
                    variant="outlined"
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
                    variant="outlined"
                    // defaultValue={today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()}
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </GridItem>
              </GridContainer> */}

                <br></br>

                <GridContainer>
                  <GridItem xs={12} sm={12} md={2}>
                    <p>Người kiểm tra :</p>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={5}>
                    <FormControl
                    // variant="outlined"
                    // fullWidth
                    // className={classes.formControl}
                    >
                      <Select
                        labelId="demo-mutiple-chip-label"
                        id="demo-mutiple-chip"
                        multiple
                        value={personName}
                        onChange={handleChange}
                        renderValue={(selected) => (
                          <div className={classes.chips}>
                            {selected.map((value) => (
                              <Chip key={value} label={value} className={classes.chip} />
                            ))}
                          </div>
                        )}
                        MenuProps={MenuProps}
                      >
                        {names.map((name) => (
                          <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    {/* <FormControl variant="outlined" fullWidth>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={creater}
                      onChange={handleChange}
                    >
                      <MenuItem value={5}>Văn Hoàng</MenuItem>
                      <MenuItem value={10}>Quang Anh</MenuItem>
                      <MenuItem value={20}>Thế Hùng</MenuItem>
                      <MenuItem value={30}>Việt Tùng</MenuItem>
                      <MenuItem value={40}>Quang Tùng</MenuItem>
                      <MenuItem value={50}>Phùng Văn</MenuItem>
                      <MenuItem value={60}>Việt Hùng</MenuItem>
                      <MenuItem value={70}>Quang Hoàng</MenuItem>
                    </Select>
                  </FormControl> */}
                  </GridItem>

                  <GridItem xs={12} sm={12} md={5}></GridItem>
                </GridContainer>

                <br></br>

                <GridContainer>
                  <GridItem xs={12} sm={12} md={2}>
                    <p>Vị trí dây điện :</p>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={1}>
                    <p>Từ</p>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
                    <TextField
                      id="filled-password-input"
                      type="text"
                      variant="outlined"
                      select
                      label="Chọn cột điện"
                      value={namePole1}
                      onChange={handleChangeName1}
                      helperText="Chọn cột điện trong danh sách đối tượng đã quản lý"
                    >
                      {objectSource.map((obj, index) => (
                        <MenuItem key={index} value={obj.name}>
                          {obj.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={1}>
                    <p>Đến</p>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
                    <TextField
                      id="filled-password-input"
                      type="text"
                      variant="outlined"
                      select
                      label="Chọn cột điện"
                      value={namePole2}
                      onChange={handleChangeName2}
                      helperText="Chọn cột điện trong danh sách đối tượng đã quản lý"
                    >
                      {objectSource.map((obj, index) => (
                        <MenuItem key={index} value={obj.name}>
                          {obj.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </GridItem>
                </GridContainer>

                <br></br>
                {objectSource.map(obj => {
                  if (obj.name === namePole1)
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
                              value={obj.district}
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
                              value={obj.precinct}
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

                        {/* <GridContainer>
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
                      </GridContainer> */}
                      </React.Fragment>
                    );
                })}

                <br></br>

                <GridContainer>
                  <h6>
                    <b>Kết quả kiểm tra :</b>
                  </h6>
                </GridContainer>

                <br></br>

                <GridContainer>
                  <GridItem xs={12} sm={12} md={2}>
                    <p>Tình trạng sự cố :</p>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
                    <TextField
                      id="filled-password-input"
                      type="text"
                      variant="outlined"
                      select
                      label="Chọn tên sự cố"
                      value={probName}
                      onChange={handleChangeProbName}
                      helperText="Chọn một sự cố trong danh sách sự cố đã quản lý"
                    >
                      {problemSource
                        .filter(data => data.type == "Dây điện")
                        .map((obj, index) => (
                          <MenuItem key={index} value={obj.name}>
                            {obj.name}
                          </MenuItem>
                        ))}
                    </TextField>
                  </GridItem>
                  {problemSource.map(obj => {
                    if (obj.name === probName)
                      return (
                        <React.Fragment>
                          {/* <GridContainer> */}
                          <GridItem xs={12} sm={12} md={2}>
                            <p>Mức độ nghiêm trọng :</p>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={2}>
                            <FormControl component="fieldset">
                              <RadioGroup
                                row
                                aria-label="position"
                                name="position"
                                value={obj.level}
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
                                  value="Bình thường"
                                  control={<Radio color="primary" />}
                                  label="Bình thường"
                                />
                              </RadioGroup>
                            </FormControl>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={2}></GridItem>
                          {/* </GridContainer> */}
                        </React.Fragment>
                      );
                  })}

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

                {/* <GridContainer>
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
              </GridContainer> */}
              </CardBody>
              <CardFooter>
                <div>
                  <Button
                    color="info"
                    href={`/admin/myreports/` + `${queryParam}`}
                  >
                    Tạo mới
                </Button>
                  <Button color="danger" href={`/admin/myreports/daydien`}>
                    Hủy
                </Button>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};

export default Create;
