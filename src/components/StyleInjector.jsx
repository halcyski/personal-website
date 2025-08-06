import { useEffect } from 'react';

const StyleInjector = () => {
  useEffect(() => {
    const fontLink = document.createElement('link');
    fontLink.href = "https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);

    const style = document.createElement('style');
    style.innerHTML = `
      body, .font-mono {
        font-family: 'Roboto Mono', monospace;
      }
      .scanline-bg {
         background-color: #0a0a0a;
         background-image: linear-gradient(rgba(0, 255, 135, 0.1) 1px, transparent 1px);
         background-size: 100% 3px;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(fontLink);
      document.head.removeChild(style);
    };
  }, []);
  return null;
};

export default StyleInjector;