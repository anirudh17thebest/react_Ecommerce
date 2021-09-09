import React from "react";
import { PConsumer } from "../../contex";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

const Cart = (props) => {
  return (
    <section>
      <PConsumer>
        {(value) => {
          const { cart } = value;
          if (cart.length > 0) {
            return (
              <>
                <Title name="your" title="cart" />
                <CartColumns />
                <CartList value={value} />
                <CartTotals value={value} history={props.history} />
              </>
            );
          } else {
            return <EmptyCart />;
          }
        }}
      </PConsumer>
    </section>
  );
};

export default Cart;
