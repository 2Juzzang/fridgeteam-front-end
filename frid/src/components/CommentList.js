import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "../elements/Image";
import Text from "../elements/Text";
import Button from "../elements/Button";
import Grid from "../elements/Grid";
import { BiFridge } from "react-icons/bi";
import { actionCreators as commentActions } from "../redux/modules/comment";
import { history } from "../redux/configStore";
const CommentList = (props) => {
  // 레시피의 이름값 받아옴
  const post_id = useSelector((state) => state.recipe.list);
  const dispatch = useDispatch();
  //리스트 가져오기
  const comment_list = useSelector((state) => state.comment.list);
  const [content,setContent] = useState("")
  const [update, setUpdate] = useState(false);
  const [text, setText] = useState("");

  let loginUser = localStorage.getItem("user_name");
  //댓글이 0개일 때 댓글을 가져옴
  useEffect(() => {
    dispatch(commentActions.setCommentDB());
  }, []);
  //댓글 삭제
  const delComment = (e) => {
    dispatch(commentActions.delCommentDB(e));
    window.location.reload();
  };
  const updateBtn = () => {
    
    setUpdate(true);
  };
  // 수정하기
  const updateClick = () => {
    setUpdate(false);
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

                  {/*  첫번째 오류 map 안에 쓰다보니까 수정버튼 누르면 댓글전체가 수정창으로 변함 입력도 마찬가지 */}
                  {(c.username==loginUser&&c.id==content   ? update : false) ? (
                    <Grid margin="10px 10px" width="100%">
                      <input
                        type="text"
                        placeholder="수정 할 내용을 입력하세요"
                        style={{
                          width: "80%",
                          borderRadius: "5px",
                          border: "1px solid",
                          height: "20px",
                          padding: "5px",
                        }}
                        value={text}
                        onChange={(e) => {
                          setText(e.target.value);
                        }}
                      />
                      <button
                        style={{
                          width: "10%",
                          backgroundColor: "#8CE99A",
                          boxSizing: "border-box",
                          border: "none",
                          border: "1px solid #fff",
                          borderRadius: "5px",
                          height: "30px",
                        }}
                        onClick={() => {
                          updateClick();
                          dispatch(
                            commentActions.updateCommentMD({
                              ...c,
                              text,
                            })
                          );
                        }}
                      >
                        <Text>수정하기</Text>
                      </button>
                    </Grid>
                  ) : (
                    <>
                      <Grid padding="0 0 0 40px" width="auto" margin="0px">
                        <Text size="16px" color="yellowgreen">
                          {c.username}
                        </Text>
                      </Grid>
                      <Text is_inline size="16px" margin="0 0 0 20px">
                        {c.content}
                      </Text>
                      <Grid margin="0 0 0 auto">
                        <Button
                          is_RectangleCancleBtn
                          size="20"
                          _onClick={()=>{updateBtn();
                            setContent(c.id)
                          }}
                        >
                          <Text size="10px">O</Text>
                        </Button>
                        <Button is_RectangleCancleBtn size="20">
                          <Text
                            color="white"
                            size="10px"
                            _onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              if (loginUser == c.username)
                                if (window.confirm("삭제하시겠습니까?"))
                                  delComment(c.id);
                            }}
                          >
                            X
                          </Text>
                        </Button>
                      </Grid>
                    </>
                  )}
                </div>
              )
            );

          if (c.star === 1)
            return (
              c.recipeTitle === post_id && (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    margin: '20px 0',
                  }}
                >
                  <Grid
                    is_flex
                    justify_content='flex-start'
                    padding='0px'
                    margin='0px'
                  >
                    <Grid padding='0px' width='auto' margin='0px'>
                      <BiFridge size='30' color='red' />
                    </Grid>
                    <Grid padding='0px' width='auto' margin='0px'>
                      <BiFridge size='30' />
                    </Grid>
                    <Grid padding='0px' width='auto' margin='0px'>
                      <BiFridge size='30' />
                    </Grid>
                    <Grid padding='0px' width='auto' margin='0px'>
                      <BiFridge size='30' />
                    </Grid>
                    <Grid padding='0px' width='auto' margin='0px'>
                      <BiFridge size='30' />
                    </Grid>
                  </Grid>

                  {/*  첫번째 오류 map 안에 쓰다보니까 수정버튼 누르면 댓글전체가 수정창으로 변함 입력도 마찬가지 */}
                  {(
                    c.username == loginUser && c.id == content ? update : false
                  ) ? (
                    <Grid margin='10px 10px' width='100%'>
                      <input
                        type='text'
                        placeholder='수정 할 내용을 입력하세요'
                        style={{
                          width: '80%',
                          borderRadius: '5px',
                          border: '1px solid',
                          height: '20px',
                          padding: '5px',
                        }}
                        value={text}
                        onChange={(e) => {
                          setText(e.target.value);
                        }}
                      />
                      <button
                        style={{
                          width: '10%',
                          backgroundColor: '#8CE99A',
                          boxSizing: 'border-box',
                          border: 'none',
                          border: '1px solid #fff',
                          borderRadius: '5px',
                          height: '30px',
                        }}
                        onClick={() => {
                          updateClick();
                          dispatch(
                            commentActions.updateCommentMD({
                              ...c,
                              text,
                            })
                          );
                        }}
                      >
                        <Text>수정하기</Text>
                      </button>
                    </Grid>
                  ) : (
                    <>
                      <Grid padding='0 0 0 40px' width='auto' margin='0px'>
                        <Text size='16px' color='yellowgreen'>
                          {c.username}
                        </Text>
                      </Grid>
                      <Text is_inline size='16px' margin='0 0 0 20px'>
                        {c.content}
                      </Text>
                      <Grid margin='0 0 0 auto'>
                        <Button
                          is_RectangleCancleBtn
                          size='20'
                          _onClick={() => {
                            updateBtn();
                            setContent(c.id);
                          }}
                        >
                          <Text size='10px'>O</Text>
                        </Button>
                        <Button is_RectangleCancleBtn size='20'>
                          <Text
                            color='white'
                            size='10px'
                            _onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              if (loginUser == c.username)
                                if (window.confirm('삭제하시겠습니까?'))
                                  delComment(c.id);
                            }}
                          >
                            X
                          </Text>
                        </Button>
                      </Grid>
                    </>
                  )}
                </div>
              )
            );

          if (c.star === 2)
            return (
              c.recipeTitle === post_id && (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    margin: '20px 0',
                  }}
                >
                  <Grid
                    is_flex
                    justify_content='flex-start'
                    padding='0px'
                    margin='0px'
                  >
                    <Grid padding='0px' width='auto' margin='0px'>
                      <BiFridge size='30' color='red' />
                    </Grid>
                    <Grid padding='0px' width='auto' margin='0px'>
                      <BiFridge size='30' color='red' />
                    </Grid>
                    <Grid padding='0px' width='auto' margin='0px'>
                      <BiFridge size='30' />
                    </Grid>
                    <Grid padding='0px' width='auto' margin='0px'>
                      <BiFridge size='30' />
                    </Grid>
                    <Grid padding='0px' width='auto' margin='0px'>
                      <BiFridge size='30' />
                    </Grid>
                  </Grid>
                  {(
                    c.username == loginUser && c.id == content ? update : false
                  ) ? (
                    <Grid margin='10px 10px' width='100%'>
                      <input
                        type='text'
                        placeholder='수정 할 내용을 입력하세요'
                        style={{
                          width: '80%',
                          borderRadius: '5px',
                          border: '1px solid',
                          height: '20px',
                          padding: '5px',
                        }}
                        value={text}
                        onChange={(e) => {
                          setText(e.target.value);
                        }}
                      />
                      <button
                        style={{
                          width: '10%',
                          backgroundColor: '#8CE99A',
                          boxSizing: 'border-box',
                          border: 'none',
                          border: '1px solid #fff',
                          borderRadius: '5px',
                          height: '30px',
                        }}
                        onClick={() => {
                          updateClick();
                          dispatch(
                            commentActions.updateCommentMD({
                              ...c,
                              text,
                            })
                          );
                        }}
                      >
                        <Text>수정하기</Text>
                      </button>
                    </Grid>
                  ) : (
                    <>
                      <Grid padding='0 0 0 40px' width='auto' margin='0px'>
                        <Text size='16px' color='yellowgreen'>
                          {c.username}
                        </Text>
                      </Grid>
                      <Text is_inline size='16px' margin='0 0 0 20px'>
                        {c.content}
                      </Text>
                      <Grid margin='0 0 0 auto'>
                        <Button
                          is_RectangleCancleBtn
                          size='20'
                          _onClick={() => {
                            updateBtn();
                            setContent(c.id);
                          }}
                        >
                          <Text size='10px'>O</Text>
                        </Button>
                        <Button is_RectangleCancleBtn size='20'>
                          <Text
                            color='white'
                            size='10px'
                            _onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              if (loginUser == c.username)
                                if (window.confirm('삭제하시겠습니까?'))
                                  delComment(c.id);
                            }}
                          >
                            X
                          </Text>
                        </Button>
                      </Grid>
                    </>
                  )}
                </div>
              )
            );

          if (c.star === 3)
            return (
              c.recipeTitle === post_id && (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    margin: '20px 0',
                  }}
                >
                  <Grid
                    is_flex
                    justify_content='flex-start'
                    padding='0px'
                    margin='0px'
                  >
                    <Grid padding='0px' width='auto' margin='0px'>
                      <BiFridge size='30' color='red' />
                    </Grid>
                    <Grid padding='0px' width='auto' margin='0px'>
                      <BiFridge size='30' color='red' />
                    </Grid>
                    <Grid padding='0px' width='auto' margin='0px'>
                      <BiFridge size='30' color='red' />
                    </Grid>
                    <Grid padding='0px' width='auto' margin='0px'>
                      <BiFridge size='30' />
                    </Grid>
                    <Grid padding='0px' width='auto' margin='0px'>
                      <BiFridge size='30' />
                    </Grid>
                  </Grid>
                  {(
                    c.username == loginUser && c.id == content ? update : false
                  ) ? (
                    <Grid margin='10px 10px' width='100%'>
                      <input
                        type='text'
                        placeholder='수정 할 내용을 입력하세요'
                        style={{
                          width: '80%',
                          borderRadius: '5px',
                          border: '1px solid',
                          height: '20px',
                          padding: '5px',
                        }}
                        value={text}
                        onChange={(e) => {
                          setText(e.target.value);
                        }}
                      />
                      <button
                        style={{
                          width: '10%',
                          backgroundColor: '#8CE99A',
                          boxSizing: 'border-box',
                          border: 'none',
                          border: '1px solid #fff',
                          borderRadius: '5px',
                          height: '30px',
                        }}
                        onClick={() => {
                          updateClick();
                          dispatch(
                            commentActions.updateCommentMD({
                              ...c,
                              text,
                            })
                          );
                        }}
                      >
                        <Text>수정하기</Text>
                      </button>
                    </Grid>
                  ) : (
                    <>
                      <Grid padding='0 0 0 40px' width='auto' margin='0px'>
                        <Text size='16px' color='yellowgreen'>
                          {c.username}
                        </Text>
                      </Grid>
                      <Text is_inline size='16px' margin='0 0 0 20px'>
                        {c.content}
                      </Text>
                      <Grid margin='0 0 0 auto'>
                        <Button
                          is_RectangleCancleBtn
                          size='20'
                          _onClick={() => {
                            updateBtn();
                            setContent(c.id);
                          }}
                        >
                          <Text size='10px'>O</Text>
                        </Button>
                        <Button is_RectangleCancleBtn size='20'>
                          <Text
                            color='white'
                            size='10px'
                            _onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              if (loginUser == c.username)
                                if (window.confirm('삭제하시겠습니까?'))
                                  delComment(c.id);
                            }}
                          >
                            X
                          </Text>
                        </Button>
                      </Grid>
                    </>
                  )}
                </div>
              )
            );
          if (c.star === 4)
            return (
              c.recipeTitle === post_id && (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    margin: '20px 0',
                  }}
                >
                  <Grid
                    is_flex
                    justify_content='flex-start'
                    padding='0px'
                    margin='0px'
                  >
                    <Grid padding='0px' width='auto' margin='0px'>
                      <BiFridge size='30' color='red' />
                    </Grid>
                    <Grid padding='0px' width='auto' margin='0px'>
                      <BiFridge size='30' color='red' />
                    </Grid>
                    <Grid padding='0px' width='auto' margin='0px'>
                      <BiFridge size='30' color='red' />
                    </Grid>
                    <Grid padding='0px' width='auto' margin='0px'>
                      <BiFridge size='30' color='red' />
                    </Grid>
                    <Grid padding='0px' width='auto' margin='0px'>
                      <BiFridge size='30' />
                    </Grid>
                  </Grid>

                  {(
                    c.username == loginUser && c.id == content ? update : false
                  ) ? (
                    <Grid margin='10px 10px' width='100%'>
                      <input
                        type='text'
                        placeholder='수정 할 내용을 입력하세요'
                        style={{
                          width: '80%',
                          borderRadius: '5px',
                          border: '1px solid',
                          height: '20px',
                          padding: '5px',
                        }}
                        value={text}
                        onChange={(e) => {
                          setText(e.target.value);
                        }}
                      />
                      <button
                        style={{
                          width: '10%',
                          backgroundColor: '#8CE99A',
                          boxSizing: 'border-box',
                          border: 'none',
                          border: '1px solid #fff',
                          borderRadius: '5px',
                          height: '30px',
                        }}
                        onClick={() => {
                          updateClick();
                          dispatch(
                            commentActions.updateCommentMD({
                              ...c,
                              text,
                            })
                          );
                        }}
                      >
                        <Text>수정하기</Text>
                      </button>
                    </Grid>
                  ) : (
                    <>
                      <Grid padding='0 0 0 40px' width='auto' margin='0px'>
                        <Text size='16px' color='yellowgreen'>
                          {c.username}
                        </Text>
                      </Grid>
                      <Text is_inline size='16px' margin='0 0 0 20px'>
                        {c.content}
                      </Text>
                      <Grid margin='0 0 0 auto'>
                        <Button
                          is_RectangleCancleBtn
                          size='20'
                          _onClick={() => {
                            updateBtn();
                            setContent(c.id);
                          }}
                        >
                          <Text size='10px'>O</Text>
                        </Button>
                        <Button is_RectangleCancleBtn size='20'>
                          <Text
                            color='white'
                            size='10px'
                            _onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              if (loginUser == c.username)
                                if (window.confirm('삭제하시겠습니까?'))
                                  delComment(c.id);
                            }}
                          >
                            X
                          </Text>
                        </Button>
                      </Grid>
                    </>
                  )}
                </div>
              )
            );

          if (c.star === 5)
            return (
              c.recipeTitle === post_id && (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    margin: '20px 0',
                  }}
                >
                  <Grid
                    is_flex
                    justify_content='flex-start'
                    padding='0px'
                    margin='0px'
                  >
                    <Grid padding='0px' width='auto' margin='0px'>
                      <BiFridge size='30' color='red' />
                    </Grid>
                    <Grid padding='0px' width='auto' margin='0px'>
                      <BiFridge size='30' color='red' />
                    </Grid>
                    <Grid padding='0px' width='auto' margin='0px'>
                      <BiFridge size='30' color='red' />
                    </Grid>
                    <Grid padding='0px' width='auto' margin='0px'>
                      <BiFridge size='30' color='red' />
                    </Grid>
                    <Grid padding='0px' width='auto' margin='0px'>
                      <BiFridge size='30' color='red' />
                    </Grid>
                  </Grid>

                  {(
                    c.username == loginUser && c.id == content ? update : false
                  ) ? (
                    <Grid margin='10px 10px' width='100%'>
                      <input
                        type='text'
                        placeholder='수정 할 내용을 입력하세요'
                        style={{
                          width: '80%',
                          borderRadius: '5px',
                          border: '1px solid',
                          height: '20px',
                          padding: '5px',
                        }}
                        value={text}
                        onChange={(e) => {
                          setText(e.target.value);
                        }}
                      />
                      <button
                        style={{
                          width: '10%',
                          backgroundColor: '#8CE99A',
                          boxSizing: 'border-box',
                          border: 'none',
                          border: '1px solid #fff',
                          borderRadius: '5px',
                          height: '30px',
                        }}
                        onClick={() => {
                          updateClick();
                          dispatch(
                            commentActions.updateCommentMD({
                              ...c,
                              text,
                            })
                          );
                        }}
                      >
                        <Text>수정하기</Text>
                      </button>
                    </Grid>
                  ) : (
                    <>
                      <Grid padding='0 0 0 40px' width='auto' margin='0px'>
                        <Text size='16px' color='yellowgreen'>
                          {c.username}
                        </Text>
                      </Grid>
                      <Text is_inline size='16px' margin='0 0 0 20px'>
                        {c.content}
                      </Text>
                      <Grid margin='0 0 0 auto'>
                        <Button
                          is_RectangleCancleBtn
                          size='20'
                          _onClick={() => {
                            updateBtn();
                            setContent(c.id);
                          }}
                        >
                          <Text size='10px'>O</Text>
                        </Button>
                        <Button is_RectangleCancleBtn size='20'>
                          <Text
                            color='white'
                            size='10px'
                            _onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              if (loginUser == c.username)
                                if (window.confirm('삭제하시겠습니까?'))
                                  delComment(c.id);
                            }}
                          >
                            X
                          </Text>
                        </Button>
                      </Grid>
                    </>
                  )}
                </div>
              )
            );
        })}
    </>
  );
};

export default CommentList;
