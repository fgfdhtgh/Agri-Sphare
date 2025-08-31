import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Orders from "./pages/Orders"
import LandingPage from './pages/LandingPage';
import SigninPage from './components/SignIn';

function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<SigninPage />} />
        <Route path="/orders" element={<Orders />} /> 
      </Routes>
  )
}

export default App

