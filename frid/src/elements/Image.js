import React from "react";
import styled from "styled-components";
import defaultImage from "../종원이의냉장고-001.png";
const Image = (props) => {
  const { size, src, is_CircleImage, is_RectangleImage } = props;
  const styles = {
    size: size,
    src: src,
  };
  if (is_CircleImage) {
    return <CircleImage {...styles} />;
  }
  if (is_RectangleImage) {
    return <RectangleImage {...styles} />;
  }

  return <RectangleImage {...styles} />;
};

Image.defaultProps = {
  size: 100,
  src: defaultImage,
  is_CircleImage: false,
  is_RectangleImage: false,
};

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
export default Image;
