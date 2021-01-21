import React from "react";
import "./Cobro.css";
import CobroProductos from "./CobroProductos";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Cobro() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="cobro">
      <div className="cobro_izquierda"></div>
      <div>
        <h2 className="cobro_titulo">Bienvenido a su carrito de compras.</h2>

        {basket.map((item) => (
          <CobroProductos
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>

      <div className="cobro_derecho">
        <Subtotal />
      </div>
    </div>
  );
}

export default Cobro;
