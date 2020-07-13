import React, {useEffect, useState} from "react";
import "../App.css";
import {
  Box,
  Card,
  CardActions,
  Button,
} from "@material-ui/core";
import CustomTextField from './customText';
import {userCreateAction} from '../action/user';
import {connect} from 'react-redux';

const PASS_MIN = 6;

const mapDispatchToProps = dispatch => ({
  createUser(mail, password, userName) {
    dispatch(userCreateAction({email: mail, password: password, name: userName}));
  }
});

function SignUp(props) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mail, setMail] = useState('');
  const [error, setError] = useState('');
  const [isPost, setIsPost] = useState(false);
  useEffect(()=>{
  },[userName, password, confirmPassword, mail]);
  return (
    <div className="App">
      <Box
        style={{backgroundColor: "#D7CCC8", width: "100%", height: "100px"}}
      ></Box>
      <Box
        style={{backgroundColor: "#f7eeeb", width: "100%", height: "700px"}}
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
            onChange={(e) => setUserName(String(e.target.value))}
          />
          <CustomTextField
            label="Password"
            type="password"
            autoComplete="password"
            placeholder="*******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <CustomTextField
            label="Confirm Password"
            type="password"
            autoComplete="password"
            placeholder="*******"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <CustomTextField
            label="MailAddress"
            placeholder="test@example.jp"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <p>{error ? error : ''}</p>
          <CardActions disableSpacing style={{textAlien: "center"}}>
            <Button
              aria-label="add to favorites"
              disabled={isPost}
              onClick={() => {
                if (password !== confirmPassword) {
                  setError('パスワードが一致しません');
                } else if (password.length < PASS_MIN){
                  setError('パスワードは6字以上です');
                } else {
                  setError('');
                  setIsPost(true);
                  props.createUser(mail, password, userName);
                  setIsPost(false);
                }
              }}
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

export default connect(null, mapDispatchToProps)(SignUp);
