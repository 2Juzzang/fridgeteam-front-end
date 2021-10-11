import { ConnectedRouter } from 'connected-react-router';
import React from 'react'
import { Route } from "react-router-dom";
import Button from '../elements/Button';
import Grid from '../elements/Grid';
import Image from '../elements/Image';
import Input from '../elements/Input';
import Text from '../elements/Text';
import Login from '../pages/Login';
import { Main } from "../pages/Main"
import Signup from '../pages/Signup';
import { history } from "../redux/configStore"
import "./App.css"
function App() {
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        {/* <Grid justify_content="center"  ><Image/><Button is_RectangleCancleBtn>40</Button><Text>안녕하세요</Text></Grid> */}
        {/* <Text>바보</Text> */}
        <Route path = "/" exact component={Main}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/signup" exact component={Signup}/>

      </ConnectedRouter>
    </div>
  )
}

export default App;
