import { createContext, useState } from "react";

export const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);
  const [basketVisible, setBasketVisible] = useState(false);

  console.log(basket);

  return (
    <>
      <BasketContext.Provider
        value={{ basket, setBasket, basketVisible, setBasketVisible }}
      >
        {children}
      </BasketContext.Provider>
    </>
  );
};

export default BasketProvider;
