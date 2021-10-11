import React from 'react'
import styled from 'styled-components'
import Button from '../elements/Button';
import Grid from '../elements/Grid';
import Image from '../elements/Image';
import Input from '../elements/Input';
import Text from '../elements/Text';
import { useHistory } from 'react-router';
const Login = (props) => {
  const history = useHistory();
  return (
    <Grid margin='100px 0px 0px 0px' justify_content='center'>
      <Grid is_flex justify_content="center">
        <Image size='300' is_NoBorderImage>
        </Image>
      </Grid>

      <Grid is_flex margin="50px 0px 0px 0px">
        <Input placeholder='로그인' width='300px' />
      </Grid>
      <Grid is_flex>
        <Input placeholder='비밀번호' />
      </Grid>
      
      <Grid margin="0px 390px">
        <Button is_RectangleCancleBtn size='' text='회원가입' _onClick={()=> history.push('/signup')} />
        <Button
          is_RectangleSubmitBtn
          size=''
          text='로그인'
          _onClick={() => history.push('/')}
        />
      </Grid>
    </Grid>
  );
}

export default Login;

