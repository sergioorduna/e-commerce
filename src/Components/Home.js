import React from "react";
import imagenes from "../assets/imagenes";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src={imagenes.img2} alt="/" />

        <div className="home_cards">
          <Product
            id="38983698634"
            title="Diadema rosa"
            price={150}
            image={imagenes.img3}
            rating={5}
          />
          <Product
            id="374364957"
            title="Diadema fresas"
            price={150}
            image={imagenes.img4}
            rating={5}
          />
          <Product
            id="7479388"
            title="Diadema flamingos"
            price={150}
            image={imagenes.img5}
            rating={5}
          />
        </div>

        <div className="home_cards">
          <Product
            id="86573893"
            title="Diademas varias"
            price={150}
            image={imagenes.img6}
            rating={5}
          />
          <Product
            id="1568832620"
            title="Diadema varias"
            price={150}
            image={imagenes.img7}
            rating={5}
          />
        </div>

        <div className="home_cards">
          <Product
            id="15537820"
            title="Diadema morada"
            price={150}
            image={imagenes.img8}
            rating={5}
          />
          <Product
            id="27645682"
            title="Diadema corazones"
            price={150}
            image={imagenes.img9}
            rating={5}
          />
          <Product
            id="26647892"
            title="Diadema aliens"
            price={150}
            image={imagenes.img10}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
