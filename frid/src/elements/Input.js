import React from 'react'
import styled from "styled-components";
import Grid from "./Grid"

const Input = (props) => {

    
  const { type, label, id, placeholder, value, _onChange, text, basket_input,width } =
    props;
  const styles= {
         placeholder:placeholder,
         width: width
       }

  if (basket_input) {
    return (
      <BasketContinaer>
        <BasketInput basket_input onChange={_onChange} />
      </BasketContinaer>
    )
  }

  return (
    <div>
      <CustomLabel>{label}</CustomLabel>
      <InputBox {...styles}></InputBox>
    </div>
  )
}

Input.defaultProps = {
  label: "",
  placeholder: "",
  value: "",
  _onChange: () => {},
  basket_input: false,
  width:false,

}
const InputBox = styled.input`
  margin-bottom: 30px;
  width:300px;
  height:50px;
  font-size:20px;

  &:focus {
    outline: #69db7c solid 1px;
  }
`
const CustomLabel = styled.label`
  display: inline-block;
  width: auto;
  margin-bottom: 10px;
  margin-right: 10px;
  color: black;
  font-weight: 600;
`

const BasketContinaer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
`

const BasketInput = styled.input`
  position: absolute;
  right: 0;
  padding: 22px;
  border-radius: 5px;
  font-size: 30px;
  &:focus {
    outline: #69db7c solid 1px;
  }
`

export default Input;