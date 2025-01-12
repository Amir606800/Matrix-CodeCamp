import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Middle from "./components/Middle";
import { useState } from "react";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <Header settingSearch={setSearchInput} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Middle inputValue={searchInput} />}></Route>
          <Route path="/products/:slug" element={<ProductDetail />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};
