import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Categories from './components/Categories';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';
import About from './components/About';
import Products from './components/Products';
import NotFound from './components/NotFound';
import TopBar from './components/TopBar'
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import './index.css'

function App() {
  return (
    <Router>
      <div>
        <TopBar />
        <Header />
        {/* <Banner /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:categoryId" element={<Products/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contactus" element={<Contact/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/product/:productName" element={<ProductDetails />} />
          <Route path="*" element={<NotFound/>} />  {/* Catch-all route for unknown paths */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
