import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Define a handler to update the width
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [window.innerWidth]); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  const getScreenCategory = () => {
    if (windowWidth > 768) {
      return "desktop";
    } else if (windowWidth > 560) {
      return "tablet";
    } else {
      return "mobile";
    }
  };

  return getScreenCategory()
};

export default useWindowWidth;