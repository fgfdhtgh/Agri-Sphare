import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Orders from "./pages/Orders"
import LandingPage from './pages/LandingPage';
import SigninPage from './pages/SignIn';
import SellerSignup from './pages/Seller_signup';
import AgriMart from './pages/AgriMart';
import Header from './components/Header';

function App() {
  return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<SigninPage />} />
          <Route path="/products" element={<Orders />} /> 
          <Route path="/seller" element={<SellerSignup />} /> 
          <Route path="/agrimart" element={<AgriMart />} /> 
        </Routes>
      </>
  )
}

export default App

