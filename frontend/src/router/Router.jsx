import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PIndex from '../pages/PIndex';
import PTest from '../pages/test/PTest';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <PIndex/> } />
        <Route path="/test/" element={ <PTest/> } />
      </Routes>
    </BrowserRouter>
  )
}