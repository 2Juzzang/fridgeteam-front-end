
import React from 'react'
import styled from "styled-components"
import defaultImage from "../종원이의냉장고-001.png"
const Image = (props) => {
    const {size,src,is_CircleImage,is_RectangleImage,is_NoBorderImage} = props;
    const styles = {
        size: size,
        src: src,
    }
    if(is_CircleImage)
      {
         return (
             <CircleImage  {...styles}/>
         )
      }
      if(is_RectangleImage)
      {
         return (
             <RectangleImage {...styles}/>
         )
      }
      if(is_NoBorderImage)
      {
          return (
              <NoBorderImage {...styles}/>
          )
      }

      return(
          <RectangleImage {...styles}/>
      )
      
    
}

Image.defaultProps= {
    size:100,
    src: defaultImage,
    is_CircleImage: false,
    is_RectangleImage: false,
    is_NoBorderImage: false,

import React from "react";
import styled from "styled-components";
import defaultImage from "../종원이의냉장고-001.png";
const Image = (props) => {

 

  const { size, src, is_CircleImage, is_RectangleImage, is_basketList } = props
  const styles = {
    size: size,
    src: src,
    is_basketList,
  }
  if (is_CircleImage) {
    return <CircleImage {...styles} />
  }
  if (is_RectangleImage) {
    return <RectangleImage {...styles} />
  }
  if (is_basketList) {
    return <BasketList {...styles} />
  }

  return <RectangleImage {...styles} />
}

Image.defaultProps = {
  size: 100,
  src: defaultImage,
  is_CircleImage: false,
  is_RectangleImage: false,

};

}


const CircleImage = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  border: 1px solid;
  background-image: url(${(props) => props.src});
  background-size: cover;
  margin: 4px;

`;



const RectangleImage = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: 5px;
  border: 1px solid;
  background-image: url(${(props) => props.src});
  background-size: cover;
  margin: 4px;

`;



const NoBorderImage = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: 5px;

  background-image: url(${(props) => props.src});
  background-size: cover;
  margin: 4px;
`;


const BasketList = styled.div`
  width: 100vw;
  height: 100vh;
  border-radius: 10px;
  border: 1px solid;
  background-image: url(${(props) => props.src});
  background-size: cover;
  margin: 4px;
  ${(props) => (props.is_bg ? "position:fixed; z-index:-1" : "")}
  background-position: center center;
`

export default Image;


