import type { AppProps /*, AppContext */ } from 'next/app';
import 'styles/tailwind.scss';
import 'styles/app.scss';
import Header from 'components/Header/Header';
import { useEffect } from 'react';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default App;
