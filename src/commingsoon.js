import React from 'react';
import Countdown from 'react-countdown';
import './App.css';  // Make sure to create this CSS file

// Renderer callback with condition
const Completionist = () => <span>We are live!</span>;

const countdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <span className="countdown">
        {days} days {hours} hours {minutes} minutes {seconds} seconds
      </span>
    );
  }
};

const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      <h1 className="title">Coming Soon</h1>
      <Countdown 
        date={new Date("2024-04-29")} // Set your future date in milliseconds
        renderer={countdownRenderer}
      />
      <p className="info">Our website is under construction. We'll be here soon with our new awesome site.</p>
    </div>
  );
};

export default ComingSoon;
