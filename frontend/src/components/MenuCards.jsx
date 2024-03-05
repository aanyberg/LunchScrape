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
    let baseUrl = "http://localhost:8000";
    if (!window.location.href.includes('localhost')) {
      baseUrl = "http://lunchlidkoping.se:8000";
    }

    const apiUrl = `${baseUrl}/api/menus`;

    try {
      const response = await fetch(apiUrl, responseOptions);
      if (!response.ok) {
        throw new Error('Network Response: ' + response.statusText);
      }
      const data = await response.json();
      const menu = JSON.parse(data);
      const mellbygatansMenu = menu.mellbygatans;
      const skafferietMenu = menu.skafferiet;
      const pinchosMenu = menu.pinchos;
      const villaMenu = menu.villa_restaurangen;
      
      setMellbygatansMenu(mellbygatansMenu);
      setSkafferietMenu(skafferietMenu);
      setPinchosMenu(pinchosMenu);
      setVillaMenu(villaMenu);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  useEffect(() => {
    fetchMenus();
  }, []);


  return (
    <div id="card-container" className='columns pt-0'>
      <div id="mellbygatans" className='column is-relative box mx-2 pb-6 mt-4 mb-6 p-5'>
        <div className='block'>
          <h1 className='title has-text-centered primary-light-text mb-2'>Mellbygatans</h1>
          <p className='is-size-7 has-text-centered'><strong>Öppet: 11:00-14:00</strong></p>
          <p className='is-size-7 has-text-centered'>Äta här: 119kr / Take away: 109kr</p>
        </div>
        <div className='divider'>Meny</div>
        <ul className='has-text-centered pb-6'>
          {mellbyItems.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <div className='block force-bottom pt-3'>
          <a href="https://www.google.se/maps/place/Mellbygatans+Restaurang/@58.5023682,13.15455,18.94z/data=!4m6!3m5!1s0x465b28bf6cee5adf:0xcc521fddfcf94491!8m2!3d58.5022777!4d13.1547682!16s%2Fg%2F1hc8p8yml?entry=ttu"
            className='button'>Hitta hit</a>
        </div>
      </div>

      <div id="skafferiet" className='column is-relative box mx-2 pb-6 mt-4 mb-6 p-5'>
        <div className='block'>
          <h1 className='title has-text-centered primary-light-text mb-2'>Skafferiet</h1>
          <p className='is-size-7 has-text-centered'><strong>Öppet: 11:00-14:00</strong></p>
          <p className='is-size-7 has-text-centered'>Pris: -</p>
        </div>
        <div className='divider'>Meny</div>
        <ul className='has-text-centered pb-6'>
          {skafferietItems.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <div className='block force-bottom pt-3'>
          <a href="https://www.google.se/maps/place/Skafferiet+i+Lidk%C3%B6ping/@58.5047985,13.1575551,17z/data=!4m14!1m7!3m6!1s0x465b28b8c335f5fb:0x38c0d55ec29fa97f!2sTorggatan+7,+531+31+Lidk%C3%B6ping!3b1!8m2!3d58.5047985!4d13.1575551!3m5!1s0x465b28b8c359b8b3:0x436e3ff4618a6978!8m2!3d58.5051465!4d13.1574412!16s%2Fg%2F11cs4fzphx?entry=ttu"
            className='button'>Hitta hit</a>
        </div>
      </div>
      
      <div id="pinchos" className='column is-relative box mx-2 pb-6 mt-4 mb-6 p-5'>
        <div className='block'>
          <h1 className='title has-text-centered primary-light-text mb-2'>Pinchos</h1>
          <p className='is-size-7 has-text-centered'><strong>Öppet: 11:30-14:00</strong></p>
          <p className='is-size-7 has-text-centered'>Pris: 129kr inklusive dryck</p>
        </div>
        <div className='divider'>Meny</div>
        <ul className='has-text-centered pb-6'>
          {pinchosItems.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <div className='block force-bottom pt-3'>
          <a href="https://www.google.se/maps/place/Pinchos/@58.5075615,13.1571319,17.91z/data=!4m6!3m5!1s0x465b28b84f989c1f:0x76c868e61c832a0!8m2!3d58.5076464!4d13.159155!16s%2Fg%2F11g6xqhhld?entry=ttu"
            className='button'>Hitta hit</a>
        </div>
      </div>

      <div id="villa" className='column is-relative box mx-2 pb-6 mt-4 mb-6 p-5'>
        <div className='block'>
          <h1 className='title has-text-centered primary-light-text mb-2'>Villa Restaurangen</h1>
          <p className='is-size-7 has-text-centered'><strong>Öppet: 11:30-14:00</strong></p>
          <p className='is-size-7 has-text-centered'>Vuxen: 129kr - Barn: från 75kr</p>
        </div>
        <div className='divider'>Meny</div>
        <ul className='has-text-centered pb-6'>
          {villaItems.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>
        <div className='block force-bottom pt-3'>
          <a href="https://www.google.se/maps/place/Villa+Lidk%C3%B6ping+Restaurang+AB/@58.493786,13.1426628,18z/data=!3m1!4b1!4m6!3m5!1s0x465b28eb1f872285:0x3631f8aad71d7bda!8m2!3d58.4937852!4d13.1433543!16s%2Fg%2F1hc2rc1k9?entry=ttu"
            className='button'>Hitta hit</a>
        </div>
      </div>
    </div>
  );
};

export default FetchAllMenus;