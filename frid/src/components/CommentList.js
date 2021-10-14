import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "../elements/Image";
import Text from "../elements/Text";
import Button from "../elements/Button";
import  Grid  from "../elements/Grid";
import { BiFridge } from 'react-icons/bi';
import { actionCreators as commentActions } from "../redux/modules/comment";
const CommentList = (props) => {
  // 레시피의 id값 받아옴
  const post_id= useSelector((state)=> state.recipe.list)
  //리스트 가져오기
  const dispatch = useDispatch();


  
  useEffect(() => {
    dispatch(commentActions.setCommentDB());
  }, []);
  const comment_list = useSelector((state) => state.comment.list);
  
  console.log("코멘리스트", comment_list);
  console.log(post_id)
  return (
    <>
      {comment_list.map((c, i) => {
         if(c.star===0)
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
                    <BiFridge size='30'  />
                  </Grid>
                  <Grid padding='0px' width='auto' margin='0px'>
                    <BiFridge size='30'  />
                  </Grid>
                  <Grid padding='0px' width='auto' margin='0px'>
                    <BiFridge size='30'  />
                  </Grid>
                  <Grid padding='0px' width='auto' margin='0px'>
                    <BiFridge size='30'  />
                  </Grid>
                  <Grid padding='0px' width='auto' margin='0px'>
                    <BiFridge size='30' />
                  </Grid>
                </Grid>

                <Image size='40'></Image>

                <Text is_inline size='16px' margin='0 0 0 20px'>
                  {c.content}
                </Text>
                <Button is_RectangleCancleBtn size='20'>
                  <Text color='white' size='10px'>
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
                      <BiFridge size='30'  />
                    </Grid>
                    <Grid padding='0px' width='auto' margin='0px'>
                      <BiFridge size='30'  />
                    </Grid>
                    <Grid padding='0px' width='auto' margin='0px'>
                      <BiFridge size='30'  />
                    </Grid>
                    <Grid padding='0px' width='auto' margin='0px'>
                      <BiFridge size='30' />
                    </Grid>
                  </Grid>

                  <Image size='40'></Image>

                  <Text is_inline size='16px' margin='0 0 0 20px'>
                    {c.content}
                  </Text>
                  <Button is_RectangleCancleBtn size='20'>
                    <Text color='white' size='10px'>
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
                        <BiFridge size='30'  />
                      </Grid>
                      <Grid padding='0px' width='auto' margin='0px'>
                        <BiFridge size='30'  />
                      </Grid>
                    </Grid>

                    <Image size='40'></Image>

                    <Text is_inline size='16px' margin='0 0 0 20px'>
                      {c.content}
                    </Text>
                    <Button is_RectangleCancleBtn size='20'>
                      <Text color='white' size='10px'>
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
                          <BiFridge size='30'  />
                        </Grid>
                      </Grid>

                      <Image size='40'></Image>

                      <Text is_inline size='16px' margin='0 0 0 20px'>
                        {c.content}
                      </Text>
                      <Button is_RectangleCancleBtn size='20'>
                        <Text color='white' size='10px'>
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
                            <BiFridge size='30'  />
                          </Grid>
                        </Grid>

                        <Image size='40'></Image>

                        <Text is_inline size='16px' margin='0 0 0 20px'>
                          {c.content}
                        </Text>
                        <Button is_RectangleCancleBtn size='20'>
                          <Text color='white' size='10px'>
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

                          <Image size='40'></Image>

                          <Text is_inline size='16px' margin='0 0 0 20px'>
                            {c.content}
                          </Text>
                          <Button is_RectangleCancleBtn size='20'>
                            <Text color='white' size='10px'>
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
