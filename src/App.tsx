
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppShell } from './components/AppShell';
import { DemoList } from './pages/DemoList';
import { TestDemo } from './pages/demos/testDemo';
import { Home } from './pages/Home';
import './style/app.css'
function App() {

  return (
    <BrowserRouter>
    <AppShell>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="demo" element={<DemoList/>}/>
      <Route path="demo/test" element={<TestDemo/>}/>
      </Routes>
      </AppShell>
    </BrowserRouter>
  );
}

export default App;
