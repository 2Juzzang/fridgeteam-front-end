import React from "react"
import styled from "styled-components"

export const Blank = () => {
  return <Black>재료를 입력해주세요</Black>
}

const Black = styled.div`
  font-size: 40px;
  color: white;
  background-color: black;
  display: inherit;
`
