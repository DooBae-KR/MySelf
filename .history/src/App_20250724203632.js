import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Project from './pages/Project';
import MySelf from './pages/Myself';
import MyIntroduce from './pages/MyIntroduce';
import PageAll from './pages/PageAll';
import PageButton from './pages/PageButton';

import './styles/header.css';

function App() {
  return (
  <BrowserRouter>
   <PageButton pdfRef={pdfRef} />
    <Routes>
      <Route path={'/'} element={<MySelf/>} />
      <Route path={'/project'} element={<Project/>}/>
      <Route path={'/myIntro'} element={<MyIntroduce/>}/>
      <Route path={'/page'} element={<PageAll/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
