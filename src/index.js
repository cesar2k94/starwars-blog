import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProovedorFavorites } from './context/contextFavorites';

ReactDOM.render(
  <React.StrictMode>
    <ProovedorFavorites>
      <App />
    </ProovedorFavorites>
  </React.StrictMode>,
  document.getElementById('root')
);

