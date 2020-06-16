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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';



import avatar from "assets/img/faces/marc.jpg";
import { Link, BrowserRouter as Router } from "react-router-dom";

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

// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }
const Create = props => {
  // let queryParam = useQuery().get("type");
  // console.log("AAA", queryParam);

  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [date, setDate] = React.useState(new Date());

  const handleChange = event => {
    setAge(event.target.value);
  };
  return (
    <div className="width-100 justify-content-center">
      <GridContainer className="justify-content-center">
        <GridItem xs={20} sm={15} md={10} clas>
          <Card>
            <CardHeader color="info">
              {/* <h4 className={classes.cardTitleWhite}>
                Báo cáo{" "}
                {queryParam == "daydien"
                  ? "đường dây điện"
                  : `${
                  queryParam == "cotdien" ? "cột điện" : "hành lang tuyến"
                  }`}
              </h4> */}
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
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={2}>
                  <p>Ngày tạo :</p>
                </GridItem>

                <GridItem xs={12} sm={12} md={4}>
                  <TextField
                    id="filled-password-input"
                    type="text"
                    variant="outlined"
                  />
                </GridItem>

              </GridContainer>

              <br></br>

              <GridContainer>

                <GridItem xs={12} sm={12} md={2}>
                  <p>Đợt kiểm tra :</p>
                </GridItem>

                <GridItem xs={12} sm={12} md={8}>
                  <FormControl variant="outlined" fullWidth>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={age}
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={2}></GridItem>

              </GridContainer>

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
                    id="filled-password-input"
                    type="text"
                    variant="outlined"
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={1}>
                  <p>Đến</p>
                </GridItem>

                <GridItem xs={12} sm={12} md={4}>
                  <TextField
                    id="filled-password-input"
                    type="text"
                    variant="outlined"
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
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </GridItem>

                <GridItem xs={12} sm={12} md={5}>
                </GridItem>

              </GridContainer>

              <br></br>

              <GridContainer>

                <GridItem xs={12} sm={12} md={2}>
                  <p>Địa điểm kiểm tra :</p>
                </GridItem>

                <GridItem xs={12} sm={12} md={1}>
                  <p>Quận</p>
                </GridItem>

                <GridItem xs={12} sm={12} md={2}>
                  <FormControl variant="outlined" fullWidth>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={age}
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </GridItem>

                <GridItem xs={12} sm={12} md={1}>
                  <p>Phường</p>
                </GridItem>

                <GridItem xs={12} sm={12} md={2}>
                  <FormControl variant="outlined" fullWidth>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={age}
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </GridItem>

                <GridItem xs={12} sm={12} md={1}>
                  <p>Đường</p>
                </GridItem>

                <GridItem xs={12} sm={12} md={3}>
                  <TextField
                    id="filled-password-input"
                    type="text"
                    variant="outlined"
                    fullWidth
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
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={2}></GridItem>

              </GridContainer>

              <br></br>

              <GridContainer>
                <h6><b>Kết quả kiểm tra :</b></h6>
              </GridContainer>

              <br></br>

              <GridContainer>

                <GridItem xs={12} sm={12} md={2}>
                  <p>Tình trạng dây điện :</p>
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
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </GridItem>

                <GridItem xs={12} sm={12} md={5}>
                </GridItem>

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
                      style={{ display: 'none' }}
                      id="upload-photo"
                      name="upload-photo"
                      type="file"
                    />

                    <Button color="secondary" variant="contained" component="span">
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
                <FormControlLabel value="end" control={<Radio color="primary" />} label="Rất nghiêm trọng" />
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                <FormControlLabel value="end" control={<Radio color="primary" />} label="Nghiêm trọng" />
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                <FormControlLabel value="end" control={<Radio color="primary" />} label="An toàn" />
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                </GridItem>

              </GridContainer>



            </CardBody>
            <CardFooter>
              {/* <Link to={`/admin/myreports/` + `${queryParam}`}>
                <Button color="info">Tạo mới</Button>
              </Link> */}
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default Create;
