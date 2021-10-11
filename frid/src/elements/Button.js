import styled from "styled-components"

const Button = (props) => {
    const {text,children,_onClick, margin,size,is_CircleCancleBtn,is_CircleSubmitBtn,is_RectangleCancleBtn,is_RectangleSubmitBtn}= props;
    const styles = {
        size:size,
        margin: margin
    }
    if(is_CircleCancleBtn)       
    {
        return (
            <CircleCancleBtn  onClick={_onClick} {...styles}>{text? text : children}</CircleCancleBtn>
        )
    }
    if(is_CircleSubmitBtn)
    {
        return(
            <CircleSubmitBtn onClick={_onClick} {...styles}>{text? text : children}</CircleSubmitBtn>
        )
    }
    if(is_RectangleCancleBtn)
    {
        return(
            <RectangleCancleBtn onClick={_onClick}>{text? text : children}</RectangleCancleBtn>
        )
    }
    if(is_RectangleSubmitBtn)
    {
        return(
            <RectangleSubmitBtn onClick={_onClick}>{text? text : children}</RectangleSubmitBtn>
        )
    }
    return (
      <div>
           <RectangleSubmitBtn {...styles}/>
        
      </div>
    )
}

Button.defaultProps = {
    _onClick: () => {},
    margin: false,
    width: '100%',
    size: 36,
    is_CircleSubmitBtn: false,
    is_CircleCancleBtn: false,
    is_RectangleSubmitBtn: false,
    is_RectangleCancleBtn: false,
    text: false,
    children: null,

}
const RectangleCancleBtn = styled.button`
 --size: ${(props)=> props.size}px; 
  width: calc(var(--size)*2);
  height: var(--size);
  background-color:#ced4da;
  color: white;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 800;
  text-align: center;
  vertical-align: middle;
  border: none;
  border: 1px solid;
  border-radius:5px; 
  &:hover{
      cursor: pointer;
  }
 
`;
const RectangleSubmitBtn = styled.button`
 --size: ${(props)=> props.size}px; 
  width: calc(var(--size)*2);
  height: var(--size);
  background-color:#8ce99a;
  color: white;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 800;
  text-align: center;
  vertical-align: middle;
  border: none;
  border: 1px solid;
  border-radius:5px; 
  &:hover{
      cursor: pointer;
  }
 
`;
const CircleSubmitBtn = styled.button`
 --size: ${(props)=> props.size}px; 
  width: calc(var(--size)*1.5);
  height: calc(var(--size)*1.5);
  border-radius: 50%;
  
  color: white;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 800;
  text-align: center;
  vertical-align: middle;
  border: 1px solid;
  background-color:#8ce99a;
  &:hover{
      cursor: pointer;
  }
  
`
const CircleCancleBtn = styled.button`
 --size: ${(props)=> props.size}px; 
  width: calc(var(--size)*1.5);
  height: calc(var(--size)*1.5);
  border-radius: 50%;
  
  color: white;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 800;
  text-align: center;
  vertical-align: middle;
  border: 1px solid;
  background-color:#ced4da;
  &:hover{
      cursor: pointer;
  }
  
`
export default Button;