// import React, { useState } from 'react';
import '../App.css'; // Import the CSS file for custom styles
// import HomeAbout from './HomeAbout';
import Banners from './Banners';
import Categories from './Categories';
import RecommendedProducts from './RecomendedProducts';
// import ContactSummary from './ContactSummary';
import OrderForm from './OrderForm';
import HomeGallery from './HomeGallery';
// import Services from './Services';
// import Footer from './Footer';

const Home = () => {
    return(
        <div style={{ fontFamily: 'lexand' }}>
            <Banners/>
            <RecommendedProducts/>
            <Categories/>
            <HomeGallery/>
            <OrderForm/>
            {/* <Services/> */}
            {/* <HomeAbout/> */}
            {/* <ContactSummary/> */}
        </div>
    )
};

export default Home;


/* 

import React, { useState, useEffect } from 'react';
import Loader from './Loader';

const Home = () => {
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      let productsData = JSON.parse(localStorage.getItem('products'));
      let categoriesData = JSON.parse(localStorage.getItem('categories'));

      if (!productsData) {
        const productsResponse = await fetch('https://ecom-be-admin.onrender.com/products');
        productsData = await productsResponse.json();
        localStorage.setItem('products', JSON.stringify(productsData));
      }

      if (!categoriesData) {
        const categoriesResponse = await fetch('https://ecom-be-admin.onrender.com/categories');
        categoriesData = await categoriesResponse.json();
        localStorage.setItem('categories', JSON.stringify(categoriesData));
      }

      setProducts(productsData);
      setCategories(categoriesData);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div style={{ fontFamily: 'lexand' }}>
      <Banners />
      <Categories categories={categories} />
      <OrderForm products={products} />
      <RecommendedProducts products={products} />
      <HomeAbout />
      <ContactSummary />
    </div>
  );
};

export default Home;


*/