import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Button from "../elements/Button"
import Grid from "../elements/Grid"
import Image from "../elements/Image"
import Input from "../elements/Input"
import Text from "../elements/Text"
import { history } from "../redux/configStore"
import { actionsCreators as basketActions } from "../redux/modules/basketList"

export const BasketList = (props) => {
  const dispatch = useDispatch()
  const [item, setItem] = useState("")

  useEffect(() => {
    dispatch(basketActions.getListMiddleWares())
  }, [])

  const list = useSelector((state) => state.basketList.basket_list)

  const addList = (e) => {
    setItem(e.target.value)
  }

  return (
    <>
      <Grid is_flex justify_content="space-between">
        <Image />
        <Button
          is_RectangleSubmitBtn
          margin="10px 0px"
          size="80"
          _onClick={() => {
            history.push("/login")
          }}
        >
          로그인
        </Button>
      </Grid>
      <Grid>
        <Image is_basketList src={props.src} is_bg />

        <Grid is_grid width="80%">
          {list &&
            list.map((e) => {
              return (
                <Grid
                  width="auto"
                  padding="0 20px"
                  bg="#fff"
                  borderRadius
                  key={e.id}
                >
                  <Text color="#008eff" size="24px">
                    {e.name}
                  </Text>
                </Grid>
              )
            })}
        </Grid>
      </Grid>

      <Grid is_flex margin="40px 0px" justify_content="flex-end">
        <Input basket_input _onChange={addList} />
        <Button
          is_RectangleSubmitBtn
          size="90"
          _onClick={() => {
            setItem("")
            dispatch(basketActions.addListMiddlewares(item))
          }}
        >
          재료추가
        </Button>
      </Grid>
    </>
  )
}

BasketList.defaultProps = {
  src: "https://t1.daumcdn.net/cfile/tistory/2533CF4F57B4E62307",
}
