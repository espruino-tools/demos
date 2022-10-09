
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppShell } from './pages/components/AppShell';
import { TestDemo } from './pages/demos/testDemo';
import { Home } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <AppShell>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="test" element={<TestDemo/>}/>
      </Routes>
      </AppShell>
    </BrowserRouter>
  );
}

export default App;
