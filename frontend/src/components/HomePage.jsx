import React from 'react';
import FetchAllMenus from './MenuCards';
import Navbar from './Navbar';

const HomePage = () => {
  return (
  <div>
    <Navbar />
    <div className='container'>
      <div className='container'>
        <div className='columns'>
          <div className='column'>
            <h1 className='title is-1 has-text-centered'>Restaurangmenyer</h1>
          </div>
        </div>
        <div className='container'>
          <main>
            <FetchAllMenus />
          </main>
        </div>
      </div>
    </div>
  </div>
  );
};

export default HomePage;
