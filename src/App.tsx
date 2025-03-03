import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Provider } from "react-redux";
import { store } from "./store";
import ProductDescription from "./pages/ProductDescription";
import Cart from "./pages/Cart";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentFailure from "./pages/PaymentFailure";


function App() {
  return (
    <div >
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/productdescription/:productId" element={<ProductDescription />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/paymentsuccess/:orderId" element={<PaymentSuccess />} />
            <Route path="/paymentfailure/:orderId" element={<PaymentFailure />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
