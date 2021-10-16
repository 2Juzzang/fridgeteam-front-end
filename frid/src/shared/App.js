import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Route,Switch } from "react-router-dom";
import Login from "../pages/Login"
import { Main } from "../pages/Main"
import List from "../pages/List"
import Recipe from "../pages/Recipe"
import Signup from "../pages/Signup"
import { history } from "../redux/configStore"
import "./App.css"
import { Header } from "../components/Header"

import { useDispatch } from 'react-redux';
import { getCookie } from './Cookie';
import { actionCreators as userActions } from '../redux/modules/user';
import Notfound from "../pages/Notfound"
function App() {
   const dispatch = useDispatch();
   const cookie = getCookie('user_login') ? true : false;

    React.useEffect(() => {
     if (cookie);
     dispatch(userActions.loginCheck(cookie));
   }, []);
  return (
    <div className="App">
      <Header />
      <ConnectedRouter history={history}>
        <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/" exact component={Main} />
        <Route path="/list/:id" exact component={List} />
        <Route path="/recipe/:name" exact component={Recipe} />
        <Route component={Notfound}/>
        </Switch>
      </ConnectedRouter>
    </div>
  )
}

export default App;
