// import React, { useState } from 'react';
import '../App.css'; // Import the CSS file for custom styles
import Banners from './Banners';
import Categories from './Categories';
import RecommendedProducts from './RecomendedProducts';
// import Footer from './Footer';

const Home = () => {
    return(
        <div>
            <Banners/>
            <Categories/>
            <RecommendedProducts/>
        </div>
    )
};

export default Home;