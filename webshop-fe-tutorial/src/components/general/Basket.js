import { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";

const Basket = () => {
  const { basket } = useContext(BasketContext);

  return (
    <div style={{ padding: "20px 10px", borderBottom: "2px solid red" }}>
      {basket.length <= 0 && <p>There are no products in your basket...</p>}
    </div>
  );
};

export default Basket;
