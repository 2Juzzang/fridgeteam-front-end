import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Grid, Button, Input, Text, Image } from "../elements/"
import { history } from "../redux/configStore"
import { actionsCreators as basketActions } from "../redux/modules/basketList"
import { Blank } from "./Blank"

export const BasketList = (props) => {
  const dispatch = useDispatch()
  const [text, setText] = useState("")

  const list = useSelector((state) => state.basketList.basket_list)
  useEffect(() => {
    dispatch(basketActions.getListMiddleWares())
  }, [])

  const addList = (e) => {
    setText(e.target.value)
  }

  const addBtn = (e) => {
    for (let i = 0; i < list.length; i++) {
      if (text === list[i].ingredient) {
        window.alert("이미 있는 재료입니다.")
        return
      }
    }

    // if (!inputCheck.test(text)) {
    //   window.alert("1~6글자 한글만 입력가능")
    //   return
    // }

    dispatch(basketActions.addListMiddlewares(text))
    setText("")
  }

  return (
    <>
      <Image is_basketList src={props.src} is_bg />
      <Grid is_grid width="80%">
        {list.length > 0 ? (
          list.map((e) => {
            // key 값은 가장 최상위
            return (
              <Grid
                basket
                width="auto"
                padding="0 20px"
                bg="#383838"
                key={e.id}
              >
                <Grid margin="0px 3px 20px 3px" width="auto" is_flex>
                  <Button
                    is_updateBtn
                    _onClick={() => {
                      console.log("수정눌렀어요")
                    }}
                  ></Button>
                  <Button
                    is_detBtn
                    _onClick={() => {
                      if (window.confirm("삭제하시겠습니까?")) {
                        console.log(e.ingredient)
                        dispatch(
                          basketActions.deleteListMiddleWares({
                            ingredient: e.ingredient,
                            id: e.id,
                          })
                        )
                      } else {
                        window.alert("취소하셨습니다.")
                        return
                      }
                    }}
                    // ref={btnValue}
                  ></Button>
                </Grid>
                <Text
                  color="#ffffffd9"
                  size="24px"
                  basket
                  _onClick={() => {
                    history.push(`/list/${e.ingredient}`)
                  }}
                >
                  {e.ingredient}
                </Text>
              </Grid>
            )
          })
        ) : (
          <Blank></Blank>
        )}
      </Grid>

      <Grid is_flex margin="40px 0px" justify_content="flex-end">
        <Input
          basket_input
          _onChange={addList}
          value={text}
          placeholder="식재료를 입력해주세요"
        />
        <Button is_RectangleSubmitBtn size="50" _onClick={addBtn}>
          추가
        </Button>
      </Grid>
    </>
  )
}

BasketList.defaultProps = {
  src: "https://t1.daumcdn.net/cfile/tistory/2533CF4F57B4E62307",
}
