import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import { useEffect } from "react";
import { getAllProductsThunk } from "./store/slices/products.slice";
import { useDispatch } from "react-redux";
import Header from './components/shared/Header'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import ProductIdPage from "./pages/ProductIdPage";
import CartPage from "./pages/CartPage";
import PurchasesPage from "./pages/PurchasesPage";
import ProtectedRoutes from "./pages/ProtectedRoutes";



function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductsThunk())
  }, [])


  return(
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product/:id" element={<ProductIdPage />}/>

        <Route element={<ProtectedRoutes />}/>
          <Route path='/cart' element={<CartPage />}/>
          <Route path="/purchases" element={<PurchasesPage/>} /> 
        <Route/>
      </Routes>
    </div>
  )
}

export default App;