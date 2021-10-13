// Actions
const CREATE = "list/CREATE";
const LOAD = "list/LOAD";
// const DELETE = "post/DELETE";
// const EDIT = "post/EDIT";

const initialState = {
  list: [
    {
      name: "문어",
      img: "https://s3-ap-northeast-1.amazonaws.com/dcreviewsresized/20200304045854_photo1_92920958b8e9.jpg",
    },
    {
      name: "치킨",
      img: "https://img.hankyung.com/photo/201912/99.11408081.1.jpg",
    },
  ],
};

//Action creators
export function loadList() {
  const list = initialState.list;
  return { type: LOAD, list };
}

export function createList(list) {
  return { type: CREATE, list };
}

// export function deletePost(post) {
//     return { type: DELETE, post};

// }

// export function editPost(post) {
//     return { type: EDIT, post};
// }

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "list/CREATE": {
      // const new_post_list = [...state.post, action.post];
      return { list: [...state.list, action.list] };
    }
    case "list/LOAD": {
      return { list: action.list };
      // 이 과정을 거치면 initialState의 post( 빈 배열 )에 { post : action.post} 가 담기고 이걸 map을 통해 뷰에 나타냄
    }
    default:
      return state;
  }
}
