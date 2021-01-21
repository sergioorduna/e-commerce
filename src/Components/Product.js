import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("este es el basket >>>", basket);
  const addToBasket = () => {
    // aqui hacemos el envio a la página
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="info_product">
        <p> {title} </p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭑</p>
            ))}
        </div>
      </div>

      <img src={image} alt="/" />
      <button onClick={addToBasket}>Añadir al carrito</button>
    </div>
  );
}

export default Product;
