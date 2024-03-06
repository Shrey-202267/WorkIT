import Shop from "./pages/Shop/Shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginSignUp from "./pages/LoginSignUp/LoginSignUp";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />}> */}
          <Route path="/" element={<Home />} />
          <Route path="loginsignup" element={<LoginSignUp />} />
          <Route path="shop" element={<Shop />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
