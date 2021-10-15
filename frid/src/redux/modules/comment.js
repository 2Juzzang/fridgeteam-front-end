import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

//타입
const SET_COMMENT = "SET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const DEL_COMMENT = "DEL_COMMENT";

const SET_STAR = "SET_STAR";
// const LOADING = "LOADING";

//액션
const setComment = createAction(SET_COMMENT, (comment) => ({
  comment,
}));
const addComment = createAction(ADD_COMMENT, (comment) => ({
  comment,
}));
const delComment = createAction(DEL_COMMENT, (id) => ({
  id,
}));
const setStar = createAction(SET_STAR, (star) => ({ star }));

// const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

const initialState = {
  list: [],
  star: [],
  //   is_loading: false,
};

//등록
const addCommentDB = (comment) => {
  return function (dispatch, getState, { history }) {
    axios
      .post("http://3.36.72.109/api/comments", {
        content: comment.commentText,
        recipeTitle: comment.post_id,
        star: comment.star,
      })
      .then(() => {
        dispatch(
          addComment({
            content: comment.commentText,
            recipeTitle: comment.post_id,
            star: comment.star,
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
const delCommentDB = (id) => {
  return function (dispatch, getState, { history }) {
    axios
      .delete(`http://3.36.72.109/api/comments/${id}`, {})
      .then((response) => {
        dispatch(
          delComment({
            response,
          })
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
        draft.list.push(action.payload.comment);
      }),
    [SET_STAR]: (state, action) =>
      produce(state, (draft) => {
        draft.star = action.payload.star;
      }),
    [DEL_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        // let idx = draft.list.findIndex((p) => p.id === action.payload.id);
        // if (idx !== -1) {
        //   // 배열에서 idx 위치의 요소 1개를 지운다.
        //   draft.list.splice(idx, 1);
        // }
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
  setStar,
  delCommentDB,
};

export { actionCreators };
