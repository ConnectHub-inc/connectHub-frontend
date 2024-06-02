import React from 'react';
import ReactDOM from 'react-dom/client';

import LRoot from './components/layouts/LRoot'

import './assets/css/reset.css'
import './assets/css/base.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LRoot />
  </React.StrictMode>
);
