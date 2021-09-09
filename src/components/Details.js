import React from "react";
import { PConsumer } from "../contex";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

const Details = () => {
  return (
    <PConsumer>
      {(value) => {
        const { id, title, img, price, company, info, inCart } =
          value.detailProduct;
        return (
          <div className="container py-5">
            <div className="row">
              <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                <h1>{title}</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <img className="img-fluid" src={img} alt={title} />
              </div>
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <h2>Model : {title}</h2>
                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                  <span className="text-uppercase"> made by : {company}</span>
                </h4>
                <h4 className="text-blue">
                  price : <span>$</span> {price}
                </h4>
                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                  some info about product :
                </p>
                <p className="text-muted lead">{info}</p>
                <div>
                  <Link to="/">
                    <ButtonContainer>Back To Products</ButtonContainer>
                  </Link>
                  <ButtonContainer
                    cart
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? "In Cart" : "Add To Cart"}
                  </ButtonContainer>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </PConsumer>
  );
};

export default Details;
