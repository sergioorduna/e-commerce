import React from "react";
import CobroProductos from "./CobroProductos";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout (<Link to="/cobro">{basket?.length} items</Link>)
        </h1>
      </div>
      <div className="payment_section">
        <div className="payment_title">
          <h3>Dirección de envío</h3>
        </div>
        <div className="payment_direccion">
          <p>{user?.email}</p>
          <p>Jacarandas 341</p>
          <p>Cuernavaca, Morelos</p>
        </div>
      </div>
      <div className="payment_section">
        <div className="payment_title">
          <h3>Checa articulos y envio</h3>
        </div>
        <div className="payment_items">
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
      </div>
      <div className="payment_section">
        <div className="payment_title">
          <h3>Metodo de pago</h3>
        </div>
        <div className="payment_details"></div>
      </div>
    </div>
  );
}

export default Payment;
