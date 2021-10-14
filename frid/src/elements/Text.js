import { textAlign } from "@mui/system";
import React from "react";
import styled from "styled-components";
import { css, keyframes } from "@emotion/react";
const Text = (props) => {
  const {
    bold,
    color,
    size,
    children,
    margin,
    padding,
    basket,
    _onClick,
    display,
    is_inline,
  } = props;
  const styles = {
    bold: bold,
    color: color,
    size: size,
    margin,
    padding,
    basket,
    display,
    is_inline,
  };
  return (
    <P onClick={_onClick} {...styles}>
      {children}
    </P>
  );
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: "#222831",
  size: "14px",
  margin: false,
  padding: false,
  basket: false,
  _onClick: () => {},
  is_inline: false,
};

const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) =>
    props.basket
      ? " text-align:center; &:hover{ cursor: pointer; transition: 0.3s ease-in-out; color:white; "
      : ""}
  ${(props) => (props.is_inline ? "display:inline-block;" : "")}
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

export default Text;
