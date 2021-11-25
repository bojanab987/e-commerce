import React, { Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback="...is loading">
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


