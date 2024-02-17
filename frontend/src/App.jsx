import React, { useEffect, useState } from 'react'


const responseOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

function FetchMellbygatansMenu() {
  
  const [mellbyMenuItems, setMellbyItems] = useState([]); // State variable to store the menu items for Mellbygatans restaurant
  
  const fetchMellbygatans = async () => {
    const response = await fetch("/api/mellbygatans", responseOptions);
    const data = await response.json();
    
    const menu = JSON.parse(data);
    const restaurantMenu = menu.restaurants.mellbygatans;
  
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    } else {
      setMellbyItems(restaurantMenu);
    }
  };

  useEffect(() => {
    fetchMellbygatans();
  }, []);


  return (
    <div>
      <h1>Mellbygatans</h1>
      <ul>
        {mellbyMenuItems.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};



function App() {
  return <FetchMellbygatansMenu />;
}

export default App;
