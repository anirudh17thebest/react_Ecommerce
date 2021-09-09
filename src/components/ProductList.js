import React from "react";
import Product from "./Product";
import Title from "./Title";
import { PConsumer } from "../contex";

const ProductList = () => {
  return (
    <>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row">
            <PConsumer>
              {(value) => {
                return value.products.map((content) => {
                  return <Product key={content.id} content={content} />;
                });
              }}
            </PConsumer>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
