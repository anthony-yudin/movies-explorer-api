import React from 'react';
import './Notification.css';

function Notification({ text }) {
  return (
    <p className="notification">
      {text}
    </p>
  )
}

export default Notification;
