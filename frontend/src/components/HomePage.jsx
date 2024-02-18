import React from 'react';
import FetchAllMenus from './MenuCards';
import Navbar from './Navbar';
import Footer from './Footer';
import webpImage from '../assets/img/1648540195405.webp';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <section className='hero'>
        <div className='hero-body backgroundImage'>
          <div className='container'>
            <h1 className='title is-1 has-text-centered has-text-white mt-6'>Lunch Lidköping</h1>
            <p className='subtitle is-3 has-text-centered has-text-white'>Här hittar du dagens lunchmenyer från Lidköpings restauranger</p>
          </div>
        </div>
      </section>
      <section className='hero'>
        <div className='hero-body'>
          <FetchAllMenus />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
