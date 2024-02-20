import React, {useState, useEffect} from 'react';

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
      <div id="card-container" className='columns box'>
        <div id="mellbygatans" className='column mb-1'>
          <h1 className='title'>Mellbygatans</h1>
          <ul>
            {mellbyItems.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <div id="skafferiet" className='column mb-1'>
          <h1 className='title'>Skafferiet</h1>
          <ul>
            {skafferietItems.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <div id="pinchos" className='column mb-1'>
          <h1 className='title'>Pinchos</h1>
          <ul>
            {pinchosItems.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <div id="villa" className='column mb-1'>
          <h1 className='title'>Villa Restaurangen</h1>
          <ul>
            {villaItems.map((item, index) => {
              return <li key={index}>{item}</li>
            })}
          </ul>
        </div>
      </div>
    );
  };

export default FetchAllMenus;