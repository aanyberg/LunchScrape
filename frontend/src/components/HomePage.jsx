import React from 'react';
import FetchAllMenus from './MenuCards';
import Navbar from './Navbar';
import Footer from './Footer';

const HomePage = () => {
  return (
    <>
      <section className='hero backgroundImage'>
      <Navbar />
        <div className='hero-body'>
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
