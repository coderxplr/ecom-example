// import React, { useState } from 'react';
import '../App.css'; // Import the CSS file for custom styles
import HomeAbout from './HomeAbout';
import Banners from './Banners';
import Categories from './Categories';
import RecommendedProducts from './RecomendedProducts';
import ContactSummary from './ContactSummary';
// import Footer from './Footer';

const Home = () => {
    return(
        <div style={{ fontFamily: 'lexand' }}>
            <Banners/>
            <Categories/>
            <RecommendedProducts/>
            <HomeAbout/>
            <ContactSummary/>
        </div>
    )
};

export default Home;