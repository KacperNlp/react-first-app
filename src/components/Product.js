import React from "react";

const Product = (props) => {
  return (
    <div>
      <p>{`Znajdujesz się na podstronie ${props.id}`}</p>
    </div>
  );
};
export default Product;
