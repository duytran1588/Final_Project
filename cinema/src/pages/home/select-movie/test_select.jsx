import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./selectMovie.scss";

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function TestSelectMovie() {
  const classes = useStyles();
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="buyTicketForm">
      <form style={{ width: "100%" }}>
        <div className="container">
          <div className="row">
            <div className="col-2 choose_film">
              <select>
                <option>ma</option>
                <option>mat</option>
                <option>ma</option>
                <option>ma</option>
                <option>ma</option>
              </select>
            </div>
            <div className="col-2 choose_cinema">
              <select>
                <option>rap 1</option>
                <option>rap 1</option>
                <option>rap 1</option>
                <option>rap 1</option>
                <option>rap 1</option>
              </select>
            </div>
            <div className="col-2 choose_day">
              <select>
                <option>rap 1</option>
                <option>rap 1</option>
                <option>rap 1</option>
                <option>rap 1</option>
                <option>rap 1</option>
              </select>
            </div>
            <div className="col-2 choose_time">
              <select>
                <option>rap 1</option>
                <option>rap 1</option>
                <option>rap 1</option>
                <option>rap 1</option>
                <option>rap 1</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TestSelectMovie;
