import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Categories from "./components/Categories";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";
import About from "./components/About";
import Products from "./components/Products";
import NotFound from "./components/NotFound";
// import TopBar from "./components/TopBar";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import "./index.css";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import OurWork from "./components/OurWork";

function App() {
  return (
    <Router>
      <div>
        {/* <TopBar /> */}
        <Header />
        {/* <Banner /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:categoryId" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/ourwork" element={<OurWork />} />
          <Route path="/product/:ProductId" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />{" "}
          {/* Catch-all route for unknown paths */}
        </Routes>
        <Footer />
        <div className="fixed bottom-4 right-4 flex flex-col">
          <a
            href="tel:+916302141511"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg cursor-pointer z-50 mb-2"
          >
            <FaPhone size={24} className="text-white" />
          </a>
          <a
            href="https://wa.me/+916302141511"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg cursor-pointer z-50"
          >
            <FaWhatsapp size={24} className="text-white" />
          </a>
        </div>
      </div>
    </Router>
  );
}

export default App;
