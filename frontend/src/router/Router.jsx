import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PDirectMessage from '../pages/PDirectMessage';
import PTest from '../pages/test/PTest';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <PDirectMessage/> } />
        <Route path="/test/" element={ <PTest/> } />
      </Routes>
    </BrowserRouter>
  )
}