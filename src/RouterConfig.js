import React from "react";
import { Routes, Route } from "react-router-dom";

import { RegiBookForm, Cart } from './components/Index';
import Home from './Home';

export default function RouterConfig() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/RegiBookForm" element={<RegiBookForm/>} />
        <Route path="/Cart" element={<Cart/>} />
      </Routes>
    </>
  )
}
