import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Project from './pages/Project';
import MySelf from './pages/Myself';
import MyIntroduce from './pages/MyIntroduce';
import PageAll from './pages/PageAll';

import './styles/header.css';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<MySelf/>} />
      <Route path={'/project'} element={<Project/>}/>
      <Route path={'/myIntro'} element={<MyIntroduce/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
