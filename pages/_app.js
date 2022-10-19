import '../styles/globals.css'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    setTimeout(()=>{
      if (typeof window !== 'undefined') {
        const loader = document.getElementById('globalLoader');
      if (loader)
            loader.style.display = 'none';
      }
    },4000)
    
}, []);
  return <Component {...pageProps} />
}

export default MyApp
