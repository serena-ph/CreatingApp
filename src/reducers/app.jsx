import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import React from "react";
import { useGetProductsQuery } from "./reducers/api";
function App() {
  const userRouter = (
    <Routes>
      <Route index element ={<Products/> } />
       </Routes>
  )
  return userRouter
}
export default App