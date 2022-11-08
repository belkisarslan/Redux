import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {store} from './redux/store'
import { Provider } from 'react-redux';
// Provider ve store import ettik.


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //1.adım redux ve react-redux paketlerini projemize yükledikten sonra App'i Provider ile sarmaladık. store'ı Provider'a parametre olarak veriyoruz.
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);


