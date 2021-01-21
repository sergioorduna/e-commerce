import React, { useState } from "react";
import imagenes from "../assets/imagenes";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          <button className="login_botonIngresa">Ingresa</button>
        </form>
        <br></br>
        <button className="login_creaCuenta">Crea una cuenta</button>
      </div>
    </div>
  );
}

export default Login;
