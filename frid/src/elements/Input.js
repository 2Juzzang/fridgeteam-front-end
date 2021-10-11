import React from 'react'
import styled from "styled-components";

const Input = (props) => {
    const { type, label, id, placeholder, value, _onChange,text,width } = props;
       const styles= {
         placeholder:placeholder,
         width: width
       }
    
        return (<div>
         <CustomLabel>{label}
             </CustomLabel>
            <InputBox {...styles} onChange={_onChange}>
           </InputBox>
        </div>
           
            
          
        )
    
}

Input.defaultProps = {
    label: "",
    placeholder: "",
    value: "",
    _onChange: () => {},
    width: false,
}
const InputBox = styled.input`
 
  margin-bottom: 30px;
  width:300px;
  height:50px;
  font-size:20px;

  &:focus {
    
   outline: #69db7c solid 1px;
    
  }
`;
const CustomLabel = styled.label`
  display: inline-block;
  width: auto;
  margin-bottom: 10px;
  margin-right: 10px;
  color: black;
  font-weight: 600;
`;

export default Input;