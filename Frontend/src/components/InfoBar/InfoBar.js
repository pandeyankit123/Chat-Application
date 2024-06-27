import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';
import './InfoBar.css';

const InfoBar = ({ room }) => {
  const [countdown, setCountdown] = useState(3600); 
  const history = useHistory(); 

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
      if (countdown === 0) {
        history.push('/'); 
      }
    };
  }, [countdown, history]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="online icon" />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <p className="countdownTimer">{formatTime(countdown)}</p>
        <a href="/" style={{border: "solid black", padding:"0px 5px", borderRadius:"10px"}}><img src={closeIcon} alt="close icon" /></a>
      </div>
    </div>
  );
};

export default InfoBar;
