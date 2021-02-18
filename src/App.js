import React, { useEffect } from "react";
import "./App.css";
import imagenes from "./assets/imagenes";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cobro from "./Components/Cobro";
import Login from "./Components/Login";
import Payment from "./Components/Payment";
import { auth } from "./firebase";
import { useStateValue } from "./Components/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51ILyFXKN6yGAiToSxn0FLGx3bCpmNoGrrNnbwv7lAOjxaFz2qo7w215XTC4Kd0TsYE6g7Cr2TLRDuDrSsMdcUbDV00Vc9WZzZT"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

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
            <Elements stripe={promise}>
              <Payment />
            </Elements>
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
