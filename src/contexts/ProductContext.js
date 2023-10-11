import React from "react";
import { createContext, useState, useEffect } from "react";

//Create Context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // State for products.
  const [products, setProducts] = useState([]);
  //fetch Products
  useEffect(() => {
    const apiUrl = "https://fakestoreapi.com/products";
    const fetchProducts = async () => {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  });
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
