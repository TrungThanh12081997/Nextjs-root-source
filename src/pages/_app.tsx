import App, { AppProps } from 'next/app';
import './_app.scss';
import { Provider } from 'react-redux';
import { store } from "../store";

function MyApp({ Component, pageProps }:AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp;