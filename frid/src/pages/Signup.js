import React, { useState } from "react";
import styled from "styled-components";
import Button from "../elements/Button";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Input from "../elements/Input";
import Text from "../elements/Text";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { emailCheck } from "../shared/common";
const Signup = (props) => {
  let dispatch = useDispatch();
  let history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [is_pwd, setIs_pwd] = useState("");
  const [email, setEmail] = useState("");
  //  const signup = () => {
  //    if (id === '' || pwd === '' || email === '') {
  //      window.alert('아이디, 패스워드, 이메일을 모두 입력해주세요!');
  //      return;
  //    }

  //    if (!emailCheck(id)) {
  //      window.alert('이메일 형식이 맞지 않습니다!');
  //      return;
  //    }

  //    if (pwd !== is_pwd) {
  //      window.alert('패스워드와 패스워드 확인이 일치하지 않습니다!');
  //      return;
  //    }
  //    if(pwd.lenght<8)
  //    {
  //      window.alert('비밀번호 8자 이상 입력해주세요');
  //      return;
  //    }

  //    dispatch(userActions.signupAPI(id, pwd, email));
  //  };
  return (
    <Grid margin="100px 0px 0px 0px" justify_content="center">
      <Grid is_flex justify_content="center">
        <Image size="300" is_NoBorderImage></Image>
      </Grid>

      <Grid is_flex margin="50px 0px 0px 0px">
        <Input
          placeholder="아이디"
          width="300px"
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
          placeholder="비밀번호(8자 이상)"
          _onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
      </Grid>
      <Grid is_flex>
        <Input
          password
          type="password"
          placeholder="비밀번호확인(8자 이상)"
          _onChange={(e) => {
            setIs_pwd(e.target.value);
          }}
          value={is_pwd}
        />
      </Grid>
      <Grid is_flex>
        <Input
          placeholder="이메일(@,.이 들어갑니다)"
          _onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
      </Grid>
      <Grid margin="0px 0px 0px 490px">
        <Button
          is_RectangleCancleBtn
          size=""
          text="취소"
          _onClick={() => history.push("/login")}
        />
        <Button
          is_RectangleSubmitBtn
          size=""
          text="확인"
          _onClick={() => {
            dispatch(userActions.signupAPI(username, password, email));
          }}
        />
      </Grid>
    </Grid>
  );
};
const SignForm = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export default Signup;
