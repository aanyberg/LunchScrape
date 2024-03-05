import React, { useState, useEffect } from 'react';


function menuCards(restApi, title, openingHours, price, addressLink) {
  const [menuItems, setMenuItems] = useState([]);

  const fetchMenu = async () => {
    try {
      const response = await fetch(restApi);
      if (!response.ok) {
        throw new Error('Network Response: ' + response.statusText);
      }
      const data = await response.json();
      const menu = JSON.parse(data);
      const menuItems = menu;
      setMenuItems(menuItems);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return (
    <div id={title} className='column is-relative box mx-2 pb-6 mt-4 mb-6 p-5'>
      <div className='block'>
        <h1 className='title has-text-centered primary-light-text mb-2'>{title}</h1>
        <p className='is-size-7 has-text-centered'><strong>Öppet: {openingHours}</strong></p>
        <p className='is-size-7 has-text-centered'>Pris: {price}</p>
      </div>
      <div className='divider'>Meny</div>
      <ul className='has-text-centered pb-6'>
        {menuItems.map((item, index) => {
          return (
            <li key={index} className='is-size-6'>{item}</li>
          );
        })}
      </ul>
      <a href={addressLink} target='_blank' rel='noreferrer' className='button is-primary is-fullwidth'>Hitta hit</a>
    </div>
  );
}