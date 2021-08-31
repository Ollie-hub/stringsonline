import React from "react";
import "./App.scss";
import { BrowserRouter as Browser, Switch, Route, Redirect } from 'react-router-dom';
import { Navigation } from "./components/nav/Navbar";

function App() {
  return (
    <Browser>
      <Navigation />

      <Switch>
        <Route exact path="/forside">

        </Route>
        <Route exact path="/2">

        </Route>
        <Route exact path="/3">

        </Route>

        <Route path="/">
          <Redirect to="/forside"></Redirect>
        </Route>
      </Switch>

    </Browser>
  )
}
export default App;