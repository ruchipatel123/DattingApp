import type { AppProps /*, AppContext */ } from 'next/app';
import 'styles/tailwind.scss';
import 'styles/app.scss';
import { Provider } from 'react-redux';
import store from 'store';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
};
export default App;
