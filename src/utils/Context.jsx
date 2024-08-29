import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

const Context = ({ children }) => {
  const api = "https://fakestoreapi.com/products";
  const [ productsData, setProductData ] = useState([]);

  useEffect(() => {
    axios
      .get(api)
      .then((products) => setProductData(products.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <DataContext.Provider value={{productsData, setProductData}}>
      {children}
    </DataContext.Provider>
  );
};

export default Context;
