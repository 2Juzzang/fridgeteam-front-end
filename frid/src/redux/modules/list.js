import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import axios from 'axios';
// Actions
const SET_LIST = "SET_LIST"
const LOADING = "LOADING"
// const DELETE = "post/DELETE";
// const EDIT = "post/EDIT";

const initialState = {
  list:  [],
  is_loading: false,
};

//Action creators
const setList = createAction(SET_LIST,(list) => ({list}))
const loading = createAction(LOADING, (is_loading)=> ({is_loading}))
const listAPI = (ingredient) => {
  return function (dispatch, getState, { history }) {
     dispatch(loading(true));
    axios({
      method: 'GET',
      url: `http://3.36.72.109/api/recipe/${ingredient}`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
      data: {},
    })
      .then((res) => {
        dispatch(setList(res.data));
          dispatch(loading(false));
      })
      .catch((err) => {
        console.log('listAPI에서 오류 발생', err);
      });
  };
};

// Reducer
export default handleActions(
  {
    [SET_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.list;
      }),
    [LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.is_loading = action.payload.is_loading;
      }),
  },
  initialState
);

const actionCreators = {
  setList,
  listAPI,
}
export { actionCreators };