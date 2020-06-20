import React, {useEffect, useState} from "react";
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
import {userAuthAction} from '../action/user';

const mapStateToProps = state => ({
  verified: state.verified
});

const mapDispatchToProps = dispatch => ({
  push(path) {
    dispatch(push(path));
  },
  authUser(mail, password) {
    dispatch(userAuthAction({email: mail, password: password}));
  }
});

function Top(props) {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

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
            <Typography>
              ユーザ認証
            </Typography>
            <br /> <br /> <br />
            <TextField
              id="outlined"
              label="MailAddress"
              placeholder="test"
              variant="outlined"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </CardContent>
          <CardActions disableSpacing style={{ textAlien: "center" }}>
            <Button
              aria-label="add to favorites"
              style={{
                border: "solid 1px #000",
                margin: "auto",
              }}
              onClick={() => {props.authUser(mail, password);  props.push(PATHS.rssFeed);}}
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
            <Typography>
              新規登録
            </Typography>
          </CardContent>
          <CardActions disableSpacing style={{ textAlien: "center" }}>
            <Button
              aria-label="add to favorites"
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

export default connect(mapStateToProps, mapDispatchToProps)(Top);
