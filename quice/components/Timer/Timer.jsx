import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(20); 

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h1>{formatTime(timeLeft)}</h1>
    </div>
  );
};

export default Timer;