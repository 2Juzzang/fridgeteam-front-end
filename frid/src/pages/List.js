import React from "react";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Text from "../elements/Text";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { loadList } from "../redux/modules/list";

const List = (props) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list.list);
  console.log("확인", list);
  React.useEffect(() => {
    dispatch(loadList());
  }, []);

  return (
    <Grid is_flex flex_wrap="wrap" justify_content="start" width="100%">
      {list.map((a, i) => {
        return (
          <Grid
            // 임시 width 5%
            width="5%"
            key={i}
            _onClick={() => {
              history.push(`/detail/${i}`);
            }}
            margin="0 auto 0 0"
          >
            <Image src={a.img} size="470"></Image>
            <Text padding="15px 0px" size="20px">
              {a.name}
            </Text>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default List;
