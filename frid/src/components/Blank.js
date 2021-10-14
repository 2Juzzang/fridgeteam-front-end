import React from "react"
import styled from "styled-components"

export const Blank = (props) => {
  const { is_login } = props

  if (is_login) {
    return <Blanks>냉장고를 채워주세요</Blanks>
  }

  if (!is_login) {
    return <Blanks>로그인 후 이용해주세요</Blanks>
  }
}

Blank.defaultProps = {
  is_login: false,
}

const Blanks = styled.div`
  font-size: 40px;
  color: white;
  background-color: #000000a6;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`
