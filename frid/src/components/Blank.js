import React from "react"
import styled from "styled-components"

export const Blank = () => {
  return <Black>냉장고를 채워주세요</Black>
}

const Black = styled.div`
  font-size: 40px;
  color: white;
  background-color: black;
  display: inherit;
`
