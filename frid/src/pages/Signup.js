import React from 'react';
import styled from 'styled-components';
import Button from '../elements/Button';
import Grid from '../elements/Grid';
import Image from '../elements/Image';
import Input from '../elements/Input';
import Text from '../elements/Text';
import { useHistory } from 'react-router';

const Signup = (props) => {
  let history = useHistory();
  return (
    <Grid margin='100px 0px 0px 0px' justify_content='center'>
      <Grid is_flex justify_content='center'>
        <Image size='300' is_NoBorderImage></Image>
      </Grid>

      <Grid is_flex margin='50px 0px 0px 0px'>
        <Input placeholder='아이디' width='300px' />
      </Grid>
      <Grid is_flex>
        <Input placeholder='비밀번호(8자 이상)' />
      </Grid>
      <Grid is_flex>
        <Input placeholder='비밀번호확인(8자 이상)' />
      </Grid>
      <Grid is_flex>
        <Input placeholder='이메일(@,.이 들어갑니다)' />
      </Grid>
      <Grid margin='0px 0px 0px 490px'>
        <Button
          is_RectangleCancleBtn
          size=''
          text='취소'
          _onClick={() => history.push('/login')}
        />
        <Button
          is_RectangleSubmitBtn
          size=''
          text='확인'
          _onClick={() => history.push('/login')}
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
