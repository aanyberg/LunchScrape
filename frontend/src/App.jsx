import React, { useEffect, useState } from 'react'

const responseOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

async function fetchMellbygatansMenu() {
  const response = await fetch("/api/mellbygatans", responseOptions);
  const data = await response.json();
  
  const restaurantMenu = data;

  return restaurantMenu;
};


function App() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const menu = await fetchMellbygatansMenu();
        setMenuItems(menu);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Restaurant Menu</h2>
      <ul>
        {menuItems}
      </ul>
    </div>
  );
}

export default App;
