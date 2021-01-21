import React, { useState } from "react";
import imagenes from "../assets/imagenes";
import "./Login.css";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const singIn = (e) => {
    e.preventDefault();

    // aqui deberia entrar el firebase
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" src={imagenes.img11} alt="/" />
      </Link>

      <div className="login_container">
        <h1>Ingresa</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Contraseña</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={singIn} className="login_botonIngresa">
            Ingresa
          </button>
        </form>
        <br></br>
        <button onClick={register} className="login_creaCuenta">
          Crea una cuenta
        </button>
      </div>
    </div>
  );
}

export default Login;
