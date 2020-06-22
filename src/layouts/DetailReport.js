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
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import DateFnsUtils from "@date-io/date-fns";
import InputBase from '@material-ui/core/InputBase';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import avatar from "assets/img/faces/marc.jpg";
import { Link, BrowserRouter as Router, useLocation } from "react-router-dom";

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
const Create = (props) => {
  let queryParam = useQuery().get("type");
  console.log("AAA", queryParam);

  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [date, setDate] = React.useState(new Date());

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
                Báo cáo
                {/* {" "}
                {queryParam == "daydien"
                  ? "đường dây điện"
                  : `${
                      queryParam == "cotdien" ? "cột điện" : "hành lang tuyến"
                  }`} */}
              </h4>
              <p className={classes.cardCategoryWhite}>Chi tiết báo cáo</p>
            </CardHeader>
            <CardBody>
              <br></br>
              <GridContainer>
                <GridItem xs={12} sm={12} md={2}>
                  <label>Tên báo cáo :</label>
                </GridItem>

                <GridItem xs={12} sm={12} md={4}>
                  {/* <TextField
                    id="filled-password-input"
                    type="text"
                    variant="outlined"
                    value="Báo cáo đường dây điện số 5"
                    fullWidth
                  /> */}
                  <InputBase
                    defaultValue="Báo cáo đường dây điện số 5"
                    inputProps={{ "aria-label": "naked" }}
                    fullWidth
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={2}>
                  <label>Ngày tạo :</label>
                </GridItem>

                <GridItem xs={12} sm={12} md={4}>
                  {/* <TextField
                    id="filled-password-input"
                    type="text"
                    variant="outlined"
                    value="19/5/2020"
                  /> */}
                  <InputBase
                    defaultValue="19/5/2020"
                    inputProps={{ "aria-label": "naked" }}
                    fullWidth
                  />
                </GridItem>

              </GridContainer>

              <br></br>

              <GridContainer>

                <GridItem xs={12} sm={12} md={2}>
                  <label>Đợt kiểm tra :</label>
                </GridItem>

                <GridItem xs={12} sm={12} md={4}>
                  <FormControl variant="outlined" fullWidth>
                    {/* <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={10}
                    >
                      <MenuItem value={10} selected>
                        Quý II tháng 1 năm 2020
                      </MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select> */}
                    <InputBase
                      defaultValue="Quý II tháng 1 tuần 2 năm 2020"
                      inputProps={{ "aria-label": "naked" }}
                      fullWidth
                    />
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                  <label>Người kiểm tra :</label>
                </GridItem>

                <GridItem xs={12} sm={12} md={4}>
                  <FormControl variant="outlined" fullWidth>
                    {/* <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={10}
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Phùng Văn Tùng</MenuItem>
                      <MenuItem value={20}>Trần Văn Hoàng</MenuItem>
                      <MenuItem value={30}>Nguyễn Quang Anh</MenuItem>
                    </Select> */}
                    <InputBase
                      defaultValue="Phùng Văn Tùng"
                      inputProps={{ "aria-label": "naked" }}
                      fullWidth
                    />
                  </FormControl>
                </GridItem>

              </GridContainer>

              <br></br>

              <GridContainer>

                <GridItem xs={12} sm={12} md={2}>
                  <label>Ngày kiểm tra :</label>
                </GridItem>

                {/* <GridItem xs={12} sm={12} md={1}>
                  <label>Từ</label>
                </GridItem> */}

                <GridItem xs={12} sm={12} md={10}>
                  {/* <TextField
                    id="filled-password-input"
                    type="text"
                    variant="outlined"
                    value="10/5/2020"
                  /> */}
                  <InputBase
                      defaultValue="10/5/2020    -    15/05/2020"
                      inputProps={{ "aria-label": "naked" }}
                      fullWidth
                    />
                </GridItem>

                

                {/* <GridItem xs={12} sm={12} md={1}>
                  <label>Đến</label>
                </GridItem> */}

                {/* <GridItem xs={12} sm={12} md={2}>
                  <TextField
                    id="filled-password-input"
                    type="text"
                    variant="outlined"
                    value="15/5/2020"
                  />
                  <InputBase
                      defaultValue="15/5/2020"
                      inputProps={{ "aria-label": "naked" }}
                      fullWidth
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}></GridItem> */}

              </GridContainer>

              <br></br>

              <GridContainer>

                <GridItem xs={12} sm={12} md={2}>
                  <label>Địa điểm kiểm tra :</label>
                </GridItem>

                <GridItem xs={12} sm={12} md={1}>
                  <label>Quận</label>
                </GridItem>

                <GridItem xs={12} sm={12} md={2}>
                  {/* <FormControl variant="outlined" fullWidth>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={10}
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Đống Đa</MenuItem>
                      <MenuItem value={20}>Hai Bà Trưng</MenuItem>
                      <MenuItem value={30}>Thanh Xuân</MenuItem>
                    </Select>
                  </FormControl> */}
                  <InputBase
                      defaultValue="Hoàng Mai"
                      inputProps={{ "aria-label": "naked" }}
                      fullWidth
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={1}>
                  <label>Phường</label>
                </GridItem>

                <GridItem xs={12} sm={12} md={2}>
                  {/* <FormControl variant="outlined" fullWidth>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={10}
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Láng Hạ</MenuItem>
                      <MenuItem value={20}>Bách Khoa</MenuItem>
                      <MenuItem value={30}>Láng Thượng</MenuItem>
                    </Select>
                  </FormControl> */}
                  <InputBase
                      defaultValue="Giáp Bát"
                      inputProps={{ "aria-label": "naked" }}
                      fullWidth
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={1}>
                  <label>Đường</label>
                </GridItem>

                <GridItem xs={12} sm={12} md={3}>
                  {/* <TextField
                    id="filled-password-input"
                    type="text"
                    variant="outlined"
                    value="Nguyễn Chí Thanh"
                    fullWidth
                  /> */}
                  <InputBase
                      defaultValue="Giải Phóng"
                      inputProps={{ "aria-label": "naked" }}
                      fullWidth
                  />
                </GridItem>

              </GridContainer>

              <br></br>

              <GridContainer>

                <GridItem xs={12} sm={12} md={2}>
                  <label>Vị trí dây điện :</label>
                </GridItem>

                <GridItem xs={12} sm={12} md={1}>
                  <label>Từ</label>
                </GridItem>

                <GridItem xs={12} sm={12} md={3}>
                  {/* <TextField
                    id="filled-password-input"
                    type="text"
                    variant="outlined"
                    value="10/5/2020"
                  /> */}
                  <InputBase
                      defaultValue="Cột điện số 3"
                      inputProps={{ "aria-label": "naked" }}
                      fullWidth
                    />
                </GridItem>

                <GridItem xs={12} sm={12} md={1}>
                  <label>Đến</label>
                </GridItem>

                <GridItem xs={12} sm={12} md={3}>
                  {/* <TextField
                    id="filled-password-input"
                    type="text"
                    variant="outlined"
                    value="15/5/2020"
                  /> */}
                  <InputBase
                      defaultValue="Cột điện số 5"
                      inputProps={{ "aria-label": "naked" }}
                      fullWidth
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={2}></GridItem>

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
                  <label>Tình trạng dây điện :</label>
                </GridItem>

                <GridItem xs={12} sm={12} md={5}>
                  {/* <FormControl variant="outlined" fullWidth>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={10}
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Dây điện bị chập cháy</MenuItem>
                      <MenuItem value={20}>Dây điện bị đứt</MenuItem>
                      <MenuItem value={30}>Dậy điện cũ, có nguy cơ bị đứt</MenuItem>
                    </Select>
                  </FormControl> */}
                  <InputBase
                      defaultValue="Chập cháy dây điện"
                      inputProps={{ "aria-label": "naked" }}
                      fullWidth
                    />
                </GridItem>

                <GridItem xs={12} sm={12} md={5}></GridItem>
              </GridContainer>

              <br></br>

              <GridContainer>

                <GridItem xs={12} sm={12} md={2}>
                  <label>Vị trí xảy ra sự cố (nếu có) :</label>
                </GridItem>

                <GridItem xs={12} sm={12} md={8}>
                  {/* <TextField
                    id="filled-password-input"
                    type="text"
                    variant="outlined"
                    fullWidth
                    value="Tại vị trí ngay trước quán Photocopy Văn Tùng"
                  /> */}
                  <InputBase
                      defaultValue="Tại vị trí ngay trước quán Photocopy Văn Tùng"
                      inputProps={{ "aria-label": "naked" }}
                      fullWidth
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={2}></GridItem>

              </GridContainer>

              <br></br>

              <GridContainer>

                <GridItem xs={12} sm={12} md={2}>
                  <label>Mô tả thêm về sự cố :</label>
                </GridItem>

                <GridItem xs={12} sm={12} md={8}>
                  {/* <TextField
                    id="filled-password-input"
                    type="text"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    value="Vào khoảng 12h trưa, đường dây điện được phát hiện là đang bốc cháy dữ dội, nguyên nhân có thể là nhiệt độ ngoài trời quá cao và quá tải điện "
                  /> */}
                  <InputBase
                      defaultValue="Vào khoảng 12h trưa, đường dây điện được phát hiện là đang bốc cháy dữ dội, nguyên nhân có thể là nhiệt độ ngoài trời quá cao và quá tải điện"
                      inputProps={{ "aria-label": "naked" }}
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
                  <label>Ảnh chụp từ drone :</label>
                </GridItem>

                <GridItem xs={12} sm={12} md={8}>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                      <img
                        src="https://image.tienphong.vn/665x449/Uploaded/2020/lce_cyqlv/2018_12_25/tien_phong_chay_1_stlr.jpg"
                        alt="Girl in a jacket"
                        width="400"
                        height="300"
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={1}></GridItem>
                    <GridItem xs={12} sm={12} md={5}>
                      <img
                        src="https://image2.tienphong.vn/w665/Uploaded/2020/lce_cyqlv/2018_12_25/tien_phong_chay_2_qvey.jpg"
                        alt="Girl in a jacket"
                        width="400"
                        height="300"
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <img
                        src="https://image2.tienphong.vn/w665/Uploaded/2020/lce_cyqlv/2018_12_25/tien_phong_chay_jpqr.jpg"
                        alt="Girl in a jacket"
                        width="400"
                        height="300"
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={1}></GridItem>
                    <GridItem xs={12} sm={12} md={5}>
                      <img
                        src="https://thanhtra.com.vn/portals/0/news_images/2016/07/khaithacngan/hien_truong_vu_chay_1707.jpg"
                        alt="Girl in a jacket"
                        width="400"
                        height="300"
                      />
                    </GridItem>
                  </GridContainer>

                </GridItem>
                <GridItem xs={12} sm={12} md={2}></GridItem>

              </GridContainer>

              <br></br>

              <GridContainer>

                <GridItem xs={12} sm={12} md={2}>
                  <label>Đánh giá mức độ hỏng hóc :</label>
                </GridItem>

                <GridItem xs={12} sm={12} md={10}>
                  <RadioGroup aria-label="level" value="1" name="gender1" >
                    <FormControlLabel
                      value="1"
                      control={<Radio color="primary" />}
                      label="Rất nghiêm trọng"
                    />
                    <FormControlLabel
                      value="2"
                      control={<Radio color="primary" />}
                      label="Nghiêm trọng"
                    />
                    <FormControlLabel
                      value="3"
                      control={<Radio color="primary" />}
                      label="An toàn"
                    />
                  </RadioGroup>
                </GridItem>
                <GridItem xs={12} sm={12} md={2}></GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Link to={`/admin/myreports`}>
                <Button color="info">Xuất</Button>
              </Link>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default Create;
