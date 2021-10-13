import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Route } from "react-router-dom";
import Login from "../pages/Login";
import Button from "../elements/Button";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Input from "../elements/Input";
import Text from "../elements/Text";
import { Main } from "../pages/Main";
import List from "../pages/List";
import Recipe from "../pages/Recipe";
import Signup from "../pages/Signup";
import { history } from "../redux/configStore";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/" exact component={Main} />
        <Route path="/list/:id" exact component={List} />
        <Route path="/recipe/:name" exact component={Recipe} />
      </ConnectedRouter>
    </div>
  );
}

export default App;
