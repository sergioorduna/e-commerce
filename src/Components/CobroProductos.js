import React from "react";
import "./CobroProductos.css";
import { useStateValue } from "./StateProvider";

function CobroProductos({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="cobroProductos">
      <img className="cobroProductos_image" src={image} alt="/" />

      <div className="cobroProductos_info">
        <p className="cobroProductos_title">{title}</p>
        <p className="cobroProductos_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="cobroProductos_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭑</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remover del carrito</button>
      </div>
    </div>
  );
}

export default CobroProductos;
