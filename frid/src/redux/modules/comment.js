import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
//타입
const SET_COMMENT = "SET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const SET_STAR = "SET_STAR";
// const LOADING = "LOADING";

//액션
const setComment = createAction(SET_COMMENT, (comment) => ({
  comment,
}));
const addComment = createAction(ADD_COMMENT, (comment) => ({
  comment,
}));
const setStar = createAction(SET_STAR, (star) => ({star}))

// const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

const initialState = {
  list: [],
  star: [],
  //   is_loading: false,
};

//포스트 요청
const addCommentDB = (comment) => {
  return function (dispatch, getState, { history }) {
    axios
      .post("http://3.36.72.109/api/comments", {
        content: comment.commentText,
        recipeTitle: comment.post_id,
        star: comment.star,
      })
      .then((response) => {
        dispatch(
          addComment({
            content: comment.commentText,
            recipeTitle: comment.post_id,
            star: comment.star,
          })
        );
        window.alert("등록");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const setCommentDB = (comment) => {
  return function (dispatch, getState, { history }) {
    axios
      .get("http://3.36.72.109/api/comments")
      .then((response) => {
        dispatch(
          setComment(response.data)
        );
      
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// handleActions를 사용하면 추가 데이터의 이름은 항상 action.payload
export default handleActions(
  {
    [SET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.comment;
      }),

    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        console.log("액션", action.payload.list);
        draft.list.push(action.payload.comment);
        // console.log("이니셜", initialState);
      }),
     [SET_STAR] : (state,action) => 
     produce(state,(draft) => {
       console.log(action.payload.star);
       draft.star = action.payload.star;
       
     }),
    // [LOADING]: (state, action) =>
    //   produce(state, (draft) => {
    //     draft.is_loading = action.payload.is_loading;
    //   }),
  },
  initialState
);

const actionCreators = {
  //   getCommentFB,
  //   addComment,
  addCommentDB,
  setCommentDB,
  setStar,
};

export { actionCreators };
