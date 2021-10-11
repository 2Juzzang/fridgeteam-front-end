import React from 'react'
import styled from "styled-components";

const Input = (props) => {
    const { type, label, id, placeholder, value, _onChange,text } = props;
    
    
        return (<div>
         <CustomLabel>{label}
             </CustomLabel>
            <InputBox>
           </InputBox>
        </div>
           
            
          
        )
    
}

Input.defaultProps = {
    label: "",
    placeholder: "",
    value: "",
    _onChange: () => {},
}
const InputBox = styled.input`
 
  margin-bottom: 30px;

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