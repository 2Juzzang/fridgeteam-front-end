import { createAction, handleActions } from "redux-actions"
import { produce } from "immer"
import axios from "axios"

const ADD_LIST = "ADD_LIST"
const LOAD_LIST = "LOAD_LIST"

const add_list = createAction(ADD_LIST, (item) => ({ item }))
const load_list = createAction(LOAD_LIST, (basket_list) => ({ basket_list }))

const initialState = {
  basket_list: [],
  is_login: false,
}

const instance = axios.create({
  baseURL: "http://localhost:3002/",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
  },
})

const addListMiddlewares = (item) => {
  return function (dispatch, getState, { history }) {
    const list = getState().basketList.basket_list
    if (!item) {
      return
    }
    if (list.length < 20) {
      instance
        .post("list", { name: item })
        .then((res) => {
          dispatch(
            add_list({
              name: item,
              id: res.data.id,
            })
          )
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
      .get("list")
      .then((res) => {
        const list = res.data
        dispatch(load_list(list))
      })
      .catch((err) => {
        console.log(err, "getList 에러 입니다.")
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
  },
  initialState
)

const actionsCreators = {
  add_list,
  load_list,
  addListMiddlewares,
  getListMiddleWares,
}

export { actionsCreators }
