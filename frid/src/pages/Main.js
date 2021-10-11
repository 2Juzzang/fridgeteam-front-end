import React from "react"
import Button from "../elements/Button"
import Grid from "../elements/Grid"
import Image from "../elements/Image"
import { history } from "../redux/configStore"

export const Main = (props) => {
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
      id: 153,
    },
  ]
  return (
    <>
      <Grid is_flex justify_content="flex-end">
        <Button
          is_RectangleSubmitBtn
          margin="10px 0px"
          size={60}
          _onClick={() => {
            // history.push("/login")
            console.log("이동중")
          }}
        >
          로그인
        </Button>
      </Grid>
      <Grid>
        <Image src={props.src} />
      </Grid>
      <Grid is_flex>
        {list &&
          list.map((e) => {
            return (
              <Grid width="auto" key={e.id}>
                {e.name}
              </Grid>
            )
          })}
      </Grid>
    </>
  )
}

Main.defaultProps = {
  src: "https://post-phinf.pstatic.net/MjAyMDAxMDlfNjEg/MDAxNTc4NTUxNjE5MDY4.H7v7-mIjEm7bYV8u1zxFpXQ1vnhY1orna0Jmf9vuiPIg.rc0tV6h74my14bE0pmKNmfAeiXCcwoMOBBTnPQ42MXAg.JPEG/AndreyPopov.jpg?type=w1200",
}
