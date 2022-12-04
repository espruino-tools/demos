
import { Anchor } from '@mantine/core';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppShell } from './components/AppShell';
import { DemoList } from './pages/DemoList';
import { DemoPage } from './pages/DemoPage';
import { Home } from './pages/Home';
import { Error } from './pages/error'
import './style/app.css'
import { Help } from './pages/Help';
function App() {

  const [breadcrumbsItems, setBreadcrumbsItems] = useState<{title:string,href:string}[]>([{ title: 'home', href: '/' }])
  const [breadcrumbsMapped, setBreadcrumbsMapped] = useState<any>(null)

  useEffect(()=>{
    setBreadcrumbsMapped(breadcrumbsItems.map((item:any, index:any) => (
      <Anchor href={item.href} key={index}>
        {item.title}
      </Anchor>
    )))
  },[breadcrumbsItems])

  const [folders,setFolders] = useState([])

  useEffect(()=>{
      fetch(`https://api.github.com/repos/espruino-tools/demos/git/trees/production?recursive=1`)
          .then(async (data:any) => {
               return await data.json()
          }).then((res:any) => {
              let filtered_res = res.tree.filter((x:any) => x.path.startsWith(`demos/`) && !(x.path.endsWith('README.md') || (x.path.endsWith('demo.mp4')))).map((x:any) => x.path.split('/')[1])
              let uniqueFolders = new Set(filtered_res) 

              setFolders(Array.from(uniqueFolders as any))
          })
  },[])

  return (
    <BrowserRouter>
    <AppShell items={[breadcrumbsMapped]} >
      <Routes>
        <Route path="*" element={<Error/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="help" element={<Help setBreadcrumbsItems={setBreadcrumbsItems}/>}/>
      <Route path="demo" element={<DemoList setBreadcrumbsItems={setBreadcrumbsItems}/>}/>
      {folders.map((page:any) => <Route key={page} path={`demo/${page}`} element={<DemoPage pageName={page} setBreadcrumbsItems={setBreadcrumbsItems}/>}/>)}
      </Routes>
      </AppShell>
    </BrowserRouter>
  );
}

export default App;
