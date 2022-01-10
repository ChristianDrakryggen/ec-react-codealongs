import { Outlet } from "react-router-dom";
import Navbar from "../general/Navbar";
import Basket from "../general/Basket";
import { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";

const Layout = () => {
  const { basketVisible } = useContext(BasketContext);

  return (
    <>
      {basketVisible && <Basket />}
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
