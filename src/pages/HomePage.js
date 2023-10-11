import React from "react";

//import useContext
import { useContext } from "react";

//import ProductContext
import { ProductContext } from "../contexts/ProductContext";

//import Components
import ProductComponent from "../components/ProductComponent";
import HeroComponent from "../components/HeroComponent";

const HomePage = () => {
  //Get Products from product context
  const { products } = useContext(ProductContext);
  // console.log(products);
  return (
    <div>
      <HeroComponent />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {products.map((product) => {
              return <ProductComponent product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
