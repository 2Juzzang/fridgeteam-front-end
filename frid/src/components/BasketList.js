import React from "react"
import Button from "../elements/Button"
import Grid from "../elements/Grid"
import Image from "../elements/Image"
import Input from "../elements/Input"
import Text from "../elements/Text"

export const BasketList = (props) => {
  const list = [
    {
      name: "김치",
      id: 111,
    },
    {
      name: "감자",
      id: 112,
    },
    {
      name: "돼지고기",
      id: 122,
    },
    {
      name: "소고기",
      id: 123,
    },
    {
      name: "당근",
      id: 143,
    },
    {
      name: "만두",
      id: 183,
    },
    {
      name: "만두",
      id: 193,
    },
    {
      name: "만두",
      id: 148,
    },
    {
      name: "만두",
      id: 154,
    },
    {
      name: "만두",
      id: 156,
    },
    {
      name: "만두",
      id: 1542,
    },
    {
      name: "만두",
      id: 1526,
    },
    {
      name: "만두",
      id: 1154,
    },
    {
      name: "만두",
      id: 1156,
    },
    {
      name: "만두",
      id: 1156,
    },
    {
      name: "만두",
      id: 1156,
    },
    {
      name: "만두",
      id: 1156,
    },
    {
      name: "만두",
      id: 1156,
    },
    {
      name: "만두",
      id: 1156,
    },
    {
      name: "만두",
      id: 1156,
    },
  ]

  //20개 한정

  return (
    <>
      <Grid is_flex justify_content="space-between">
        <Image />
        <Button
          is_RectangleSubmitBtn
          margin="10px 0px"
          size="80"
          _onClick={() => {
            // history.push("/login")
            console.log("이동중")
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
        <Input basket_input />
        <Button is_RectangleSubmitBtn size="90">
          재료추가
        </Button>
      </Grid>
    </>
  )
}

BasketList.defaultProps = {
  src: "https://t1.daumcdn.net/cfile/tistory/2533CF4F57B4E62307",
}
