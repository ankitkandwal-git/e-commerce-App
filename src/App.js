import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Home from './Components/Home'
import LoginPage from "./Components/LoginPage";
import Cart from './Components/Cart'
import Product from "./Components/Product";
import ProtectedRoute from "./Components/ProtectedRoute";
import NotFound from "./Components/NotFound";
const App = () =>(
  <BrowserRouter>
     <Routes>
            {/* public route */}
            <Route path="/login" element={<LoginPage />} />

            {/* protected routes grouped under parent ProtectedRoute (Outlet) */}
            <Route element={<ProtectedRoute />}> 
               <Route path="/" element={<Home />} />
               <Route path="/products" element={<Product />} />
               <Route path="/cart" element={<Cart />} />
            </Route>

            {/* fallback */}
            <Route  element={<NotFound />} />
     </Routes>
  </BrowserRouter>
)

export default App;
