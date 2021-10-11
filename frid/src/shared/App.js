import { ConnectedRouter } from 'connected-react-router';
import React from 'react'
import { Route } from "react-router-dom";
import Button from '../elements/Button';
import Grid from '../elements/Grid';
import Image from '../elements/Image';
import Input from '../elements/Input';
import Text from '../elements/Text';
import { Main } from "../pages/Main"
import { history } from "../redux/configStore"
import "./App.css"
function App() {
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        {/* <Grid justify_content="center"  ><Image/><Button is_RectangleCancleBtn>40</Button><Text>안녕하세요</Text></Grid> */}
        {/* <Text>바보</Text> */}
        <Main></Main>
      </ConnectedRouter>
    </div>
  )
}

export default App;