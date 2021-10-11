import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Route } from "react-router-dom";

import Button from "../elements/Button";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Input from "../elements/Input";
import Text from "../elements/Text";
import { Main } from "../pages/Main";
import List from "../pages/List";
import Detail from "../pages/Detail";
import { history } from "../redux/configStore";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <Route path="/login" exact component={Login}/>
        <Route path="/signup" exact component={Signup}/>
        <Route path="/" exact component={Main} />
        <Route path="/list" exact component={List} />
        <Route path="/detail" exact component={Detail} />
      </ConnectedRouter>
    </div>
  );
}

export default App;
