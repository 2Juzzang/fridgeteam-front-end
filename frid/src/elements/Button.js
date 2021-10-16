import styled from "styled-components"
import BackspaceIcon from "@mui/icons-material/Backspace"
import ModeEditSharpIcon from "@mui/icons-material/ModeEditSharp"

const Button = (props) => {
  const {
    text,
    children,
    _onClick,
    margin,
    size,
    is_CircleCancleBtn,
    is_CircleSubmitBtn,
    is_RectangleCancleBtn,
    is_RectangleSubmitBtn,
    is_detBtn,
    is_updateBtn,
  } = props
  const styles = {
    size: size,
    margin: margin,
  }
  if (is_CircleCancleBtn) {
    return (
      <CircleCancleBtn onClick={_onClick} {...styles}>
        {text ? text : children}
      </CircleCancleBtn>
    )
  }
  if (is_CircleSubmitBtn) {
    return (
      <CircleSubmitBtn onClick={_onClick} {...styles}>
        {text ? text : children}
      </CircleSubmitBtn>
    )
  }
  if (is_RectangleCancleBtn) {
    return (
      <RectangleCancleBtn onClick={_onClick} {...styles}>
        {text ? text : children}
      </RectangleCancleBtn>
    )
  }
  if (is_RectangleSubmitBtn) {
    return (
      <RectangleSubmitBtn onClick={_onClick} {...styles}>
        {text ? text : children}
      </RectangleSubmitBtn>
    )
  }
  if (is_detBtn) {
    return (
      <BackspaceIcon
        onClick={_onClick}
        sx={{
          color: "#ff2020a6",
          transform: "scaleX(-1)",
          fontSize: "40px",
          boxShadow: 5,
        
          "&:hover": {
            color: "red",
            cursor: "pointer",
            transition: "0.3s ease-in",
          },
        }}
      />
    )
  }
  if (is_updateBtn) {
    return (
      <ModeEditSharpIcon
        onClick={_onClick}
        sx={{
          fontSize: "22px",
          boxShadow: 5,
          color: "#ffffffad",
          "&:hover": {
            color: "WHITE",
            cursor: "pointer",
            transition: "0.3s ease-in",
          },
        }}
      />
    )
  }

  return (
    <RectangleSubmitBtn {...styles}>
      {text ? text : children}
    </RectangleSubmitBtn>
  )
}

Button.defaultProps = {
  _onClick: () => {},
  margin: false,
  width: "100%",
  size: 36,
  is_CircleSubmitBtn: false,
  is_CircleCancleBtn: false,
  is_RectangleSubmitBtn: false,
  is_RectangleCancleBtn: false,
  is_detBtn: false,
  text: false,
  children: null,
}
const RectangleCancleBtn = styled.button`
  --size: ${(props) => props.size}px;
  width: calc(var(--size) * 2);
  height: var(--size);
  background-color: #ced4da;
  color: white;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 800;
  text-align: center;
  vertical-align: middle;
  border: none;
  border: 1px solid;
  border-radius: 5px;
  margin: ${(props) => props.margin};
  &:hover {
    cursor: pointer;
  }
`
const RectangleSubmitBtn = styled.button`
  --size: ${(props) => props.size}px;
  width: calc(var(--size) * 2);
  height: var(--size);
  background-color: #8ce99a;
  color: white;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 800;
  text-align: center;
  vertical-align: middle;
  border: none;
  border: 1px solid;
  border-radius: 5px;
  margin: ${(props) => props.margin};
  &:hover {
    cursor: pointer;
    transition: 1s ease-in-out;
  }
  @media only screen and (max-width: 768px) {
    font-size: 12px;
    width: 60px;
    height: 60px;
  }
`
const CircleSubmitBtn = styled.button`
  --size: ${(props) => props.size}px;
  width: calc(var(--size) * 1.5);
  height: calc(var(--size) * 1.5);
  border-radius: 50%;
  margin: ${(props) => props.margin};
  color: white;
  box-sizing: border-box;
  font-size: 20px;
  font-weight: 800;
  text-align: center;
  vertical-align: middle;
  border: 1px solid;
  background-color: #8ce99a;
  &:hover {
    cursor: pointer;
  }
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`
const CircleCancleBtn = styled.button`
  --size: ${(props) => props.size}px;
  width: calc(var(--size) * 1.5);
  height: calc(var(--size) * 1.5);
  border-radius: 50%;
  margin: ${(props) => props.margin};
  color: white;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 800;
  text-align: center;
  vertical-align: middle;
  border: 1px solid;
  background-color: #ced4da;
  &:hover {
    cursor: pointer;
  }
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`

export default Button;