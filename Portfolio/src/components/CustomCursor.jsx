import React, { useEffect, useState } from 'react';
import '../css/CustomCursor.css'; 

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [customCursorPosition, setCustomCursorPosition] = useState({ x: 0, y: 0 });
  
    useEffect(() => {

      const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        setMousePosition({ x: clientX, y: clientY });
      };
  
      document.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
  
    useEffect(() => {
      const followCursor = () => {

        const dx = mousePosition.x - customCursorPosition.x;
        const dy = mousePosition.y - customCursorPosition.y;

        setCustomCursorPosition((prevPosition) => ({
            x: prevPosition.x + dx * 0.6,
            y: prevPosition.y + dy * 0.6,
          }));
  
        requestAnimationFrame(followCursor);
      };
  
      requestAnimationFrame(followCursor);
    }, [mousePosition]);
  
    return (
      <div
        className="custom-cursor"
        style={{
          left: `${customCursorPosition.x}px`,
          top: `${customCursorPosition.y}px`,
        }}
      />
    );
  };
  
  export default CustomCursor;