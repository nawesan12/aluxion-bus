import '../styles/globals.css'

import { createContext } from 'react';

import config from 'react-reveal/globals';
config({ ssrFadeout: true });

const BusContext = createContext({})

function MyApp({ Component, pageProps }) {
  return (
    <BusContext.Provider>
      <Component {...pageProps} />
    </BusContext.Provider>
  )
    
}

export default MyApp
