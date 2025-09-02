import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Orders from "./pages/Orders"
import LandingPage from './pages/LandingPage';
import SigninPage from './pages/SignIn';
import SellerPage from './pages/Seller';

function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<SigninPage />} />
        <Route path="/orders" element={<Orders />} /> 
        <Route path="/seller" element={<SellerPage />} /> 
      </Routes>
  )
}

export default App

