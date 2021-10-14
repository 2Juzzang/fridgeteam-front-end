import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import axios from 'axios';
// Actions
const SET_RECIPE = 'SET_RECIPE';

// const DELETE = "post/DELETE";
// const EDIT = "post/EDIT";

const initialState = {
  recipe: [],
};

//Action creators
const setRecipe = createAction(SET_RECIPE, (recipe) => ({ recipe }));

const recipeAPI = (ingredient) => {
  return function (dispatch, getState, { history }) {
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
    
  },
  initialState
);

const actionCreators = {
  setRecipe,
  recipeAPI,
};
export { actionCreators };
