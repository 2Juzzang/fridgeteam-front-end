import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
//타입
const SET_COMMENT = "SET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const DEL_COMMENT = "DEL_COMMENT";

// const LOADING = "LOADING";

//액션
const setComment = createAction(SET_COMMENT, (comment) => ({
  comment,
}));
const addComment = createAction(ADD_COMMENT, (comment) => ({
  comment,
}));
// const delComment = createAction(DEL_COMMENT, () => ({

// }));

// const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

const initialState = {
  list: [],
  //   is_loading: false,
};

//등록
const addCommentDB = (comment) => {
  return function (dispatch, getState, { history }) {
    axios
      .post("http://3.36.72.109/api/comments", {
        content: comment.commentText,
        recipeTitle: comment.post_id,
      })
      .then(() => {
        dispatch(
          addComment({
            content: comment.commentText,
            recipeTitle: comment.post_id,
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

//불러오기
const setCommentDB = () => {
  return function (dispatch, getState, { history }) {
    axios
      .get("http://3.36.72.109/api/comments")
      .then((response) => {
        dispatch(setComment(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

//삭제

//미들웨어
// const deleteCommentDB

// handleActions를 사용하면 추가 데이터의 이름은 항상 action.payload
export default handleActions(
  {
    [SET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        console.log("페이로드", action.payload);
        draft.list = action.payload.comment;
      }),

    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        console.log("액션", action.payload.comment);
        draft.list.push(action.payload.comment);
        // console.log("이니셜", initialState);
      }),
    // [LOADING]: (state, action) =>
    //   produce(state, (draft) => {
    //     draft.is_loading = action.payload.is_loading;
    //   }),
  },
  initialState
);

const actionCreators = {
  addCommentDB,
  setCommentDB,
};

export { actionCreators };
