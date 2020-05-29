import React from "react";
import "./App.css";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  CardActions,
  Button,
} from "@material-ui/core";

function Top() {
  return (
    <div className="App">
      <Box style={{ backgroundColor: "#D7CCC8", width: 600, height: 800 }}>
        <br /> <br /> <br />
        <Card
          style={{
            margin: "auto",
            width: "50%",
          }}
        >
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              ユーザ認証
              <br /> <br /> <br />
              <TextField
                id="outlined"
                label="UserName"
                defaultValue="test"
                variant="outlined"
              />
              <br /> <br /> <br />
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="password"
                defaultValue="*******"
                variant="outlined"
              />
            </Typography>
          </CardContent>
          <CardActions disableSpacing style={{ textAlien: "center" }}>
            <Button
              aria-label="add to favorites"
              color="textSecondary"
              style={{
                border: "solid 1px #000",
                margin: "auto",
              }}
            >
              login
            </Button>
          </CardActions>
        </Card>
        <br /> <br /> <br />
        <Card
          style={{
            margin: "auto",
            width: "50%",
          }}
        >
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              新規登録
            </Typography>
          </CardContent>
          <CardActions disableSpacing style={{ textAlien: "center" }}>
            <Button
              aria-label="add to favorites"
              color="textSecondary"
              style={{
                border: "solid 1px #000",
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

export default Top;
