import React from "react";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
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
      <button onClick>Añadir al carrito</button>
    </div>
  );
}

export default Product;
