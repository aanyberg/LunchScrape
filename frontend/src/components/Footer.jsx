import React from 'react';

function Footer() {
  return (
  <footer class="footer primary-bg p-2">
    <div class="content has-text-centered">
    <p className='has-text-white'>
      <strong className='has-text-white'>© 2024 Lunch Lidköping</strong>
    </p>
      <a href='https://github.com/aanyberg/lidkoping-lunch-scrape'><p className='has-text-white'>GitHub Repo</p></a>
      <a href='mailto:alexandernyberg@me.com'><p className='has-text-white'>Contact</p></a>
    </div>
  </footer>
  );
}

export default Footer;
