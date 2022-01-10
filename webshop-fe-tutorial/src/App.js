import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/views/Layout";
import Shop from "./components/views/Shop";
import Account from "./components/views/Account";
import Checkout from "./components/views/Checkout";
import Login from "./components/views/Login";
import Register from "./components/views/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Shop />} />
          <Route path="account" element={<Account />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="login" element={<Login />} />
          <Route path="login/:firstname/:lastname" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
