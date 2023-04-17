import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Login } from '../pages'

const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
    </Routes>
  )
}

export default Router;