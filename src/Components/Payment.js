import React, { useEffect, useState } from "react";
import CobroProductos from "./CobroProductos";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "axios";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent seria la confirmación de pago.

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        history.replace("/orders");
      });
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

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
        <div className="payment_details">
          <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />
            <div className="payment_priceContainer">
              <CurrencyFormat
                renderText={(value) => <h3>Total de la orden: {value}</h3>}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
              <button disabled={processing || disabled || succeeded}>
                <span>{processing ? <p>Processing</p> : "Compra ahora"}</span>
              </button>
            </div>
            {/* Errors */}
            {error && <div>{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;
