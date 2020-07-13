import React from "react";
import "../App.css";
import {
  TextField,
} from "@material-ui/core";

function CustomTextField(props) {
  return (
    <TextField
      label={props.label || ""}
      placeholder={props.placeholder || ""}
      variant="outlined"
      type={props.type}
      autoComplete={props.autoComplete}
      value={props.value}
      onChange={props.onChange}
      style={{
        backgroundColor: "#FFFFFF",
        marginLeft: "10px",
        marginTop: "10px",
        width: "300px"
      }}
    />
  );
}

export default CustomTextField;
