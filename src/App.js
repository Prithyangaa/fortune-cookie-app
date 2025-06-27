import React, { useState } from 'react';
import './App.css';
import cookieClosed from './assets/cookie-closed.png';
import cookieOpen from './assets/cookie-open.png';

const fortunes = [
  "You will find happiness in unexpected places.",
  "Your kindness will lead you to great opportunities.",
  "Believe in yourself and all that you are.",
  "Something magical will happen today.",
  "A beautiful journey is on your horizon.",
];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isBreaking, setIsBreaking] = useState(false);
  const [message, setMessage] = useState("");

  const openCookie = () => {
    if (isBreaking || isOpen) return; // prevent spam clicking during animation

    const random = fortunes[Math.floor(Math.random() * fortunes.length)];
    setIsBreaking(true);
    setTimeout(() => {
      setMessage(random);
      setIsBreaking(false);
      setIsOpen(true);
    }, 500); // match animation time

    // Auto reset after 3 seconds
    setTimeout(() => {
      setMessage("");
      setIsOpen(false);
    }, 3000);
  };

  return (
    <div className="app">
      <h1>🥠 Fortune Cookie 🥠</h1>

      <div
        className={`cookie-wrapper ${isBreaking ? 'break' : ''}`}
        onClick={openCookie}
      >
        <img
          src={isOpen ? cookieOpen : cookieClosed}
          alt="Fortune Cookie"
          className={`cookie-image ${isBreaking ? 'break' : ''}`}
        />
        {message && (
          <div className="fortune-message">
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
