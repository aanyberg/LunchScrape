import React from 'react';
import FetchAllMenus from './MenuCards';
import Navbar from './Navbar';
import Footer from './Footer';
import WeekNumber from './WeekNumber';

const useGoogleAnalytics = () => {
  useEffect(() => {
      if (!window.location.href.includes('localhost')) {
          ReactGA.initialize('G-DPL7R4VGSH');
          console.log("GA Initialized");

          // Track initial page load
          ReactGA.pageview(window.location.pathname + window.location.search);
      }
  }, []);
};

const HomePage = () => {
  useGoogleAnalytics();
  return (
    <>
      <div className='container m-0 p-0 is-fluid backgroundImage'>
        <Navbar />
        <div className='hero pt-6'>
          <div className='container'>
            <h1 className='title is-1 has-text-centered mt-6 deepred has-text-white text-dropshadow'>Lunch Lidköping</h1>
            <p className='subtitle is-3 has-text-centered has-text-white text-dropshadow'>Där smak och gemenskap möts!</p>
          </div>
        </div>
      </div>
      <section className='hero background-color'>
        <div className='hero-body'>
          <WeekNumber />
          <FetchAllMenus />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
