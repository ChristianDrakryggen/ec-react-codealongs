import Basket from "../general/Basket";
import { useState, useContext, useEffect } from "react";
import { BasketContext } from "../../context/BasketContext";
import { UserContext } from "../../context/UserContext";
import useRemoveArrayDuplicates from "../../hooks/useRemoveArrayDuplicates";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { user } = useContext(UserContext);
  const { basket, setBasket } = useContext(BasketContext);

  const navigate = useNavigate();
  const filteredBasket = useRemoveArrayDuplicates(basket);

  const [orderFulfilled, setOrderFulfilled] = useState(false);
  const [deliveryInfo, setDeliveryInfo] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    street: "",
    zipCode: "",
    city: "",
    products: [],
  });

  const gridItemStyle = {
    padding: "0px 20px",
  };

  const handleInput = (e) => {
    setDeliveryInfo({ ...deliveryInfo, [e.target.name]: e.target.value });
  };

  const sendOrder = (e) => {
    e.preventDefault();
    alert(JSON.stringify(deliveryInfo));
    setOrderFulfilled(true);
    setBasket([]);
  };

  useEffect(() => {
    setDeliveryInfo({
      ...deliveryInfo,
      firstname: user.firstname || "",
      lastname: user.lastname || "",
      phone: user.phone || "",
      street: user.street || "",
      zipCode: user.lastname || "",
      city: user.city || "",
      products: filteredBasket,
    });
  }, [basket]);

  return (
    <>
      <h1>Checkout</h1>
      {orderFulfilled && (
        <>
          <p>Thank you for your order!</p>
          <button onClick={() => navigate("/")}>Return to shop</button>
        </>
      )}
      {!orderFulfilled && basket.length <= 0 && (
        <>
          <p>You have nothing to order...</p>
          <button onClick={() => navigate("/")}>Return to shop</button>
        </>
      )}
      {!orderFulfilled && basket.length > 0 && (
        <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
          <div style={gridItemStyle}>
            <h2>Your products</h2>
            <Basket isBasket={false} />
          </div>
          <div style={gridItemStyle}>
            <h2>Delivery info</h2>
            <form onSubmit={sendOrder}>
              <input
                name="firstname"
                placeholder="Firstname"
                onChange={handleInput}
                value={deliveryInfo.firstname}
                required
              />
              <input
                name="lastname"
                placeholder="Lastname"
                onChange={handleInput}
                value={deliveryInfo.lastname}
                required
              />
              <input
                name="phone"
                placeholder="Phone"
                onChange={handleInput}
                value={deliveryInfo.phone}
                required
              />
              <input
                name="street"
                placeholder="Street"
                onChange={handleInput}
                value={deliveryInfo.street}
                required
              />
              <input
                name="zipCode"
                placeholder="Zip code"
                onChange={handleInput}
                value={deliveryInfo.zipCode}
                required
              />
              <input
                name="city"
                placeholder="City"
                onChange={handleInput}
                value={deliveryInfo.city}
                required
              />
              <button type="submit">Send order</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
