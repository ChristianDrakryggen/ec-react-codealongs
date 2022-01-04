import { createContext, useState } from "react";

export const BasketContext = createContext();

const BasketProvider = (providerObject) => {
  console.log(providerObject);

  const [basket, setBasket] = useState([]);

  return (
    <BasketContext.Provider value={{ basket, setBasket }}>
      {providerObject.children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
