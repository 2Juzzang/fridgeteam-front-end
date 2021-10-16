import React from "react";
import styled from "styled-components";
import Button from "../elements/Button";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Input from "../elements/Input";
import Text from "../elements/Text";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";
import { emailCheck } from "../shared/common";

const Login = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const login = () => {
    if(username === "" || password === "")
    {
      window.alert("아이디 혹은 비밀번호가 공란입니다!")
      return;
    }
   
    
    dispatch(userActions.loginAPI(username,password))
  }
  return (
    <Grid margin="100px 0px 0px 0px" justify_content="center">
      <Grid is_flex justify_content="center">
        <Image size="300" is_NoBorderImage></Image>
      </Grid>

      <Grid is_flex margin="50px 0px 0px 0px">
        <Input
          placeholder="로그인"
          _onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
        />
      </Grid>

      <Grid is_flex>
        <Input
          password
          type="password"
          placeholder="비밀번호"
          _onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
      </Grid>

      <Grid margin="0px 0px 0px 390px">
        <Button
          is_RectangleCancleBtn
          size=""
          text="회원가입"
          _onClick={() => history.push("/signup")}
        />
        <Button
          is_RectangleSubmitBtn
          size=""
          text="로그인"
          _onClick={() => login()}
        />
      </Grid>
    </Grid>
  );
};

export default Login;
