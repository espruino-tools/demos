
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppShell } from './pages/components/AppShell';
import { Home } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <AppShell>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </AppShell>
    </BrowserRouter>
  );
}

export default App;
