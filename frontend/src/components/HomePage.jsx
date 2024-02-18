import React from 'react';
import FetchAllMenus from './MenuCards';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      <p>This is the homepage of our website.</p>      
      <main>
        <FetchAllMenus />
      </main>
    </div>
  );
};

export default HomePage;
