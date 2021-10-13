import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import axios from 'axios';
// Actions
const SET_LIST = "SET_LIST"

// const DELETE = "post/DELETE";
// const EDIT = "post/EDIT";

const initialState = {
  list: [],
};

//Action creators
const setList = createAction(SET_LIST,(list) => {(list)})

const listAPI = (ingredient) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: 'GET',
      url: `http://52.79.109.55/api/recipe/${ingredient}`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
      data: {},
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log('listAPI에서 오류 발생', err);
      });
  };
};

// Reducer
export default handleActions(
  {
    [SET_LIST] : (state,action) => {
      produce(state, (draft) => {
        draft.list = action.payload.list;

      })
    }
  },
  initialState
)

const actionCreators = {
  setList,
  listAPI,
}
export { actionCreators };