import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";

const asidePages = ["cars", "motorbikes", "books", "boots"];
const HomePage = () => {
  const list = asidePages.map((product) => (
    <li key={product}>
      <Link to={`/product/${product}`}>{product}</Link>
    </li>
  ));
  return (
    <>
      <h1 className="product-list-title">Nasze artykuły:</h1>
      <div className="product-list">
        <ul>{list}</ul>
      </div>
    </>
  );
};

export default HomePage;
