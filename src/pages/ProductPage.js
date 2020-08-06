import React from "react";
import { Link } from "react-router-dom";
import Product from "../components/Product";

const ProductPage = (props) => {
  console.log(props);
  return (
    <>
      <Product id={props.match.params.id} />
      <Link to="/">Powrót</Link>
    </>
  );
};

export default ProductPage;
