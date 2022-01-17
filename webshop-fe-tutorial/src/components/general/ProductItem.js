import { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";

const ProductItem = (props) => {
  const { product } = props;
  const { basket, setBasket } = useContext(BasketContext);

  const addToBasket = () => {
    const same = basket.filter((item) => item === product);
    Object.assign(product, {
      qty: same.length + 1,
    });
    setBasket([...basket, product]);
  };

  return (
    <div
      style={{
        width: "25%",
        border: "2px solid blue",
        margin: "20px",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <p>{product.name}</p>
      <p>{product.price} kr</p>
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default ProductItem;
