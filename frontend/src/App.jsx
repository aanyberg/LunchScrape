import React, { useEffect, useState } from 'react'


async function fetchMellbygatansMenu() {
  const responseOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch("/api/mellbygatans", responseOptions);
  const data = await response.json();
  
  const restaurantMenu = JSON.parse(data);
  const menuItems = restaurantMenu.restaurants.mellbygatans;

  return menuItems;
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
        {menuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
