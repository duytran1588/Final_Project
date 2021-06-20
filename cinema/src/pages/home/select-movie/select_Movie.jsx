import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Button } from "@material-ui/core";
import "./selectMovie.scss";

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function SelectMovie() {
  const classes = useStyles();
  const [age, setAge] = useState("");
  

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="buyTicketForm">
      <FormControl className={classes.formControl}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">Phim </MenuItem>
          <MenuItem value="tranTi">Trạng Tí Phiêu Lưu Ký</MenuItem>
          <MenuItem value="haiPhong">Lật Mặt</MenuItem>
          <MenuItem value="haNoi">Thiên Thần Hộ Mệnh</MenuItem>
          <MenuItem value="daNang">Người Nhân Bản</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">Rạp</MenuItem>
          <MenuItem value="haiPhong">Hải Phòng</MenuItem>
          <MenuItem value="haNoi">Hà Nội</MenuItem>
          <MenuItem value="daNang">Đà Nẵng</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">Ngày Xem</MenuItem>
          <MenuItem value="haiPhong">Hải Phòng</MenuItem>
          <MenuItem value="haNoi">Hà Nội</MenuItem>
          <MenuItem value="daNang">Đà Nẵng</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">Xuất Chiếu</MenuItem>
          <MenuItem value="haiPhong">Hải Phòng</MenuItem>
          <MenuItem value="haNoi">Hà Nội</MenuItem>
          <MenuItem value="daNang">Đà Nẵng</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" className="btnBuyTicket">
        MUA VÉ NGAY
      </Button>
    </div>
  );
}

export default SelectMovie;
