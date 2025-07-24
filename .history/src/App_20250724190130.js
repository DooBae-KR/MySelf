import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Project from './pages/Project';
import MySelf from './pages/Myself';
import MyIntro from './pages/MyIntroduce';

import './styles/header.css';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<MySelf/>} />
      <Route path={'/project'} element={<Project/>}/>
      <Route path={'/myIntro'} element={<MyIntro/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
