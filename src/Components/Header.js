import { Link } from "react-router-dom";
import React from "react";
import imagenes from "../assets/imagenes";
import "./Header.css";
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src={imagenes.img12} alt="/" />
      </Link>
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">
              Bienvenido {!user ? "Usuario" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Cerrar Sesión" : "Ingresa"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Devoluciones</span>
          <span className="header__optionLineTwo">& Ordenes</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Cliente</span>
          <span className="header__optionLineTwo">Vip</span>
        </div>

        <Link to="/cobro">
          <div className="header_optionCar">Carrito</div>
          <span className="header_optionCarOne">{basket?.length}</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
