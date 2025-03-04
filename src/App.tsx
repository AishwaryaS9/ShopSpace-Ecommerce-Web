import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { store } from "./store";
import ProductDescription from "./pages/ProductDescription";
import Cart from "./pages/Cart";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentFailure from "./pages/PaymentFailure";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import FAQ from "./pages/FAQ";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";


function App() {
  return (
    <div >
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productdescription/:productId" element={<ProductDescription />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/paymentsuccess/:orderId" element={<PaymentSuccess />} />
            <Route path="/paymentfailure/:orderId" element={<PaymentFailure />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/termsofuse" element={<TermsOfUse />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
