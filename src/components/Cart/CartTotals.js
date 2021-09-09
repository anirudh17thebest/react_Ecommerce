import React from "react";
import { Link } from "react-router-dom";
import Paypal from "./Paypal";

const CartTotals = ({ value, history }) => {
  const { cartSubTotal, cartTax, cartTotal, Cleared } = value;
  return (
    <>
      <div className="container">
        <div className="row">
          <div className=" mt-4 col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-start">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => Cleared()}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className="text-title">subtotal : </span>
              <strong>${cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">tax : </span>
              <strong>${cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">total : </span>
              <strong>${cartTotal}</strong>
            </h5>
            <Paypal
              total={cartTotal}
              Cleared={() => Cleared()}
              history={history}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartTotals;
