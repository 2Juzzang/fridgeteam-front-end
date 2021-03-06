import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import axios from 'axios';
// Actions
const SET_RECIPE = 'SET_RECIPE';
const FIND_RECIPE = 'FINE_RECIPE';
// const DELETE = "post/DELETE";
// const EDIT = "post/EDIT";

const LOADING = 'LOADING';

const initialState = {
  recipe: [],
  list: [],
};

//Action creators
const setRecipe = createAction(SET_RECIPE, (recipe) => ({ recipe }));
const findRecipe = createAction(FIND_RECIPE, (list) => ({list}))
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

const recipeAPI = (ingredient) => {
  return function (dispatch, getState, { history }) {
    dispatch(loading(true));
    axios({
      method: 'GET',
      url: `http://3.36.72.109/api/recipe/menu/${ingredient}`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
      data: {},
    })
      .then((res) => {
        dispatch(setRecipe(res.data));
         dispatch(loading(false));
      })
      .catch((err) => {
        console.log('recipeAPI에서 오류 발생', err);
      });
  };
};



// Reducer
export default handleActions(
  {
    [SET_RECIPE]: (state, action) =>
      produce(state, (draft) => {
        draft.recipe = action.payload.recipe;
      }),
    [FIND_RECIPE]: (state, action) =>
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
  setRecipe,
  recipeAPI,
  findRecipe,
};
export { actionCreators };
