import React, { createContext, useEffect, useState } from "react";
import { storeProducts, detailProduct } from "./data";

const PContext = createContext();

const PProvider = ({ children }) => {
  const [material, setMaterial] = useState({
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  });

  const setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach((items) => {
      const singleItem = { ...items };
      tempProducts = [...tempProducts, singleItem];
    });
    setMaterial((prev) => {
      return { ...prev, products: tempProducts };
    });
  };
  useEffect(() => {
    setProducts();
  }, []);

  const getItem = (id) => {
    const product = material.products.find((item) => item.id === id);
    return product;
  };

  const handleDetail = (id) => {
    const product = getItem(id);
    setMaterial((prev) => {
      return { ...prev, detailProduct: product };
    });
  };
  const addToCart = (id) => {
    let temp = [...material.products];
    const index = temp.indexOf(getItem(id));
    const product = temp[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    setMaterial((prev) => {
      return { ...prev, product: temp, cart: [...material.cart, product] };
    });
    addTotals();
  };

  const openModal = (id) => {
    const product = getItem(id);
    setMaterial((prev) => {
      return { ...prev, modalProduct: product, modalOpen: true };
    });
  };

  const closeModal = () => {
    setMaterial((prev) => {
      return { ...prev, modalOpen: false };
    });
  };

  const Increment = (id) => {
    let tempCart = [...material.cart];
    const selectedP = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedP);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    setMaterial((prev) => {
      return { ...prev, cart: [...tempCart] };
    });
    addTotals();
  };

  const Decrement = (id) => {
    let tempCart = [...material.cart];
    const selectedP = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedP);
    const product = tempCart[index];
    product.count = product.count - 1;
    if (product.count === 0) {
      removeItem(id);
    } else {
      product.total = product.count * product.price;
      setMaterial((prev) => {
        return { ...prev, cart: [...tempCart] };
      });
      addTotals();
    }
  };

  const removeItem = (id) => {
    let tempProducts = [...material.products];
    let tempCart = [...material.cart];
    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.total = 0;
    removedProduct.count = 0;
    setMaterial((prev) => {
      return { ...prev, cart: [...tempCart], products: [...tempProducts] };
    });
    addTotals();
  };

  const Cleared = () => {
    setMaterial((prev) => {
      return { ...prev, cart: [] };
    });
    setProducts();
    addTotals();
  };

  const addTotals = () => {
    let subTotal = 0;
    material.cart.map((i) => (subTotal += i.total));
    const temptax = subTotal * 0.5;
    const tax = parseFloat(temptax.toFixed(2));
    const total = subTotal + tax;
    setMaterial((prev) => {
      return {
        ...prev,
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total,
      };
    });
  };

  return (
    <PContext.Provider
      value={{
        ...material,
        handleDetail,
        addToCart,
        openModal,
        closeModal,
        Increment,
        Decrement,
        removeItem,
        Cleared,
      }}
    >
      {children}
    </PContext.Provider>
  );
};

const PConsumer = PContext.Consumer;

export { PProvider, PConsumer };
