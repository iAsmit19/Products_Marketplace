import axios from "axios";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const DataContext = createContext();

const Context = ({ children }) => {
  const api = "https://fakestoreapi.com/products";
  const [productsData, setProductData] = useState([]);

  useEffect(() => {
    axios
      .get(api)
      .then((products) => setProductData(products.data))
      .catch((error) => console.log(error));
  }, []);

  const [productsInCart, setProductsInCart] = useState(0);

  const [cartProducts, setCartProducts] = useState([]);

  return (
    <DataContext.Provider
      value={{
        productsData,
        setProductData,
        productsInCart,
        setProductsInCart,
        cartProducts,
        setCartProducts,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

Context.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Context;
