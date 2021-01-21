import React from "react";
import "./App.css";
import imagenes from "./assets/imagenes";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cobro from "./Components/Cobro";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/cobro">
            <Cobro />
            <imagenes />
          </Route>
          <Route path="/">
            <Home />
            <imagenes />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
