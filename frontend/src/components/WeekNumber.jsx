import React from 'react';

function WeekNumber() {
  // Function to calculate current week number
  const getCurrentWeekNumber = () => {
    const currentDate = new Date();
    const startDate = new Date(currentDate.getFullYear(), 0, 1);
    const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
    const weekNumber = Math.ceil((days + startDate.getDay() + 1) / 7);
    return weekNumber;
  };
  return (
    <div className='hero has-text-centered mt-6 mb-0 px-6 mx-6 box'>
		  <p className='title is-1 primary-light-text'>Vecka {getCurrentWeekNumber()}</p>
    </div>
  );
};

export default WeekNumber