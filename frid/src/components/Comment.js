import React from "react";
import Text from "../elements/Text";
import Grid from "../elements/Text";
import Input from "../elements/Input";
import Button from "../elements/Button";
import { actionCreators as commentActions } from "../redux/modules/comment";
import { useDispatch,useSelector } from "react-redux";
import Star from "./Star";
const Comment = (props) => {
  const dispatch = useDispatch();
  const [commentText, setCommentText] = React.useState();
  const { post_id } = props;
  const star = useSelector((state)=>state.comment.star)
  const username = localStorage.getItem('user_name');
  console.log(star)
  const onChange = (e) => {
    setCommentText(e.target.value);
  };
  const write = () => {
    const new_data = { post_id, commentText,star, username};
    dispatch(commentActions.addCommentDB(new_data));
    console.log("입력한 댓글", commentText, "어디에입력", props);
    setCommentText("");
  };
  return (
    <React.Fragment>
      <Grid size='1000' is_flex>
        <Text bold size='24px' margin='0 0 20px 0'>
          댓글
        </Text>
        <Star></Star>
        <Input comment _onChange={onChange} value={commentText} />
        <Button
          margin='0 10px'
          _onClick={write}
          is_RectangleSubmitBtn
          size='56'
        >
          <Text color='white' size='20px'>
            등록
          </Text>
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default Comment;
