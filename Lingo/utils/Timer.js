import { useState, useEffect } from 'react';

const Timer = ({ onUpdate }) => {
  const [startTime, setStartTime] = useState(Date.now());

  useEffect(() => {
    const intervalId = setInterval(() => {
      onUpdate(Date.now() - startTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return null;
};

export default Timer;