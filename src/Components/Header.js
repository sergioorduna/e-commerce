import { Link } from "react-router-dom";
import React from "react";
import imagenes from "../assets/imagenes";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src={imagenes.img1} alt="/" />
      </Link>
      <div className="header_nav">
        <div className="header__option">
          <span className="header__optionLineOne">Bienvenido usuario</span>
          <span className="header__optionLineTwo">Ingresa</span>
        </div>
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
          <span className="header_optionCarOne">0</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
