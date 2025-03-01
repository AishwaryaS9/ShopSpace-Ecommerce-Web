import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Provider } from "react-redux";
import { store } from "./store";
import ProductDescription from "./pages/ProductDescription";


function App() {
  return (
    <div >
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/productdescription/:productId" element={<ProductDescription />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
