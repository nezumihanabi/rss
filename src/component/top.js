import React, {useState} from "react";
import "../App.css";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  CardActions,
  Button,
} from "@material-ui/core";
import {PATHS} from '../route';
import {push} from "connected-react-router";
import {connect} from 'react-redux';

const {mail, setMail} = useState('');
const {password, setPassword} = useState('');

const mapDispatchToProps = dispatch => ({
  push(path) {
    dispatch(push(path));
  }
});

function Top(props) {
  return (
    <div className="App">
      <Box style={{ backgroundColor: "#D7CCC8", width: "100%", height: 800 }}>
        <br /> <br /> <br />
        <Card
          style={{
            margin: "auto",
            width: "50%"
          }}
        >
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              ユーザ認証
              <br /> <br /> <br />
              <TextField
                id="outlined"
                label="MailAddress"
                placeholder="test"
                variant="outlined"
                value={mail}
                onChange={setMail}
              />
              <br /> <br /> <br />
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="password"
                placeholder="*******"
                variant="outlined"
                value={password}
                onChange={setPassword}
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
              onClick={() => props.push(PATHS.rssFeed)}
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
              onClick={() => props.push(PATHS.signUp)}
            >
              SignUp
            </Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(Top);
