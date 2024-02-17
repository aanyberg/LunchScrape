import React, { useEffect, useState } from 'react'


const responseOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

function FetchAllMenus() {
  const [mellbyItems, setMellbygatansMenu] = useState([]);
  const [skafferietItems, setSkafferietMenu] = useState([]);
  const [pinchosItems, setPinchosMenu] = useState([]);
  const [villaItems, setVillaMenu] = useState([]);
  
  const fetchMenus = async () => {
    const response = await fetch("/api/menus", responseOptions);
    const data = await response.json();
    
    const menu = JSON.parse(data);
    const mellbygatansMenu = menu.mellbygatans;
    const skafferietMenu = menu.skafferiet;
    const pinchosMenu = menu.pinchos;
    const villaMenu = menu.villa_restaurangen;
    console.log(villaMenu);

  
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    } else {
      setMellbygatansMenu(mellbygatansMenu);
      setSkafferietMenu(skafferietMenu);
      setPinchosMenu(pinchosMenu);
      setVillaMenu(villaMenu);
    }
  };

  useEffect(() => {
    fetchMenus();
  }, []);


  return (
    <div id="card-container">
      <div id="mellbygatans">
        <h1>Mellbygatans</h1>
        <ul>
          {mellbyItems.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
      <div id="skafferiet">
        <h1>Skafferiet</h1>
        <ul>
          {skafferietItems.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
      <div id="pinchos">
        <h1>Pinchos</h1>
        <ul>
          {pinchosItems.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
      <div id="villa">
        <h1>Villa</h1>
        <ul>
          {villaItems.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>
      </div>
    </div>
  );
};




function App() {
  return (
    <FetchAllMenus />
  );
}

export default App;
