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

  
  useEffect(() => {
    dispatch(commentActions.setCommentDB());
  }, []);
  const comment_list = useSelector((state) => state.comment.list);
  console.log("코멘리스트", comment_list);

  return (
    <>
      {comment_list
       
        .map((c, i) => {
          return (
           (
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
