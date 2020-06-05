import React, {useState} from "react";
import "../App.css";
import {
  Box,
  Card,
  CardActions,
  Button,
} from "@material-ui/core";
import CustomTextField from './customText';

const {userName, setUserName} = useState('');
const {password, setPassword} = useState('');
const {confirmPassword, setConfirmPassword} = useState('');
const {mail, setMail} = useState('');

function SignUp() {
  return (
    <div className="App">
      <Box
        style={{ backgroundColor: "#D7CCC8", width: "100%", height: "100px" }}
      ></Box>
      <Box
        style={{ backgroundColor: "#f7eeeb", width: "100%", height: "700px" }}
      >
        <Card
          style={{
            backgroundColor: "#f7eeeb",
            position: "relative",
            border: "none",
            boxShadow: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <CustomTextField
            label="UserName"
            placeholder="test"
            value={userName}
            onChange={setUserName}
          />
          <CustomTextField
            label="Password"
            type="password"
            autoComplete="password"
            placeholder="*******"
            value={password}
            onChange={setPassword}
          />
          <CustomTextField
            label="Confirm Password"
            type="password"
            autoComplete="password"
            placeholder="*******"
            value={confirmPassword}
            onChange={setConfirmPassword}
          />
          <CustomTextField
            label="MailAddress"
            placeholder="test@example.jp"
            value={mail}
            onChange={setMail}
          />
          <CardActions disableSpacing style={{ textAlien: "center" }}>
            <Button
              aria-label="add to favorites"
              color="textSecondary"
              onClick={() => {}}
              style={{
                border: "solid 1px #000",
                backgroundColor: "#FFFFFF",
                margin: "auto",
              }}
            >
              SignUp
            </Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
}

export default SignUp;
