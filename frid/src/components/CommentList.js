import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "../elements/Image";
import Text from "../elements/Text";
import Button from "../elements/Button";
import { actionCreators as commentActions } from "../redux/modules/comment";
const CommentList = (props) => {
  // 레시피의 id값 받아옴
  const { post_id } = props;
  //리스트 가져오기
  const dispatch = useDispatch();

  const comment_list = useSelector((state) => state.comment.list);
  useEffect(() => {
    dispatch(commentActions.setCommentDB());
  }, []);
  console.log("코멘리스트", comment_list);

  return (
    <>
      {comment_list
        .slice(0)
        .reverse()
        .map((c, i) => {
          return (
            c.post_id === post_id && (
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
                  {c.commentText}
                </Text>
                <Button is_RectangleCancleBtn size="20">
                  <Text color="white" size="10px">
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
