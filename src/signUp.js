import React from "react";
import "./App.css";
import {
  Box,
  Table,
  TableCell,
  Card,
  CardHeader,
  CardContent,
  Typography,
  TextField,
  CardActions,
  Button,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

function SignUp() {
  return (
    <div className="App">
      <Box
        style={{ backgroundColor: "#D7CCC8", width: "800px", height: "100px" }}
      ></Box>
      <Box
        style={{ backgroundColor: "#f7eeeb", width: "800px", height: "700px" }}
      >
        <Card
          style={{
            backgroundColor: "#f7eeeb",
            position: "absolute",
            left: 0,
            border: "none",
            boxShadow: "none",
          }}
        >
          <br /> <br /> <br />
          <TextField
            id="outlined"
            label="UserName"
            defaultValue="test"
            variant="outlined"
            style={{
              backgroundColor: "#FFFFFF",
              marginLeft: "10px",
            }}
          />
          <br /> <br /> <br />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="password"
            defaultValue="*******"
            variant="outlined"
            style={{
              backgroundColor: "#FFFFFF",
              marginLeft: "10px",
            }}
          />
          <br /> <br /> <br />
          <TextField
            id="outlined-password-input"
            label="Confirm Password"
            type="password"
            autoComplete="password"
            defaultValue="*******"
            variant="outlined"
            style={{
              backgroundColor: "#FFFFFF",
              marginLeft: "10px",
            }}
          />
          <br /> <br /> <br />
          <TextField
            id="outlined"
            label="MailAddress"
            defaultValue="test@example.jp"
            variant="outlined"
            style={{
              backgroundColor: "#FFFFFF",
              marginLeft: "10px",
            }}
          />
          <br /> <br /> <br />
          <CardActions disableSpacing style={{ textAlien: "center" }}>
            <Button
              aria-label="add to favorites"
              color="textSecondary"
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
