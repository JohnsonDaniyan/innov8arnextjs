import '../styles/globals.css'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log("useEffect run")
    const timeout = setTimeout(()=>{
      if (typeof window !== 'undefined') {
        const loader = document.getElementById('globalLoader');
      if (loader)
            loader.style.display = 'none';
      }
    },4000)

    return() => clearTimeout(timeout)
    
}, []);
  return <Component {...pageProps} />
}

export default MyApp
