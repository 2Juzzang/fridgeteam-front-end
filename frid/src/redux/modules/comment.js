import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

//타입
const SET_COMMENT = "SET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const DEL_COMMENT = "DEL_COMMENT";
const UPDATE_COMMENT = "UPDATE_COMMENT";
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

const updateComment = createAction(UPDATE_COMMENT, (comment_lists) => ({
  comment_lists,
}));

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
        username: comment.username,
      })
      .then(() => {
        dispatch(
          addComment({
            content: comment.commentText,
            recipeTitle: comment.post_id,
            star: comment.star,
            username: comment.username,
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

const updateCommentMD = (comment_lists) => {
  return function (dispatch, getState, { history }) {
    console.log("나는댓글리스트", comment_lists);
    const { content, text, id } = comment_lists;
    console.log("con", content, text);
    axios
      .put(`http://3.36.72.109/api/comments/${id}`, {
        ...comment_lists,
        content: text,
      })
      .then((res) => {
        dispatch(updateComment(comment_lists));
      })
      .catch((err) => console.log("댓글수정 에러", err));
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

    [UPDATE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        const id = draft.list.findIndex((e) => {
          console.log("id", e.id, action.payload.comment_lists.id);
          return e.id === action.payload.comment_lists.id;
        });
        draft.list[id].content = action.payload.comment_lists.text;
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
  updateCommentMD,
};

export { actionCreators };
