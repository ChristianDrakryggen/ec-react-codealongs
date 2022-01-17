import products from "../../services/productService";
import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";

const Products = () => {
  const [prods, setProds] = useState([]);

  useEffect(() => {
    setProds(products);
  }, []);

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Our Products</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {prods.length > 0 &&
          prods.map((prod) => <ProductItem key={prod.id} product={prod} />)}
      </div>
    </>
  );
};

export default Products;
