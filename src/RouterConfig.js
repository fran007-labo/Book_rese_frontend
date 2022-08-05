import React from 'react';
import { Routes, Route } from "react-router-dom";

import { RegiBookForm, Cart } from './components/Index';
import App from './App';

export default function RouterConfig() {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/RegiBookForm" element={<RegiBookForm />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </>
  )
}