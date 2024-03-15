import Shop from "./pages/Shop/shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginSignUp from "./pages/LoginSignUp/LoginSignUp";
import Home from "./pages/Home/Home";
import ItemPreview from "./components/shopPage/itemPreview";
import Cart from "./components/cart/Cart";
import { UserProvider } from "./context/userContext";

function App() {
  return (
    <>
    <UserProvider>
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />}> */}
          <Route path="/" element={<Home />} />
          <Route path="loginsignup" element={<LoginSignUp />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product/:productId" element={<ItemPreview />}/>
          <Route path="shoppingCart" element={<Cart />}/>
          {/* <Route path="*" element={<NoPage />} /> */}
         {/* </Route> */}
      </Routes>
      </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App
