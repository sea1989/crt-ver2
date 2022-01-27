import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PageIndex from '../src/pages/page_index';
import PageAbout from '../src/pages/page_about';

export default function App() {

  return (

    <BrowserRouter>
      <Routes>

        <Route path='/' element={<PageAbout />}>
        </Route>

        <Route path='/todo' element={<PageIndex />}>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
