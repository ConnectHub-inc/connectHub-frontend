import React from 'react';
import ReactDOM from 'react-dom/client';

import RouterAuth from './router/RouterAuth'

import './assets/css/reset.css'
import './assets/css/base.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterAuth />
  </React.StrictMode>
);
