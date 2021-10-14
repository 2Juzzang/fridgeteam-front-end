import styled from "styled-components"
import { FaRegGrinAlt } from 'react-icons/fa';
import { Grid, Button, Input, Text, Image } from '../elements/';
import React from 'react'

const Star = (props) => {
  let [check1,setCheck1] = React.useState(false)
  let [check2,setCheck2] = React.useState(false)
  let [check3,setCheck3] = React.useState(false)
  let [check4,setCheck4] = React.useState(false)
  let [check5,setCheck5] = React.useState(false)
  
   let a = check1 + check2 + check3 + check4 + check5;
  let [sum,setSum] = React.useState(a)

  let clickCheck1 = (check1) =>{
    setCheck1(!check1)
    
  }
  let clickCheck2 = () => {
      setCheck2(!check2);
        console.log(check2);
  };
  let clickCheck3 = () => {
    setCheck3(!check3);
  };
  let clickCheck4 = () => {
   setCheck4(!check4)
  };
  let clickCheck5 = () => {
    setCheck5(!check5)
  };
  
  let sumCheck = (sum) => {
    
     
      setSum(a)
       console.log(sum);
     
  }
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
        {check1 ? (
          <FaRegGrinAlt size='70' color='red' />
        ) : (
          <FaRegGrinAlt size='70' />
        )}
      </Grid>

      <Grid
        padding='0px'
        width='auto'
        margin='0px'
        _onClick={() => {
          clickCheck2(check2);
        }}
      >
        {check2 ? (
          <FaRegGrinAlt size='70' color='red' />
        ) : (
          <FaRegGrinAlt size='70' />
        )}
      </Grid>
      <Grid
        padding='0px'
        width='auto'
        margin='0px'
        _onClick={() => {
          clickCheck3(check3);
        }}
      >
        {check3 ? (
          <FaRegGrinAlt size='70' color='red' />
        ) : (
          <FaRegGrinAlt size='70' />
        )}
      </Grid>
      <Grid
        padding='0px'
        width='auto'
        margin='0px'
        _onClick={() => {
          clickCheck4(check4);
        }}
      >
        {check4 ? (
          <FaRegGrinAlt size='70' color='red' />
        ) : (
          <FaRegGrinAlt size='70' />
        )}
      </Grid>
      <Grid
        padding='0px'
        width='auto'
        margin='0px'
        _onClick={() => {
          clickCheck5(check5);
        }}
      >
        {check5 ? (
          <FaRegGrinAlt size='70' color='red' />
        ) : (
          <FaRegGrinAlt size='70' />
        )}
      </Grid>

      <Grid padding='0px' width='auto' margin='0px 30px'>
        <Button
          _onClick={() => {
            sumCheck(sum);
          }}
          is_CircleSubmitBtn
          size='50'
        >
          확인
        </Button>
      </Grid>
    </Grid>
  );
}

export default Star;

