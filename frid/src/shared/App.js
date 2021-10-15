import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom"
import Login from "../pages/Login"
import { Main } from "../pages/Main"
import List from "../pages/List"
import Recipe from "../pages/Recipe"
import Signup from "../pages/Signup"
import { history } from "../redux/configStore"
import "./App.css"
import { Header } from "../components/Header"
import Star from "../components/Star"
import { Grid } from "../elements/"
import { NotFound } from "../pages/NotFound"

function App() {
  return (
    <Grid>
      <Header />
      <ConnectedRouter history={history}>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/" exact component={Main} />
        <Route path="/list/:id" exact component={List} />
        <Route path="/recipe/:name" exact component={Recipe} />
        <Route path="/star" exact component={Star} />
      </ConnectedRouter>
    </Grid>
  )
}

export default App;
