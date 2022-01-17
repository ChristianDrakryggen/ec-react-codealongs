import { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";
import useRemoveArrayDuplicates from "../../hooks/useRemoveArrayDuplicates";

const Basket = (props) => {
  const { isBasket = true } = props;

  const { basket, setBasket, setBasketVisible } = useContext(BasketContext);
  const filteredBasket = useRemoveArrayDuplicates(basket);

  console.log("filtered: ", filteredBasket);

  const priceArray = basket.map((p) => p.price);

  const removeProduct = (id) => {
    setBasket([...basket].filter((product) => product.id !== id));
  };

  return (
    <>
      {isBasket && (
        <div
          style={{
            padding: "20px 10px",
            borderBottom: "2px solid red",
            position: "sticky",
            top: "0",
            backgroundColor: "white",
            maxHeight: "60vh",
          }}
        >
          <div
            style={{
              maxHeight: "40vh",
              overflow: "auto",
              borderBottom: "1px solid blue",
            }}
          >
            {basket.length <= 0 && (
              <p>There are no products in your basket...</p>
            )}
            {basket.length > 0 &&
              filteredBasket.map((product) => (
                <div
                  key={product.id}
                  style={{
                    borderBottom: "1px solid black",
                    paddingBottom: "20px",
                  }}
                >
                  <p>
                    {product.name} {product.qty} st <br />
                    {product.price * product.qty} kr
                  </p>
                  <button onClick={() => removeProduct(product.id)}>
                    Remove
                  </button>
                </div>
              ))}
          </div>
          <p style={{ fontWeight: "bold", marginTop: "30px" }}>
            Total price:{" "}
            {priceArray.length > 0
              ? priceArray.reduce((total, price) => total + price)
              : "0"}{" "}
            kr
          </p>
          <button onClick={() => setBasketVisible(false)}>Hide basket</button>
        </div>
      )}
      {!isBasket && (
        <div>
          {basket.length <= 0 && <p>There are no products in your basket...</p>}
          {basket.length > 0 &&
            filteredBasket.map((product) => (
              <div
                key={product.id}
                style={{
                  borderBottom: "1px solid black",
                  paddingBottom: "20px",
                }}
              >
                <p>
                  {product.name} {product.qty} st <br />
                  {product.price * product.qty} kr
                </p>
                <button onClick={() => removeProduct(product.id)}>
                  Remove
                </button>
              </div>
            ))}
          <p style={{ fontWeight: "bold", marginTop: "30px" }}>
            Total price:{" "}
            {priceArray.length > 0
              ? priceArray.reduce((total, price) => total + price)
              : "0"}{" "}
            kr
          </p>
        </div>
      )}
    </>
  );
};

export default Basket;
