import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const {
    is_flex,
    width,
    margin,
    padding,
    bg,
    children,
    center,
    _onClick,
    justify_content,
    flex_wrap,
    is_grid,
    basket,
  } = props

  const styles = {
    is_flex: is_flex,
    width: width,
    margin: margin,
    padding: padding,
    bg: bg,
    center: center,
    children: children,
    justify_content: justify_content,
    flex_wrap: flex_wrap,
    is_grid,
    basket,
  }

  return (
    <GridBox {...styles} onClick={_onClick}>
      {children}
    </GridBox>
  )
}

Grid.defaultProps = {
  children: null,
  is_flex: false,
  width: "",
  padding: false,
  margin: false, //만약에 패딩과 margin의 값이 있으면 그거 그대로 들어가게 하기 위한 설정
  bg: false,
  center: false,
  _onClick: () => {},
  justify_content: false,
  flex_wrap: false,
  basket: false,
}

const GridBox = styled.div`
  width: ${(props) => props.width};
  justify-content: ${(props) =>
    props.justify_content ? `${props.justify_content};` : ""};
  box-sizing: border-box; //테두리까지 포함한다는 마인드
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
  ${(props) => (props.is_flex ? "display: flex; align-items: center; " : "")};
  ${(props) => (props.center ? "text-align: center;" : "")};
  flex-wrap: ${(props) => (props.flex_wrap ? `${props.flex_wrap};` : "")};
  ${(props) =>
    props.is_grid
      ? "display: grid; grid-template-columns: repeat(4,1fr); grid-gap: 1rem; position: absolute; top:50%; left:50%; transform:translate(-50%, -50%) "
      : ""}
  ${(props) =>
    props.basket
      ? "padding:10px 20px; border-radius:10px; &:hover{background-color:#000000de; cursor: pointer; transition: 0.4s ease-in-out; padding:10px 25px}"
      : ""}
`

export default Grid
