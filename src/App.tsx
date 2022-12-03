
import { Anchor, Title, Text, Center } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppShell } from './components/AppShell';
import { DemoList } from './pages/DemoList';
import { TestDemo } from './pages/demos/testDemo';
import { Home } from './pages/Home';
import { Error } from './pages/error'
import './style/app.css'
import { Test2 } from './pages/demos/test2';
function App() {

  const [breadcrumbsItems, setBreadcrumbsItems] = useState<{title:string,href:string}[]>([{ title: 'home', href: '/' }])
  const [breadcrumbsMapped, setBreadcrumbsMapped] = useState<any>(null)

  const items = [
    { title: 'home', href: '/' },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  useEffect(()=>{
    setBreadcrumbsMapped(breadcrumbsItems.map((item:any, index:any) => (
      <Anchor href={item.href} key={index}>
        {item.title}
      </Anchor>
    )))
  },[breadcrumbsItems])

  return (
    <BrowserRouter>
    <AppShell items={[breadcrumbsMapped]} >
      <Routes>
        <Route path="*" element={<Error/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="demo" element={<DemoList breadCrumb={[breadcrumbsItems, setBreadcrumbsItems]}/>}/>
      <Route path="demo/template" element={<TestDemo breadCrumb={[breadcrumbsItems, setBreadcrumbsItems]}/>}/>
      <Route path="demo/test2" element={<Test2 breadCrumb={[breadcrumbsItems, setBreadcrumbsItems]}/>}/>
      </Routes>
      </AppShell>
    </BrowserRouter>
  );
}

export default App;
