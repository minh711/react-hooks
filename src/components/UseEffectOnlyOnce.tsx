import { useState, useEffect } from 'react';

const UseEffectOnlyOnce = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [message, setMessage] = useState('');

  const logMousePosition = (e: MouseEvent) => {
    console.log('Mouse event');
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log('useEffect called');
    setMessage(`X: ${x}, Y: ${y}`);
    window.addEventListener('mousemove', logMousePosition);
  }, []); 
  
  // [] tells React this effect does no depend on any props or state so there is
  // just no reason for React to call this effect on the renders, so this is
  // just be called on the INITIAL RENDER.
  //
  // Then only logMousePosition will be called when the mouse moves.

  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default UseEffectOnlyOnce;
