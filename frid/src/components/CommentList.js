import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "../elements/Image";
import Text from "../elements/Text";
import Button from "../elements/Button";
import { actionCreators as commentActions } from "../redux/modules/comment";
const CommentList = (props) => {
  // 레시피의 id값 받아옴
  const { post_id } = props;
  const dispatch = useDispatch();
  //리스트 가져오기
  const comment_list = useSelector((state) => state.comment.list);
  console.log("코멘트리스트", comment_list);
  //댓글 삭제
  // const delComment = () => {

  //   dispatch(commentActions.)
  // }

  //댓글이 0개일 때 댓글을 가져옴
  useEffect(() => {
    if (comment_list.length === 0) {
      dispatch(commentActions.setCommentDB());
    }
  }, []);
  return (
    <>
      {comment_list
        .slice(0)
        .reverse()
        .map((c, i) => {
          return (
            // 댓글의 데이터를 다 가져오므로
            // 해당 포스트의 id와 가져온 데이터의 id가 일치하면 댓글을 보여준다.
            post_id === c.recipeTitle && (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "20px 0",
                }}
              >
                <Image size="40"></Image>

                <Text is_inline size="16px" margin="0 0 0 20px">
                  {c.content}
                </Text>
                <Button is_RectangleCancleBtn size="20">
                  <Text color="white" size="10px" _onClick={() => {}}>
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
