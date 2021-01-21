import React from "react";
import "./App.css";
import imagenes from "./assets/imagenes";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cobro from "./Components/Cobro";
import Login from "./Components/Login";
import Payment from "./Components/Payment";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
            <imagenes />
          </Route>
          <Route path="/cobro">
            <Header />
            <Cobro />
            <imagenes />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
            <imagenes />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <imagenes />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
