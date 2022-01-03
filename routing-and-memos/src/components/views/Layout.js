import { Outlet, Link } from "react-router-dom";
import Footer from "../general/Footer";
import Navbar from "../general/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
