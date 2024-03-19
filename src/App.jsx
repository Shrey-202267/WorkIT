import Shop from "./pages/Shop/Shop"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginSignUp from "./pages/LoginSignUp/LoginSignUp";
import Home from "./pages/Home/Home";
import ItemPreview from "./components/shopPage/itemPreview";
import Cart from "./components/cart/Cart";
// import { UserProvider } from "./context/userContext";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import InsertData from "./pages/Insert data/InsertData";

function App() {

  const {currentUser} = useContext(AuthContext)

  const RequireAuth = ({children}) =>{
    return currentUser ? children : window.location.href = '/loginsignup';
  }
  // console.log(currentUser);

  return (
    <>

      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />}> */}
          <Route path="/" element={<Home />} />
          <Route path="loginsignup" element={<LoginSignUp />} />
          
          <Route path="shop" element={<RequireAuth><Shop /></RequireAuth>} />

          <Route path="product/:productId" element={<RequireAuth><ItemPreview /></RequireAuth>}/>
          <Route path="shoppingCart" element={<RequireAuth><Cart /></RequireAuth>}/>
          <Route path="admin" element={<RequireAuth><InsertData /></RequireAuth>}/>
          {/* <Route path="*" element={<NoPage />} /> */}
         {/* </Route> */}
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
