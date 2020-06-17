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
import {
  Link, BrowserRouter as Router,
  useLocation 
} from "react-router-dom";

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
              <GridContainer>
                <GridItem xs={12} sm={12} md={2}>
                  <p>Tên báo cáo :</p>
                </GridItem>

                <GridItem xs={12} sm={12} md={4}>
                  <TextField
                    id="filled-password-input"
                    type="text"
                    variant="outlined"
                    value="Báo cáo đường dây điện số 5"
                    fullWidth
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
                    value="19/5/2020"
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
                      value={10}
                    >
                      <MenuItem value={10} selected>Quý II tháng 1 năm 2020</MenuItem>
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
                    value="10/5/2020"
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
                    value="15/5/2020"
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
                      value={10}
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Phùng Văn Tùng</MenuItem>
                      <MenuItem value={20}>Trần Văn Hoàng</MenuItem>
                      <MenuItem value={30}>Nguyễn Quang Anh</MenuItem>
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
                    value="Nguyễn Chí Thanh"
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
                    value="Đường dây điện từ số nhà 71 đến số nhà 301"
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
                    value="Tại đường dây đi qua cột điện gần gõ 107, ngay trước quán Photocopy"
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
                    value="Vào khoảng 12h trưa, đường dây điện được phát hiện là đang bốc cháy dữ dội, nguyên nhân có thể là nhiệt độ ngoài trời quá cao và quá tải điện "
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
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                      <img src="https://image.tienphong.vn/665x449/Uploaded/2020/lce_cyqlv/2018_12_25/tien_phong_chay_1_stlr.jpg" alt="Girl in a jacket" width="400" height="300" />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={1}></GridItem>
                    <GridItem xs={12} sm={12} md={5}>
                      <img src="https://image2.tienphong.vn/w665/Uploaded/2020/lce_cyqlv/2018_12_25/tien_phong_chay_2_qvey.jpg" alt="Girl in a jacket" width="400" height="300" />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <img src="https://image2.tienphong.vn/w665/Uploaded/2020/lce_cyqlv/2018_12_25/tien_phong_chay_jpqr.jpg" alt="Girl in a jacket" width="400" height="300" />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={1}></GridItem>
                    <GridItem xs={12} sm={12} md={5}>
                      <img src="https://thanhtra.com.vn/portals/0/news_images/2016/07/khaithacngan/hien_truong_vu_chay_1707.jpg" alt="Girl in a jacket" width="400" height="300" />
                    </GridItem>
                  </GridContainer>

                </GridItem>
                <GridItem xs={12} sm={12} md={2}></GridItem>

              </GridContainer>

              <br></br>

              <GridContainer>

                <GridItem xs={12} sm={12} md={2}>
                  <p>Đánh giá mức độ hỏng hóc :</p>
                </GridItem>

                <GridItem xs={12} sm={12} md={10}>
                  <RadioGroup aria-label="level" value="1" name="gender1" >
                    <FormControlLabel value="1" control={<Radio color="primary" />} label="Rất nghiêm trọng" />
                    <FormControlLabel value="2" control={<Radio color="primary" />} label="Nghiêm trọng" />
                    <FormControlLabel value="3" control={<Radio color="primary" />} label="An toàn" />
                  </RadioGroup>
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Link to={`/admin/myreports/` + `${queryParam}`}>
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
