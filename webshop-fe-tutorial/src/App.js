import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/views/Layout";
import Shop from "./components/views/Shop";
import Account from "./components/views/Account";
import Checkout from "./components/views/Checkout";
import Login from "./components/views/Login";
import Register from "./components/views/Register";
import PrivateRoute from "./components/hocs/PrivateRoute";
import UnPrivateRoute from "./components/hocs/UnPrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Shop />} />
          <Route
            path="account"
            element={
              <PrivateRoute>
                <Account />
              </PrivateRoute>
            }
          />
          <Route path="checkout" element={<Checkout />} />
          <Route
            path="login"
            element={
              <UnPrivateRoute>
                <Login />
              </UnPrivateRoute>
            }
          />
          <Route
            path="login/:firstname/:lastname"
            element={
              <UnPrivateRoute>
                <Login />
              </UnPrivateRoute>
            }
          />
          <Route
            path="register"
            element={
              <UnPrivateRoute>
                <Register />
              </UnPrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
