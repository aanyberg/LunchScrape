import React from 'react';
import FetchAllMenus from './MenuCards';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      <p>This is the homepage of our website.</p>      
      <div>
        <main>
          <FetchAllMenus />
        </main>
      </div>
    </div>
  );
};

export default HomePage;
