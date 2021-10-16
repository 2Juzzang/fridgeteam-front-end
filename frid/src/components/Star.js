import styled from "styled-components";
import { BiFridge } from 'react-icons/bi';
import { Grid, Button, Input, Text, Image } from "../elements/index";
import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators as commentActions } from '../redux/modules/comment';
const Star = (props) => {
  const dispatch = useDispatch();
  let [check1, setCheck1] = React.useState(false);
  let [check2, setCheck2] = React.useState(false);
  let [check3, setCheck3] = React.useState(false);
  let [check4, setCheck4] = React.useState(false);
  let [check5, setCheck5] = React.useState(false);

 

  let a = check1 + check2 + check3 + check4 + check5;
  let [sum, setSum] = React.useState(a);
  console.log(a, sum);
//  React.useEffect(() => {
//    dispatch(commentActions.setStar(a));
//  }, []);
  let clickCheck1 = (check1) => {
    setCheck1(!check1);
    sumCheck(sum+check1);
    // console.log("1", check1)
  };
  let clickCheck2 = (check2) => {
    setCheck2(!check2);
    sumCheck(a);
    // console.log("2", check2)
  };

  let clickCheck3 = (check3) => {
    setCheck3(!check3);
    sumCheck(a);
    // console.log("3", check3)
  };
  let clickCheck4 = (check4) => {
    setCheck4(!check4);
    sumCheck(a);
    // console.log("4", check4)
  };
  let clickCheck5 = (check5) => {
    setCheck5(!check5);
   sumCheck(a);
    // console.log("5", check5)
  };

  let sumCheck = (a) => {
    setSum(a);
  };
 
  return (
    <Grid is_flex justify_content='flex-start' padding='0px' margin='0px'>
      <Grid
        padding='0px'
        width='auto'
        margin='0px'
        _onClick={() => {
          clickCheck1(check1);
        }}
      >
        {check1 ? <BiFridge size='40' color='red' /> : <BiFridge size='40' />}
      </Grid>

      <Grid
        padding='0px'
        width='auto'
        margin='0px'
        _onClick={() => {
          clickCheck2(check2);
        }}
      >
        {check2 ? <BiFridge size='40' color='red' /> : <BiFridge size='40' />}
      </Grid>
      <Grid
        padding='0px'
        width='auto'
        margin='0px'
        _onClick={() => {
          clickCheck3(check3);
        }}
      >
        {check3 ? <BiFridge size='40' color='red' /> : <BiFridge size='40' />}
      </Grid>
      <Grid
        padding='0px'
        width='auto'
        margin='0px'
        _onClick={() => {
          clickCheck4(check4);
        }}
      >
        {check4 ? <BiFridge size='40' color='red' /> : <BiFridge size='40' />}
      </Grid>
      <Grid
        padding='0px'
        width='auto'
        margin='0px'
        _onClick={() => {
          clickCheck5(check5);
        }}
      >
        {check5 ? <BiFridge size='40' color='red' /> : <BiFridge size='40' />}
      </Grid>

      <Grid
        padding='0px'
        width='auto'
        margin='0px 30px'
        _onClick={() => {
           window.alert('평점 등록 완료했습니다');
          dispatch(commentActions.setStar(a));
        }}
      >
        <Button
          _onClick={() => {
            console.log('바보');
          }}
          size='28'
        >
          <Text color='white' size='20px'>
            등록
          </Text>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Star;
