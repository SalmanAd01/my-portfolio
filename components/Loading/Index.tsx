import React, { useEffect, useRef } from 'react'

const Index = () => {
    const pageLoaderRef = useRef(null);
    useEffect(() => {
      require("bootstrap/dist/js/bootstrap.min.js");
      const loader = pageLoaderRef.current! as any;
      const delay = 500;
      const fadeOutDuration = 1000;
    
      setTimeout(() => {
        loader.style.opacity = 0;
        setTimeout(() => {
          loader.style.display = 'none';
        }, fadeOutDuration);
      }, delay);
    }, []);
  return (
    <div className="page-loader"  ref={pageLoaderRef}>
    <div className="bounceball"></div>
  </div>
  )
}

export default Index