import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "../elements/Image";
import Text from "../elements/Text";
import { loadList } from "../redux/modules/list";

const Recipe = (props) => {
  const list_detail = useSelector((state) => state.list.list);
  const detail_index = props.match.params;
  const dispatch = useDispatch();
  console.log("디테일 인덱스", detail_index, "리스트 디테일", list_detail);
  React.useEffect(() => {
    dispatch(loadList());
  }, []);
  return (
    <>
      <Image src={list_detail[1].img} size="1000"></Image>
      <Text bold size="36px" padding="20px 0">
        {list_detail[1].name}
      </Text>
      <hr />
      <Text bold size="24px" padding="20px 0">
        재료
      </Text>
      <Text margin="0 0 20px 0">{list_detail[1].name}</Text>
      <Text bold size="24px" padding="10px 0">
        RECIPE
      </Text>
      <Text margin="0 0 20px 0">
        1. 고구마는 깨끗이 씻어서 껍질을 벗기고 4cm 정도로 잘라준다.
        <br />
        2. 찜기에 고구마를 넣고 20~30분 정도 삶아 주고, 블렌더나 체를 이용하여
        잘 으깨어 곱게 만든다.
        <br />
        3. 고구마와 물을 섞어 끓이면서 찹쌀가루로 농도를 맞추고 설탕을 넣어 맛을
        낸다. <br />
        4. 잣을 팬에 노릇하게 볶아 다져서 고구마 죽에 섞는다. 기호에 따라
        고구마를 튀겨 얹어 먹어도 좋다.
        <br />
      </Text>
    </>
  );
};

export default Recipe;
