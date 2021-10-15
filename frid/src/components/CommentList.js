import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "../elements/Image";
import Text from "../elements/Text";
import Button from "../elements/Button";
import Grid from "../elements/Grid";
import { BiFridge } from "react-icons/bi";
import { actionCreators as commentActions } from "../redux/modules/comment";
import { history } from "../redux/configStore";
const CommentList = (props) => {
  // 레시피의 id값 받아옴
  const { post_id } = props;
  console.log("여긴어디", post_id);
  const dispatch = useDispatch();
  //리스트 가져오기
  const comment_list = useSelector((state) => state.comment.list);
  console.log("삭제확인", comment_list);

  //댓글이 0개일 때 댓글을 가져옴
  useEffect(() => {
    dispatch(commentActions.setCommentDB());
  }, []);
  //댓글 삭제
  const delComment = (e) => {
    dispatch(commentActions.delCommentDB(e));
    window.location.reload();
  };

  return (
    <>
      {comment_list
        .slice(0)
        .reverse()
        .map((c, i) => {
          if (c.star === 0)
            return (
              // 댓글의 데이터를 다 가져오므로
              // 해당 포스트의 id와 가져온 데이터의 id가 일치하면 댓글을 보여준다.
              c.recipeTitle === post_id && (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "20px 0",
                  }}
                >
                  <Grid
                    is_flex
                    justify_content="flex-start"
                    padding="0px"
                    margin="0px"
                  >
                    <Grid padding="0px" width="auto" margin="0px">
                      <BiFridge size="30" />
                    </Grid>
                    <Grid padding="0px" width="auto" margin="0px">
                      <BiFridge size="30" />
                    </Grid>
                    <Grid padding="0px" width="auto" margin="0px">
                      <BiFridge size="30" />
                    </Grid>
                    <Grid padding="0px" width="auto" margin="0px">
                      <BiFridge size="30" />
                    </Grid>
                    <Grid padding="0px" width="auto" margin="0px">
                      <BiFridge size="30" />
                    </Grid>
                  </Grid>

                  <Image size="40"></Image>

                  <Text is_inline size="16px" margin="0 0 0 20px">
                    {c.content}
                  </Text>
                  <Button is_RectangleCancleBtn size="20">
                    <Text
                      color="white"
                      size="10px"
                      _onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (window.confirm("삭제하시겠습니까?"))
                          delComment(c.id);
                      }}
                    >
                      X
                    </Text>
                  </Button>
                </div>
              )
            );

          if (c.star === 1)
            return (
              c.recipeTitle === post_id && (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "20px 0",
                  }}
                >
                  <Grid
                    is_flex
                    justify_content="flex-start"
                    padding="0px"
                    margin="0px"
                  >
                    <Grid padding="0px" width="auto" margin="0px">
                      <BiFridge size="30" color="red" />
                    </Grid>
                    <Grid padding="0px" width="auto" margin="0px">
                      <BiFridge size="30" />
                    </Grid>
                    <Grid padding="0px" width="auto" margin="0px">
                      <BiFridge size="30" />
                    </Grid>
                    <Grid padding="0px" width="auto" margin="0px">
                      <BiFridge size="30" />
                    </Grid>
                    <Grid padding="0px" width="auto" margin="0px">
                      <BiFridge size="30" />
                    </Grid>
                  </Grid>

                  <Image size="40"></Image>

                  <Text is_inline size="16px" margin="0 0 0 20px">
                    {c.content}
                  </Text>
                  <Button is_RectangleCancleBtn size="20">
                    <Text
                      color="white"
                      size="10px"
                      _onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (window.confirm("삭제하시겠습니까?"))
                          delComment(c.id);
                      }}
                    >
                      X
                    </Text>
                  </Button>
                </div>
              )
            );

          if (c.star === 2)
            return (
              c.recipeTitle === post_id && (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "20px 0",
                  }}
                >
                  <Grid
                    is_flex
                    justify_content="flex-start"
                    padding="0px"
                    margin="0px"
                  >
                    <Grid padding="0px" width="auto" margin="0px">
                      <BiFridge size="30" color="red" />
                    </Grid>
                    <Grid padding="0px" width="auto" margin="0px">
                      <BiFridge size="30" color="red" />
                    </Grid>
                    <Grid padding="0px" width="auto" margin="0px">
                      <BiFridge size="30" />
                    </Grid>
                    <Grid padding="0px" width="auto" margin="0px">
                      <BiFridge size="30" />
                    </Grid>
                    <Grid padding="0px" width="auto" margin="0px">
                      <BiFridge size="30" />
                    </Grid>
                  </Grid>

                  <Image size="40"></Image>

                  <Text is_inline size="16px" margin="0 0 0 20px">
                    {c.content}
                  </Text>
                  <Button is_RectangleCancleBtn size="20">
                    <Text
                      color="white"
                      size="10px"
                      _onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (window.confirm("삭제하시겠습니까?"))
                          delComment(c.id);
                      }}
                    >
                      X
                    </Text>
                  </Button>
                </div>
              )
            );

          if (c.star === 3)
            return (
              c.recipeTitle === post_id && (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "20px 0",
                  }}
                >
                  <Grid
                    is_flex
                    justify_content="flex-start"
                    padding="0px"
                    margin="0px"
                  >
                    <Grid padding="0px" width="auto" margin="0px">
                      <BiFridge size="30" color="red" />
                    </Grid>
                    <Grid padding="0px" width="auto" margin="0px">
                      <BiFridge size="30" color="red" />
                    </Grid>
                    <Grid padding="0px" width="auto" margin="0px">
                      <BiFridge size="30" color="red" />
                    </Grid>
                    <Grid padding="0px" width="auto" margin="0px">
                      <BiFridge size="30" />
                    </Grid>
                    <Grid padding="0px" width="auto" margin="0px">
                      <BiFridge size="30" />
                    </Grid>
                  </Grid>

                  <Image size="40"></Image>

                  <Text is_inline size="16px" margin="0 0 0 20px">
                    {c.content}
                  </Text>
                  <Button is_RectangleCancleBtn size="20">
                    <Text
                      color="white"
                      size="10px"
                      _onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (window.confirm("삭제하시겠습니까?"))
                          delComment(c.id);
                      }}
                    >
                      X
                    </Text>
                  </Button>
                </div>
              )
            );

          if (c.star === 4)
            return (
              c.recipeTitle === post_id && (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "20px 0",
                  }}
                >
                  <Grid
                    is_flex
                    justify_content="flex-start"
                    padding="0px"
                    margin="0px"
                  >
                    <Grid padding="0px" width="auto" margin="0px">
                      <BiFridge size="30" color="red" />
                    </Grid>
                    <Grid padding="0px" width="auto" margin="0px">
                      <BiFridge size="30" color="red" />
                    </Grid>
                    <Grid padding="0px" width="auto" margin="0px">
                      <BiFridge size="30" color="red" />
                    </Grid>
                    <Grid padding="0px" width="auto" margin="0px">
                      <BiFridge size="30" color="red" />
                    </Grid>
                    <Grid padding="0px" width="auto" margin="0px">
                      <BiFridge size="30" />
                    </Grid>
                  </Grid>

                  <Image size="40"></Image>

                  <Text is_inline size="16px" margin="0 0 0 20px">
                    {c.content}
                  </Text>
                  <Button is_RectangleCancleBtn size="20">
                    <Text
                      color="white"
                      size="10px"
                      _onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (window.confirm("삭제하시겠습니까?"))
                          delComment(c.id);
                      }}
                    >
                      X
                    </Text>
                  </Button>
                </div>
              )
            );

          if (c.star === 5)
            return (
              c.recipeTitle === post_id && (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "20px 0",
                  }}
                >
                  <Grid
                    is_flex
                    justify_content="flex-start"
                    padding="0px"
                    margin="0px"
                  >
                    <Grid padding="0px" width="auto" margin="0px">
                      <BiFridge size="30" color="red" />
                    </Grid>
                    <Grid padding="0px" width="auto" margin="0px">
                      <BiFridge size="30" color="red" />
                    </Grid>
                    <Grid padding="0px" width="auto" margin="0px">
                      <BiFridge size="30" color="red" />
                    </Grid>
                    <Grid padding="0px" width="auto" margin="0px">
                      <BiFridge size="30" color="red" />
                    </Grid>
                    <Grid padding="0px" width="auto" margin="0px">
                      <BiFridge size="30" color="red" />
                    </Grid>
                  </Grid>

                  <Image size="40"></Image>

                  <Text is_inline size="16px" margin="0 0 0 20px">
                    {c.content}
                  </Text>
                  <Button is_RectangleCancleBtn size="20">
                    <Text
                      color="white"
                      size="10px"
                      _onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (window.confirm("삭제하시겠습니까?"))
                          delComment(c.id);
                      }}
                    >
                      X
                    </Text>
                  </Button>
                </div>
              )
            );
        })}
    </>
  );
};

export default CommentList;
