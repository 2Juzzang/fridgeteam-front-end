import React from "react"
import { Grid, Button, Input, Text, Image } from "../elements/"
import { history } from "../redux/configStore"
import { useDispatch, useSelector } from 'react-redux';
import { getCookie } from '../shared/Cookie';
import { actionCreators as userActions } from '../redux/modules/user';
export const Header = (props) => {
  const dispatch = useDispatch();
   const is_login = useSelector((state) => state.user.is_login);
   const cookie = getCookie('user_login') ? true : false;
    const siteLogout = () => {
      if (window.confirm('로그아웃 하시겠습니까?')) {
        dispatch(userActions.logOut());
        history.replace('/');
      } else {
        console.log('로그인 유지');
      }
    };
   if(is_login&&cookie)
   {
   return (
     <>
       <Grid is_flex justify_content='space-between'>
         <Grid
           margin='0'
           _onClick={() => {
             history.push('/');
           }}
         >
           <Image />
         </Grid>
         <Button
           is_RectangleSubmitBtn
           margin='10px 0px'
           size='80'
           _onClick={
            siteLogout
           }
         >
           로그아웃
         </Button>
       </Grid>
     </>
   );
   }
   else{
     return (
       <>
         <Grid is_flex justify_content='space-between'>
           <Grid
             margin='0'
             _onClick={() => {
               history.push('/');
             }}
           >
             <Image />
           </Grid>
           <Button
             is_RectangleSubmitBtn
             margin='10px 0px'
             size='80'
             _onClick={() => {
               history.push('/login');
             }}
           >
             로그인
           </Button>
         </Grid>
       </>
     );
   }
  
}
