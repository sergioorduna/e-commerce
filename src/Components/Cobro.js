import React from "react";
import "./Cobro.css";
import Subtotal from "./Subtotal";

function Cobro() {
  return (
    <div className="cobro">
      <div className="cobro_izquierda"></div>
      <div>
        <h2 className="cobro_titulo">Bienvenido a su carrito de compras.</h2>
        {/*itemCarrito */}
        {/*itemCarrito */}
        {/*itemCarrito */}
        {/*itemCarrito */}
        {/*itemCarrito */}
      </div>

      <div className="cobro_derecho">
        <Subtotal />
      </div>
    </div>
  );
}

export default Cobro;
