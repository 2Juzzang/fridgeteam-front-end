import React from "react"
import { Grid, Button, Input, Text, Image } from "../elements/"
import { history } from "../redux/configStore"

export const Header = (props) => {
  return (
    <>
      <Grid is_flex justify_content="space-between">
        <Grid
          margin="0"
          _onClick={() => {
            history.push("/")
          }}
        >
          <Image />
        </Grid>
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
    </>
  )
}
