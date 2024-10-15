import React, { useEffect, useRef } from 'react';
import Scrollbar from 'smooth-scrollbar';

const ScrollbarComponent = ({ children }) => {
  const scrollbarRef = useRef(null);

  useEffect(() => {
    const scrollbar = Scrollbar.init(scrollbarRef.current);

    return () => {
      scrollbar.destroy(); 
    };
  }, []);

  return (
    <div ref={scrollbarRef} style={{ height: '100vh', overflow: 'hidden', borderRadius:0, }}>
      {children}
    </div>
  );
};

export default ScrollbarComponent;
