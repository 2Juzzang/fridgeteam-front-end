import React from "react";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Text from "../elements/Text";
import { useHistory } from "react-router";

const List = (props) => {
  let history = useHistory();
  return (
    <>
      <Grid is_flex flex_wrap="wrap" justify_content="start" width="100%">
        <Grid
          _onClick={() => {
            history.push("/detail");
          }}
          margin="0 0 0 auto"
        >
          <Image size="470"></Image>
          <Text padding="15px 0px" size="20px">
            {"문어"}
          </Text>
        </Grid>

        <Grid
          _onClick={() => {
            history.push("/detail");
          }}
          margin="0 0 0 auto"
        >
          <Image size="470"></Image>
          <Text padding="15px 0px" size="20px">
            {"치킨"}
          </Text>
        </Grid>
      </Grid>
    </>
  );
};

export default List;
