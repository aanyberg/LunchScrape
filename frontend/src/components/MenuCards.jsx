import React, {useState, useEffect} from 'react';

const IP_ADDRESS = "http://lunchlidkoping.se:8000";

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
      const response = await fetch(IP_ADDRESS + "/api/menus", responseOptions);
      const data = await response.json();
      
      const menu = JSON.parse(data);
      const mellbygatansMenu = menu.mellbygatans;
      const skafferietMenu = menu.skafferiet;
      const pinchosMenu = menu.pinchos;
      const villaMenu = menu.villa_restaurangen;
  
    
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
      <div id="card-container" className='columns'>
        <div id="mellbygatans" className='column box mx-2 pb-6 mt-4 mb-5 p-5'>
          <h1 className='title has-text-centered primary-light-text'>Mellbygatans</h1>
          <ul className='has-text-centered'>
            {mellbyItems.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <div id="skafferiet" className='column box mx-2 pb-6 mt-4 mb-5 p-5'>
          <h1 className='title has-text-centered primary-light-text'>Skafferiet</h1>
          <ul className='has-text-centered'>
            {skafferietItems.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <div id="pinchos" className='column box mx-2 pb-6 mt-4 mb-5 p-5'>
          <h1 className='title has-text-centered primary-light-text'>Pinchos</h1>
          <ul className='has-text-centered'>
            {pinchosItems.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <div id="villa" className='column box mx-2 pb-6 mt-4 mb-5 p-5'>
          <h1 className='title has-text-centered primary-light-text'>Villa Restaurangen</h1>
          <ul className='has-text-centered'>
            {villaItems.map((item, index) => {
              return <li key={index}>{item}</li>
            })}
          </ul>
        </div>
      </div>
    );
  };

export default FetchAllMenus;