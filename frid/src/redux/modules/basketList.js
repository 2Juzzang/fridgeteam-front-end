import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

const ADD_LIST = "ADD_LIST";
const LOAD_LIST = "LOAD_LIST";
const DELETE_LIST = "DELETE_LIST"

const add_list = createAction(ADD_LIST, (item) => ({ item }))
const load_list = createAction(LOAD_LIST, (basket_list) => ({ basket_list }))
const delete_list = createAction(DELETE_LIST, (basket_id) => ({ basket_id }))

const initialState = {
  basket_list: [],
  is_login: false,
}

const instance = axios.create({
  baseURL: "http://3.36.72.109",
  // baseURL: "http://localhost:3002",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
  },
})

const addListMiddlewares = (ingredient) => {
  return function (dispatch, getState, { history }) {
    const list = getState().basketList.basket_list

    if (!ingredient) {
      return
    }

    if (list.length < 16) {
      instance
        .post("/api/recipe", { ingredient })
        .then((res) => {
          dispatch(
            add_list({
              ingredient,
              id: res.data.id,
            })
          )
          history.replace("/")
        })
        .catch((err) => {
          console.log(err, "postList 에러입니다.")
        })
    } else {
      window.alert("재료가 너무 많습니다.")
      return
    }
  }
}

const getListMiddleWares = () => {
  return function (dispatch, getState, { history }) {
    instance
      .get("/api/recipe")
      .then((res) => {
        const list = res.data
        dispatch(load_list(list))
      })
      .catch((err) => {
        console.log(err, "getList 에러 입니다.")
      })
  }
}

const deleteListMiddleWares = (list) => {
  return function (dispatch, getState, { history }) {
    const { ingredient, id } = list
    instance
      .delete(`/api/recipe`, {
        data: {
          // ingredient,
          ...list,
        },
      })
      .then((res) => {
        dispatch(delete_list(list))
      })
      .catch((err) => {
        console.log(err, "삭제에러")
      })
  }
}
export default handleActions(
  {
    [ADD_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.basket_list.push(action.payload.item)
      }),
    [LOAD_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.basket_list = action.payload.basket_list
      }),
    [DELETE_LIST]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload.basket_id.ingredient)

        let idx = draft.basket_list.findIndex((p) => {
          return p.ingredient === action.payload.basket_id.ingredient
        })

        if (idx !== -1) {
          // 배열에서 idx 위치의 요소 1개를 지웁니다.
          draft.basket_list.splice(idx, 1)
        }
      }),
  },
  initialState
)

const actionsCreators = {
  // add_list,
  // load_list,
  addListMiddlewares,
  getListMiddleWares,
  deleteListMiddleWares,
  delete_list,
}

export { actionsCreators };
