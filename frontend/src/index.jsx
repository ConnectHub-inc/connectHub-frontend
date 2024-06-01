import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PageIndex from './pages/PageIndex';
import PageTest from './pages/test/PageTest';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <PageIndex/> } />
        <Route path="/test/" element={ <PageTest/> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
